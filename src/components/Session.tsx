import { useSession } from "../context/SessionContext";
import { VocabDrillBlock } from "./VocabDrillBlock";
import { ReadalongBlock } from "./ReadalongBlock";
import { IntroBlock } from "./IntroBlock";
import { GrammarBlock } from "./GrammarBlock";
import { AuditBar } from "./AuditBar";
import { LessonAvatars } from "./LessonAvatars";
import { TeacherCaption } from "./TeacherCaption";
import { cancelSpeech } from "../engine/speech";
import type { Trainer } from "../data/trainers";

export function Session({ trainer }: { trainer: Trainer }) {
  const { state, dispatch } = useSession();
  const { lesson, blockIndex, status, lang, display, style, mode } = state;

  if (status === "complete") {
    return (
      <div className="session complete">
        <h2>Lesson complete 🎉</h2>
        <AuditBar />
      </div>
    );
  }

  const block = lesson.blocks[blockIndex];

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

      <LessonAvatars trainer={trainer} />

      {block.type === "vocabDrill" && (
        <VocabDrillBlock block={block} lang={lang} onComplete={handleComplete} />
      )}
      {block.type === "readalong" && (
        <ReadalongBlock block={block} lang={lang} onComplete={handleComplete} />
      )}
      {block.type === "intro" && (
        <IntroBlock block={block} lang={lang} onComplete={handleComplete} />
      )}
      {block.type === "grammar" && (
        <GrammarBlock
          block={block}
          lang={lang}
          display={display}
          onComplete={handleComplete}
        />
      )}

      <TeacherCaption key={block.id} block={block} lang={lang} trainer={trainer} />

      <AuditBar />
    </div>
  );
}
