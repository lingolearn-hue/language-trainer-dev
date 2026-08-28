import { pinyin } from "pinyin-pro";
import type { LangCode, Translations } from "../types";

// Single integration point for every component that displays translated
// text — replaces raw `translations[lang]` access wherever the result
// might need to respect the kanji/kana or Hanzi/Pinyin toggle (see
// engine/scriptMode.ts). Both languages default to their EXISTING
// behavior unchanged when the toggle is off, so nothing changes for
// content that hasn't opted in (Japanese) or for anyone who leaves the
// toggle alone.
//
// Japanese: `ja` is kana-only throughout this app (only ~3.5% of
// existing strings have any kanji in them at all). `jaKanji` is an
// optional, explicitly-authored alternate form — never auto-generated,
// since kana-to-kanji is genuinely ambiguous (many words share a
// reading but map to different kanji depending on meaning) without full
// NLP, and even then isn't guaranteed correct. Toggle ON reveals
// jaKanji where authored; falls back to the kana `ja` field elsewhere.
//
// Chinese: `zh` is Hanzi throughout this app already. Toggle ON
// generates Pinyin via pinyin-pro (a real dictionary-based converter,
// not a guess) — always available, since it's generated from the
// existing Hanzi rather than requiring separate authoring. Results are
// cached (module-level Map) since the same short vocab/dialogue strings
// get displayed repeatedly across renders.
const pinyinCache = new Map<string, string>();

function toPinyin(hanzi: string): string {
  const cached = pinyinCache.get(hanzi);
  if (cached !== undefined) return cached;
  const result = pinyin(hanzi, { toneType: "symbol" });
  pinyinCache.set(hanzi, result);
  return result;
}

export function resolveDisplayText(
  translations: Translations,
  lang: LangCode,
  showAlternateScript: boolean
): string | undefined {
  if (!showAlternateScript) return translations[lang];

  if (lang === "ja") return translations.jaKanji ?? translations.ja;
  if (lang === "zh") {
    const hanzi = translations.zh;
    return hanzi ? toPinyin(hanzi) : undefined;
  }
  return translations[lang];
}
