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

// Per-language-role rate — the language being LEARNED (target) reads
// slower, the student's OWN language (source, used for framing/spoken
// translations) reads faster. `currentTargetLang` is set by Session
// whenever LanguageSettings changes; any `speak()` call for that exact
// language uses the target (slower) rate, everything else uses the
// source (faster) rate. The existing faster/slower controls adjust a
// single shared offset applied to both, preserving the gap between them.
const RATE_MIN = 0.5;
const RATE_MAX = 1.6;
const RATE_STEP = 0.1;
const BASE_TARGET_RATE = 0.85; // learning language — slower
const BASE_SOURCE_RATE = 1.15; // student's own language — faster
let rateOffset = 0;
let currentTargetLang: LangCode | null = null;

export function setCurrentTargetLang(lang: LangCode) {
  currentTargetLang = lang;
}

type RateListener = (rates: { target: number; source: number }) => void;
const rateListeners = new Set<RateListener>();

function clampRate(v: number): number {
  return Math.min(RATE_MAX, Math.max(RATE_MIN, v));
}

function currentRates() {
  return {
    target: clampRate(BASE_TARGET_RATE + rateOffset),
    source: clampRate(BASE_SOURCE_RATE + rateOffset),
  };
}

export function getRates() {
  return currentRates();
}

export function adjustRateOffset(delta: number) {
  rateOffset = clampRate(BASE_TARGET_RATE + rateOffset + delta) - BASE_TARGET_RATE;
  const rates = currentRates();
  rateListeners.forEach((l) => l(rates));
}

export function subscribeRate(listener: RateListener): () => void {
  rateListeners.add(listener);
  listener(currentRates());
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
    const roleMultiplier = lang === currentTargetLang ? currentRates().target : currentRates().source;
    utter.rate = (preference?.rate ?? 1) * roleMultiplier;
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

// Real bug fix: on some browsers (notably Safari/iOS, and Chrome to a
// lesser extent), speechSynthesis.speak() silently produces no audio the
// very first time it's called unless it happens inside/soon-after a
// direct user gesture (click/tap). The session's first narration call
// happens automatically on mount (autoplay), which is NOT itself a
// gesture — so it gets silently dropped, and only the next speak() call
// (triggered indirectly by a later click, e.g. "next slide") succeeds,
// because the engine is now "unlocked". Calling this from within an
// actual click handler (trainer select / lesson select — the last real
// clicks before the session mounts) unlocks the API ahead of time, so
// the session's very first autoplay narration works on the first try.
export function primeSpeechSynthesis() {
  if (!("speechSynthesis" in window)) return;
  const utter = new SpeechSynthesisUtterance(" ");
  utter.volume = 0;
  window.speechSynthesis.speak(utter);
  window.speechSynthesis.cancel();
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
