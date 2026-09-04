import { useState } from "react";
import { SessionProvider } from "./context/SessionContext";
import { Session } from "./components/Session";
import { TrainerSelect } from "./components/TrainerSelect";
import { LipSyncTestPage } from "./components/LipSyncTestPage";
import { LessonSelect } from "./components/LessonSelect";
import { lesson2 } from "./data/lesson2";
import { lesson11 } from "./data/lesson11";
import { lessonEnglishSpace } from "./data/lessonEnglishSpace";
import { topicFamily } from "./data/topics/topic-a1-01-family";
import { topicBody } from "./data/topics/topic-a1-02-body";
import { topicAppearance } from "./data/topics/topic-a1-03-appearance";
import { topicEmotions } from "./data/topics/topic-a1-04-emotions";
import { topicFood } from "./data/topics/topic-a1-05-food";
import { topicHome } from "./data/topics/topic-a1-06-home";
import { topicClothing } from "./data/topics/topic-a1-07-clothing";
import { topicShopping } from "./data/topics/topic-a1-08-shopping";
import { topicAnimals } from "./data/topics/topic-a1-09-animals";
import { topicHealth } from "./data/topics/topic-a1-10-health";
import { topicTravel } from "./data/topics/topic-a1-11-travel";
import { topicDirections } from "./data/topics/topic-a1-12-directions";
import { topicTime } from "./data/topics/topic-a1-13-time";
import { topicCountries } from "./data/topics/topic-a1-14-countries";
import { topicLandscape } from "./data/topics/topic-a1-15-landscape";
import { topicTraffic } from "./data/topics/topic-a1-16-traffic";
import { topicWork } from "./data/topics/topic-a1-17-work";
import { topicSchool } from "./data/topics/topic-a1-18-school";
import { topicWeather } from "./data/topics/topic-a1-19-weather";
import { topicWeekend } from "./data/topics/topic-a2-01-weekend";
import { topicAbilities } from "./data/topics/topic-a2-02-abilities";
import { topicConditional } from "./data/topics/topic-a2-03-conditional";
import { topicRoutine } from "./data/topics/topic-a2-04-routine";
import { topicHobbies } from "./data/topics/topic-a2-05-hobbies";
import { topicTransport } from "./data/topics/topic-a2-06-transport";
import { topicCooking } from "./data/topics/topic-a2-07-cooking";
import { topicSeasons } from "./data/topics/topic-a2-08-seasons";
import { topicLearning } from "./data/topics/topic-a2-09-learning";
import { topicRelationships } from "./data/topics/topic-a2-10-relationships";
import { topicExperiences } from "./data/topics/topic-a2-11-experiences";
import { topicMemories } from "./data/topics/topic-a2-12-memories";
import { topicRecommendations } from "./data/topics/topic-a2-13-recommendations";
import { topicConjunctions } from "./data/topics/topic-a2-14-conjunctions";
import { topicConditions } from "./data/topics/topic-a2-15-conditions";
import { topicCommunication } from "./data/topics/topic-a2-16-communication";
import { topicPlans } from "./data/topics/topic-a2-17-plans";
import { topicInvitations } from "./data/topics/topic-a2-18-invitations";
import { topicFavors } from "./data/topics/topic-a2-19-favors";
import { topicGifts } from "./data/topics/topic-a2-20-gifts";
import { topicTechnology } from "./data/topics/topic-a2-21-technology";
import { topicEntertainment } from "./data/topics/topic-a2-22-entertainment";
import { topicEducation } from "./data/topics/topic-c1-01-education";
import { topicSociety } from "./data/topics/topic-c1-02-society";
import { topicPolitics } from "./data/topics/topic-c1-03-politics";
import { topicEconomy } from "./data/topics/topic-c1-04-economy";
import { topicEnvironment } from "./data/topics/topic-c1-05-environment";
import { topicTechnologyC1 } from "./data/topics/topic-c1-06-technology";
import { topicMedia } from "./data/topics/topic-c1-07-media";
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
  topicCountries, topicLandscape, topicTraffic, topicWork, topicSchool, topicWeather, topicWeekend, topicAbilities, topicConditional, topicRoutine, topicHobbies, topicTransport, topicCooking, topicSeasons, topicLearning, topicRelationships, topicExperiences, topicMemories, topicRecommendations, topicConjunctions, topicConditions, topicCommunication, topicPlans, topicInvitations, topicFavors, topicGifts, topicTechnology, topicEntertainment, // ja-only for now — no German grammar/pronunciation authored yet, buildLessonPlan(..., "de", ...) returns null for these and they're filtered out below
];
const generatedJapaneseLessons = ALL_TOPICS
  .map((topic) => buildLessonPlan(topic, "ja", "en", "japanese-beginner"))
  .filter((l): l is LessonPlan => l !== null);

const generatedGermanLessons = ALL_TOPICS
  .map((topic) => buildLessonPlan(topic, "de", "en", "german-beginner"))
  .filter((l): l is LessonPlan => l !== null);

// French, like German, is generated straight off ALL_TOPICS rather
// than a separate list — only topic-a1-01-family has `fr` grammar/
// pronunciation authored so far, so every other topic here returns
// null and gets filtered out below, same as de/zh already do against
// topics that don't have their content yet. Extend more A1 topics with
// `fr` the same way (vocab/dialogue/song translations + a new
// grammar.fr/pronunciation.fr block) and they'll start generating
// automatically with no changes needed here.
const generatedFrenchLessons = ALL_TOPICS
  .map((topic) => buildLessonPlan(topic, "fr", "en", "french-beginner"))
  .filter((l): l is LessonPlan => l !== null);

// C1 topics are a separate list from ALL_TOPICS above (not mixed in)
// since they're built for a completely different target language (zh)
// and CEFR level, with their own courseId — folding them into
// ALL_TOPICS and generating ja/de from them would just always produce
// null (no ja/de grammar authored for these), same as it currently does
// for zh/en against ALL_TOPICS's own topics. See
// docs/c1-master-lesson-table-v01.md.
const C1_TOPICS: TopicLesson[] = [topicEducation, topicSociety, topicPolitics, topicEconomy, topicEnvironment, topicTechnologyC1, topicMedia];
const generatedChineseC1Lessons = C1_TOPICS
  .map((topic) => buildLessonPlan(topic, "zh", "en", "chinese-c1"))
  .filter((l): l is LessonPlan => l !== null);

const allLessons: LessonPlan[] = [
  lesson2,
  lesson11,
  lessonEnglishSpace,
  ...generatedJapaneseLessons,
  ...generatedGermanLessons,
  ...generatedFrenchLessons,
  ...generatedChineseC1Lessons,
]; // grows as more lessons are built

function App() {
  const [trainer, setTrainer] = useState<Trainer | null>(null);
  const [lesson, setLesson] = useState<LessonPlan | null>(null);
  const [showLipSyncTest, setShowLipSyncTest] = useState(false);
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

  if (showLipSyncTest) {
    return <LipSyncTestPage onBack={() => setShowLipSyncTest(false)} />;
  }

  if (!trainer) {
    return (
      <TrainerSelect
        targetLang={targetLang}
        sourceLang={sourceLang}
        onTargetChange={setTargetLang}
        onSourceChange={setSourceLang}
        onOpenLipSyncTest={() => setShowLipSyncTest(true)}
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
