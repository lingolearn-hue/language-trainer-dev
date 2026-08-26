import { useEffect } from "react";
import type { Block, AgendaContent, LanguageSettings } from "../types";
import type { Trainer } from "../data/trainers";
import { wait } from "../engine/speech";
import { Slide } from "./Slide";

// Table of contents — deliberately never narrated verbatim (reading out
// "1 Introduction, 2 Vocabulary, 3 Grammar..." as a run-on sentence sounds
// robotic and teaches nothing). The trainer's free-form spoken framing of
// what's ahead is carried entirely by the block's spokenIntro, played by
// TeacherCaption before this component's autoPlay effect even fires — so
// this component just displays the list and holds for a reading pause.
export function AgendaBlock({
  block,
  lang,
  autoPlay,
  onComplete,
}: {
  block: Block;
  lang: LanguageSettings;
  trainer: Trainer;
  autoPlay: boolean;
  onComplete: () => void;
}) {
  const content = block.content as AgendaContent;

  // No `played`-once guard here (deliberately). Session.tsx's autoPlay
  // gate now compares a "which block finished its intro" id directly
  // against this block's own id, so autoPlay is correctly false from the
  // very first render of a new block — no transient stale-true window to
  // tolerate anymore (an earlier version relied on a reset effect firing
  // "a moment later" to correct a brief stale-true state; that window no
  // longer exists). Still relying only on the `cancelled` flag here
  // rather than a `played` ref, since that's simple and correct
  // regardless — no particular reason to reintroduce more state than
  // necessary now that the race itself is gone.
  useEffect(() => {
    if (!autoPlay) return;
    let cancelled = false;

    (async () => {
      // Reading pause, scaled to list length — no TTS here by design.
      await wait(Math.min(5000, 900 + content.items.length * 350));
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
      <ol className="agenda-list">
        {content.items.map((item, i) => (
          <li key={item.id} className="agenda-item">
            <span className="agenda-number">{item.number ?? i + 1}</span>
            <span className="agenda-target">{item.translations[lang.targetLang]}</span>
            <span className="agenda-source">{item.translations[lang.sourceLang]}</span>
          </li>
        ))}
      </ol>
    </Slide>
  );
}
