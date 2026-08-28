import { useEffect, useState } from "react";
import type { Block, GrammarContent, LanguageSettings, DisplaySettings } from "../types";
import type { Trainer } from "../data/trainers";
import { speak, wait } from "../engine/speech";
import { Slide } from "./Slide";
import { useShowAlternateScript } from "../hooks/useShowAlternateScript";
import { resolveDisplayText } from "../engine/scriptDisplay";

// Per spec (03-lessons.md pacing rules): grammar = explain -> drill -> quiz,
// no 3-phase read-along — examples don't need to be learned like vocab
// words, so this is "shadow" only (single read together, no long
// echo-pause, no silent solo pass).
//
// Standard view is DENSE: everything shows at once, beamer-style, matching
// the source slide design. "Progressive reveal" is available as an explicit
// opt-in toggle for step-by-step teaching, not the default.
const PHASE_LABEL = "2. Shadow — read along together";
export function GrammarBlock({
  block,
  lang,
  display,
  trainer,
  autoPlay,
  onComplete,
}: {
  block: Block;
  lang: LanguageSettings;
  display: DisplaySettings;
  trainer: Trainer;
  autoPlay: boolean;
  onComplete: () => void;
}) {
  const content = block.content as GrammarContent;
  const showAlt = useShowAlternateScript();
  const [stepMode, setStepMode] = useState(false); // opt-in progressive reveal
  const [revealed, setRevealed] = useState(content.chunks.length); // dense default: all shown
  const [activeChunkId, setActiveChunkId] = useState<string | null>(null);

  function toggleStepMode() {
    if (!stepMode) {
      setRevealed(0); // entering step mode starts from nothing revealed
    } else {
      setRevealed(content.chunks.length); // leaving step mode shows everything again
    }
    setStepMode(!stepMode);
  }

  const atEnd = revealed >= content.chunks.length;
  const visibleChunks =
    !stepMode || display.density === "dense"
      ? content.chunks.slice(0, revealed)
      : revealed > 0
      ? [content.chunks[revealed - 1]]
      : [];

  function revealNext() {
    if (!atEnd) setRevealed(revealed + 1);
  }

  function readChunk(text: string | undefined) {
    if (text) speak(text, lang.targetLang, trainer.voiceProfile);
  }

  // Flows automatically once the spoken intro caption is done: read the
  // explanation, then every visible chunk in order (same dense set the
  // person already sees), then auto-advance to the next block.
  //
  // No `played`-once ref guard here (deliberately) — see AgendaBlock.tsx
  // for why that pattern is buggy: a block can briefly mount with a stale
  // `autoPlay=true` left over from the previous block. The `cancelled`
  // flag is scoped to *this* effect invocation (via the cleanup this
  // effect itself returns, tied to the same [autoPlay, block.id] deps
  // that can flip it prematurely), so a stale run is correctly aborted
  // and the genuine later run — with its own fresh `cancelled` — isn't
  // blocked by anything left over from the aborted one.
  useEffect(() => {
    if (!autoPlay) return;
    let cancelled = false;
    (async () => {
      // Explanation: target once, then source once — same per-sentence
      // pattern as the chunks below, not a separate full pass at the end.
      const explanationTarget = content.explanation[lang.targetLang];
      const explanationSource = content.explanation[lang.sourceLang];
      if (explanationTarget) await speak(explanationTarget, lang.targetLang, trainer.voiceProfile);
      if (cancelled) return;
      if (explanationSource && explanationSource !== explanationTarget) {
        await speak(explanationSource, lang.sourceLang, trainer.voiceProfile);
      }
      if (cancelled) return;

      // Each chunk: target once, then source once, before moving to the
      // next chunk — previously this was two separate full passes (every
      // chunk in target, then every chunk again in source), which meant
      // a long wait before ever hearing a translation. Reading each
      // sentence's own translation right after it keeps target and
      // source paired together, sentence by sentence.
      for (const chunk of content.chunks) {
        if (cancelled) return;
        setActiveChunkId(chunk.id);
        const targetText = chunk.translations[lang.targetLang];
        const sourceText = chunk.translations[lang.sourceLang];
        if (targetText) await speak(targetText, lang.targetLang, trainer.voiceProfile);
        if (cancelled) return;
        if (sourceText && sourceText !== targetText) {
          await speak(sourceText, lang.sourceLang, trainer.voiceProfile);
        }
        if (cancelled) return;
        await wait(500);
      }
      setActiveChunkId(null);
      if (cancelled) return;

      // Narration done — hold on the slide for about a minute so the
      // student actually has time to look it over, instead of auto-
      // advancing the moment narration finishes.
      await wait(60000);
      if (!cancelled) onComplete();
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, block.id]);

  return (
    <Slide
      fontScale={block.fontScale}
      title={resolveDisplayText(block.title ?? {}, lang.targetLang, showAlt) ?? block.title?.en}
      footer={
        <>
          <span className="phase-label">{PHASE_LABEL}</span>
          <button onClick={toggleStepMode}>
            {stepMode ? "Show all" : "Step through"}
          </button>
          {stepMode && !atEnd && <button onClick={revealNext}>Reveal next →</button>}
          <button onClick={onComplete}>Continue →</button>
        </>
      }
    >
      <div className="explanation-row">
        <p className="explanation">{resolveDisplayText(content.explanation, lang.targetLang, showAlt)}</p>
        <button
          className="listen"
          onClick={() => readChunk(content.explanation[lang.targetLang])}
          title="Hear the grammar explanation"
        >
          🔊
        </button>
      </div>
      <p className="explanation source">{resolveDisplayText(content.explanation, lang.sourceLang, showAlt)}</p>

      <div className={`chunks density-${display.density}`}>
        {visibleChunks.map((chunk) => (
          <div key={chunk.id} className={`chunk${chunk.id === activeChunkId ? " active" : ""}`}>
            <span className="target">{resolveDisplayText(chunk.translations, lang.targetLang, showAlt)}</span>
            <span className="source">{resolveDisplayText(chunk.translations, lang.sourceLang, showAlt)}</span>
            <button
              className="listen"
              onClick={() => readChunk(chunk.translations[lang.targetLang])}
            >
              🔊
            </button>
          </div>
        ))}
      </div>
    </Slide>
  );
}
