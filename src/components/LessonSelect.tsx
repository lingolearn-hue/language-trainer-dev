import { useState } from "react";
import type { LessonPlan, LangCode } from "../types";
import type { Trainer } from "../data/trainers";
import { LanguageSamples } from "./LanguageSamples";
import { LanguageFilterButtons } from "./LanguageFilterButtons";
import { summarizeLesson } from "../data/lessonSummary";
import { primeSpeechSynthesis } from "../engine/speech";
import { isLessonHiddenByDefault, getLessonStatus } from "../engine/lessonStatus";
import { loadSettings, saveSettings } from "../engine/userSettings";

// Maps the internal mastery states (engine/lessonStatus.ts) to the 3
// labels shown in the lesson list: no record yet -> "Unseen"; either
// revisit state -> "For review" (both mean "keep this around, come back
// to it", just with different hide timing — the list doesn't need to
// distinguish them); "mastered" -> "Archived".
function statusLabel(lessonId: string): string {
  const rec = getLessonStatus(lessonId);
  if (!rec) return "Unseen";
  if (rec.status === "mastered") return "Archived";
  return "For review";
}

// Course/lesson picker, shown after trainer selection. Only lessons whose
// courseId is in the trainer's courseIds are offered — currently there's
// just one lesson (lesson2) and one course, so this renders a single card,
// but the structure supports adding more lessons/courses without touching
// the selection flow.
export function LessonSelect({
  trainer,
  lessons,
  targetLang,
  sourceLang,
  onTargetChange,
  onSourceChange,
  onSelect,
  onBack,
}: {
  trainer: Trainer;
  lessons: LessonPlan[];
  // Same lifted state as TrainerSelect — linked and persistent across
  // both screens, see App.tsx.
  targetLang: LangCode | "";
  sourceLang: LangCode | "";
  onTargetChange: (lang: LangCode | "") => void;
  onSourceChange: (lang: LangCode | "") => void;
  onSelect: (lesson: LessonPlan, style: "rigid" | "flexible") => void;
  onBack: () => void;
}) {
  const saved = loadSettings();
  const [style, setStyle] = useState<"rigid" | "flexible">(saved.style ?? trainer.defaultStyle);
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
  const sorted = [...available].sort((a, b) => {
    const levelCompare = (a.level ?? "").localeCompare(b.level ?? "");
    if (levelCompare !== 0) return levelCompare;
    return (a.lessonNumber ?? Infinity) - (b.lessonNumber ?? Infinity);
  });

  return (
    <div className="trainer-select">
      <button className="back-link" onClick={onBack}>
        ← Choose a different trainer
      </button>
      <h1>Choose a lesson</h1>
      <p className="subtitle">with {trainer.name}</p>

      <LanguageSamples trainer={trainer} />

      <LanguageFilterButtons
        targetLang={targetLang}
        sourceLang={sourceLang}
        onTargetChange={onTargetChange}
        onSourceChange={onSourceChange}
        availableLangs={trainer.languages}
        compact
      />

      <div className="style-toggle-compact">
        <span className="style-toggle-label">Style</span>
        <button
          className={`chip${style === "rigid" ? " active" : ""}`}
          onClick={() => {
            setStyle("rigid");
            saveSettings({ style: "rigid" });
          }}
        >
          📏 Structured
        </button>
        <button
          className={`chip${style === "flexible" ? " active" : ""}`}
          onClick={() => {
            setStyle("flexible");
            saveSettings({ style: "flexible" });
          }}
        >
          🌿 Flexible
        </button>
      </div>

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

      {sorted.length === 0 ? (
        <p>No lessons match these filters.</p>
      ) : (
        <div className="lesson-list">
          {sorted.map((lesson) => {
            const displayLang: LangCode = lesson.targetLangCode ?? trainer.languages[0];
            const summary = summarizeLesson(lesson, displayLang);
            const numberLabel = lesson.lessonNumber
              ? String(lesson.lessonNumber).padStart(3, "0")
              : "—";
            return (
              <button
                key={lesson.id}
                className="lesson-row"
                onClick={() => {
                  primeSpeechSynthesis(); // see engine/speech.ts — unlocks TTS before Session's autoplay narration fires
                  onSelect(lesson, style);
                }}
              >
                <div className="lesson-row-number">
                  <div className="lesson-row-number-value">{numberLabel}</div>
                  {lesson.level && <div className="lesson-row-level">{lesson.level}</div>}
                </div>
                <div className="lesson-row-body">
                  <div className="lesson-row-title">{lesson.title[displayLang] ?? lesson.title.en}</div>
                  {summary.vocabTopic && <div className="lesson-row-line">📚 {summary.vocabTopic}</div>}
                  {summary.grammarItems.length > 0 && (
                    <div className="lesson-row-line">✏️ {summary.grammarItems.join(", ")}</div>
                  )}
                  {summary.songTitle && <div className="lesson-row-line">🎵 {summary.songTitle}</div>}
                </div>
                <div className="lesson-row-status">
                  <div className="lesson-row-status-value">{statusLabel(lesson.id)}</div>
                  <div className="lesson-row-slides">{lesson.blocks.length} slides</div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
