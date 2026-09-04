import type { LangCode } from "../types";
import type { VisemeKey } from "../assets/visemeImages";

// Computationally cheap lip sync: no audio analysis (SpeechSynthesis-
// Utterance doesn't expose its audio as a MediaStream in most browsers,
// so there's nothing to run an AnalyserNode on), no per-phoneme ML
// prediction — just a character-by-character grapheme heuristic that
// guesses a viseme per letter, plus an estimated duration per
// character. The whole "engine" is an array lookup and an interval
// timer; see LipSyncTestPage.tsx for how the timeline actually gets
// played back against real speech.
//
// Accuracy note: this is deliberately approximate, not a real g2p
// (grapheme-to-phoneme) system. It'll noticeably mismatch on silent
// letters, digraphs it doesn't special-case, and any language where
// spelling doesn't track pronunciation closely. It's tuned to look
// reasonable at a glance, not to survive scrutiny frame-by-frame.

export interface VisemeFrame {
  viseme: VisemeKey;
  startMs: number;
  endMs: number;
}

// Rough per-category hold time in ms at rate=1 — open vowels read as
// "held" a bit longer than consonant shapes, closed/rest is brief.
const BASE_DURATION_MS: Record<VisemeKey, number> = {
  NEUTRAL: 100, LAUGHING: 100,
  AA: 130, EE: 120, IH: 100, OH: 120, OO: 130, OU: 130,
  FV: 80, L: 80, MBP: 90,
  REST: 70,
};

// Japanese kana are a genuinely good case for this technique: every
// kana mora ends in one of five vowels (or ん/っ), so mapping kana to
// visemes by its trailing vowel sound is close to real g2p accuracy —
// not a heuristic guess like the Latin-script path below.
const KANA_VOWEL: Record<string, VisemeKey> = {
  "あ": "AA", "か": "AA", "が": "AA", "さ": "AA", "ざ": "AA", "た": "AA", "だ": "AA",
  "な": "AA", "は": "AA", "ば": "AA", "ぱ": "AA", "ま": "AA", "や": "AA", "ゃ": "AA",
  "ら": "AA", "わ": "AA",
  "ア": "AA", "カ": "AA", "ガ": "AA", "サ": "AA", "ザ": "AA", "タ": "AA", "ダ": "AA",
  "ナ": "AA", "ハ": "AA", "バ": "AA", "パ": "AA", "マ": "AA", "ヤ": "AA", "ャ": "AA",
  "ラ": "AA", "ワ": "AA",
  "い": "EE", "き": "EE", "ぎ": "EE", "し": "EE", "じ": "EE", "ち": "EE", "ぢ": "EE",
  "に": "EE", "ひ": "EE", "び": "EE", "ぴ": "EE", "み": "EE", "り": "EE",
  "イ": "EE", "キ": "EE", "ギ": "EE", "シ": "EE", "ジ": "EE", "チ": "EE", "ヂ": "EE",
  "ニ": "EE", "ヒ": "EE", "ビ": "EE", "ピ": "EE", "ミ": "EE", "リ": "EE",
  "う": "OO", "く": "OO", "ぐ": "OO", "す": "OO", "ず": "OO", "つ": "OO", "づ": "OO",
  "ぬ": "OO", "ふ": "FV", "ぶ": "OO", "ぷ": "OO", "む": "OO", "ゆ": "OO", "ゅ": "OO", "る": "L",
  "ウ": "OO", "ク": "OO", "グ": "OO", "ス": "OO", "ズ": "OO", "ツ": "OO", "ヅ": "OO",
  "ヌ": "OO", "フ": "FV", "ブ": "OO", "プ": "OO", "ム": "OO", "ユ": "OO", "ュ": "OO", "ル": "L",
  "え": "IH", "け": "IH", "げ": "IH", "せ": "IH", "ぜ": "IH", "て": "IH", "で": "IH",
  "ね": "IH", "へ": "IH", "べ": "IH", "ぺ": "IH", "め": "IH", "れ": "IH",
  "エ": "IH", "ケ": "IH", "ゲ": "IH", "セ": "IH", "ゼ": "IH", "テ": "IH", "デ": "IH",
  "ネ": "IH", "ヘ": "IH", "ベ": "IH", "ペ": "IH", "メ": "IH", "レ": "IH",
  "お": "OH", "こ": "OH", "ご": "OH", "そ": "OH", "ぞ": "OH", "と": "OH", "ど": "OH",
  "の": "OH", "ほ": "OH", "ぼ": "OH", "ぽ": "OH", "も": "OH", "よ": "OH", "ょ": "OH", "ろ": "L",
  "オ": "OH", "コ": "OH", "ゴ": "OH", "ソ": "OH", "ゾ": "OH", "ト": "OH", "ド": "OH",
  "ノ": "OH", "ホ": "OH", "ボ": "OH", "ポ": "OH", "モ": "OH", "ヨ": "OH", "ョ": "OH", "ロ": "L",
  "ん": "MBP", "ン": "MBP", "っ": "REST", "ッ": "REST",
  "ー": "OH",
};

const DIGRAPHS: Array<[string, VisemeKey]> = [
  ["oo", "OO"], ["ou", "OU"], ["ow", "OU"], ["ee", "EE"], ["ea", "EE"],
  ["ie", "EE"], ["oa", "OH"], ["oi", "OH"], ["oy", "OH"],
];
const SINGLE_LATIN: Record<string, VisemeKey> = {
  a: "AA", e: "IH", i: "EE", o: "OH", u: "OO",
  f: "FV", v: "FV", l: "L", m: "MBP", b: "MBP", p: "MBP",
};

function visemeForLatinRun(word: string): VisemeKey[] {
  const lower = word.toLowerCase();
  const out: VisemeKey[] = [];
  let i = 0;
  while (i < lower.length) {
    const pair = lower.slice(i, i + 2);
    const digraph = DIGRAPHS.find(([d]) => d === pair);
    if (digraph) {
      out.push(digraph[1]);
      i += 2;
      continue;
    }
    const ch = lower[i];
    out.push(SINGLE_LATIN[ch] ?? "REST");
    i += 1;
  }
  return out;
}

function isKana(ch: string): boolean {
  const code = ch.codePointAt(0) ?? 0;
  return (code >= 0x3040 && code <= 0x30ff) || ch in KANA_VOWEL;
}

function isCJK(ch: string): boolean {
  const code = ch.codePointAt(0) ?? 0;
  return code >= 0x4e00 && code <= 0x9fff;
}

const ZH_FALLBACK_CYCLE: VisemeKey[] = ["AA", "OH", "EE", "OO", "IH"];

export function textToVisemeFrames(text: string, lang: LangCode, rateMultiplier = 1): VisemeFrame[] {
  const frames: VisemeFrame[] = [];
  let t = 0;
  let zhCycleIndex = 0;

  function push(viseme: VisemeKey) {
    const dur = BASE_DURATION_MS[viseme] / rateMultiplier;
    frames.push({ viseme, startMs: t, endMs: t + dur });
    t += dur;
  }

  const chars = Array.from(text);
  let i = 0;
  while (i < chars.length) {
    const ch = chars[i];
    if (/\s/.test(ch) || /[.,!?;:、。！？，]/.test(ch)) {
      push("REST");
      i += 1;
      continue;
    }
    if (lang === "ja" && isKana(ch)) {
      push(KANA_VOWEL[ch] ?? "REST");
      i += 1;
      continue;
    }
    if (lang === "zh" && isCJK(ch)) {
      push(ZH_FALLBACK_CYCLE[zhCycleIndex % ZH_FALLBACK_CYCLE.length]);
      zhCycleIndex += 1;
      i += 1;
      continue;
    }
    if (/[a-zA-Z]/.test(ch)) {
      let j = i;
      while (j < chars.length && /[a-zA-Z]/.test(chars[j])) j += 1;
      const run = chars.slice(i, j).join("");
      for (const v of visemeForLatinRun(run)) push(v);
      i = j;
      continue;
    }
    push("REST");
    i += 1;
  }

  if (frames.length === 0) push("REST");
  return frames;
}

export function totalVisemeDurationMs(frames: VisemeFrame[]): number {
  return frames.length ? frames[frames.length - 1].endMs : 0;
}
