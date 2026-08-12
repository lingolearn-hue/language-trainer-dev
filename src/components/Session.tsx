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
  const { lesson, blockIndex, status, lang, display } = state;

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
    return (
      <div className="session paused">
        <h2>Paused</h2>
        <p>
          Block {blockIndex + 1} / {lesson.blocks.length}
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
        <button onClick={handlePause}>⏸ Pause</button>
      </div>

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

      <TeacherCaption key={block.id} block={block} lang={lang} />

      <AuditBar />
    </div>
  );
}
