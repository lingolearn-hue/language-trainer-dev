import { trainers, type Trainer } from "../data/trainers";
import type { LangCode } from "../types";
import { TrainerAvatar } from "./TrainerAvatar";
import { VoiceHelpOverlay } from "./VoiceHelpOverlay";
import { UpdateCheckButton } from "./UpdateCheckButton";
import { LanguageFilterButtons } from "./LanguageFilterButtons";
import { LANG_LABEL } from "../data/langLabels";

// Every trainer teaches every direction among their own languages (e.g.
// Vincent = en/zh/de, works for "speak en / learn de" just as well as
// "speak zh / learn en") — so matching ignores which of the two filter
// rows is "source" vs "target" and just checks language membership.
function matchesFilter(t: Trainer, langA: LangCode | "", langB: LangCode | ""): boolean {
  if (!langA && !langB) return true; // no filter set — everyone matches
  if (langA && langB) return t.languages.includes(langA) && t.languages.includes(langB);
  const only = langA || langB;
  return t.languages.includes(only as LangCode);
}

export function TrainerSelect({
  targetLang,
  sourceLang,
  onTargetChange,
  onSourceChange,
  onSelect,
}: {
  // Lifted to App.tsx so the same choice is linked with LessonSelect's
  // copy of this control and persists across reloads — see App.tsx.
  targetLang: LangCode | "";
  sourceLang: LangCode | "";
  onTargetChange: (lang: LangCode | "") => void;
  onSourceChange: (lang: LangCode | "") => void;
  onSelect: (trainer: Trainer) => void;
}) {
  const matching = trainers.filter((t) => matchesFilter(t, targetLang, sourceLang));
  const nonMatching = trainers.filter((t) => !matchesFilter(t, targetLang, sourceLang));

  function renderCard(t: Trainer, dimmed: boolean) {
    return (
      <button
        key={t.id}
        className={`trainer-card${dimmed ? " trainer-card-dimmed" : ""}`}
        onClick={() => onSelect(t)}
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

      <LanguageFilterButtons
        targetLang={targetLang}
        sourceLang={sourceLang}
        onTargetChange={onTargetChange}
        onSourceChange={onSourceChange}
      />
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
