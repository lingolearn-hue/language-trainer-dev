import { useState } from "react";
import { SessionProvider } from "./context/SessionContext";
import { Session } from "./components/Session";
import { TrainerSelect } from "./components/TrainerSelect";
import { LessonSelect } from "./components/LessonSelect";
import { lesson2 } from "./data/lesson2";
import { lesson11 } from "./data/lesson11";
import { lessonEnglishSpace } from "./data/lessonEnglishSpace";
import { lessonJapanese2 } from "./data/lessonJapanese2";
import { lessonJapanese1 } from "./data/lessonJapanese1";
import { lessonJapanese3 } from "./data/lessonJapanese3";
import { lessonJapanese4 } from "./data/lessonJapanese4";
import { lessonJapanese5 } from "./data/lessonJapanese5";
import { lessonJapanese6 } from "./data/lessonJapanese6";
import { lessonJapanese7 } from "./data/lessonJapanese7";
import { lessonJapanese8 } from "./data/lessonJapanese8";
import { lessonJapanese9 } from "./data/lessonJapanese9";
import { lessonJapanese10 } from "./data/lessonJapanese10";
import { lessonJapanese11 } from "./data/lessonJapanese11";
import { lessonJapanese12 } from "./data/lessonJapanese12";
import { lessonJapanese13 } from "./data/lessonJapanese13";
import { topicFood } from "./data/topics/topic-05-food";
import { buildLessonPlan } from "./engine/buildLesson";
import type { Trainer } from "./data/trainers";
import type { LessonPlan, LangCode } from "./types";
import "./App.css";

const display = { density: "dense" as const };

// Proof of concept for the topic-based lesson system (see
// engine/buildLesson.ts) — generates two LessonPlans from ONE topic
// file (topic-05-food.ts): a Japanese-target version and a German-target
// version, both sharing the exact same vocab/dialogue data, each with
// its own real grammar/pronunciation. Registered alongside, not instead
// of, the existing hand-written lessonJapanese5 while this is being
// proven out — nothing existing changes.
const generatedFoodJa = buildLessonPlan(topicFood, "ja", "en", "japanese-beginner");
const generatedFoodDe = buildLessonPlan(topicFood, "de", "en", "german-beginner");
const generatedLessons: LessonPlan[] = [generatedFoodJa, generatedFoodDe].filter(
  (l): l is LessonPlan => l !== null,
);

const allLessons: LessonPlan[] = [
  lesson2,
  lesson11,
  lessonEnglishSpace,
  lessonJapanese1,
  lessonJapanese2,
  lessonJapanese3,
  lessonJapanese4,
  lessonJapanese5,
  lessonJapanese6,
  lessonJapanese7,
  lessonJapanese8,
  lessonJapanese9,
  lessonJapanese10,
  lessonJapanese11,
  lessonJapanese12,
  lessonJapanese13,
  ...generatedLessons,
]; // grows as more lessons are built

function App() {
  const [trainer, setTrainer] = useState<Trainer | null>(null);
  const [lesson, setLesson] = useState<LessonPlan | null>(null);
  // Explicit direction the student picked on the trainer-select screen
  // (via the "I want to learn" / "I already know" filters), if both were
  // set — falls back to trainer.languages[0]/[1] convention otherwise.
  const [langChoice, setLangChoice] = useState<{ targetLang: LangCode; sourceLang: LangCode } | null>(null);
  const [styleChoice, setStyleChoice] = useState<"rigid" | "flexible" | null>(null);

  if (!trainer) {
    return (
      <TrainerSelect
        onSelect={(t, chosenLang, chosenStyle) => {
          setTrainer(t);
          setLangChoice(chosenLang ?? null);
          setStyleChoice(chosenStyle ?? null);
        }}
      />
    );
  }

  if (!lesson) {
    return (
      <LessonSelect
        trainer={trainer}
        lessons={allLessons}
        onSelect={setLesson}
        onBack={() => setTrainer(null)}
      />
    );
  }

  // Trainer's language pair becomes the session's target/source. The
  // student's explicit choice from the filter dropdowns wins if they set
  // both; otherwise falls back to the languages[0]=target/[1]=source
  // convention.
  const lang = langChoice ?? { targetLang: trainer.languages[0], sourceLang: trainer.languages[1] };

  return (
    <SessionProvider
      lesson={lesson}
      lang={lang}
      display={display}
      initialStyle={styleChoice ?? trainer.defaultStyle}
    >
      <Session trainer={trainer} onExitToLessons={() => setLesson(null)} />
    </SessionProvider>
  );
}

export default App;
