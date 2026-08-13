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

export async function speak(
  text: string,
  lang: LangCode,
  preference?: VoicePreference
): Promise<void> {
  if (!("speechSynthesis" in window)) return;

  const voice = await resolveVoice(lang, preference);

  return new Promise((resolve) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = bcp47[lang];
    if (voice) utter.voice = voice;
    if (preference?.pitch !== undefined) utter.pitch = preference.pitch;
    if (preference?.rate !== undefined) utter.rate = preference.rate;
    setSpeaking(true);
    utter.onend = () => {
      setSpeaking(false);
      resolve();
    };
    utter.onerror = () => {
      setSpeaking(false);
      resolve();
    };
    window.speechSynthesis.speak(utter);
  });
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
