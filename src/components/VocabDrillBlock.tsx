import { useState } from "react";
import type { Block, VocabDrillContent, VocabItem, LanguageSettings } from "../types";
import { speak, wait } from "../engine/speech";
import { Slide } from "./Slide";

const DEFAULT_CATEGORY_LABEL: Record<string, { de: string; en: string; zh: string }> = {
  noun: { de: "Nomen", en: "Nouns", zh: "名词" },
  verb: { de: "Verben", en: "Verbs", zh: "动词" },
  adjective: { de: "Adjektive", en: "Adjectives", zh: "形容词" },
  other: { de: "Weitere", en: "Other", zh: "其他" },
};

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
  const [activeId, setActiveId] = useState<string | null>(null);

  async function playEchoPass() {
    setPlaying(true);
    for (const item of content.items) {
      setActiveId(item.id);
      const word = item.translations[lang.targetLang];
      if (word) {
        await speak(word, lang.targetLang);
        await wait(1200); // pause for student to repeat
      }
    }
    setActiveId(null);
    setPlaying(false);
  }

  // Group into columns by category — matches the source course's own
  // grouped vocab-slide layout, and lets 30-50+ items fit legibly on one
  // dense slide instead of one long list. Column headers come from the
  // block's own groupLabels if provided (e.g. sound groups for a
  // pronunciation slide), otherwise fall back to noun/verb/adjective.
  const groups = new Map<string, VocabItem[]>();
  const order: string[] = [];
  for (const item of content.items) {
    const key = item.category ?? "other";
    if (!groups.has(key)) {
      groups.set(key, []);
      order.push(key); // preserves first-seen order from the data
    }
    groups.get(key)!.push(item);
  }

  function labelFor(key: string) {
    return content.groupLabels?.[key] ?? DEFAULT_CATEGORY_LABEL[key] ?? { de: key, en: key, zh: key };
  }

  return (
    <Slide
      title={block.title?.[lang.targetLang] ?? block.title?.en}
      footer={
        <>
          <button disabled={playing} onClick={playEchoPass}>
            {playing ? "Playing…" : "▶ Read along (echo)"}
          </button>
          <span className="vocab-count">{content.items.length} words</span>
          <button onClick={onComplete}>Continue →</button>
        </>
      }
    >
      <div className="vocab-groups">
        {order.map((key) => {
          const items = groups.get(key)!;
          const label = labelFor(key);
          return (
            <div className="vocab-group" key={key}>
              <div className="vocab-group-label">
                {label[lang.targetLang]}
                {lang.sourceLang !== lang.targetLang && (
                  <span className="source"> · {label[lang.sourceLang]}</span>
                )}
              </div>
              <table>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className={item.id === activeId ? "active" : ""}>
                      <td className="target">{item.translations[lang.targetLang]}</td>
                      <td className="source">{item.translations[lang.sourceLang]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </Slide>
  );
}
