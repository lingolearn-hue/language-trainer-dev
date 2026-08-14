import type { LessonPlan, LangCode } from "../types";
import type { Trainer } from "../data/trainers";
import { LanguageSamples } from "./LanguageSamples";

// Course/lesson picker, shown after trainer selection. Only lessons whose
// courseId is in the trainer's courseIds are offered — currently there's
// just one lesson (lesson2) and one course, so this renders a single card,
// but the structure supports adding more lessons/courses without touching
// the selection flow.
export function LessonSelect({
  trainer,
  lessons,
  onSelect,
  onBack,
}: {
  trainer: Trainer;
  lessons: LessonPlan[];
  onSelect: (lesson: LessonPlan) => void;
  onBack: () => void;
}) {
  const available = lessons.filter((l) => trainer.courseIds.includes(l.courseId));
  const displayLang: LangCode = trainer.languages[0];

  return (
    <div className="trainer-select">
      <button className="back-link" onClick={onBack}>
        ← Choose a different trainer
      </button>
      <h1>Choose a lesson</h1>
      <p className="subtitle">with {trainer.name}</p>

      <LanguageSamples trainer={trainer} />

      {available.length === 0 ? (
        <p>No lessons available for this trainer's course yet.</p>
      ) : (
        <div className="trainer-grid">
          {available.map((lesson) => (
            <button key={lesson.id} className="trainer-card" onClick={() => onSelect(lesson)}>
              <div className="trainer-name">{lesson.title[displayLang]}</div>
              <div className="trainer-style">{lesson.blocks.length} slides</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
