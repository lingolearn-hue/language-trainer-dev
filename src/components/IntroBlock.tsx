import type { Block, IntroContent, LanguageSettings } from "../types";
import { Slide } from "./Slide";

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
    <Slide
      title={block.title?.[lang.targetLang] ?? block.title?.en}
      footer={<button onClick={onComplete}>Continue →</button>}
    >
      <p className="intro-text">{content.text[lang.targetLang]}</p>
      <p className="intro-text source">{content.text[lang.sourceLang]}</p>
    </Slide>
  );
}
