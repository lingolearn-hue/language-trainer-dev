import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Block, ReadalongContent, LanguageSettings, ReadalongPhase } from "../types";
import type { Trainer } from "../data/trainers";
import { speak, wait } from "../engine/speech";
import { isRecognitionSupported, listenAndCompare } from "../engine/recognition";
import { playMelodyLine, stopMelody } from "../engine/melodyPlayer";
import { isMelodyOn, toggleMelody, subscribeMelody } from "../engine/melodyToggle";
import { SONG_MELODIES } from "../data/songMelodies";
import { Slide } from "./Slide";

const PHASES: ReadalongPhase[] = ["echo", "shadow", "silent"];

const PHASE_LABEL: Record<ReadalongPhase, string> = {
  echo: "1. Echo — repeat after the trainer",
  shadow: "2. Shadow — read along together",
  silent: "3. Silent — read alone",
};

type CheckState = "idle" | "listening" | "match" | "no-match" | "unsupported";

export function ReadalongBlock({
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
  const content = block.content as ReadalongContent;
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [running, setRunning] = useState(false);
  const [activeLine, setActiveLine] = useState<number | null>(null);
  // Self-check state, per line id — rudimentary, no grading (see
  // engine/recognition.ts). Only meaningful in the "silent" phase, where
  // the student is reading alone and might want to check themselves.
  const [checkState, setCheckState] = useState<Record<string, CheckState>>({});
  const cancelledRef = useRef(false); // interrupts a manual phase play on a real block change
  const [melodyOn, setMelodyOnState] = useState(isMelodyOn());
  const melody = block.isSong ? SONG_MELODIES[block.id] : undefined;

  useEffect(() => subscribeMelody(setMelodyOnState), []);

  const phase = PHASES[phaseIdx];

  // Pause length between dialogue lines now scales with how long the
  // sentence actually is — a fixed pause regardless of sentence length
  // meant short lines dragged and long lines got cut short before a
  // student could realistically finish repeating/reading them. Applies
  // to echo (repeat-aloud), silent (read-alone, which needs the most
  // time since there's no audio pacing it), and now shadow too (was a
  // flat 0ms — lines ran straight into each other with no breathing
  // room at all).
  function pauseFor(text: string, minMs: number, perCharMs: number, maxMs: number): number {
    return Math.max(minMs, Math.min(maxMs, text.length * perCharMs));
  }

  // Takes an explicit phase rather than reading `phase` from closure, so
  // the auto-play sequence below can run all 3 phases back to back without
  // stale-closure bugs from setPhaseIdx not having re-rendered yet.
  // `shouldCancel` defaults to the shared ref (manual play, interrupted
  // only by a real block change) but the auto-play effect below passes in
  // its own locally-scoped check instead — see that effect for why.
  async function runPhaseFor(p: ReadalongPhase, shouldCancel: () => boolean = () => cancelledRef.current) {
    setRunning(true);
    for (let i = 0; i < content.lines.length; i++) {
      if (shouldCancel()) break;
      setActiveLine(i);
      const text = content.lines[i].translations[lang.targetLang];
      if (!text) continue;

      if (p === "echo") {
        if (melody && melodyOn) {
          await playMelodyLine(melody, content.lines[i].id);
        } else {
          await speak(text, lang.targetLang, trainer.voiceProfile);
        }
        if (shouldCancel()) break;
        await wait(pauseFor(text, 2800, 90, 7000)); // long pause for student to repeat, scaled by sentence length
      } else if (p === "shadow") {
        if (melody && melodyOn) {
          await playMelodyLine(melody, content.lines[i].id);
        } else {
          await speak(text, lang.targetLang, trainer.voiceProfile);
        }
        if (shouldCancel()) break;
        await wait(pauseFor(text, 900, 45, 3500)); // was 0ms (no pause at all) — real gap now, still shorter than echo since it's read together, not independently
      } else {
        // silent: no trainer voice, timed pace for student to read alone —
        // needs the most generous scaling since there's no audio cue at
        // all to pace against.
        await wait(pauseFor(text, 2800, 120, 8000));
      }
    }
    setActiveLine(null);
    setRunning(false);
  }

  async function runPhase() {
    await runPhaseFor(phase);
  }

  async function selfCheck(lineId: string, text: string | undefined) {
    if (!text) return;
    if (!isRecognitionSupported()) {
      setCheckState((s) => ({ ...s, [lineId]: "unsupported" }));
      return;
    }
    setCheckState((s) => ({ ...s, [lineId]: "listening" }));
    const result = await listenAndCompare(text, lang.targetLang);
    setCheckState((s) => ({
      ...s,
      [lineId]: result.status === "match" ? "match" : result.status === "no-match" ? "no-match" : "idle",
    }));
  }

  function nextPhase() {
    if (phaseIdx < PHASES.length - 1) {
      setPhaseIdx(phaseIdx + 1);
    } else {
      onComplete();
    }
  }

  useEffect(() => {
    cancelledRef.current = false;
    setPhaseIdx(0);
    return () => {
      cancelledRef.current = true;
      stopMelody(); // cuts off any notes still scheduled ahead if the block changes mid-line
    };
  }, [block.id]);

  // Flows automatically once the spoken intro caption is done: run echo,
  // then shadow, then silent, back to back, then auto-advance to the next
  // block — no manual "Play phase"/"Next phase" clicks needed for the
  // default flow (they remain available for manual override/replay).
  //
  // No `played`-once ref guard here (deliberately) — see AgendaBlock.tsx
  // for why that pattern is buggy: a block can briefly mount with a stale
  // `autoPlay=true` left over from the previous block. This effect also
  // can't just reuse the shared `cancelledRef` for its own cancellation
  // (that ref only flips on a real block change, not on autoPlay toggling
  // within the same block) — reusing it would let a stale premature run
  // speak through all 3 phases, overlapping the trainer's caption speech.
  // A local `cancelled` flag, scoped to this exact effect invocation via
  // [autoPlay, block.id], handles both cases correctly.
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

  const hasSpeakers = content.lines.some((l) => l.speaker);

  // Same scaling approach as VocabDrillBlock: a fixed font-size regardless
  // of content caused overflow whenever lines were long enough to wrap
  // (a wrapped line takes 2+ visual rows, which a row-count-only estimate
  // would miss) — so this estimates each line's likely VISUAL row count
  // from its text length, not just counts 14 logical lines as 14 rows.
  // ~28 characters is a rough per-row budget for the target/source column
  // width; long lines that would wrap are counted as 2+ rows accordingly.
  const CHARS_PER_ROW_ESTIMATE = 28;
  const totalVisualRows = content.lines.reduce((sum, line) => {
    const targetLen = (line.translations[lang.targetLang] ?? "").length;
    const sourceLen = (line.translations[lang.sourceLang] ?? "").length;
    const longer = Math.max(targetLen, sourceLen);
    return sum + Math.max(1, Math.ceil(longer / CHARS_PER_ROW_ESTIMATE));
  }, 0);
  const rowBudgetPx = 430 / (totalVisualRows + 1);
  const dialogueFontPx = Math.max(11, Math.min(24, rowBudgetPx / 1.35));

  return (
    <Slide
      title={block.title?.[lang.targetLang] ?? block.title?.en}
      footer={
        <>
          <span className="phase-label">{PHASE_LABEL[phase]}</span>
          {melody && (
            <button
              className={`melody-toggle-btn${melodyOn ? " active" : ""}`}
              onClick={toggleMelody}
              title={melodyOn ? "Switch to spoken lyrics" : "Switch to melody"}
            >
              {melodyOn ? "🎵 Melody" : "🗣️ Lyrics"}
            </button>
          )}
          <button disabled={running} onClick={runPhase}>
            {running ? "Playing…" : `▶ Play phase: ${phase}`}
          </button>
          <button disabled={running} onClick={nextPhase}>
            {phaseIdx < PHASES.length - 1 ? "Next phase →" : "Continue →"}
          </button>
        </>
      }
    >
      <div
        className={hasSpeakers ? "lines" : "lines no-speakers"}
        style={{ "--dialogue-font-size": `${dialogueFontPx}px` } as CSSProperties}
      >
        {content.lines.map((line, i) => {
          const text = line.translations[lang.targetLang];
          const speakerText =
            typeof line.speaker === "string" ? line.speaker : line.speaker?.[lang.targetLang];
          const check = checkState[line.id] ?? "idle";
          return (
            <div key={line.id} className={i === activeLine ? "line active" : "line"}>
              {hasSpeakers && <div className="speaker">{speakerText ?? ""}</div>}
              <div className="target">
                {text}
                {phase === "silent" && (
                  <button
                    className={`self-check-btn ${check}`}
                    onClick={() => selfCheck(line.id, text)}
                    disabled={check === "listening"}
                    title="Self-check: try saying this line (rudimentary, not graded)"
                  >
                    {check === "listening"
                      ? "🎤…"
                      : check === "match"
                      ? "✅"
                      : check === "no-match"
                      ? "🔁"
                      : check === "unsupported"
                      ? "🎤✕"
                      : "🎤"}
                  </button>
                )}
              </div>
              <div className="source">{line.translations[lang.sourceLang]}</div>
            </div>
          );
        })}
      </div>
    </Slide>
  );
}
