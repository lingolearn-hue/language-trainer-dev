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
    if (preference?.rate !== undefined) utter.rate = preference.rate;
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
