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

// Every trainer teaches every direction among their own languages (e.g.
// Vincent = en/zh/de, works for "speak en / learn de" just as well as
// "speak zh / learn en") — so matching ignores which of the two filter
// dropdowns is "source" vs "target" and just checks language membership.
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
  // Style (rigid/flexible) is chosen on the lesson-select screen now, not
  // here — see LessonSelect.tsx.
  onSelect: (trainer: Trainer, langChoice?: { targetLang: LangCode; sourceLang: LangCode }) => void;
}) {
  const saved = loadSettings();
  const [langA, setLangA] = useState<LangCode | "">(saved.targetLang ?? "");
  const [langB, setLangB] = useState<LangCode | "">(saved.sourceLang ?? "");

  const matching = trainers.filter((t) => matchesFilter(t, langA, langB));
  const nonMatching = trainers.filter((t) => !matchesFilter(t, langA, langB));

  function handleSelect(t: Trainer) {
    const langChoice = langA && langB ? { targetLang: langA, sourceLang: langB } : undefined;
    saveSettings({
      trainerId: t.id,
      targetLang: langA || undefined,
      sourceLang: langB || undefined,
    });
    onSelect(t, langChoice);
  }

  function renderCard(t: Trainer, dimmed: boolean) {
    return (
      <button
        key={t.id}
        className={`trainer-card${dimmed ? " trainer-card-dimmed" : ""}`}
        onClick={() => handleSelect(t)}
      >
        <TrainerAvatar avatarSeed={t.avatarSeed} avatarType={t.avatarType} />
        <div className="trainer-name">{t.name}</div>
        <div className="trainer-languages">
          {t.languages.map((l) => LANG_LABEL[l]).join(" ↔ ")}
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
      <p className="subtitle">Each trainer teaches a set of languages, in any direction.</p>

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

      <div className="trainer-grid">
        {matching.map((t) => renderCard(t, false))}
        {nonMatching.map((t) => renderCard(t, true))}
      </div>
    </div>
  );
}
