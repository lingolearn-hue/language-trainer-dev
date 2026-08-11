import { useState } from "react";
import type { Block, GrammarContent, LanguageSettings, DisplaySettings } from "../types";
import { speak } from "../engine/speech";
import { Slide } from "./Slide";

// Per spec (03-lessons.md pacing rules): grammar = explain -> drill -> quiz,
// no 3-phase read-along. Single on-demand read per chunk instead.
//
// Standard view is DENSE: everything shows at once, beamer-style, matching
// the source slide design. "Progressive reveal" is available as an explicit
// opt-in toggle for step-by-step teaching, not the default.
export function GrammarBlock({
  block,
  lang,
  display,
  onComplete,
}: {
  block: Block;
  lang: LanguageSettings;
  display: DisplaySettings;
  onComplete: () => void;
}) {
  const content = block.content as GrammarContent;
  const [stepMode, setStepMode] = useState(false); // opt-in progressive reveal
  const [revealed, setRevealed] = useState(content.chunks.length); // dense default: all shown

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
    if (text) speak(text, lang.targetLang);
  }

  return (
    <Slide
      title={block.title?.[lang.targetLang] ?? block.title?.en}
      footer={
        <>
          <button onClick={toggleStepMode}>
            {stepMode ? "Show all" : "Step through"}
          </button>
          {stepMode && !atEnd && <button onClick={revealNext}>Reveal next →</button>}
          <button onClick={onComplete}>Continue →</button>
        </>
      }
    >
      <div className="explanation-row">
        <p className="explanation">{content.explanation[lang.targetLang]}</p>
        <button
          className="listen"
          onClick={() => readChunk(content.explanation[lang.targetLang])}
          title="Hear the grammar explanation"
        >
          🔊
        </button>
      </div>
      <p className="explanation source">{content.explanation[lang.sourceLang]}</p>

      <div className={`chunks density-${display.density}`}>
        {visibleChunks.map((chunk) => (
          <div key={chunk.id} className="chunk">
            <span className="target">{chunk.translations[lang.targetLang]}</span>
            <span className="source">{chunk.translations[lang.sourceLang]}</span>
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
