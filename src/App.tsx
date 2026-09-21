import { useState } from "react";
import { SessionProvider } from "./context/SessionContext";
import { Session } from "./components/Session";
import { TrainerSelect } from "./components/TrainerSelect";
import { LipSyncTestPage } from "./components/LipSyncTestPage";
import { LessonSelect } from "./components/LessonSelect";
import { allLessons } from "./data/allLessons";
import { applyPhoneStyle } from "./engine/phoneStyle";
import { loadSettings, saveSettings } from "./engine/userSettings";
import type { Trainer } from "./data/trainers";
import type { LessonPlan, LangCode } from "./types";
import "./App.css";

const display = { density: "dense" as const };

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
