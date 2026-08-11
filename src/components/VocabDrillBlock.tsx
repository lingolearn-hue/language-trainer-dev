import { useState } from "react";
import type { Block, VocabDrillContent, LanguageSettings } from "../types";
import { speak, wait } from "../engine/speech";

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

  return (
    <div className="block vocab-drill">
      <h2>{block.title?.[lang.targetLang] ?? block.title?.en}</h2>
      <button disabled={playing} onClick={playEchoPass}>
        {playing ? "Playing…" : "▶ Read along (echo)"}
      </button>
      <table>
        <thead>
          <tr>
            <th>{lang.targetLang}</th>
            <th>{lang.sourceLang}</th>
          </tr>
        </thead>
        <tbody>
          {content.items.map((item, i) => (
            <tr key={item.id} className={i === activeIndex ? "active" : ""}>
              <td>{item.translations[lang.targetLang]}</td>
              <td>{item.translations[lang.sourceLang]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onComplete}>Continue →</button>
    </div>
  );
}
