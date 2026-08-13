import { useState } from "react";
import { SessionProvider } from "./context/SessionContext";
import { Session } from "./components/Session";
import { TrainerSelect } from "./components/TrainerSelect";
import { LessonSelect } from "./components/LessonSelect";
import { lesson2 } from "./data/lesson2";
import { lessonEnglishSpace } from "./data/lessonEnglishSpace";
import type { Trainer } from "./data/trainers";
import type { LessonPlan } from "./types";
import "./App.css";

const display = { density: "dense" as const };
const allLessons: LessonPlan[] = [lesson2, lessonEnglishSpace]; // grows as more lessons are built

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
