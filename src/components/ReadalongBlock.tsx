import { useState } from "react";
import type { Block, ReadalongContent, LanguageSettings, ReadalongPhase } from "../types";
import { speak, wait } from "../engine/speech";
import { Slide } from "./Slide";

const PHASES: ReadalongPhase[] = ["echo", "shadow", "silent"];

const PHASE_LABEL: Record<ReadalongPhase, string> = {
  echo: "1. Echo — repeat after the trainer",
  shadow: "2. Shadow — read along together",
  silent: "3. Silent — read alone",
};

export function ReadalongBlock({
  block,
  lang,
  onComplete,
}: {
  block: Block;
  lang: LanguageSettings;
  onComplete: () => void;
}) {
  const content = block.content as ReadalongContent;
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [running, setRunning] = useState(false);
  const [activeLine, setActiveLine] = useState<number | null>(null);

  const phase = PHASES[phaseIdx];

  async function runPhase() {
    setRunning(true);
    for (let i = 0; i < content.lines.length; i++) {
      setActiveLine(i);
      const text = content.lines[i].translations[lang.targetLang];
      if (!text) continue;

      if (phase === "echo") {
        await speak(text, lang.targetLang);
        await wait(2500); // long pause for student to repeat
      } else if (phase === "shadow") {
        await speak(text, lang.targetLang); // no pause, read together
      } else {
        // silent: no trainer voice, just a timed pace for student to read alone
        await wait(2000);
      }
    }
    setActiveLine(null);
    setRunning(false);
  }

  function nextPhase() {
    if (phaseIdx < PHASES.length - 1) {
      setPhaseIdx(phaseIdx + 1);
    } else {
      onComplete();
    }
  }

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
        {content.lines.map((line, i) => (
          <div key={line.id} className={i === activeLine ? "line active" : "line"}>
            <div className="target">{line.translations[lang.targetLang]}</div>
            <div className="source">{line.translations[lang.sourceLang]}</div>
          </div>
        ))}
      </div>
    </Slide>
  );
}
