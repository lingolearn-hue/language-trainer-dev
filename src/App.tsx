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
import type { Trainer } from "./data/trainers";
import type { LessonPlan } from "./types";
import "./App.css";

const display = { density: "dense" as const };
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
]; // grows as more lessons are built

function App() {
  const [trainer, setTrainer] = useState<Trainer | null>(null);
  const [lesson, setLesson] = useState<LessonPlan | null>(null);

  if (!trainer) {
    return <TrainerSelect onSelect={setTrainer} />;
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

  // Trainer's language pair becomes the session's target/source. Convention:
  // languages[0] = target (what's being taught), languages[1] = source.
  const lang = { targetLang: trainer.languages[0], sourceLang: trainer.languages[1] };

  return (
    <SessionProvider lesson={lesson} lang={lang} display={display} initialStyle={trainer.defaultStyle}>
      <Session trainer={trainer} onExitToLessons={() => setLesson(null)} />
    </SessionProvider>
  );
}

export default App;
