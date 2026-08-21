import { useState } from "react";
import type { LessonPlan, LangCode } from "../types";
import type { Trainer } from "../data/trainers";
import { LanguageSamples } from "./LanguageSamples";
import { summarizeLesson } from "../data/lessonSummary";
import { primeSpeechSynthesis } from "../engine/speech";
import { isLessonHiddenByDefault } from "../engine/lessonStatus";

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
  const [statusFilter, setStatusFilter] = useState<"recommended" | "all" | "hidden">(
    "recommended"
  );
  const [levelFilter, setLevelFilter] = useState<string>("all");

  const courseLessons = lessons.filter((l) => trainer.courseIds.includes(l.courseId));
  const levels = Array.from(
    new Set(courseLessons.map((l) => l.level).filter((v): v is string => !!v))
  ).sort();

  const byStatus = courseLessons.filter((l) => {
    const hidden = isLessonHiddenByDefault(l.id);
    if (statusFilter === "hidden") return hidden;
    if (statusFilter === "recommended") return !hidden;
    return true; // "all"
  });
  const available =
    levelFilter === "all" ? byStatus : byStatus.filter((l) => l.level === levelFilter);
  const displayLang: LangCode = trainer.languages[0];

  return (
    <div className="trainer-select">
      <button className="back-link" onClick={onBack}>
        ← Choose a different trainer
      </button>
      <h1>Choose a lesson</h1>
      <p className="subtitle">with {trainer.name}</p>

      <LanguageSamples trainer={trainer} />

      <div className="filter-chip-row">
        <button
          className={`chip${levelFilter === "all" ? " active" : ""}`}
          onClick={() => setLevelFilter("all")}
        >
          All levels
        </button>
        {levels.map((lv) => (
          <button
            key={lv}
            className={`chip${levelFilter === lv ? " active" : ""}`}
            onClick={() => setLevelFilter(lv)}
          >
            {lv}
          </button>
        ))}
      </div>

      <div className="filter-chip-row">
        <button
          className={`chip${statusFilter === "recommended" ? " active" : ""}`}
          onClick={() => setStatusFilter("recommended")}
        >
          Recommended
        </button>
        <button
          className={`chip${statusFilter === "all" ? " active" : ""}`}
          onClick={() => setStatusFilter("all")}
        >
          All
        </button>
        <button
          className={`chip${statusFilter === "hidden" ? " active" : ""}`}
          onClick={() => setStatusFilter("hidden")}
        >
          Hidden
        </button>
      </div>

      {available.length === 0 ? (
        <p>No lessons match these filters.</p>
      ) : (
        <div className="trainer-grid">
          {available.map((lesson) => {
            const summary = summarizeLesson(lesson, displayLang);
            return (
              <button
                key={lesson.id}
                className="trainer-card"
                onClick={() => {
                  primeSpeechSynthesis(); // see engine/speech.ts — unlocks TTS before Session's autoplay narration fires
                  onSelect(lesson);
                }}
              >
                <div className="trainer-name">{lesson.title[displayLang]}</div>
                <div className="trainer-style">{lesson.blocks.length} slides</div>
                <div className="lesson-summary">
                  {summary.vocabTopic && <div>📚 {summary.vocabTopic}</div>}
                  {summary.grammarItems.length > 0 && <div>✏️ {summary.grammarItems.join(", ")}</div>}
                  {summary.songTitle && <div>🎵 {summary.songTitle}</div>}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
