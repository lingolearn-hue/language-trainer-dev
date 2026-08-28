import { getShowAlternateScript, toggleAlternateScript } from "../engine/scriptMode";
import { useShowAlternateScript } from "../hooks/useShowAlternateScript";
import type { LangCode } from "../types";

// Session-persistent toggle for the kanji/kana (Japanese) and Hanzi/
// Pinyin (Chinese) display modes — lives in the right-hand rail
// alongside RateControls, same always-visible treatment, since it's a
// session-wide preference rather than a per-block control. Only
// rendered when the current lesson's target or source language is
// actually ja or zh; meaningless for en/de, so hidden rather than shown
// disabled.
export function ScriptToggle({ targetLang, sourceLang }: { targetLang: LangCode; sourceLang: LangCode }) {
  const showAlt = useShowAlternateScript();
  const relevant = [targetLang, sourceLang].some((l) => l === "ja" || l === "zh");
  if (!relevant) return null;

  return (
    <div className="script-toggle">
      <button
        className={`script-toggle-btn${showAlt ? " active" : ""}`}
        onClick={toggleAlternateScript}
        title={showAlt ? "Showing kanji / pinyin — tap for kana / hanzi" : "Showing kana / hanzi — tap for kanji / pinyin"}
      >
        {showAlt ? "漢字 / Pīnyīn" : "かな / 汉字"}
      </button>
    </div>
  );
}

// Exported so other code (e.g. a settings screen) could read the current
// mode without subscribing, if ever needed.
export { getShowAlternateScript };
