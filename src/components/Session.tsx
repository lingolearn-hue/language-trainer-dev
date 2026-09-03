import { useEffect, useRef, useState } from "react";
import { useSession } from "../context/SessionContext";
import { VocabDrillBlock } from "./VocabDrillBlock";
import { ReadalongBlock } from "./ReadalongBlock";
import { IntroBlock } from "./IntroBlock";
import { GrammarBlock } from "./GrammarBlock";
import { AgendaBlock } from "./AgendaBlock";
import { SelfIntroBlock } from "./SelfIntroBlock";
import { QuestionsBlock } from "./QuestionsBlock";
import { AuditBar } from "./AuditBar";
import { LessonAvatars } from "./LessonAvatars";
import { RateControls } from "./RateControls";
import { ScriptToggle } from "./ScriptToggle";
import { TeacherCaption } from "./TeacherCaption";
import { cancelSpeech, setCurrentTargetLang, speak, requestSkipForward, setGlobalPaused } from "../engine/speech";
import { acquireWakeLock, releaseWakeLock } from "../engine/wakeLock";
import { SlideControlsContext } from "../context/SlideControlsContext";
import { useIsLandscape } from "../hooks/useIsLandscape";
import { subscribeSlideSize, type SlideRect } from "../engine/slideSize";
import type { Trainer } from "../data/trainers";
import { lessonWelcome, lessonThanks } from "../data/sessionFraming";
import {
  incrementGlobalSessionCount,
  setLessonStatus,
  type LessonMasteryStatus,
} from "../engine/lessonStatus";

export function Session({
  trainer,
  onExitToLessons,
}: {
  trainer: Trainer;
  onExitToLessons: () => void;
}) {
  const { state, dispatch } = useSession();
  const { lesson, blockIndex, status, lang, display, style, mode } = state;
  const block = lesson.blocks[blockIndex];

  // Bumped by the overlay's -10s ("restart this slide") control — folded
  // into every block component's key below, so React fully unmounts and
  // remounts the block on restart instead of just updating props. That's
  // what makes "restart" actually re-run each block's own auto-play
  // effect from the top, reusing existing per-block mount logic rather
  // than needing bespoke rewind support in every block component.
  const [restartTick, setRestartTick] = useState(0);
  const sessionKey = `${block.id}-r${restartTick}`;

  // YouTube-style tap overlay: tapping the slide toggles playback
  // controls (rather than immediately toggling pause itself, matching
  // how video players actually behave). "Pause" from the overlay is a
  // lighter in-place pause (engine/speech.ts's setGlobalPaused) — it
  // does NOT swap to the separate full-screen paused view; the slide
  // stays exactly as it is, narration/timers genuinely suspend, and the
  // button just flips to a play icon. Auto-hides after 1s of no
  // interaction, including while soft-paused.
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [softPaused, setSoftPaused] = useState(false);
  const overlayHideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  function armHideTimer() {
    if (overlayHideTimer.current) clearTimeout(overlayHideTimer.current);
    overlayHideTimer.current = setTimeout(() => setOverlayVisible(false), 1000);
  }
  function showOverlay() {
    setOverlayVisible(true);
    armHideTimer();
  }
  function hideOverlay() {
    if (overlayHideTimer.current) clearTimeout(overlayHideTimer.current);
    setOverlayVisible(false);
  }
  function handleSlideAreaClick() {
    if (overlayVisible) hideOverlay();
    else showOverlay();
  }
  useEffect(() => {
    return () => {
      if (overlayHideTimer.current) clearTimeout(overlayHideTimer.current);
    };
  }, []);

  // A fresh block should never silently start paused, regardless of how
  // we got here (auto-advance, overlay prev/next, restart).
  useEffect(() => {
    setSoftPaused(false);
    setGlobalPaused(false);
  }, [block.id]);

  // Tells engine/speech.ts which language is the "target" (learning)
  // language so it can apply the slower target-rate to it and the
  // faster source-rate to everything else — see setCurrentTargetLang.
  useEffect(() => {
    setCurrentTargetLang(lang.targetLang);
  }, [lang.targetLang]);

  // Slide footer controls (phase buttons, "Continue", etc.) portal into
  // this element instead of rendering inline under the slide — but only
  // in landscape (see .controls-rail / .right-rail below); portrait keeps
  // them under the slide, so the target is withheld (null) there even
  // though the DOM node still exists.
  const [controlsRail, setControlsRail] = useState<HTMLDivElement | null>(null);
  const landscape = useIsLandscape();

  // Declutter toggle — hides the header bar, rate controls, and slide
  // footer controls, leaving the slide and the avatar row visible. The
  // avatar row must never be hidden by this toggle (per explicit
  // correction) — only the header and interactive controls collapse.
  const [chromeHidden, setChromeHidden] = useState(true);

  // Subtitles toggle — purely a visual hide, same approach as
  // chrome-hidden: TeacherCaption keeps running underneath regardless
  // (it still gates autoPlayReady via onFinished), so narration timing
  // is unaffected either way, only the on-screen text is hidden.
  const [subtitlesHidden, setSubtitlesHidden] = useState(false);

  // Live size of the actual rendered slide graphic (not its outer,
  // often-letterboxed container) — used to size/position the
  // caption+nav-footer overlay so it sits exactly on the slide, never
  // floating below/beside it in empty letterbox space. See
  // engine/slideSize.ts / Slide.tsx.
  const [slideSize, setSlideSize] = useState<SlideRect>({ width: 0, height: 0 });
  useEffect(() => subscribeSlideSize(setSlideSize), []);

  // The whole lesson plays automatically: spoken intro caption, then the
  // slide's own content narration, then auto-advance to the next block —
  // no manual "Continue"/"Play" clicks required for the default flow.
  // `autoPlayReady` gates content narration until the intro caption (if
  // any) has finished, so the two never talk over each other. Resets on
  // every block change. Declared above the early returns below so hook
  // order stays stable regardless of session status.
  // Tracks WHICH block's own TeacherCaption instance has finished, rather
  // than a plain boolean — comparing against block.id directly means a
  // new block's autoPlay is correctly false from its very first render,
  // with no reliance on a corrective re-render after a brief stale-true
  // flash (which a separate reset-effect would still leave, since the
  // effect only fires after the initial render has already happened).
  const [autoPlayReadyForBlockId, setAutoPlayReadyForBlockId] = useState<string | null>(null);
  const autoPlayReady = autoPlayReadyForBlockId === block.id;

  // Session-level welcome, spoken once per lesson start: source language
  // first, then target language (per user request). Gates the first
  // block's autoplay so narration never overlaps it. Plays once on mount
  // regardless of resume state — keeps the logic simple; a resumed
  // mid-lesson session still gets the same short welcome.
  const [welcomeDone, setWelcomeDone] = useState(false);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const source = lessonWelcome[lang.sourceLang];
      const target = lessonWelcome[lang.targetLang];
      if (source) await speak(source, lang.sourceLang, trainer.voiceProfile);
      if (cancelled) return;
      if (target && target !== source) await speak(target, lang.targetLang, trainer.voiceProfile);
      if (!cancelled) setWelcomeDone(true);
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // No separate reset effect needed here (there used to be one, a
  // useLayoutEffect specifically to win a timing race against
  // TeacherCaption's onFinished) — comparing autoPlayReadyForBlockId
  // against block.id directly makes a new block's autoPlay correctly
  // false from its very first render, with no dependency on effect
  // ordering at all.

  // Sessions run long (45-90 min) with passive listening stretches — keep
  // the screen from auto-dimming/locking while actively running, release
  // it while paused/complete or when leaving the session entirely.
  useEffect(() => {
    if (status === "running") {
      acquireWakeLock();
    } else {
      releaseWakeLock();
    }
    return () => {
      releaseWakeLock();
    };
  }, [status]);

  // Wake locks are auto-released by the browser when the tab loses
  // visibility (e.g. switching apps); re-acquire on return if the lesson
  // is still actively running.
  useEffect(() => {
    function handleVisibility() {
      if (document.visibilityState === "visible" && status === "running") {
        acquireWakeLock();
      }
    }
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [status]);

  function handleExit() {
    cancelSpeech();
    releaseWakeLock();
    onExitToLessons();
  }

  if (status === "complete") {
    return (
      <LessonCompleteScreen
        lesson={lesson}
        lang={lang}
        trainer={trainer}
        onExit={handleExit}
      />
    );
  }

  if (status === "paused") {
    const classroom = mode === "classroom";
    return (
      <div className="session paused">
        <h2>{style === "computer" ? "Paused" : "Taking a break?"}</h2>
        <p>
          {classroom
            ? `Class is paused on slide ${blockIndex + 1} of ${lesson.blocks.length}.`
            : style === "computer"
            ? `Block ${blockIndex + 1} / ${lesson.blocks.length}`
            : `You're on block ${blockIndex + 1} of ${lesson.blocks.length} — resume whenever you're ready.`}
        </p>
        <button
          onClick={() => {
            dispatch({ type: "RESUME" });
          }}
        >
          ▶ Resume
        </button>
        <button className="back-link" onClick={handleExit}>
          ← Back to lessons
        </button>
        <AuditBar />
      </div>
    );
  }

  function handlePause() {
    cancelSpeech();
    dispatch({ type: "PAUSE" });
  }

  function handleComplete() {
    cancelSpeech();
    dispatch({ type: "NEXT_BLOCK" });
  }

  // Overlay controls (YouTube-style tap-to-reveal). Previous/Next reuse
  // the same GOTO_BLOCK action the audit bar's arrows already use.
  const canGoPrev = blockIndex > 0;
  const canGoNext = blockIndex < lesson.blocks.length - 1;
  function handleOverlayPrev() {
    if (!canGoPrev) return;
    cancelSpeech();
    dispatch({ type: "GOTO_BLOCK", index: blockIndex - 1 });
    showOverlay();
  }
  function handleOverlayNext() {
    if (!canGoNext) return;
    cancelSpeech();
    dispatch({ type: "GOTO_BLOCK", index: blockIndex + 1 });
    showOverlay();
  }
  function handleOverlayPauseToggle() {
    const next = !softPaused;
    setSoftPaused(next);
    setGlobalPaused(next);
    armHideTimer();
  }
  function handleSkipForward() {
    // No real audio timeline to scrub in a TTS-driven lesson — approximated
    // as "cut short whatever's happening right now" (see requestSkipForward).
    requestSkipForward();
    armHideTimer();
  }
  function handleSkipBack() {
    // Same reasoning in reverse: no timeline to rewind, so "back 10s" is
    // approximated as restarting the current slide from its beginning.
    cancelSpeech();
    setRestartTick((t) => t + 1);
    armHideTimer();
  }

  return (
    <div
      className={`session mode-${block.displayMode}${chromeHidden ? " chrome-hidden" : ""}${subtitlesHidden ? " subtitles-hidden" : ""}`}
    >
      {/* Fixed top-right corner cluster — exit is the rightmost/outermost
          (Teams/Windows-app-style close button), always visible
          regardless of declutter state since it's essential navigation,
          not decorative chrome. Declutter/subtitles sit to its left. */}
      <button
        className="subtitles-toggle"
        onClick={() => setSubtitlesHidden((h) => !h)}
        title={subtitlesHidden ? "Show subtitles" : "Hide subtitles"}
      >
        {subtitlesHidden ? "💬" : "🚫💬"}
      </button>
      <button
        className="chrome-toggle"
        onClick={() => setChromeHidden((h) => !h)}
        title={chromeHidden ? "Show controls" : "Hide controls"}
      >
        {chromeHidden ? "👁" : "🙈"}
      </button>
      <button className="exit-toggle" onClick={handleExit} title="Exit lesson">
        ✕
      </button>

      <div className="session-header floating">
        <button onClick={handlePause}>⏸ Pause</button>
      </div>

      {mode === "classroom" && (
        <div className="classroom-banner">👥 Everyone, repeat after me!</div>
      )}

      <SlideControlsContext.Provider value={landscape ? controlsRail : null}>
        <div className="session-layout">
          <div className="slide-area" onClick={handleSlideAreaClick}>
            {block.type === "vocabDrill" && (
              <VocabDrillBlock
                key={sessionKey}
                block={block}
                lang={lang}
                trainer={trainer}
                autoPlay={autoPlayReady && welcomeDone}
                onComplete={handleComplete}
              />
            )}
            {block.type === "readalong" && (
              <ReadalongBlock
                key={sessionKey}
                block={block}
                lang={lang}
                trainer={trainer}
                autoPlay={autoPlayReady && welcomeDone}
                onComplete={handleComplete}
              />
            )}
            {block.type === "intro" && (
              <IntroBlock
                key={sessionKey}
                block={block}
                lang={lang}
                trainer={trainer}
                autoPlay={autoPlayReady && welcomeDone}
                onComplete={handleComplete}
              />
            )}
            {block.type === "grammar" && (
              <GrammarBlock
                key={sessionKey}
                block={block}
                lang={lang}
                display={display}
                trainer={trainer}
                autoPlay={autoPlayReady && welcomeDone}
                onComplete={handleComplete}
              />
            )}
            {block.type === "agenda" && (
              <AgendaBlock
                key={sessionKey}
                block={block}
                lang={lang}
                trainer={trainer}
                autoPlay={autoPlayReady && welcomeDone}
                onComplete={handleComplete}
              />
            )}
            {block.type === "selfIntro" && (
              <SelfIntroBlock
                key={sessionKey}
                block={block}
                lang={lang}
                trainer={trainer}
                autoPlay={autoPlayReady && welcomeDone}
                onComplete={handleComplete}
              />
            )}
            {block.type === "questions" && (
              <QuestionsBlock
                key={sessionKey}
                block={block}
                lang={lang}
                trainer={trainer}
                autoPlay={autoPlayReady && welcomeDone}
                onComplete={handleComplete}
              />
            )}

            {/* Sized/centered to the ACTUAL rendered slide graphic (see
                engine/slideSize.ts), not the outer .slide-area box —
                otherwise, whenever the slide is letterboxed (its aspect
                ratio doesn't exactly match the container's), these would
                float in the empty letterbox space instead of sitting on
                the slide itself. Falls back to filling the container
                before the first size report arrives. */}
            <div
              className="slide-overlay-bounds"
              style={
                slideSize.width > 0
                  ? { width: slideSize.width, height: slideSize.height }
                  : { width: "100%", height: "100%" }
              }
            >
              <TeacherCaption
                key={sessionKey}
                block={block}
                lang={lang}
                trainer={trainer}
                framingLanguage={lesson.framingLanguage}
                bilingual={block.spokenIntroBilingual ?? false}
                showCaptionText={block.type !== "agenda"}
                onFinished={() => setAutoPlayReadyForBlockId(block.id)}
              />
              <div className="slide-nav-footer">
                <button
                  className="slide-nav-arrow"
                  onClick={() => dispatch({ type: "GOTO_BLOCK", index: blockIndex - 1 })}
                  disabled={blockIndex === 0}
                  title="Previous slide"
                >
                  ‹
                </button>
                <div className="slide-nav-right-group">
                  <span className="slide-nav-label">
                    {lesson.language && lesson.level && lesson.lessonNumber
                      ? `${lesson.language} ${lesson.level} - Lesson ${lesson.lessonNumber} - ${new Date().toISOString().slice(0, 10)}`
                      : new Date().toISOString().slice(0, 10)}
                    <span className="slide-nav-gap" />
                    Page {blockIndex + 1}/{lesson.blocks.length}
                  </span>
                  <button
                    className="slide-nav-arrow"
                    onClick={() => dispatch({ type: "GOTO_BLOCK", index: blockIndex + 1 })}
                    disabled={blockIndex === lesson.blocks.length - 1}
                    title="Next slide"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>

            {overlayVisible && (
              <div
                className="slide-tap-overlay"
                style={
                  slideSize.width > 0
                    ? { width: slideSize.width, height: slideSize.height }
                    : { width: "100%", height: "100%" }
                }
                onClick={(e) => e.stopPropagation()} // clicking a control shouldn't also re-trigger the slide-area's own show-overlay handler
              >
                <button
                  className="slide-tap-btn"
                  onClick={handleOverlayPrev}
                  disabled={!canGoPrev}
                  title="Previous slide"
                >
                  ⏮
                </button>
                <button className="slide-tap-btn" onClick={handleSkipBack} title="Restart this slide">
                  ↺
                </button>
                <button className="slide-tap-btn slide-tap-btn-main" onClick={handleOverlayPauseToggle} title={softPaused ? "Play" : "Pause"}>
                  {softPaused ? "▶" : "⏸"}
                </button>
                <button className="slide-tap-btn" onClick={handleSkipForward} title="Skip ahead">
                  ↻
                </button>
                <button
                  className="slide-tap-btn"
                  onClick={handleOverlayNext}
                  disabled={!canGoNext}
                  title="Next slide"
                >
                  ⏭
                </button>
              </div>
            )}
          </div>

          <div className="right-rail">
            <RateControls />
            <ScriptToggle targetLang={lang.targetLang} sourceLang={lang.sourceLang} />
            <LessonAvatars trainer={trainer} />
            {/* Portal target for the active block's footer controls —
                see SlideControlsContext / Slide.tsx. Only actually used
                (non-null in context) in landscape; harmless empty div
                otherwise. */}
            <div className="controls-rail" ref={setControlsRail} />
          </div>
        </div>
      </SlideControlsContext.Provider>

      <AuditBar />
    </div>
  );
}

// Lesson completion screen: plays the session-level "thanks" outro once
// (source language then target language), then offers the three mastery
// choices — see engine/lessonStatus.ts for what each one does to the
// lesson's visibility in LessonSelect.
function LessonCompleteScreen({
  lesson,
  lang,
  trainer,
  onExit,
}: {
  lesson: import("../types").LessonPlan;
  lang: import("../types").LanguageSettings;
  trainer: Trainer;
  onExit: () => void;
}) {
  const [chosen, setChosen] = useState<LessonMasteryStatus | null>(null);
  const countedRef = useRef(false);

  useEffect(() => {
    if (countedRef.current) return;
    countedRef.current = true;
    incrementGlobalSessionCount();

    let cancelled = false;
    (async () => {
      const source = lessonThanks[lang.sourceLang];
      const target = lessonThanks[lang.targetLang];
      if (source) await speak(source, lang.sourceLang, trainer.voiceProfile);
      if (cancelled) return;
      if (target && target !== source) await speak(target, lang.targetLang, trainer.voiceProfile);
    })();
    return () => {
      cancelled = true;
      cancelSpeech();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function choose(status: LessonMasteryStatus) {
    setLessonStatus(lesson.id, status);
    setChosen(status);
  }

  return (
    <div className="session complete">
      <h2>Lesson complete 🎉</h2>
      <p className="intro-text">{lessonThanks[lang.sourceLang]}</p>
      <p className="intro-text source">{lessonThanks[lang.targetLang]}</p>

      {chosen ? (
        <p className="mastery-confirm">
          {chosen === "mastered" && "Marked as mastered — hidden from your lesson list."}
          {chosen === "revisitLater" && "Snoozed — hidden for your next 5 sessions."}
          {chosen === "revisitSoon" && "Got it — you'll keep seeing this lesson."}
        </p>
      ) : (
        <div className="mastery-buttons">
          <button onClick={() => choose("mastered")}>✅ Mastered</button>
          <button onClick={() => choose("revisitLater")}>🕒 Revisit later</button>
          <button onClick={() => choose("revisitSoon")}>🔁 Revisit soon</button>
        </div>
      )}

      <button className="back-link" onClick={onExit}>
        ← Back to lessons
      </button>
      <AuditBar />
    </div>
  );
}
