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
import { topicWork } from "./data/topics/topic-17-work";
import { topicSchool } from "./data/topics/topic-18-school";
import { topicWeather } from "./data/topics/topic-19-weather";
import { topicWeekend } from "./data/topics/topic-20-weekend";
import { topicAbilities } from "./data/topics/topic-21-abilities";
import { topicConditional } from "./data/topics/topic-22-conditional";
import { topicRoutine } from "./data/topics/topic-23-routine";
import { topicHobbies } from "./data/topics/topic-24-hobbies";
import { topicTransport } from "./data/topics/topic-25-transport";
import { topicCooking } from "./data/topics/topic-26-cooking";
import { topicSeasons } from "./data/topics/topic-27-seasons";
import { topicLearning } from "./data/topics/topic-28-learning";
import { topicRelationships } from "./data/topics/topic-29-relationships";
import { topicExperiences } from "./data/topics/topic-30-experiences";
import { topicMemories } from "./data/topics/topic-31-memories";
import { topicRecommendations } from "./data/topics/topic-32-recommendations";
import { topicConjunctions } from "./data/topics/topic-33-conjunctions";
import { topicConditions } from "./data/topics/topic-34-conditions";
import { topicCommunication } from "./data/topics/topic-35-communication";
import { topicPlans } from "./data/topics/topic-36-plans";
import { topicInvitations } from "./data/topics/topic-37-invitations";
import { buildLessonPlan } from "./engine/buildLesson";
import { applyPhoneStyle } from "./engine/phoneStyle";
import { loadSettings, saveSettings } from "./engine/userSettings";
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
  topicCountries, topicLandscape, topicTraffic, topicWork, topicSchool, topicWeather, topicWeekend, topicAbilities, topicConditional, topicRoutine, topicHobbies, topicTransport, topicCooking, topicSeasons, topicLearning, topicRelationships, topicExperiences, topicMemories, topicRecommendations, topicConjunctions, topicConditions, topicCommunication, topicPlans, topicInvitations, // ja-only for now — no German grammar/pronunciation authored yet, buildLessonPlan(..., "de", ...) returns null for these and they're filtered out below
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
  // Lifted here (not owned by TrainerSelect or LessonSelect individually)
  // so the same "I want to learn" / "I already know" choice is linked
  // across both screens — changing it on either one updates this single
  // source of truth, and both write through to localStorage via
  // saveSettings so it's also persistent across reloads.
  const saved = loadSettings();
  const [targetLang, setTargetLangState] = useState<LangCode | "">(saved.targetLang ?? "");
  const [sourceLang, setSourceLangState] = useState<LangCode | "">(saved.sourceLang ?? "");
  function setTargetLang(l: LangCode | "") {
    setTargetLangState(l);
    saveSettings({ targetLang: l || undefined });
  }
  function setSourceLang(l: LangCode | "") {
    setSourceLangState(l);
    saveSettings({ sourceLang: l || undefined });
  }
  // Style is chosen on the lesson-select screen now (compact toggle at
  // the top), not trainer-select — see LessonSelect.tsx. Actually applied
  // here via applyPhoneStyle: "phone" splits multi-column vocab/
  // pronunciation slides so each column (or paired-comparison group)
  // becomes its own slide at a higher font scale, and still 3-ways-splits
  // dialogue/grammar blocks (no column concept there); "computer" leaves
  // the lesson completely untouched. Previously this was captured but
  // never used anywhere — a real no-op bug, not by design.
  const [styleChoice, setStyleChoice] = useState<"computer" | "phone" | null>(null);

  if (!trainer) {
    return (
      <TrainerSelect
        targetLang={targetLang}
        sourceLang={sourceLang}
        onTargetChange={setTargetLang}
        onSourceChange={setSourceLang}
        onSelect={(t) => {
          setTrainer(t);
          saveSettings({ trainerId: t.id });
        }}
      />
    );
  }

  if (!lesson) {
    return (
      <LessonSelect
        trainer={trainer}
        lessons={allLessons}
        targetLang={targetLang}
        sourceLang={sourceLang}
        onTargetChange={setTargetLang}
        onSourceChange={setSourceLang}
        onSelect={(chosenLesson, chosenStyle) => {
          setStyleChoice(chosenStyle);
          setLesson(chosenStyle === "phone" ? applyPhoneStyle(chosenLesson) : chosenLesson);
        }}
        onBack={() => setTrainer(null)}
      />
    );
  }

  // Trainer's first two listed languages become the session's default
  // target/source if the student didn't set both language buttons. With
  // 3-language trainers this is just a default, not the full set — the
  // explicit targetLang/sourceLang (when both are set) can pick any pair
  // among the trainer's languages, not just the first two. Live-derived
  // from the same lifted state on every render, not a frozen snapshot —
  // so a change made on LessonSelect (after the trainer is already
  // picked) still takes effect here.
  const lang =
    targetLang && sourceLang
      ? { targetLang, sourceLang }
      : { targetLang: trainer.languages[0], sourceLang: trainer.languages[1] };

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
