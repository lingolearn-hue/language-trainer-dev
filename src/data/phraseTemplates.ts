// Framing-text templates — the boilerplate wrapper text around every
// lesson (title, agenda, warm-up, "let's look at some words about X,"
// dialogue/pronunciation/song intros) follows a strict, consistent
// pattern across every hand-authored lesson so far. Rather than
// hand-writing this same pattern per language per topic, it's generated
// here from a topic name + block titles — genuinely reusable across
// every target language a topic supports, unlike grammar/pronunciation
// content itself.
//
// Only languages with a template function here can have a LessonPlan
// generated for them by buildLesson.ts, regardless of whether vocab/
// dialogue data exists in that language — this is deliberate: framing
// text needs to read naturally, not just be technically present.
import type { LangCode, Translations } from "../types";

export interface PhraseSet {
  welcomeTitle: (topic: string) => string;
  lessonLabel: (n: number, topic: string) => string;
  agendaSpoken: (topic: string, grammarTitle: string) => string;
  warmup: string;
  vocabIntro: (topic: string) => string;
  grammarIntro: string;
  dialogueIntro: (kind: "asking" | "planning" | "generic") => string;
  pronunciationIntro: string;
  songIntro: string;
  agendaLabels: {
    intro: string;
    vocab: (topic: string) => string;
    grammar: (title: string) => string;
    dialogueA: (title: string) => string;
    dialogueB: (title: string) => string;
    pronunciation: string;
    song: string;
  };
  labels: {
    intro: string;
    agenda: string;
    vocabPrefix: string;
    pronunciation: string;
    song: string;
  };
}

export const PHRASES: Partial<Record<LangCode, PhraseSet>> = {
  ja: {
    welcomeTitle: (topic) => `ようこそ！きょうは ${topic}について べんきょうしましょう。`,
    lessonLabel: (n, topic) => `だい${n}か — ${topic}`,
    agendaSpoken: (topic, grammarTitle) =>
      `きょうは まず じこしょうかい、それから ${topic}の たんごを べんきょうします。そのあと ${grammarTitle}を みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうを します。`,
    warmup: "はじめる まえに、すこし はなしましょう。",
    vocabIntro: (topic) => `${topic}に かんけいする たんごを みてみましょう。`,
    grammarIntro: "きょうの ぶんぽうを みてみましょう。",
    dialogueIntro: () => "かいわを ききましょう。",
    pronunciationIntro: "はつおんの れんしゅうを しましょう。",
    songIntro: "さいごに、うたを うたいましょう。",
    agendaLabels: {
      intro: "じこしょうかい",
      vocab: (topic) => `たんご：${topic}`,
      grammar: (title) => `ぶんぽう：${title}`,
      dialogueA: (title) => `かいわ：${title}`,
      dialogueB: (title) => `かいわ：${title}`,
      pronunciation: "はつおんの れんしゅう",
      song: "うた",
    },
    labels: { intro: "じこしょうかい", agenda: "ながれ", vocabPrefix: "たんご：", pronunciation: "はつおんの れんしゅう", song: "うた" },
  },
  de: {
    welcomeTitle: (topic) => `Willkommen! Heute lernen wir Wörter rund um ${topic}.`,
    lessonLabel: (n, topic) => `Lektion ${n} — ${topic}`,
    agendaSpoken: (topic, grammarTitle) =>
      `Heute beginnen wir mit einer kurzen Einführung und lernen dann Wortschatz zu ${topic}. Danach schauen wir uns ${grammarTitle} an, üben zwei Dialoge und schließen mit Aussprachetraining ab.`,
    warmup: "Bevor wir anfangen, lass uns kurz reden.",
    vocabIntro: (topic) => `Schauen wir uns ein paar Wörter rund um ${topic} an.`,
    grammarIntro: "Schauen wir uns die heutige Grammatik an.",
    dialogueIntro: () => "Hören wir uns einen Dialog an.",
    pronunciationIntro: "Üben wir die Aussprache.",
    songIntro: "Zum Abschluss singen wir ein Lied.",
    agendaLabels: {
      intro: "Einführung",
      vocab: (topic) => `Wortschatz: ${topic}`,
      grammar: (title) => `Grammatik: ${title}`,
      dialogueA: (title) => `Dialog A: ${title}`,
      dialogueB: (title) => `Dialog B: ${title}`,
      pronunciation: "Aussprachetraining",
      song: "Lied",
    },
    labels: { intro: "Einführung", agenda: "Ablauf", vocabPrefix: "Wortschatz: ", pronunciation: "Aussprachetraining", song: "Lied" },
  },
};

export function getPhrases(lang: LangCode): PhraseSet | undefined {
  return PHRASES[lang];
}

export function topicName(topic: Translations, lang: LangCode): string {
  return topic[lang] ?? topic.en ?? Object.values(topic)[0] ?? "";
}
