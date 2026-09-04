import { useEffect, useRef, useState } from "react";
import type { LangCode } from "../types";
import { textToVisemeFrames, totalVisemeDurationMs, type VisemeFrame } from "../engine/visemeMap";
import { VisemeAvatar } from "./VisemeAvatar";
import type { VisemeKey } from "../assets/visemeImages";

// Standalone test view — deliberately NOT wired into the shared
// speech.ts queue/voice-resolution pipeline (that's built for the
// lesson flow's specific needs: segment splitting, rate scaling by
// role, timeout racing). This page just wants "speak this text and
// animate along with it," so it talks to SpeechSynthesisUtterance
// directly. See engine/visemeMap.ts for why this is "computationally
// cheap": no audio analysis, just a character-driven timeline and a
// single requestAnimationFrame loop below.

const BCP47: Record<LangCode, string> = {
  de: "de-DE", en: "en-US", zh: "zh-CN", ja: "ja-JP", fr: "fr-FR", es: "es-ES",
};

const LANG_OPTIONS: { code: LangCode; label: string }[] = [
  { code: "en", label: "English" },
  { code: "de", label: "German" },
  { code: "fr", label: "French" },
  { code: "es", label: "Spanish" },
  { code: "ja", label: "Japanese" },
  { code: "zh", label: "Chinese" },
];

const SAMPLE_TEXT: Record<LangCode, string> = {
  en: "Hello! Today we're going to learn some new vocabulary together.",
  de: "Hallo! Heute lernen wir zusammen neue Wörter.",
  fr: "Bonjour ! Aujourd'hui, nous allons apprendre du nouveau vocabulaire.",
  es: "¡Hola! Hoy vamos a aprender vocabulario nuevo juntos.",
  ja: "こんにちは！きょうは いっしょに あたらしい ことばを べんきょうしましょう。",
  zh: "你好！今天我们要一起学习新的词汇。",
};

export function LipSyncTestPage({ onBack }: { onBack: () => void }) {
  const [lang, setLang] = useState<LangCode>("en");
  const [text, setText] = useState(SAMPLE_TEXT.en);
  const [rate, setRate] = useState(1);
  const [speaking, setSpeaking] = useState(false);
  const [currentViseme, setCurrentViseme] = useState<VisemeKey>("NEUTRAL");
  const [variantToggle, setVariantToggle] = useState(false);

  const framesRef = useRef<VisemeFrame[]>([]);
  const startTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);
  // tick() calls itself recursively via requestAnimationFrame, so the
  // same closure instance persists across every frame of one speak()
  // call — a plain useState value read inside it would stay frozen at
  // whatever it was when that closure was created (frameIndex would
  // never appear to change from tick's own point of view, since
  // React re-renders don't recreate this particular closure). A ref
  // sidesteps that: tick always reads/writes the current value
  // directly, no stale-closure risk. Real bug caught in review, not
  // hypothetical — verify this comment still holds if tick() is ever
  // refactored to stop self-recursing.
  const frameIndexRef = useRef(-1);

  function stopPlayback(resetTo: VisemeKey = "NEUTRAL") {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    setSpeaking(false);
    setCurrentViseme(resetTo);
    frameIndexRef.current = -1;
  }

  function speak() {
    window.speechSynthesis.cancel(); // clear any stuck queue from a previous click
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);

    const frames = textToVisemeFrames(text, lang, rate);
    framesRef.current = frames;

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = BCP47[lang];
    utter.rate = rate;
    utterRef.current = utter;

    utter.onstart = () => {
      startTimeRef.current = performance.now();
      setSpeaking(true);
      tick();
    };
    utter.onend = () => stopPlayback("NEUTRAL");
    utter.onerror = () => stopPlayback("NEUTRAL");

    window.speechSynthesis.speak(utter);
  }

  function tick() {
    const elapsed = performance.now() - startTimeRef.current;
    const frames = framesRef.current;
    const total = totalVisemeDurationMs(frames);

    if (elapsed >= total) {
      // Estimated timeline ran out before the real utterance's onend
      // fired (estimate was too short, or the TTS engine paused) —
      // hold on REST rather than freeze on the last mouth shape.
      setCurrentViseme("REST");
      rafRef.current = requestAnimationFrame(tick);
      return;
    }

    const idx = frames.findIndex((f) => elapsed >= f.startMs && elapsed < f.endMs);
    if (idx !== -1 && idx !== frameIndexRef.current) {
      frameIndexRef.current = idx;
      setCurrentViseme(frames[idx].viseme);
      setVariantToggle((v) => !v);
    }
    rafRef.current = requestAnimationFrame(tick);
  }

  function stop() {
    window.speechSynthesis.cancel();
    stopPlayback("NEUTRAL");
  }

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="lip-sync-test-page">
      <button className="back-button" onClick={onBack}>← Back</button>
      <h1>Lip Sync Test</h1>
      <p className="subtitle">
        Cheap viseme-based lip sync: a character-driven timeline swaps between 10 mouth-shape photos of the
        same model, timed against real speech synthesis — no audio analysis involved.
      </p>

      <div className="lip-sync-avatar-frame">
        <VisemeAvatar viseme={currentViseme} variantToggle={variantToggle} size={320} />
      </div>
      <div className="lip-sync-viseme-label">{currentViseme}</div>

      <div className="lip-sync-controls">
        <label>
          Language
          <select
            value={lang}
            onChange={(e) => {
              const next = e.target.value as LangCode;
              setLang(next);
              setText(SAMPLE_TEXT[next]);
            }}
          >
            {LANG_OPTIONS.map((o) => (
              <option key={o.code} value={o.code}>{o.label}</option>
            ))}
          </select>
        </label>

        <label>
          Rate: {rate.toFixed(2)}×
          <input
            type="range"
            min={0.5}
            max={1.5}
            step={0.05}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
          />
        </label>
      </div>

      <textarea
        className="lip-sync-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        placeholder="Type something to speak..."
      />

      <div className="lip-sync-buttons">
        <button onClick={speak} disabled={speaking || !text.trim()}>▶ Speak</button>
        <button onClick={stop} disabled={!speaking}>■ Stop</button>
      </div>
    </div>
  );
}
