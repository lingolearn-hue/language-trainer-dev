import { useState } from "react";
import { trainers, type Trainer } from "../data/trainers";
import type { LangCode } from "../types";
import { TrainerAvatar } from "./TrainerAvatar";
import { VoiceHelpOverlay } from "./VoiceHelpOverlay";
import { UpdateCheckButton } from "./UpdateCheckButton";
import { loadSettings, saveSettings } from "../engine/userSettings";

const LANG_LABEL: Record<LangCode, string> = {
  de: "German",
  en: "English",
  zh: "Chinese",
  ja: "Japanese",
};

const ALL_LANGS: LangCode[] = ["de", "en", "zh", "ja"];

// Every trainer is bilingual and teaches BOTH directions of their pair
// (e.g. Max = de<->en, works for a "speak en / learn de" student just as
// well as "speak de / learn en") — so matching ignores which of the two
// filter dropdowns is "source" vs "target" and just checks pair
// membership.
function matchesFilter(t: Trainer, langA: LangCode | "", langB: LangCode | ""): boolean {
  if (!langA && !langB) return true; // no filter set — everyone matches
  if (langA && langB) return t.languages.includes(langA) && t.languages.includes(langB);
  const only = langA || langB;
  return t.languages.includes(only as LangCode);
}

export function TrainerSelect({
  onSelect,
}: {
  // langChoice is passed when the student had both filter dropdowns set —
  // "I want to learn" -> targetLang, "I already know" -> sourceLang. Real
  // bug fix: App.tsx used to always hardcode target/source from
  // trainer.languages[0]/[1] regardless of what the student actually
  // said they wanted, which could silently teach the wrong direction of
  // a trainer's pair. Now the student's stated intent wins when given.
  onSelect: (trainer: Trainer, langChoice?: { targetLang: LangCode; sourceLang: LangCode }, style?: "rigid" | "flexible") => void;
}) {
  const saved = loadSettings();
  const [langA, setLangA] = useState<LangCode | "">(saved.targetLang ?? "");
  const [langB, setLangB] = useState<LangCode | "">(saved.sourceLang ?? "");
  const [style, setStyle] = useState<"rigid" | "flexible">(saved.style ?? "rigid");

  const matching = trainers.filter((t) => matchesFilter(t, langA, langB));
  const nonMatching = trainers.filter((t) => !matchesFilter(t, langA, langB));

  function handleSelect(t: Trainer) {
    const langChoice = langA && langB ? { targetLang: langA, sourceLang: langB } : undefined;
    saveSettings({
      trainerId: t.id,
      targetLang: langA || undefined,
      sourceLang: langB || undefined,
      style,
    });
    onSelect(t, langChoice, style);
  }

  function renderCard(t: Trainer, dimmed: boolean) {
    return (
      <button
        key={t.id}
        className={`trainer-card${dimmed ? " trainer-card-dimmed" : ""}`}
        onClick={() => handleSelect(t)}
      >
        <TrainerAvatar trainer={t} />
        <div className="trainer-name">{t.name}</div>
        <div className="trainer-languages">
          {LANG_LABEL[t.languages[0]]} ↔ {LANG_LABEL[t.languages[1]]}
        </div>
        <div className="trainer-style">
          {t.defaultStyle === "rigid" ? "Structured" : "Flexible"} · {t.hobby.split(".")[0]}
        </div>
      </button>
    );
  }

  return (
    <div className="trainer-select">
      <VoiceHelpOverlay />
      <UpdateCheckButton />
      <h1>Choose your trainer</h1>
      <p className="subtitle">Each trainer teaches a fixed language pair, in either direction.</p>

      <div className="trainer-filters">
        <div className="trainer-filter-col">
          <label htmlFor="filter-learn">I want to learn</label>
          <select id="filter-learn" value={langA} onChange={(e) => setLangA(e.target.value as LangCode | "")}>
            <option value="">Any language</option>
            {ALL_LANGS.map((l) => (
              <option key={l} value={l}>
                {LANG_LABEL[l]}
              </option>
            ))}
          </select>
        </div>
        <div className="trainer-filter-col">
          <label htmlFor="filter-know">I already know</label>
          <select id="filter-know" value={langB} onChange={(e) => setLangB(e.target.value as LangCode | "")}>
            <option value="">Any language</option>
            {ALL_LANGS.map((l) => (
              <option key={l} value={l}>
                {LANG_LABEL[l]}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p className="trainer-filter-hint">
        Pick what you want to learn and what you already know — matching trainers are highlighted below.
      </p>

      <div className="trainer-style-toggle">
        <label>Teaching style</label>
        <div className="trainer-style-buttons">
          <button
            className={style === "rigid" ? "active" : ""}
            onClick={() => {
              setStyle("rigid");
              saveSettings({ style: "rigid" });
            }}
          >
            📏 Structured
          </button>
          <button
            className={style === "flexible" ? "active" : ""}
            onClick={() => {
              setStyle("flexible");
              saveSettings({ style: "flexible" });
            }}
          >
            🌿 Flexible
          </button>
        </div>
        <p className="trainer-style-hint">
          {style === "rigid"
            ? "Vocabulary shown all at once, in dense columns."
            : "Vocabulary broken into smaller chunks — one word group at a time."}
        </p>
      </div>

      <div className="trainer-grid">
        {matching.map((t) => renderCard(t, false))}
        {nonMatching.map((t) => renderCard(t, true))}
      </div>
    </div>
  );
}
