import type { LangCode } from "../types";

const bcp47: Record<LangCode, string> = {
  de: "de-DE",
  en: "en-US",
  zh: "zh-CN",
  ja: "ja-JP",
};

export interface VoicePreference {
  voiceURI?: string;
  pitch?: number;
  rate?: number;
}

// Runtime voice enumeration — getVoices() is often empty until the
// 'voiceschanged' event fires (varies by browser), so this waits for that
// rather than assuming voices are ready synchronously.
let voicesReadyPromise: Promise<SpeechSynthesisVoice[]> | null = null;

function getVoices(): Promise<SpeechSynthesisVoice[]> {
  if (!("speechSynthesis" in window)) return Promise.resolve([]);
  if (voicesReadyPromise) return voicesReadyPromise;

  voicesReadyPromise = new Promise((resolve) => {
    const existing = window.speechSynthesis.getVoices();
    if (existing.length > 0) {
      resolve(existing);
      return;
    }
    const onChange = () => {
      window.speechSynthesis.removeEventListener("voiceschanged", onChange);
      resolve(window.speechSynthesis.getVoices());
    };
    window.speechSynthesis.addEventListener("voiceschanged", onChange);
    // fallback in case voiceschanged never fires (some browsers/environments)
    setTimeout(() => resolve(window.speechSynthesis.getVoices()), 500);
  });
  return voicesReadyPromise;
}

// Picks the trainer's preferred voice by voiceURI if the browser has it
// installed; otherwise falls back to the first voice matching the target
// language, then to no explicit voice (browser default for that lang).
async function resolveVoice(
  lang: LangCode,
  preference?: VoicePreference
): Promise<SpeechSynthesisVoice | undefined> {
  const voices = await getVoices();
  if (preference?.voiceURI) {
    const exact = voices.find((v) => v.voiceURI === preference.voiceURI);
    if (exact) return exact;
  }
  const target = bcp47[lang];
  return voices.find((v) => v.lang === target) ?? voices.find((v) => v.lang?.startsWith(lang));
}

// Tiny shared "is the trainer currently speaking" store, so avatar
// animation reacts to any speak() call (vocab echo, grammar chunk reads,
// readalong lines, teacher caption) without threading state through every
// component that calls speak().
type Listener = (speaking: boolean) => void;
const listeners = new Set<Listener>();
let currentlySpeaking = false;

function setSpeaking(value: boolean) {
  currentlySpeaking = value;
  listeners.forEach((l) => l(value));
}

export function subscribeSpeaking(listener: Listener): () => void {
  listeners.add(listener);
  listener(currentlySpeaking);
  return () => listeners.delete(listener);
}

// A run of "..." (or the single-char "…") in lesson text is meant as a
// spoken PAUSE, not literal dots — German TTS in particular reads "..."
// aloud as "Punkt Punkt Punkt", which is wrong. speak() below strips
// ellipses out and replaces them with a silent wait between segments
// instead, transparently for every caller (spokenIntro, vocab words,
// grammar chunks, readalong lines, selfIntro content) — no call site
// needs to know about this.
const ELLIPSIS_PAUSE_MS = 600;

function splitOnEllipsis(text: string): string[] {
  return text
    .split(/\.{3,}|…/g)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

// Global rate multiplier — applies on top of each trainer's own base
// rate (voiceProfile.rate), so "faster"/"slower" affects every voice
// uniformly without touching per-trainer data. Default is slightly below
// 1 (all voices read a little slower by default); user-adjustable via
// the rate controls in the session's right-hand rail.
const RATE_MIN = 0.6;
const RATE_MAX = 1.3;
const RATE_STEP = 0.1;
let rateMultiplier = 0.85;
type RateListener = (rate: number) => void;
const rateListeners = new Set<RateListener>();

export function getRateMultiplier(): number {
  return rateMultiplier;
}

export function setRateMultiplier(value: number) {
  rateMultiplier = Math.min(RATE_MAX, Math.max(RATE_MIN, value));
  rateListeners.forEach((l) => l(rateMultiplier));
}

export function adjustRateMultiplier(delta: number) {
  setRateMultiplier(rateMultiplier + delta);
}

export function subscribeRate(listener: RateListener): () => void {
  rateListeners.add(listener);
  listener(rateMultiplier);
  return () => rateListeners.delete(listener);
}

export { RATE_MIN, RATE_MAX, RATE_STEP };

async function speakSegment(
  text: string,
  lang: LangCode,
  preference?: VoicePreference
): Promise<void> {
  const voice = await resolveVoice(lang, preference);
  return new Promise((resolve) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = bcp47[lang];
    if (voice) utter.voice = voice;
    if (preference?.pitch !== undefined) utter.pitch = preference.pitch;
    utter.rate = (preference?.rate ?? 1) * rateMultiplier;
    utter.onend = () => resolve();
    utter.onerror = () => resolve();
    window.speechSynthesis.speak(utter);
  });
}

export async function speak(
  text: string,
  lang: LangCode,
  preference?: VoicePreference
): Promise<void> {
  if (!("speechSynthesis" in window)) return;

  const segments = splitOnEllipsis(text);
  if (segments.length === 0) return;

  setSpeaking(true);
  for (let i = 0; i < segments.length; i++) {
    await speakSegment(segments[i], lang, preference);
    if (i < segments.length - 1) await wait(ELLIPSIS_PAUSE_MS);
  }
  setSpeaking(false);
}

export function cancelSpeech() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  setSpeaking(false);
}

export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Splits narration text into individual sentences, for callers (currently
// TeacherCaption) that want to speak — and caption — one sentence at a
// time instead of showing a whole multi-sentence paragraph at once.
// "..." / "…" are protected first so an ellipsis-bearing sentence isn't
// itself split apart by this (it still gets pause-treatment internally,
// inside speak() — that's a separate, lower-level concern from this
// sentence-level split).
export function splitIntoSentences(text: string): string[] {
  const ELLIPSIS_TOKEN = "\u0000E\u0000";
  const protectedText = text.replace(/\.{3,}|…/g, ELLIPSIS_TOKEN);
  return protectedText
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
    .map((s) => s.split(ELLIPSIS_TOKEN).join("..."));
}
