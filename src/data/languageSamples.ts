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

// "Hello, I'm X. I teach A and B." — one template per spoken language,
// filled in with the trainer's own name and their two languages (named
// in that same spoken language).
function greeting(lang: LangCode, name: string, langA: string, langB: string): string {
  switch (lang) {
    case "de":
      return `Hallo, ich bin ${name}. Ich unterrichte ${langA} und ${langB}.`;
    case "zh":
      return `你好，我是${name}。我教${langA}和${langB}。`;
    case "ja":
      return `こんにちは、${name}です。${langA}と${langB}を教えています。`;
    case "en":
    default:
      return `Hello, I'm ${name}. I teach ${langA} and ${langB}.`;
  }
}

export interface LanguageSample {
  lang: LangCode;
  text: string;
}

// One sample sentence per language the trainer actually speaks (their
// bilingual pair) — every spoken language gets exactly one sample.
export function languageSamplesFor(trainer: Trainer): LanguageSample[] {
  return trainer.languages.map((spokenLang) => {
    const [a, b] = trainer.languages;
    const langA = LANG_NAME_IN[spokenLang][a];
    const langB = LANG_NAME_IN[spokenLang][b];
    return { lang: spokenLang, text: greeting(spokenLang, trainer.name, langA, langB) };
  });
}
