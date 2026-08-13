import { useEffect, useRef, useState } from "react";
import type { Block, GrammarContent, LanguageSettings, DisplaySettings } from "../types";
import type { Trainer } from "../data/trainers";
import { speak, wait } from "../engine/speech";
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
  const [stepMode, setStepMode] = useState(false); // opt-in progressive reveal
  const [revealed, setRevealed] = useState(content.chunks.length); // dense default: all shown
  const [activeChunkId, setActiveChunkId] = useState<string | null>(null);
  const cancelledRef = useRef(false);
  const played = useRef(false);

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
  useEffect(() => {
    played.current = false;
    cancelledRef.current = false;
    return () => {
      cancelledRef.current = true;
    };
  }, [block.id]);

  useEffect(() => {
    if (!autoPlay || played.current) return;
    played.current = true;
    (async () => {
      const explanation = content.explanation[lang.targetLang];
      if (explanation) await speak(explanation, lang.targetLang, trainer.voiceProfile);
      if (cancelledRef.current) return;

      for (const chunk of content.chunks) {
        if (cancelledRef.current) return;
        setActiveChunkId(chunk.id);
        const text = chunk.translations[lang.targetLang];
        if (text) await speak(text, lang.targetLang, trainer.voiceProfile);
        if (cancelledRef.current) return;
        await wait(500);
      }
      setActiveChunkId(null);
      if (!cancelledRef.current) onComplete();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, block.id]);

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
          <div key={chunk.id} className={`chunk${chunk.id === activeChunkId ? " active" : ""}`}>
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
