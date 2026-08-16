import { useEffect, useState, type CSSProperties } from "react";
import type { Block, VocabDrillContent, VocabItem, LanguageSettings, ReadalongPhase } from "../types";
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

  const phase = PHASES[phaseIdx];

  async function runPhaseFor(p: ReadalongPhase, shouldCancel: () => boolean) {
    setRunning(true);
    for (const item of content.items) {
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
    return content.groupLabels?.[key] ?? DEFAULT_CATEGORY_LABEL[key] ?? { de: key, en: key, zh: key, ja: key };
  }

  // Available row height was previously fixed (0.82em, ~11.5px) regardless
  // of how many rows actually needed to fit — leaving large unused
  // whitespace below shorter columns. Instead, size rows from the actual
  // largest column's item count, so the table always uses close to the
  // full available height. ~430px is the usable content height inside a
  // slide (600px slide - title - footer - padding); dividing by the
  // tallest column's row count (plus its label) gives a fair per-row
  // budget, clamped to a sane legible range.
  const maxRows = Math.max(1, ...order.map((key) => groups.get(key)!.length));
  const rowBudgetPx = 430 / (maxRows + 1);
  const vocabFontPx = Math.max(11, Math.min(22, rowBudgetPx / 1.55));

  return (
    <Slide
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
