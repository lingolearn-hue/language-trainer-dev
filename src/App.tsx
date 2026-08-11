import { SessionProvider } from "./context/SessionContext";
import { Session } from "./components/Session";
import { lesson2 } from "./data/lesson2";
import "./App.css";

// MVP hardcode: target=de, source=en, dense reveal. Pickers come later.
const lang = { sourceLang: "en" as const, targetLang: "de" as const };
const display = { density: "dense" as const };

function App() {
  return (
    <SessionProvider lesson={lesson2} lang={lang} display={display}>
      <Session />
    </SessionProvider>
  );
}

export default App;
