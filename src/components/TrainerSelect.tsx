import { trainers, type Trainer } from "../data/trainers";
import type { LangCode } from "../types";
import { TrainerAvatar } from "./TrainerAvatar";

const LANG_LABEL: Record<LangCode, string> = {
  de: "German",
  en: "English",
  zh: "Chinese",
};

export function TrainerSelect({
  onSelect,
}: {
  onSelect: (trainer: Trainer) => void;
}) {
  return (
    <div className="trainer-select">
      <h1>Choose your trainer</h1>
      <p className="subtitle">Each trainer teaches a fixed language pair.</p>

      <div className="trainer-grid">
        {trainers.map((t) => (
          <button key={t.id} className="trainer-card" onClick={() => onSelect(t)}>
            <TrainerAvatar trainer={t} />
            <div className="trainer-name">{t.name}</div>
            <div className="trainer-languages">
              {LANG_LABEL[t.languages[0]]} ↔ {LANG_LABEL[t.languages[1]]}
            </div>
            <div className="trainer-style">
              {t.defaultStyle === "rigid" ? "Structured" : "Flexible"} · {t.hobby.split(".")[0]}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
