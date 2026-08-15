import { useEffect, useLayoutEffect, useState } from "react";
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
import { cancelSpeech, setCurrentTargetLang } from "../engine/speech";
import { acquireWakeLock, releaseWakeLock } from "../engine/wakeLock";
import { SlideControlsContext } from "../context/SlideControlsContext";
import { useIsLandscape } from "../hooks/useIsLandscape";
import type { Trainer } from "../data/trainers";

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

  // The whole lesson plays automatically: spoken intro caption, then the
  // slide's own content narration, then auto-advance to the next block —
  // no manual "Continue"/"Play" clicks required for the default flow.
  // `autoPlayReady` gates content narration until the intro caption (if
  // any) has finished, so the two never talk over each other. Resets on
  // every block change. Declared above the early returns below so hook
  // order stays stable regardless of session status.
  const [autoPlayReady, setAutoPlayReady] = useState(false);
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
      <div className="session complete">
        <h2>Lesson complete 🎉</h2>
        <button className="back-link" onClick={handleExit}>
          ← Back to lessons
        </button>
        <AuditBar />
      </div>
    );
  }

  if (status === "paused") {
    const classroom = mode === "classroom";
    return (
      <div className="session paused">
        <h2>{style === "rigid" ? "Paused" : "Taking a break?"}</h2>
        <p>
          {classroom
            ? `Class is paused on slide ${blockIndex + 1} of ${lesson.blocks.length}.`
            : style === "rigid"
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
      <button
        className="chrome-toggle"
        onClick={() => setChromeHidden((h) => !h)}
        title={chromeHidden ? "Show controls" : "Hide controls"}
      >
        {chromeHidden ? "👁" : "🙈"}
      </button>
      <button
        className="subtitles-toggle"
        onClick={() => setSubtitlesHidden((h) => !h)}
        title={subtitlesHidden ? "Show subtitles" : "Hide subtitles"}
      >
        {subtitlesHidden ? "💬" : "🚫💬"}
      </button>

      <div className="session-header floating">
        <button className="back-link session-back" onClick={handleExit} title="Back to lesson selection">
          ← Lessons
        </button>
        <span>
          {lesson.title[lang.targetLang]} — Block {blockIndex + 1}/
          {lesson.blocks.length}
        </span>
        <button
          className="style-toggle"
          onClick={() =>
            dispatch({ type: "SET_STYLE", style: style === "rigid" ? "flexible" : "rigid" })
          }
          title="Teaching style is a session setting — overrides the trainer's default"
        >
          {style === "rigid" ? "📏 Structured" : "🌿 Flexible"}
        </button>
        <button
          className="mode-toggle"
          onClick={() =>
            dispatch({ type: "SET_MODE", mode: mode === "oneOnOne" ? "classroom" : "oneOnOne" })
          }
          title="Same lesson content either way — only framing/copy changes"
        >
          {mode === "oneOnOne" ? "🧑 1:1" : "👥 Classroom"}
        </button>
        <button onClick={handlePause}>⏸ Pause</button>
      </div>

      {mode === "classroom" && (
        <div className="classroom-banner">👥 Everyone, repeat after me!</div>
      )}

      <SlideControlsContext.Provider value={landscape ? controlsRail : null}>
        <div className="session-layout">
          <div className="slide-area">
            <TeacherCaption
              key={block.id}
              block={block}
              lang={lang}
              trainer={trainer}
              framingLanguage={lesson.framingLanguage}
              onFinished={() => setAutoPlayReady(true)}
            />
            {block.type === "vocabDrill" && (
              <VocabDrillBlock
                block={block}
                lang={lang}
                trainer={trainer}
                autoPlay={autoPlayReady}
                onComplete={handleComplete}
              />
            )}
            {block.type === "readalong" && (
              <ReadalongBlock
                block={block}
                lang={lang}
                trainer={trainer}
                autoPlay={autoPlayReady}
                onComplete={handleComplete}
              />
            )}
            {block.type === "intro" && (
              <IntroBlock
                block={block}
                lang={lang}
                trainer={trainer}
                autoPlay={autoPlayReady}
                onComplete={handleComplete}
              />
            )}
            {block.type === "grammar" && (
              <GrammarBlock
                block={block}
                lang={lang}
                display={display}
                trainer={trainer}
                autoPlay={autoPlayReady}
                onComplete={handleComplete}
              />
            )}
            {block.type === "agenda" && (
              <AgendaBlock
                block={block}
                lang={lang}
                trainer={trainer}
                autoPlay={autoPlayReady}
                onComplete={handleComplete}
              />
            )}
            {block.type === "selfIntro" && (
              <SelfIntroBlock
                block={block}
                lang={lang}
                trainer={trainer}
                autoPlay={autoPlayReady}
                onComplete={handleComplete}
              />
            )}

            <div className="slide-nav-footer">
              <button
                className="slide-nav-arrow"
                onClick={() => dispatch({ type: "GOTO_BLOCK", index: blockIndex - 1 })}
                disabled={blockIndex === 0}
                title="Previous slide"
              >
                ‹
              </button>
              <span className="slide-nav-label">
                {lesson.language && lesson.level && lesson.lessonNumber
                  ? `${lesson.language} ${lesson.level} — Lesson ${lesson.lessonNumber}`
                  : lesson.title[lang.targetLang] ?? lesson.title.en}
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

          <div className="right-rail">
            <LessonAvatars trainer={trainer} />
            <RateControls />
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
