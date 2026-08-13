import { useEffect, useRef, useState } from "react";
import type { Block, ReadalongContent, LanguageSettings, ReadalongPhase } from "../types";
import type { Trainer } from "../data/trainers";
import { speak, wait } from "../engine/speech";
import { isRecognitionSupported, listenAndCompare } from "../engine/recognition";
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
  const cancelledRef = useRef(false);
  const played = useRef(false);

  const phase = PHASES[phaseIdx];

  // Takes an explicit phase rather than reading `phase` from closure, so
  // the auto-play sequence below can run all 3 phases back to back without
  // stale-closure bugs from setPhaseIdx not having re-rendered yet.
  async function runPhaseFor(p: ReadalongPhase) {
    setRunning(true);
    for (let i = 0; i < content.lines.length; i++) {
      if (cancelledRef.current) break;
      setActiveLine(i);
      const text = content.lines[i].translations[lang.targetLang];
      if (!text) continue;

      if (p === "echo") {
        await speak(text, lang.targetLang, trainer.voiceProfile);
        if (cancelledRef.current) break;
        await wait(2500); // long pause for student to repeat
      } else if (p === "shadow") {
        await speak(text, lang.targetLang, trainer.voiceProfile); // no pause, read together
      } else {
        // silent: no trainer voice, just a timed pace for student to read alone
        await wait(2000);
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

  // Flows automatically once the spoken intro caption is done: run echo,
  // then shadow, then silent, back to back, then auto-advance to the next
  // block — no manual "Play phase"/"Next phase" clicks needed for the
  // default flow (they remain available for manual override/replay).
  useEffect(() => {
    played.current = false;
    cancelledRef.current = false;
    setPhaseIdx(0);
    return () => {
      cancelledRef.current = true;
    };
  }, [block.id]);

  useEffect(() => {
    if (!autoPlay || played.current) return;
    played.current = true;
    (async () => {
      for (let i = 0; i < PHASES.length; i++) {
        if (cancelledRef.current) return;
        setPhaseIdx(i);
        await runPhaseFor(PHASES[i]);
        if (cancelledRef.current) return;
        await wait(400);
      }
      if (!cancelledRef.current) onComplete();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, block.id]);

  return (
    <Slide
      title={block.title?.[lang.targetLang] ?? block.title?.en}
      footer={
        <>
          <span className="phase-label">{PHASE_LABEL[phase]}</span>
          <button disabled={running} onClick={runPhase}>
            {running ? "Playing…" : `▶ Play phase: ${phase}`}
          </button>
          <button disabled={running} onClick={nextPhase}>
            {phaseIdx < PHASES.length - 1 ? "Next phase →" : "Continue →"}
          </button>
        </>
      }
    >
      <div className="lines">
        {content.lines.map((line, i) => {
          const text = line.translations[lang.targetLang];
          const check = checkState[line.id] ?? "idle";
          return (
            <div key={line.id} className={i === activeLine ? "line active" : "line"}>
              {line.speaker && <span className="speaker">{line.speaker}:</span>}
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
