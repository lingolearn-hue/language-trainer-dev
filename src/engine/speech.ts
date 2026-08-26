import type { LangCode } from "../types";

const bcp47: Record<LangCode, string> = {
  de: "de-DE",
  en: "en-US",
  zh: "zh-CN",
  ja: "ja-JP",
};

export interface VoicePreference {
  // Ordered candidate voice names PER LANGUAGE, tried in order — first
  // one actually installed wins. Keyed by LangCode so a multi-language
  // trainer (Vincent: en/zh/de, Max: ja/de) gets real coverage for every
  // language they speak, not just whichever one voiceProfile.lang names
  // as "primary". Before this, a trainer's single flat voiceURI list
  // only ever matched their primary language — resolveVoice's lang guard
  // correctly stopped it from misfiring on other languages, but that
  // also meant those other languages had NO preference at all and
  // always fell straight to the device default (usually female).
  //
  // Voice naming isn't stable across OS versions/regions — e.g. Apple's
  // male English voice has been "Fred", "Alex", and "Aaron" across
  // different macOS/iOS releases — so each list has multiple names to
  // try, not just one.
  voicesByLang?: Partial<Record<LangCode, string | string[]>>;
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
// installed AND it's actually a voice for the requested language;
// otherwise falls back to the first voice matching the target language,
// then to no explicit voice (browser default for that lang). The
// language check on the exact match matters now that a single trainer
// can speak 2-3 languages with one shared voiceProfile — without it, a
// voiceURI preference picked for one language could wrongly hijack
// speech in a completely different language.
async function resolveVoice(
  lang: LangCode,
  preference?: VoicePreference
): Promise<SpeechSynthesisVoice | undefined> {
  const voices = await getVoices();
  const target = bcp47[lang];
  const matchesRequestedLang = (v: SpeechSynthesisVoice) =>
    v.lang === target || v.lang?.startsWith(lang);

  const forLang = preference?.voicesByLang?.[lang];
  const candidates = forLang ? (Array.isArray(forLang) ? forLang : [forLang]) : [];
  for (const candidate of candidates) {
    const exact = voices.find((v) => v.voiceURI === candidate && matchesRequestedLang(v));
    if (exact) return exact;
    // Fallback: Safari's voiceURI is usually the same string as its plain
    // name (e.g. "Markus"), but not guaranteed on every version — also
    // try a case-insensitive name match, still gated to the requested
    // language for the same reason as above.
    const byName = voices.find(
      (v) => v.name.toLowerCase() === candidate.toLowerCase() && matchesRequestedLang(v)
    );
    if (byName) return byName;
  }
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

// Same pattern, separate store: "is it the student's turn to talk right
// now" — true during a readalong's echo-repeat pause (trainer just said
// the line, student repeats into the silence) and during the silent
// phase's read-alone window; false the rest of the time (including
// during shadow, which is read together rather than as a distinct
// student-only turn). Sets the green ring around the student's avatar —
// see LessonAvatars.tsx.
type TurnListener = (yourTurn: boolean) => void;
const turnListeners = new Set<TurnListener>();
let currentlyStudentTurn = false;

export function setStudentTurn(value: boolean) {
  currentlyStudentTurn = value;
  turnListeners.forEach((l) => l(value));
}

export function subscribeStudentTurn(listener: TurnListener): () => void {
  turnListeners.add(listener);
  listener(currentlyStudentTurn);
  return () => turnListeners.delete(listener);
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

// Real bug fix: on some browsers/conditions (tab backgrounding, Chrome's
// speechSynthesis engine occasionally going idle/stuck after many
// consecutive utterances, assorted iOS quirks), onend/onerror can
// silently never fire at all — the returned promise then hangs forever.
// Every block's auto-play is a sequential `await speak(...)` chain, so
// one stuck utterance anywhere stalls the whole chain permanently: no
// error, no crash, just the "next slide" never arriving. Reported
// symptom was exactly this ("sometimes the next slide isn't activated"),
// and got more likely to trigger once lesson-intro speech sequences got
// longer (bilingual framing, 14-line monologue, self-intro block) —
// more sequential utterances per lesson means more chances to hit it.
//
// Fix: race the speech promise against a generous timeout scaled to the
// text's own length (with a floor and ceiling) — if the browser hasn't
// fired onend/onerror by then, resolve anyway so the calling chain can
// continue. Deliberately does NOT call speechSynthesis.cancel() on
// timeout: if the utterance is just running slow rather than truly
// stuck, letting it keep playing in the background is harmless, whereas
// cutting it off would audibly clip mid-word for no benefit.
function estimateMaxSpeechMs(text: string): number {
  return Math.min(20000, Math.max(4000, text.length * 300));
}

async function speakSegment(
  text: string,
  lang: LangCode,
  preference?: VoicePreference
): Promise<void> {
  const voice = await resolveVoice(lang, preference);
  const speechPromise = new Promise<void>((resolve) => {
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
  const timeoutPromise = new Promise<void>((resolve) => {
    setTimeout(resolve, estimateMaxSpeechMs(text));
  });
  return Promise.race([speechPromise, timeoutPromise]);
}

// Real bug fix: many grammar-note and framing sentences intentionally
// embed a target-language word inside otherwise English/German/Chinese
// text for teaching clarity (e.g. "Today's grammar is how to use です
// and います/あります."). When that whole sentence gets spoken with an
// English/German/etc. voice, the embedded Japanese characters are
// silently dropped — the voice has no idea how to render them, so they
// just vanish from the audio (the rest of the sentence plays fine).
// Fix: split text into runs of Japanese script vs everything else, and
// speak each run with the voice that actually matches its script,
// regardless of what language was originally requested for the
// surrounding sentence. A caller asking for "ja" text with no Latin
// runs is unaffected (single run, same as before).
const JAPANESE_SCRIPT_RUN = /[\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uFF66-\uFF9F]+/gu;

function splitByScript(text: string, requestedLang: LangCode): Array<{ text: string; lang: LangCode }> {
  if (requestedLang === "ja" || requestedLang === "zh") return [{ text, lang: requestedLang }]; // ja/zh share the CJK ideograph block; only ja/zh voices need not be split
  const runs: Array<{ text: string; lang: LangCode }> = [];
  let lastIndex = 0;
  for (const match of text.matchAll(JAPANESE_SCRIPT_RUN)) {
    const start = match.index ?? 0;
    if (start > lastIndex) {
      const before = text.slice(lastIndex, start).trim();
      if (before) runs.push({ text: before, lang: requestedLang });
    }
    runs.push({ text: match[0], lang: "ja" });
    lastIndex = start + match[0].length;
  }
  const rest = text.slice(lastIndex).trim();
  if (rest) runs.push({ text: rest, lang: requestedLang });
  return runs.length > 0 ? runs : [{ text, lang: requestedLang }];
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
    const scriptRuns = splitByScript(segments[i], lang);
    for (const run of scriptRuns) {
      await speakSegment(run.text, run.lang, preference);
    }
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
  // Real bug fix: DO NOT call cancel() right after speak() here. That
  // combination is a known WebSpeech quirk (Chrome/Safari) — calling
  // cancel() immediately after speak() can corrupt the internal speech
  // queue, causing the NEXT real utterance spoken afterward to fire
  // twice. This primer is silent and near-instant (a single space), so
  // there's nothing to gain from cancelling it early — just let it
  // finish naturally.
  window.speechSynthesis.speak(utter);
}

// In-place pause/resume: distinct from SessionContext's status="paused"
// (which swaps to a separate full-screen view) — this is the tap
// overlay's lighter "pause without changing the view" control. Every
// active wait() genuinely suspends (tracks remaining time, doesn't just
// let the timer run out silently in the background) and resumes with
// whatever time was left when unpaused; in-flight speech uses the
// browser's native speechSynthesis.pause()/resume().
type PauseListener = (paused: boolean) => void;
const pauseListeners = new Set<PauseListener>();
let globallyPaused = false;

export function setGlobalPaused(paused: boolean) {
  if (paused === globallyPaused) return;
  globallyPaused = paused;
  if ("speechSynthesis" in window) {
    if (paused) window.speechSynthesis.pause();
    else window.speechSynthesis.resume();
  }
  pauseListeners.forEach((l) => l(paused));
}

export function isGloballyPaused(): boolean {
  return globallyPaused;
}

// "Skip forward" pub/sub: any currently-pending wait() resolves
// immediately when this fires, instead of running out its full timer.
// Used by the slide overlay's +10s control — there's no real audio
// timeline to scrub in a TTS-driven lesson, so "skip forward" is
// approximated as "cut short whatever pause is happening right now and
// let the auto-play sequence move on," combined with cancelSpeech() to
// also cut off any utterance currently mid-sentence.
type SkipListener = () => void;
const skipListeners = new Set<SkipListener>();

export function requestSkipForward() {
  cancelSpeech();
  skipListeners.forEach((l) => l());
}

export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    let done = false;
    let remaining = ms;
    let startedAt = 0;
    let timer: ReturnType<typeof setTimeout> | null = null;

    function finish() {
      if (done) return;
      done = true;
      if (timer) clearTimeout(timer);
      skipListeners.delete(finish);
      pauseListeners.delete(onPauseChange);
      resolve();
    }
    function startTimer() {
      startedAt = Date.now();
      timer = setTimeout(finish, remaining);
    }
    function onPauseChange(paused: boolean) {
      if (paused) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        remaining = Math.max(0, remaining - (Date.now() - startedAt));
      } else {
        startTimer();
      }
    }

    skipListeners.add(finish);
    pauseListeners.add(onPauseChange);
    if (!globallyPaused) startTimer();
  });
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
