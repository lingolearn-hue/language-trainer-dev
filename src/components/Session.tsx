import { useEffect, useState } from "react";
import { useSession } from "../context/SessionContext";
import { VocabDrillBlock } from "./VocabDrillBlock";
import { ReadalongBlock } from "./ReadalongBlock";
import { IntroBlock } from "./IntroBlock";
import { GrammarBlock } from "./GrammarBlock";
import { AgendaBlock } from "./AgendaBlock";
import { AuditBar } from "./AuditBar";
import { LessonAvatars } from "./LessonAvatars";
import { TeacherCaption } from "./TeacherCaption";
import { cancelSpeech } from "../engine/speech";
import { acquireWakeLock, releaseWakeLock } from "../engine/wakeLock";
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

  // The whole lesson plays automatically: spoken intro caption, then the
  // slide's own content narration, then auto-advance to the next block —
  // no manual "Continue"/"Play" clicks required for the default flow.
  // `autoPlayReady` gates content narration until the intro caption (if
  // any) has finished, so the two never talk over each other. Resets on
  // every block change. Declared above the early returns below so hook
  // order stays stable regardless of session status.
  const [autoPlayReady, setAutoPlayReady] = useState(false);
  useEffect(() => {
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
    <div className={`session mode-${block.displayMode}`}>
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

      <div className="session-layout">
        <div className="slide-area">
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
        </div>

        <LessonAvatars trainer={trainer} />
      </div>

      <TeacherCaption
        key={block.id}
        block={block}
        lang={lang}
        trainer={trainer}
        framingLanguage={lesson.framingLanguage}
        onFinished={() => setAutoPlayReady(true)}
      />

      <AuditBar />
    </div>
  );
}
