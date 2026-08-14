import { useEffect, useRef, useState } from "react";
import type { Block, SelfIntroContent, LanguageSettings, ReadalongPhase } from "../types";
import type { Trainer } from "../data/trainers";
import { speak, wait } from "../engine/speech";
import { Slide } from "./Slide";

const PHASES: ReadalongPhase[] = ["echo", "shadow", "silent"];

const PHASE_LABEL: Record<ReadalongPhase, string> = {
  echo: "1. Echo — repeat after the trainer",
  shadow: "2. Shadow — read along together",
  silent: "3. Silent — read alone",
};

// Two independent halves, run one after another, both auto-playing:
//
//  Left (template): a fixed self-intro readalong, target-language only,
//  same 3-phase mechanic as ReadalongBlock (echo/shadow/silent). No
//  translation shown — student fills in their own name/hometown live.
//
//  Right (options): each "reason" line is narrated once in the target
//  language, immediately followed by a SPOKEN-ONLY translation in the
//  source language — this slide never displays a translation on screen.
//  After all options, `choosePrompt` is spoken in the source language,
//  inviting the student to pick their own reason. No selection UI, no
//  recorded choice — purely a demonstration pass.
export function SelfIntroBlock({
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
  const content = block.content as SelfIntroContent;

  const [phaseIdx, setPhaseIdx] = useState(0);
  const [templateRunning, setTemplateRunning] = useState(false);
  const [activeTemplateLine, setActiveTemplateLine] = useState<number | null>(null);
  const [activeOption, setActiveOption] = useState<number | null>(null);
  const [optionsStarted, setOptionsStarted] = useState(false);
  const cancelledRef = useRef(false);

  const phase = PHASES[phaseIdx];

  async function runTemplatePhase(p: ReadalongPhase, shouldCancel: () => boolean) {
    setTemplateRunning(true);
    for (let i = 0; i < content.template.length; i++) {
      if (shouldCancel()) break;
      setActiveTemplateLine(i);
      const text = content.template[i].translations[lang.targetLang];
      if (!text) continue;

      if (p === "echo") {
        await speak(text, lang.targetLang, trainer.voiceProfile);
        if (shouldCancel()) break;
        await wait(2500); // long pause for student to repeat
      } else if (p === "shadow") {
        await speak(text, lang.targetLang, trainer.voiceProfile);
      } else {
        // silent: no trainer voice, just a timed pace for student to read alone
        await wait(1800);
      }
    }
    setTemplateRunning(false);
    setActiveTemplateLine(null);
  }

  async function runOptions(shouldCancel: () => boolean) {
    setOptionsStarted(true);
    const introText = content.optionsIntro[lang.targetLang];
    if (introText) await speak(introText, lang.targetLang, trainer.voiceProfile);

    for (let i = 0; i < content.options.length; i++) {
      if (shouldCancel()) break;
      setActiveOption(i);
      const opt = content.options[i];
      const targetText = opt.translations[lang.targetLang];
      const sourceText = opt.translations[lang.sourceLang];
      if (targetText) await speak(targetText, lang.targetLang, trainer.voiceProfile);
      if (shouldCancel()) break;
      // Spoken-only translation — never rendered on screen.
      if (sourceText && sourceText !== targetText) {
        await speak(sourceText, lang.sourceLang, trainer.voiceProfile);
      }
      if (shouldCancel()) break;
      await wait(400);
    }
    setActiveOption(null);
    if (shouldCancel()) return;

    const promptText = content.choosePrompt[lang.sourceLang];
    if (promptText) await speak(promptText, lang.sourceLang, trainer.voiceProfile);
  }

  // Auto-play: template through all 3 phases back to back, then the
  // options pass, then advance to the next block.
  useEffect(() => {
    if (!autoPlay) return;
    let cancelled = false;
    cancelledRef.current = false;
    const shouldCancel = () => cancelled;

    (async () => {
      for (let i = 0; i < PHASES.length; i++) {
        if (cancelled) return;
        setPhaseIdx(i);
        await runTemplatePhase(PHASES[i], shouldCancel);
      }
      if (cancelled) return;
      await runOptions(shouldCancel);
      if (!cancelled) onComplete();
    })();

    return () => {
      cancelled = true;
      cancelledRef.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, block.id]);

  return (
    <Slide
      title={block.title?.[lang.targetLang] ?? block.title?.en}
      footer={
        <>
          <span className="phase-label">
            {optionsStarted ? "Choose your own reason" : PHASE_LABEL[phase]}
          </span>
          <button onClick={onComplete}>Continue →</button>
        </>
      }
    >
      <div className="self-intro-columns">
        <div className="self-intro-template">
          {content.template.map((line, i) => (
            <p
              key={line.id}
              className={`self-intro-line${activeTemplateLine === i && templateRunning ? " active" : ""}`}
            >
              {line.translations[lang.targetLang]}
            </p>
          ))}
        </div>
        <div className="self-intro-options">
          <p className="self-intro-lead">{content.optionsIntro[lang.targetLang]}</p>
          {content.options.map((opt, i) => (
            <p
              key={opt.id}
              className={`self-intro-line${activeOption === i ? " active" : ""}`}
            >
              {opt.translations[lang.targetLang]}
            </p>
          ))}
        </div>
      </div>
    </Slide>
  );
}
