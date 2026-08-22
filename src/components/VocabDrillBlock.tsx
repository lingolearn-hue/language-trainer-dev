import { useEffect, useState, type CSSProperties } from "react";
import type { Block, VocabDrillContent, VocabItem, LanguageSettings, ReadalongPhase, Translations } from "../types";
import type { Trainer } from "../data/trainers";
import { speak, wait } from "../engine/speech";
import { Slide } from "./Slide";

const DEFAULT_CATEGORY_LABEL: Record<string, { de: string; en: string; zh: string; ja: string }> = {
  noun: { de: "Nomen", en: "Nouns", zh: "名词", ja: "名詞" },
  verb: { de: "Verben", en: "Verbs", zh: "动词", ja: "動詞" },
  adjective: { de: "Adjektive", en: "Adjectives", zh: "形容词", ja: "形容詞" },
  other: { de: "Weitere", en: "Other", zh: "其他", ja: "その他" },
};

const PHASES: ReadalongPhase[] = ["echo", "shadow", "silent"];

const PHASE_LABEL: Record<ReadalongPhase, string> = {
  echo: "1. Echo — repeat after the trainer",
  shadow: "2. Shadow — read along together",
  silent: "3. Silent — read alone",
};

// Max rows in a single column before it gets split into "Nouns 1" /
// "Nouns 2" etc — keeps every column readable and legible regardless of
// how many words a lesson's vocab audit ends up adding to one category.
const MAX_ROWS_PER_COLUMN = 16;

interface DisplayColumn {
  key: string;
  label: Translations;
  items: VocabItem[];
}

// Vocab now gets the same 3-phase treatment as readalong (dialogue/song):
// echo (word + long pause to repeat), shadow (word, no pause, read
// together), silent (no trainer voice, timed pace to read alone). Same
// mechanic as ReadalongBlock, just iterating vocab items instead of lines.
export function VocabDrillBlock({
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
  const content = block.content as VocabDrillContent;
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [running, setRunning] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  function labelFor(key: string) {
    return content.groupLabels?.[key] ?? DEFAULT_CATEGORY_LABEL[key] ?? { de: key, en: key, zh: key, ja: key };
  }

  // Group into columns by category — matches the source course's own
  // grouped vocab-slide layout, and lets 30-50+ items fit legibly on one
  // dense slide instead of one long list. Column headers come from the
  // block's own groupLabels if provided (e.g. sound groups for a
  // pronunciation slide), otherwise fall back to noun/verb/adjective.
  //
  // Any category over MAX_ROWS_PER_COLUMN gets split into "Label 1" /
  // "Label 2" sub-columns — this used to be a single unbounded column,
  // which both looked cramped and (see below) caused a real narration
  // bug once a category grew past what fit on one slide comfortably.
  const rawGroups = new Map<string, VocabItem[]>();
  const rawOrder: string[] = [];
  for (const item of content.items) {
    const key = item.category ?? "other";
    if (!rawGroups.has(key)) {
      rawGroups.set(key, []);
      rawOrder.push(key); // preserves first-seen order from the data
    }
    rawGroups.get(key)!.push(item);
  }

  const columns: DisplayColumn[] = [];
  for (const key of rawOrder) {
    const items = rawGroups.get(key)!;
    const label = labelFor(key);
    if (items.length <= MAX_ROWS_PER_COLUMN) {
      columns.push({ key, label, items });
      continue;
    }
    const chunkCount = Math.ceil(items.length / MAX_ROWS_PER_COLUMN);
    for (let i = 0; i < chunkCount; i++) {
      const chunkItems = items.slice(i * MAX_ROWS_PER_COLUMN, (i + 1) * MAX_ROWS_PER_COLUMN);
      columns.push({
        key: `${key}-${i}`,
        label: {
          de: `${label.de} ${i + 1}`,
          en: `${label.en} ${i + 1}`,
          zh: `${label.zh} ${i + 1}`,
          ja: `${label.ja} ${i + 1}`,
        },
        items: chunkItems,
      });
    }
  }

  // Narration order MUST match the visual column order above — flatten
  // the same `columns` structure the render uses, rather than iterating
  // content.items in raw data-file order. Real bug this fixes: once a
  // lesson's vocab audit appends new items to the END of the array
  // instead of keeping same-category items contiguous (e.g. more nouns
  // added after verbs/adjectives were already appended), narrating
  // content.items directly would jump to a later column, continue into
  // a third, then jump BACK to finish the first column's leftover
  // items — audibly "skipping to the next column, then returning
  // later." Deriving narration order from the same grouped/columned
  // structure as the visual layout makes that class of bug structurally
  // impossible, regardless of how items are ordered in the source data.
  const narrationOrder: VocabItem[] = columns.flatMap((c) => c.items);

  const phase = PHASES[phaseIdx];

  async function runPhaseFor(p: ReadalongPhase, shouldCancel: () => boolean) {
    setRunning(true);
    for (const item of narrationOrder) {
      if (shouldCancel()) break;
      setActiveId(item.id);
      const word = item.translations[lang.targetLang];
      if (!word) continue;

      if (p === "echo") {
        await speak(word, lang.targetLang, trainer.voiceProfile);
        if (shouldCancel()) break;
        await wait(2200); // pause for student to repeat — was 1200ms, too tight to actually repeat a word before the next one started
      } else if (p === "shadow") {
        await speak(word, lang.targetLang, trainer.voiceProfile);
        if (shouldCancel()) break;
        await wait(600); // small gap so list items don't blur together — was 0 (back-to-back)
      } else {
        // silent: no trainer voice, just a timed pace for student to read alone
        await wait(1500); // was 1000ms
      }
    }
    setActiveId(null);
    setRunning(false);
  }

  useEffect(() => {
    setPhaseIdx(0);
  }, [block.id]);

  // Flows automatically once the spoken intro caption is done: run echo,
  // then shadow, then silent, back to back, then auto-advance to the next
  // block — same pattern as ReadalongBlock's autoplay effect.
  //
  // No `played`-once ref guard here (deliberately) — see AgendaBlock.tsx
  // for why that pattern is buggy: a block can briefly mount with a stale
  // `autoPlay=true` left over from the previous block. A local `cancelled`
  // flag, scoped to this exact effect invocation via [autoPlay, block.id],
  // handles both the stale-run and real-run cases correctly.
  useEffect(() => {
    if (!autoPlay) return;
    let cancelled = false;
    (async () => {
      for (let i = 0; i < PHASES.length; i++) {
        if (cancelled) return;
        setPhaseIdx(i);
        await runPhaseFor(PHASES[i], () => cancelled);
        if (cancelled) return;
        await wait(400);
      }
      if (!cancelled) onComplete();
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, block.id]);

  function nextPhase() {
    if (phaseIdx < PHASES.length - 1) {
      setPhaseIdx(phaseIdx + 1);
    } else {
      onComplete();
    }
  }

  // Row font-size computed from the tallest column's actual row count
  // (now capped at MAX_ROWS_PER_COLUMN by the splitting above, so this
  // no longer needs to shrink as aggressively as it did for a 23-row
  // single column) — still dynamic so short lists (e.g. an 8-row
  // pronunciation group) scale up to use the available height.
  const maxRows = Math.max(1, ...columns.map((c) => c.items.length));
  const rowBudgetPx = 430 / (maxRows + 1);
  const vocabFontPx = Math.max(11, Math.min(22, rowBudgetPx / 1.55));

  return (
    <Slide
      fontScale={block.fontScale}
      title={block.title?.[lang.targetLang] ?? block.title?.en}
      footer={
        <>
          <span className="phase-label">{PHASE_LABEL[phase]}</span>
          <button disabled={running} onClick={() => runPhaseFor(phase, () => false)}>
            {running ? "Playing…" : `▶ Play phase: ${phase}`}
          </button>
          <span className="vocab-count">{content.items.length} words</span>
          <button disabled={running} onClick={nextPhase}>
            {phaseIdx < PHASES.length - 1 ? "Next phase →" : "Continue →"}
          </button>
        </>
      }
    >
      <div className="vocab-groups" style={{ "--vocab-font-size": `${vocabFontPx}px` } as CSSProperties}>
        {columns.map((col) => (
          <div className="vocab-group" key={col.key}>
            <div className="vocab-group-label">
              {col.label[lang.targetLang]}
              {lang.sourceLang !== lang.targetLang && (
                <span className="source"> · {col.label[lang.sourceLang]}</span>
              )}
            </div>
            <table>
              <tbody>
                {col.items.map((item) => (
                  <tr key={item.id} className={item.id === activeId ? "active" : ""}>
                    <td className="target">{item.translations[lang.targetLang]}</td>
                    <td className="source">{item.translations[lang.sourceLang]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </Slide>
  );
}
