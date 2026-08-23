import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSession } from "../context/SessionContext";
import { VocabDrillBlock } from "./VocabDrillBlock";
import { ReadalongBlock } from "./ReadalongBlock";
import { IntroBlock } from "./IntroBlock";
import { GrammarBlock } from "./GrammarBlock";
import { AgendaBlock } from "./AgendaBlock";
import { SelfIntroBlock } from "./SelfIntroBlock";
import { AuditBar } from "./AuditBar";
import { LessonAvatars } from "./LessonAvatars";
import { RateControls } from "./RateControls";
import { TeacherCaption } from "./TeacherCaption";
import { cancelSpeech, setCurrentTargetLang, speak } from "../engine/speech";
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
  const [autoPlayReady, setAutoPlayReady] = useState(false);

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
  // useLayoutEffect (not useEffect) is required here, not stylistic: a
  // real race existed against TeacherCaption's own effect. When a block
  // has no spokenIntro, TeacherCaption's effect calls onFinished()
  // *synchronously* (setAutoPlayReady(true)) — and since passive effects
  // run child-before-parent within the same commit, this reset effect
  // (parent) would then fire right after and clobber it back to false,
  // permanently starving autoplay for that block (most visible on the
  // very first slide, which typically has no spokenIntro). Layout
  // effects run before ANY passive effect across the whole tree, so
  // this reset is now guaranteed to happen first, and a child's later
  // (synchronous-in-its-own-effect or async-via-speech) true always
  // wins instead of losing the race.
  useLayoutEffect(() => {
    setAutoPlayReady(false);
  }, [block?.id]);

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
          <div className="slide-area">
            {block.type === "vocabDrill" && (
              <VocabDrillBlock
                block={block}
                lang={lang}
                trainer={trainer}
                autoPlay={autoPlayReady && welcomeDone}
                onComplete={handleComplete}
              />
            )}
            {block.type === "readalong" && (
              <ReadalongBlock
                block={block}
                lang={lang}
                trainer={trainer}
                autoPlay={autoPlayReady && welcomeDone}
                onComplete={handleComplete}
              />
            )}
            {block.type === "intro" && (
              <IntroBlock
                block={block}
                lang={lang}
                trainer={trainer}
                autoPlay={autoPlayReady && welcomeDone}
                onComplete={handleComplete}
              />
            )}
            {block.type === "grammar" && (
              <GrammarBlock
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
                block={block}
                lang={lang}
                trainer={trainer}
                autoPlay={autoPlayReady && welcomeDone}
                onComplete={handleComplete}
              />
            )}
            {block.type === "selfIntro" && (
              <SelfIntroBlock
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
                key={block.id}
                block={block}
                lang={lang}
                trainer={trainer}
                framingLanguage={lesson.framingLanguage}
                showCaptionText={block.type !== "agenda"}
                onFinished={() => setAutoPlayReady(true)}
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
          </div>

          <div className="right-rail">
            <RateControls />
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
