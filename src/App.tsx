import { useState } from "react";
import { SessionProvider } from "./context/SessionContext";
import { Session } from "./components/Session";
import { TrainerSelect } from "./components/TrainerSelect";
import { LessonSelect } from "./components/LessonSelect";
import { lesson2 } from "./data/lesson2";
import { lesson11 } from "./data/lesson11";
import { lessonEnglishSpace } from "./data/lessonEnglishSpace";
import { topicFamily } from "./data/topics/topic-01-family";
import { topicBody } from "./data/topics/topic-02-body";
import { topicAppearance } from "./data/topics/topic-03-appearance";
import { topicEmotions } from "./data/topics/topic-04-emotions";
import { topicFood } from "./data/topics/topic-05-food";
import { topicHome } from "./data/topics/topic-06-home";
import { topicClothing } from "./data/topics/topic-07-clothing";
import { topicShopping } from "./data/topics/topic-08-shopping";
import { topicAnimals } from "./data/topics/topic-09-animals";
import { topicHealth } from "./data/topics/topic-10-health";
import { topicTravel } from "./data/topics/topic-11-travel";
import { topicDirections } from "./data/topics/topic-12-directions";
import { topicTime } from "./data/topics/topic-13-time";
import { topicCountries } from "./data/topics/topic-14-countries";
import { topicLandscape } from "./data/topics/topic-15-landscape";
import { topicTraffic } from "./data/topics/topic-16-traffic";
import { buildLessonPlan } from "./engine/buildLesson";
import type { Trainer } from "./data/trainers";
import type { LessonPlan, LangCode } from "./types";
import type { TopicLesson } from "./data/topicTypes";
import "./App.css";

const display = { density: "dense" as const };

// All 13 built lessons (rows 1-13 of the A1 master table) go through the
// topic-based system (see docs/topic-lesson-system.md) instead of
// separate hand-written per-language files. Every topic now has both
// Japanese and German grammar/pronunciation authored, so buildLessonPlan
// produces a full ja-target AND de-target lesson from each one — 26
// generated lessons total. Chinese/English grammar+pronunciation aren't
// authored yet for any topic (vocab/dialogue/song already are, ready for
// that whenever it happens).
const ALL_TOPICS: TopicLesson[] = [
  topicFamily, topicBody, topicAppearance, topicEmotions, topicFood,
  topicHome, topicClothing, topicShopping, topicAnimals, topicHealth,
  topicTravel, topicDirections, topicTime,
  topicCountries, topicLandscape, topicTraffic, // ja-only for now — no German grammar/pronunciation authored yet, buildLessonPlan(..., "de", ...) returns null for these and they're filtered out below
];
const generatedJapaneseLessons = ALL_TOPICS
  .map((topic) => buildLessonPlan(topic, "ja", "en", "japanese-beginner"))
  .filter((l): l is LessonPlan => l !== null);

const generatedGermanLessons = ALL_TOPICS
  .map((topic) => buildLessonPlan(topic, "de", "en", "german-beginner"))
  .filter((l): l is LessonPlan => l !== null);

const allLessons: LessonPlan[] = [
  lesson2,
  lesson11,
  lessonEnglishSpace,
  ...generatedJapaneseLessons,
  ...generatedGermanLessons,
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

  // Trainer's first two listed languages become the session's default
  // target/source if the student didn't set both filter dropdowns. With
  // 3-language trainers this is just a default, not the full set — the
  // explicit langChoice (when both dropdowns are set) can pick any pair
  // among the trainer's languages, not just the first two.
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
