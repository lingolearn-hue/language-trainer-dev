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
  // New richer intro-block framing: introTransition is the bilingual
  // framing message (spoken source then target, see TeacherCaption's
  // bilingual prop) that plays before the block's own read-along content
  // starts. introMonologue is that read-along content itself — a short
  // multi-line monologue, read in the usual echo/shadow/silent phases —
  // replacing the old single-line "warmup" caption placeholder.
  introTransition: string;
  introMonologue: string[];
  vocabIntro: (topic: string) => string;
  grammarIntro: string;
  dialogueIntro: (kind: "asking" | "planning" | "generic") => string;
  pronunciationIntro: string;
  songIntro: string;
  agendaLabels: {
    intro: string;
    selfIntro: string;
    vocab: (topic: string) => string;
    grammar: (title: string) => string;
    article: (title: string) => string;
    questions: string;
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
      `きょうは まず ${topic}の たんごを べんきょうします。そのあと ${grammarTitle}を みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうを します。`,
    warmup: "はじめる まえに、すこし はなしましょう。",
    introTransition: "はじめる まえに、せんせいから ひとこと どうぞ。",
    introMonologue: [
      "こんにちは！このレッスンの せんせいです。",
      "たんご・ぶんぽう・みじかい かいわを いっしょに れんしゅうします。",
      "まちがえても だいじょうぶ。いつでも とめて、くりかえして いいですよ。",
      "どの レッスンも、いままで まなんだ ことの うえに つづきます。",
      "さいごまで あんないしますね。",
      "じゅんびは いいですか？はじめましょう！",
    ],
    vocabIntro: (topic) => `${topic}に かんけいする たんごを みてみましょう。`,
    grammarIntro: "きょうの ぶんぽうを みてみましょう。",
    dialogueIntro: () => "かいわを ききましょう。",
    pronunciationIntro: "はつおんの れんしゅうを しましょう。",
    songIntro: "さいごに、うたを うたいましょう。",
    agendaLabels: {
      intro: "はじめに",
      selfIntro: "あなたの じこしょうかい",
      vocab: (topic) => `たんご：${topic}`,
      grammar: (title) => `ぶんぽう：${title}`,
      article: (title) => `ぶんしょう：${title}`,
      questions: "りかいかくにん",
      dialogueA: (title) => `かいわ：${title}`,
      dialogueB: (title) => `かいわ：${title}`,
      pronunciation: "はつおんの れんしゅう",
      song: "うた",
    },
    labels: { intro: "はじめに", agenda: "ながれ", vocabPrefix: "たんご：", pronunciation: "はつおんの れんしゅう", song: "うた" },
  },
  de: {
    welcomeTitle: (topic) => `Willkommen! Heute lernen wir Wörter rund um ${topic}.`,
    lessonLabel: (n, topic) => `Lektion ${n} — ${topic}`,
    agendaSpoken: (topic, grammarTitle) =>
      `Heute beginnen wir mit einer kurzen Einführung und lernen dann Wortschatz zu ${topic}. Danach schauen wir uns ${grammarTitle} an, üben zwei Dialoge und schließen mit Aussprachetraining ab.`,
    warmup: "Bevor wir anfangen, lass uns kurz reden.",
    introTransition: "Bevor es losgeht, ein kurzes Wort von deiner Lehrkraft.",
    introMonologue: [
      "Hallo! Ich bin deine Lehrkraft für diese Lektion.",
      "Wir üben zusammen Wortschatz, Grammatik und einen kurzen Dialog.",
      "Mach dir keine Sorgen wegen Fehlern — pausiere und wiederhole jederzeit.",
      "Jede Lektion baut auf dem auf, was du schon kannst.",
      "Ich begleite dich den ganzen Weg.",
      "Bist du bereit? Fangen wir an!",
    ],
    vocabIntro: (topic) => `Schauen wir uns ein paar Wörter rund um ${topic} an.`,
    grammarIntro: "Schauen wir uns die heutige Grammatik an.",
    dialogueIntro: () => "Hören wir uns einen Dialog an.",
    pronunciationIntro: "Üben wir die Aussprache.",
    songIntro: "Zum Abschluss singen wir ein Lied.",
    agendaLabels: {
      intro: "Einführung",
      selfIntro: "Deine Selbstvorstellung",
      vocab: (topic) => `Wortschatz: ${topic}`,
      grammar: (title) => `Grammatik: ${title}`,
      article: (title) => `Text: ${title}`,
      questions: "Verständnisfragen",
      dialogueA: (title) => `Dialog A: ${title}`,
      dialogueB: (title) => `Dialog B: ${title}`,
      pronunciation: "Aussprachetraining",
      song: "Lied",
    },
    labels: { intro: "Einführung", agenda: "Ablauf", vocabPrefix: "Wortschatz: ", pronunciation: "Aussprachetraining", song: "Lied" },
  },
  fr: {
    welcomeTitle: (topic) => `Bienvenue ! Aujourd'hui, nous allons apprendre des mots autour de ${topic}.`,
    lessonLabel: (n, topic) => `Leçon ${n} — ${topic}`,
    agendaSpoken: (topic, grammarTitle) =>
      `Aujourd'hui, nous commençons par une courte introduction, puis nous apprenons du vocabulaire sur ${topic}. Ensuite, nous verrons ${grammarTitle}, nous pratiquerons deux dialogues, et nous terminerons par un exercice de prononciation.`,
    warmup: "Avant de commencer, discutons un peu.",
    introTransition: "Avant de commencer, un mot de votre enseignant.",
    introMonologue: [
      "Bonjour ! Je suis votre enseignant pour cette leçon.",
      "Nous allons pratiquer vocabulaire, grammaire et un court dialogue ensemble.",
      "Ne vous inquiétez pas des erreurs — faites une pause et répétez à tout moment.",
      "Chaque leçon s'appuie sur ce que vous savez déjà.",
      "Je vous accompagne jusqu'au bout.",
      "Prêt ? Commençons !",
    ],
    vocabIntro: (topic) => `Regardons quelques mots autour de ${topic}.`,
    grammarIntro: "Regardons la grammaire du jour.",
    dialogueIntro: () => "Écoutons un dialogue.",
    pronunciationIntro: "Pratiquons la prononciation.",
    songIntro: "Pour finir, chantons une chanson.",
    agendaLabels: {
      intro: "Introduction",
      selfIntro: "Votre présentation",
      vocab: (topic) => `Vocabulaire : ${topic}`,
      grammar: (title) => `Grammaire : ${title}`,
      article: (title) => `Texte : ${title}`,
      questions: "Questions de compréhension",
      dialogueA: (title) => `Dialogue A : ${title}`,
      dialogueB: (title) => `Dialogue B : ${title}`,
      pronunciation: "Exercice de prononciation",
      song: "Chanson",
    },
    labels: { intro: "Introduction", agenda: "Déroulement", vocabPrefix: "Vocabulaire : ", pronunciation: "Exercice de prononciation", song: "Chanson" },
  },
  es: {
    welcomeTitle: (topic) => `¡Bienvenido! Hoy vamos a aprender palabras sobre ${topic}.`,
    lessonLabel: (n, topic) => `Lección ${n} — ${topic}`,
    agendaSpoken: (topic, grammarTitle) =>
      `Hoy empezamos con una breve introducción y luego aprendemos vocabulario sobre ${topic}. Después veremos ${grammarTitle}, practicaremos dos diálogos y terminaremos con un ejercicio de pronunciación.`,
    warmup: "Antes de empezar, hablemos un poco.",
    introTransition: "Antes de empezar, unas palabras de tu profesor.",
    introMonologue: [
      "¡Hola! Soy tu profesor para esta lección.",
      "Vamos a practicar vocabulario, gramática y un breve diálogo juntos.",
      "No te preocupes por los errores — pausa y repite cuando quieras.",
      "Cada lección se construye sobre lo que ya sabes.",
      "Te acompaño hasta el final.",
      "¿Listo? ¡Empecemos!",
    ],
    vocabIntro: (topic) => `Veamos algunas palabras sobre ${topic}.`,
    grammarIntro: "Veamos la gramática de hoy.",
    dialogueIntro: () => "Escuchemos un diálogo.",
    pronunciationIntro: "Practiquemos la pronunciación.",
    songIntro: "Para terminar, cantemos una canción.",
    agendaLabels: {
      intro: "Introducción",
      selfIntro: "Tu presentación",
      vocab: (topic) => `Vocabulario: ${topic}`,
      grammar: (title) => `Gramática: ${title}`,
      article: (title) => `Texto: ${title}`,
      questions: "Preguntas de comprensión",
      dialogueA: (title) => `Diálogo A: ${title}`,
      dialogueB: (title) => `Diálogo B: ${title}`,
      pronunciation: "Ejercicio de pronunciación",
      song: "Canción",
    },
    labels: { intro: "Introducción", agenda: "Esquema", vocabPrefix: "Vocabulario: ", pronunciation: "Ejercicio de pronunciación", song: "Canción" },
  },
  zh: {
    welcomeTitle: (topic) => `欢迎！今天我们要学习关于${topic}的内容。`,
    lessonLabel: (n, topic) => `第${n}课 — ${topic}`,
    agendaSpoken: (topic, grammarTitle) =>
      `今天我们先学习关于${topic}的词汇。然后我们会学习${grammarTitle}，练习两段对话，最后进行发音练习。`,
    warmup: "开始之前，我们先聊一聊。",
    introTransition: "开始之前，先听老师说几句话。",
    introMonologue: [
      "你好！我是这节课的老师。",
      "我们会一起练习词汇、语法和一段简短的对话。",
      "犯错没关系——你可以随时暂停并重复。",
      "每节课都建立在你已经学过的基础上。",
      "我会一直陪着你到最后。",
      "准备好了吗？我们开始吧！",
    ],
    vocabIntro: (topic) => `我们来看一些关于${topic}的词汇。`,
    grammarIntro: "我们来看看今天的语法。",
    dialogueIntro: () => "我们来听一段对话。",
    pronunciationIntro: "我们来练习发音。",
    songIntro: "最后，让我们一起唱首歌。",
    agendaLabels: {
      intro: "开场",
      selfIntro: "自我介绍",
      vocab: (topic) => `词汇：${topic}`,
      grammar: (title) => `语法：${title}`,
      article: (title) => `文章：${title}`,
      questions: "理解确认",
      dialogueA: (title) => `对话：${title}`,
      dialogueB: (title) => `对话：${title}`,
      pronunciation: "发音练习",
      song: "歌曲",
    },
    labels: { intro: "开场", agenda: "流程", vocabPrefix: "词汇：", pronunciation: "发音练习", song: "歌曲" },
  },
};

export function getPhrases(lang: LangCode): PhraseSet | undefined {
  return PHRASES[lang];
}

export function topicName(topic: Translations, lang: LangCode): string {
  return topic[lang] ?? topic.en ?? Object.values(topic)[0] ?? "";
}
