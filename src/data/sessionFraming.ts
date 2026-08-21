import type { Translations } from "../types";

// Generic session-level framing lines, spoken once per lesson: source
// language first, then target language. Same text for every lesson for
// now — per-lesson variants can replace these later without touching the
// Session.tsx playback logic.
export const lessonWelcome: Translations = {
  en: "Welcome to this lesson. I hope you'll have fun!",
  de: "Willkommen zu dieser Lektion. Ich wünsche dir viel Spaß!",
  ja: "このレッスンへようこそ。楽しんでくださいね。",
  zh: "欢迎来到这节课。希望你玩得开心!",
};

export const lessonThanks: Translations = {
  en: "Thanks for joining the lesson. You can now choose if you'd like to revisit it later.",
  de: "Danke, dass du an der Lektion teilgenommen hast. Du kannst jetzt wählen, ob du sie später wiederholen möchtest.",
  ja: "レッスンに参加してくれてありがとう。あとでもう一度復習したいか選んでくださいね。",
  zh: "谢谢你参加这节课。你现在可以选择是否想稍后再复习。",
};
