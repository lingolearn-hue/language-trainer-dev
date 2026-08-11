import { useState } from "react";
import { SessionProvider } from "./context/SessionContext";
import { Session } from "./components/Session";
import { TrainerSelect } from "./components/TrainerSelect";
import { lesson2 } from "./data/lesson2";
import type { Trainer } from "./data/trainers";
import "./App.css";

const display = { density: "dense" as const };

function App() {
  const [trainer, setTrainer] = useState<Trainer | null>(null);

  if (!trainer) {
    return <TrainerSelect onSelect={setTrainer} />;
  }

  // Trainer's language pair becomes the session's target/source. Convention:
  // languages[0] = target (what's being taught), languages[1] = source.
  const lang = { targetLang: trainer.languages[0], sourceLang: trainer.languages[1] };

  return (
    <SessionProvider lesson={lesson2} lang={lang} display={display}>
      <Session trainer={trainer} />
    </SessionProvider>
  );
}

export default App;
