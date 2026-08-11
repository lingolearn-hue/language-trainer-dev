import { useState } from "react";
import type { Block, GrammarContent, LanguageSettings, DisplaySettings } from "../types";
import { speak } from "../engine/speech";

// Per spec (03-lessons.md pacing rules): grammar = explain -> drill -> quiz,
// no 3-phase read-along. Single on-demand read per chunk instead.
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
  const [revealed, setRevealed] = useState(0); // how many chunks unhidden so far

  const atEnd = revealed >= content.chunks.length;
  const visibleChunks =
    display.density === "dense"
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
    <div className="block grammar">
      <h2>{block.title?.[lang.targetLang] ?? block.title?.en}</h2>
      <p className="explanation">{content.explanation[lang.targetLang]}</p>
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

      <div className="controls">
        {!atEnd && <button onClick={revealNext}>Reveal next →</button>}
        {atEnd && <button onClick={onComplete}>Continue →</button>}
      </div>
    </div>
  );
}
