import type { LangCode } from "../types";

export const LANG_LABEL: Record<LangCode, string> = {
  de: "German",
  en: "English",
  zh: "Chinese",
  ja: "Japanese",
  fr: "French",
  es: "Spanish",
};

export const ALL_LANGS: LangCode[] = ["de", "en", "zh", "ja", "fr", "es"];
