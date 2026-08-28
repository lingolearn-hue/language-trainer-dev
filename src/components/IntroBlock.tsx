import { useEffect } from "react";
import type { Block, IntroContent, LanguageSettings } from "../types";
import type { Trainer } from "../data/trainers";
import { speak, wait } from "../engine/speech";
import { Slide } from "./Slide";
import { useShowAlternateScript } from "../hooks/useShowAlternateScript";
import { resolveDisplayText } from "../engine/scriptDisplay";

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
  const showAlt = useShowAlternateScript();

  // No `played`-once ref guard here (deliberately) — see AgendaBlock.tsx
  // for the full explanation of a real bug that pattern caused: a block
  // can briefly mount with a stale `autoPlay=true` left over from the
  // previous block, and marking "already played" during that aborted
  // stale run would permanently block the real run once autoPlay
  // genuinely turns true. The `cancelled` flag alone, fresh on every real
  // effect re-run, handles this correctly.
  useEffect(() => {
    if (!autoPlay) return;
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
      title={resolveDisplayText(block.title ?? {}, lang.targetLang, showAlt) ?? block.title?.en}
      footer={<button onClick={onComplete}>Continue →</button>}
    >
      <p className="intro-text">{resolveDisplayText(content.text, lang.targetLang, showAlt)}</p>
      <p className="intro-text source">{resolveDisplayText(content.text, lang.sourceLang, showAlt)}</p>
    </Slide>
  );
}
