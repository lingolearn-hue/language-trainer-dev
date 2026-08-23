import type { LangCode } from "../types";
import { LANG_LABEL, ALL_LANGS } from "../data/langLabels";

// Two button rows replacing the old <select> dropdowns — "I want to
// learn" / "I already know", each a row of language chips. Deliberately
// stateless: target/source language live in App.tsx (see its
// targetLang/sourceLang state) so this component can be rendered on both
// TrainerSelect and LessonSelect and always show/edit the exact same
// linked, localStorage-persisted choice, not two independently-drifting
// copies.
export function LanguageFilterButtons({
  targetLang,
  sourceLang,
  onTargetChange,
  onSourceChange,
  availableLangs = ALL_LANGS,
  compact = false,
}: {
  targetLang: LangCode | "";
  sourceLang: LangCode | "";
  onTargetChange: (lang: LangCode | "") => void;
  onSourceChange: (lang: LangCode | "") => void;
  availableLangs?: LangCode[]; // restrict options — e.g. LessonSelect passes just the current trainer's own languages
  compact?: boolean; // smaller chips for the lesson-select screen, where this is a secondary control, not the main filter
}) {
  function toggle(current: LangCode | "", lang: LangCode, onChange: (l: LangCode | "") => void) {
    onChange(current === lang ? "" : lang); // tap the active chip again to clear it
  }

  return (
    <div className={`lang-filter-buttons${compact ? " compact" : ""}`}>
      <div className="lang-filter-row">
        <span className="lang-filter-row-label">I want to learn</span>
        <div className="lang-filter-chips">
          {availableLangs.map((l) => (
            <button
              key={l}
              className={`chip${targetLang === l ? " active" : ""}`}
              onClick={() => toggle(targetLang, l, onTargetChange)}
            >
              {LANG_LABEL[l]}
            </button>
          ))}
        </div>
      </div>
      <div className="lang-filter-row">
        <span className="lang-filter-row-label">I already know</span>
        <div className="lang-filter-chips">
          {availableLangs.map((l) => (
            <button
              key={l}
              className={`chip${sourceLang === l ? " active" : ""}`}
              onClick={() => toggle(sourceLang, l, onSourceChange)}
            >
              {LANG_LABEL[l]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
