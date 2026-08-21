import type { LangCode } from "../types";
import type { Trainer } from "./trainers";

// How each language is NAMED, spoken IN that same language (e.g. "German"
// spoken in German is "Deutsch") — used to build each trainer's self-intro
// sample sentence, one per language they speak.
const LANG_NAME_IN: Record<LangCode, Record<LangCode, string>> = {
  de: { de: "Deutsch", en: "Englisch", zh: "Chinesisch", ja: "Japanisch" },
  en: { de: "German", en: "English", zh: "Chinese", ja: "Japanese" },
  zh: { de: "德语", en: "英语", zh: "中文", ja: "日语" },
  ja: { de: "ドイツ語", en: "英語", zh: "中国語", ja: "日本語" },
};

// "Hello, I'm X. I teach A, B, and C." — one template per spoken
// language, filled in with the trainer's own name and their languages
// (named in that same spoken language). Handles any number of languages
// (2 or more), joining with the language-appropriate list separator.
function joinList(lang: LangCode, items: string[]): string {
  if (items.length <= 1) return items.join("");
  if (lang === "zh") return items.join("、"); // Chinese doesn't use a final "and" the same way; simple enumeration comma reads naturally
  if (lang === "ja") return items.join("と"); // と chains naturally between any number of items
  const last = items[items.length - 1];
  const rest = items.slice(0, -1);
  const conjunction = lang === "de" ? "und" : "and";
  const oxfordComma = lang === "de" ? "" : rest.length > 1 ? "," : ""; // German lists don't take a comma before und
  return `${rest.join(", ")}${oxfordComma} ${conjunction} ${last}`;
}

function greeting(lang: LangCode, name: string, langNames: string[]): string {
  const list = joinList(lang, langNames);
  switch (lang) {
    case "de":
      return `Hallo, ich bin ${name}. Ich unterrichte ${list}.`;
    case "zh":
      return `你好，我是${name}。我教${list}。`;
    case "ja":
      return `こんにちは、${name}です。${list}を教えています。`;
    case "en":
    default:
      return `Hello, I'm ${name}. I teach ${list}.`;
  }
}

export interface LanguageSample {
  lang: LangCode;
  text: string;
}

// One sample sentence per language the trainer actually speaks — every
// spoken language gets exactly one sample.
export function languageSamplesFor(trainer: Trainer): LanguageSample[] {
  return trainer.languages.map((spokenLang) => {
    const langNames = trainer.languages.map((l) => LANG_NAME_IN[spokenLang][l]);
    return { lang: spokenLang, text: greeting(spokenLang, trainer.name, langNames) };
  });
}
