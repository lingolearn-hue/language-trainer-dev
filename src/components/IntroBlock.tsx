import { useEffect, useRef } from "react";
import type { Block, IntroContent, LanguageSettings } from "../types";
import type { Trainer } from "../data/trainers";
import { speak, wait } from "../engine/speech";
import { Slide } from "./Slide";

export function IntroBlock({
  block,
  lang,
  trainer,
  autoPlay,
  onComplete,
}: {
  block: Block;
  lang: LanguageSettings;
  trainer: Trainer;
  autoPlay: boolean;
  onComplete: () => void;
}) {
  const content = block.content as IntroContent;
  const played = useRef(false);

  // Narrates the slide's own visible text (distinct from the spokenIntro
  // caption, which already played by the time autoPlay flips true), then
  // auto-advances — this is the "flow automatically" default. `played`
  // guards against double-firing (e.g. React effect re-runs).
  useEffect(() => {
    played.current = false;
  }, [block.id]);

  useEffect(() => {
    if (!autoPlay || played.current) return;
    played.current = true;
    let cancelled = false;

    (async () => {
      const text = content.text[lang.targetLang];
      if (text) await speak(text, lang.targetLang, trainer.voiceProfile);
      if (cancelled) return;
      await wait(600);
      if (!cancelled) onComplete();
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, block.id]);

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
