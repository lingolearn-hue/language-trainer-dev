import type { LangCode } from "../types";

const bcp47: Record<LangCode, string> = {
  de: "de-DE",
  en: "en-US",
  zh: "zh-CN",
  ja: "ja-JP",
  fr: "fr-FR",
  es: "es-ES",
};

// Rudimentary loose-match self-check: lowercase, strip punctuation, compare
// word overlap. Not a grading system — accuracy for non-native accents is
// expected to be poor (per 04-tech-stack.md), so this only ever tells the
// student "sounds close" or "try again", never a precise score.
function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[.,!?¿¡"'`´…]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function looseMatch(target: string, heard: string): boolean {
  const t = normalize(target);
  const h = normalize(heard);
  if (!t || !h) return false;
  if (h.includes(t) || t.includes(h)) return true;

  const tWords = new Set(t.split(" "));
  const hWords = h.split(" ");
  const overlap = hWords.filter((w) => tWords.has(w)).length;
  return overlap / tWords.size >= 0.6;
}

export type RecognitionResult =
  | { status: "match"; heard: string }
  | { status: "no-match"; heard: string }
  | { status: "no-speech" }
  | { status: "unsupported" }
  | { status: "error"; error: string };

// SpeechRecognition is non-standard and TS's lib.dom typings for it vary
// across TS versions/configs — declare the minimal shape we actually use
// rather than depending on ambient DOM lib types that may or may not be
// present in a given tsconfig.
interface MinimalRecognitionEvent {
  results: { [index: number]: { [index: number]: { transcript: string } } };
}
interface MinimalRecognitionErrorEvent {
  error: string;
}
interface MinimalRecognition {
  lang: string;
  maxAlternatives: number;
  interimResults: boolean;
  onresult: ((event: MinimalRecognitionEvent) => void) | null;
  onerror: ((event: MinimalRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}
type RecognitionCtor = new () => MinimalRecognition;

function getRecognitionCtor(): RecognitionCtor | undefined {
  const w = window as unknown as {
    SpeechRecognition?: RecognitionCtor;
    webkitSpeechRecognition?: RecognitionCtor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition;
}

export function isRecognitionSupported(): boolean {
  return !!getRecognitionCtor();
}

export function listenAndCompare(
  target: string,
  lang: LangCode,
  timeoutMs = 6000
): Promise<RecognitionResult> {
  const Ctor = getRecognitionCtor();
  if (!Ctor) return Promise.resolve({ status: "unsupported" });

  return new Promise((resolve) => {
    const recognition = new Ctor();
    recognition.lang = bcp47[lang];
    recognition.maxAlternatives = 1;
    recognition.interimResults = false;

    const timer = setTimeout(() => {
      recognition.stop();
    }, timeoutMs);

    recognition.onresult = (event) => {
      clearTimeout(timer);
      const heard = event.results[0]?.[0]?.transcript ?? "";
      resolve({
        status: looseMatch(target, heard) ? "match" : "no-match",
        heard,
      });
    };
    recognition.onerror = (event) => {
      clearTimeout(timer);
      if (event.error === "no-speech") {
        resolve({ status: "no-speech" });
      } else {
        resolve({ status: "error", error: event.error });
      }
    };
    recognition.onend = () => clearTimeout(timer);

    try {
      recognition.start();
    } catch {
      resolve({ status: "error", error: "start-failed" });
    }
  });
}
