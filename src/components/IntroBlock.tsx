import type { Block, IntroContent, LanguageSettings } from "../types";

export function IntroBlock({
  block,
  lang,
  onComplete,
}: {
  block: Block;
  lang: LanguageSettings;
  onComplete: () => void;
}) {
  const content = block.content as IntroContent;
  return (
    <div className="block intro">
      <h2>{block.title?.[lang.targetLang] ?? block.title?.en}</h2>
      <p className="intro-text">{content.text[lang.targetLang]}</p>
      <p className="intro-text source">{content.text[lang.sourceLang]}</p>
      <button onClick={onComplete}>Continue →</button>
    </div>
  );
}
