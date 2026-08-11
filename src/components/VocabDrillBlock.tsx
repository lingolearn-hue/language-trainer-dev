import { useState } from "react";
import type { Block, VocabDrillContent, LanguageSettings } from "../types";
import { speak, wait } from "../engine/speech";
import { Slide } from "./Slide";

export function VocabDrillBlock({
  block,
  lang,
  onComplete,
}: {
  block: Block;
  lang: LanguageSettings;
  onComplete: () => void;
}) {
  const content = block.content as VocabDrillContent;
  const [playing, setPlaying] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  async function playEchoPass() {
    setPlaying(true);
    for (let i = 0; i < content.items.length; i++) {
      setActiveIndex(i);
      const word = content.items[i].translations[lang.targetLang];
      if (word) {
        await speak(word, lang.targetLang);
        await wait(1200); // pause for student to repeat
      }
    }
    setActiveIndex(null);
    setPlaying(false);
  }

  // Dense beamer-style layout: split into 2 columns like the source slides
  // (all items visible at once — no reveal steps for vocab).
  const mid = Math.ceil(content.items.length / 2);
  const colA = content.items.slice(0, mid);
  const colB = content.items.slice(mid);

  return (
    <Slide
      title={block.title?.[lang.targetLang] ?? block.title?.en}
      footer={
        <>
          <button disabled={playing} onClick={playEchoPass}>
            {playing ? "Playing…" : "▶ Read along (echo)"}
          </button>
          <button onClick={onComplete}>Continue →</button>
        </>
      }
    >
      <div className="vocab-columns">
        {[colA, colB].map((col, ci) => (
          <table key={ci}>
            <tbody>
              {col.map((item) => {
                const globalIndex = content.items.indexOf(item);
                return (
                  <tr key={item.id} className={globalIndex === activeIndex ? "active" : ""}>
                    <td className="target">{item.translations[lang.targetLang]}</td>
                    <td className="source">{item.translations[lang.sourceLang]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ))}
      </div>
    </Slide>
  );
}
