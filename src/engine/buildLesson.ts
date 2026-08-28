// Assembles a real LessonPlan (the same type every existing hand-written
// lesson file already produces) from a TopicLesson + a chosen target
// language. Session.tsx, VocabDrillBlock, ReadalongBlock etc. all consume
// LessonPlan/Block exactly as before — this only changes how the object
// gets constructed, not what consumes it, so the blast radius of adding
// this system is intentionally small.
import type { LangCode, LessonPlan, Block, Translations } from "../types";
import type { TopicLesson } from "../data/topicTypes";
import { getPhrases, topicName as resolveTopicName } from "../data/phraseTemplates";

const CEFR_LEVEL: Partial<Record<LangCode, string>> = { ja: "A1", de: "A1" };
const LANGUAGE_DISPLAY_NAME: Record<LangCode, string> = {
  ja: "Japanese", de: "German", en: "English", zh: "Chinese",
};

// Builds spoken/visible framing text for every language that HAS a
// phrase template (currently ja, de) — not just targetLang — since
// Translations lookups happen for whichever pair (source/target) is
// active at runtime, and either side could be a templated language.
// Languages without a template (en, zh currently) fall back to the raw
// topic name with no sentence wrapper, rather than breaking entirely.
function framingText(
  build: (lang: LangCode, phrases: NonNullable<ReturnType<typeof getPhrases>>) => string,
  fallback: (lang: LangCode) => string,
): Translations {
  const out: Translations = {};
  (["ja", "de", "en", "zh"] as LangCode[]).forEach((lang) => {
    const phrases = getPhrases(lang);
    out[lang] = phrases ? build(lang, phrases) : fallback(lang);
  });
  return out;
}

// Applies topic.overrides (see topicTypes.ts) for the given target
// language: shallow-clones only the items whose id has an override,
// replacing just that language's own translations field. Items with no
// override, and all other languages on overridden items, pass through
// as the exact same object references — cheap, and safe since nothing
// downstream mutates these.
function applyOverrides<T extends { id: string; translations: Translations }>(
  items: T[],
  targetLang: LangCode,
  overrides?: Partial<Record<LangCode, Record<string, string>>>,
): T[] {
  const forLang = overrides?.[targetLang];
  if (!forLang) return items;
  return items.map((item) => {
    const replacement = forLang[item.id];
    if (replacement === undefined) return item;
    return { ...item, translations: { ...item.translations, [targetLang]: replacement } };
  });
}

export function buildLessonPlan(
  topic: TopicLesson,
  targetLang: LangCode,
  _sourceLang: LangCode, // reserved for future use (e.g. source-language-specific framing variants)
  courseId: string,
): LessonPlan | null {
  const grammar = topic.grammar[targetLang];
  const pronunciation = topic.pronunciation[targetLang];
  if (!grammar || !pronunciation) return null; // can't build a full lesson without these — see topicTypes.ts

  const idSuffix = `${topic.id}-${targetLang}`;

  const titleBlock: Block = {
    id: `${idSuffix}-title`,
    type: "intro",
    displayMode: "face",
    estimatedMinutes: 1,
    title: topic.topicName,
    spokenIntro: framingText(
      (lang, p) => p.welcomeTitle(resolveTopicName(topic.topicName, lang)),
      (lang) => resolveTopicName(topic.topicName, lang),
    ),
    content: {
      text: framingText(
        (lang, p) => p.lessonLabel(topic.lessonNumber, resolveTopicName(topic.topicName, lang)),
        (lang) => resolveTopicName(topic.topicName, lang),
      ),
    },
  };

  const agendaBlock: Block = {
    id: `${idSuffix}-agenda`,
    type: "agenda",
    displayMode: "content",
    estimatedMinutes: 1,
    title: framingText((_, p) => p.labels.agenda, () => "Agenda"),
    spokenIntro: framingText(
      (lang, p) => p.agendaSpoken(resolveTopicName(topic.topicName, lang), grammar.title[lang] ?? grammar.title.en ?? ""),
      () => "",
    ),
    content: {
      items: [
        ...(topic.selfIntro?.[targetLang]
          ? [{ id: "a1b", translations: framingText((_: LangCode, p: NonNullable<ReturnType<typeof getPhrases>>) => p.agendaLabels.selfIntro, () => "Your Self-Introduction") }]
          : []),
        { id: "a2", translations: framingText((lang, p) => p.agendaLabels.vocab(resolveTopicName(topic.topicName, lang)), () => "Vocabulary") },
        { id: "a3", translations: framingText((lang, p) => p.agendaLabels.grammar(grammar.title[lang] ?? grammar.title.en ?? ""), () => grammar.title.en ?? "Grammar") },
        { id: "a4", translations: framingText((lang, p) => p.agendaLabels.dialogueA(topic.dialogueA.title[lang] ?? topic.dialogueA.title.en ?? ""), () => topic.dialogueA.title.en ?? "Dialogue A") },
        { id: "a5", translations: framingText((lang, p) => p.agendaLabels.dialogueB(topic.dialogueB.title[lang] ?? topic.dialogueB.title.en ?? ""), () => topic.dialogueB.title.en ?? "Dialogue B") },
        { id: "a6", translations: framingText((_, p) => p.agendaLabels.pronunciation, () => "Pronunciation Practice") },
        ...(topic.song ? [{ id: "a7", translations: framingText((_: LangCode, p: NonNullable<ReturnType<typeof getPhrases>>) => p.agendaLabels.song, () => "Song") }] : []),
      ],
    },
  };

  // Bilingual framing message (source then target, both actually spoken —
  // see TeacherCaption's bilingual prop) ending with the transition
  // phrase, followed by the monologue itself as a normal 3-phase
  // (echo/shadow/silent) read-along — reusing ReadalongBlock rather than
  // the old bare-bones IntroBlock, which just showed one static caption
  // and never invited the student to actually read anything.
  const EN_FALLBACK_MONOLOGUE = [
    "Hello! I'm your trainer for this lesson.",
    "I'm glad you're here today.",
    "Learning a language is fun, especially at your own pace.",
    "In this lesson, we'll practice vocabulary and grammar together.",
    "We'll also listen to a short dialogue and practice speaking it.",
    "Don't worry about mistakes — they're part of learning.",
    "Feel free to pause and repeat as many times as you like.",
    "If it feels too fast, take a short break.",
    "If it feels too easy, we can move a bit quicker.",
    "Every lesson builds on what you already know.",
    "By the end, you'll be able to use new words and phrases with confidence.",
    "I'll guide you the whole way through.",
    "Let's take this step by step, together.",
    "Ready? Let's begin!",
  ];
  const ZH_FALLBACK_MONOLOGUE = [
    "你好！我是这节课的老师。",
    "很高兴你今天能来。",
    "学习一门语言很有趣，尤其是按照自己的节奏来学。",
    "在这节课中，我们会一起练习词汇和语法。",
    "我们还会听一段简短的对话，并练习说出来。",
    "不用担心出错——这也是学习的一部分。",
    "你可以随时暂停，重复多少次都可以。",
    "如果觉得太快了，可以稍作休息。",
    "如果觉得太简单了，我们可以稍微加快一点。",
    "每节课都是在你已经学过的基础上继续的。",
    "到最后，你就能自信地使用新单词和新句子了。",
    "我会一直陪着你。",
    "让我们一步一步一起前进吧。",
    "准备好了吗？我们开始吧！",
  ];
  const introBlock: Block = {
    id: `${idSuffix}-intro`,
    type: "readalong",
    displayMode: "face",
    estimatedMinutes: 3,
    title: framingText((_, p) => p.labels.intro, () => "Introduction"),
    spokenIntro: framingText(
      (_, p) => p.introTransition,
      (lang) =>
        lang === "zh"
          ? "我们先一起读一遍我的文本。之后，你可以再读一次，也可以用自己的话说。"
          : "We'll first read my proposal together. After that, you can read it again, or use your own words.",
    ),
    spokenIntroBilingual: true,
    content: {
      lines: EN_FALLBACK_MONOLOGUE.map((_, i) => ({
        id: `intro-${i}`,
        translations: framingText(
          (_, p) => p.introMonologue[i],
          (lang) => (lang === "zh" ? ZH_FALLBACK_MONOLOGUE[i] : EN_FALLBACK_MONOLOGUE[i]),
        ),
      })),
    },
  };

  const selfIntro = topic.selfIntro?.[targetLang];
  const selfIntroBlock: Block | null = selfIntro
    ? {
        id: `${idSuffix}-self-intro`,
        type: "selfIntro",
        displayMode: "content",
        estimatedMinutes: 5,
        title: selfIntro.title,
        content: {
          template: selfIntro.template,
          wordBank: selfIntro.wordBank,
          optionsIntro: selfIntro.optionsIntro,
          options: selfIntro.options,
          choosePrompt: selfIntro.choosePrompt,
        },
      }
    : null;

  const vocabBlock: Block = {
    id: `${idSuffix}-vocab`,
    type: "vocabDrill",
    displayMode: "content",
    estimatedMinutes: 6,
    title: framingText((lang, p) => `${p.labels.vocabPrefix}${resolveTopicName(topic.topicName, lang)}`, (lang) => resolveTopicName(topic.topicName, lang)),
    spokenIntro: framingText((lang, p) => p.vocabIntro(resolveTopicName(topic.topicName, lang)), () => ""),
    content: { items: applyOverrides(topic.vocab, targetLang, topic.overrides) },
  };

  const grammarBlock: Block = {
    id: `${idSuffix}-grammar`,
    type: "grammar",
    displayMode: "content",
    estimatedMinutes: 6,
    title: grammar.title,
    spokenIntro: framingText((_, p) => p.grammarIntro, () => ""),
    content: { explanation: grammar.explanation, chunks: grammar.chunks },
  };

  const dialogueABlock: Block = {
    id: `${idSuffix}-dialogue-a`,
    type: "readalong",
    displayMode: "face",
    estimatedMinutes: 6,
    title: topic.dialogueA.title,
    spokenIntro: framingText((_, p) => p.dialogueIntro("generic"), () => ""),
    content: { lines: applyOverrides(topic.dialogueA.lines, targetLang, topic.overrides) },
  };

  const dialogueBBlock: Block = {
    id: `${idSuffix}-dialogue-b`,
    type: "readalong",
    displayMode: "face",
    estimatedMinutes: 6,
    title: topic.dialogueB.title,
    spokenIntro: framingText((_, p) => p.dialogueIntro("generic"), () => ""),
    content: { lines: applyOverrides(topic.dialogueB.lines, targetLang, topic.overrides) },
  };

  const pronunciationBlock: Block = {
    id: `${idSuffix}-pronunciation`,
    type: "vocabDrill",
    displayMode: "content",
    estimatedMinutes: 4,
    title: pronunciation.title,
    spokenIntro: framingText((_, p) => p.pronunciationIntro, () => ""),
    content: { items: pronunciation.items, groupLabels: pronunciation.groupLabels, pairedColumns: pronunciation.pairedColumns },
  };

  const extraReadalongs = topic.extraReadalongs?.[targetLang];
  const extraReadalongBlocks: Block[] = (extraReadalongs ?? []).map((r) => ({
    id: `${idSuffix}-${r.id}`,
    type: "readalong",
    displayMode: "content",
    estimatedMinutes: 4,
    title: r.title,
    spokenIntro: r.spokenIntro ?? framingText((_, p) => p.grammarIntro, () => ""),
    content: { lines: r.lines },
  }));

  const blocks: Block[] = [
    titleBlock, introBlock, agendaBlock,
    ...(selfIntroBlock ? [selfIntroBlock] : []),
    vocabBlock, grammarBlock,
    ...extraReadalongBlocks,
    dialogueABlock, dialogueBBlock, pronunciationBlock,
  ];

  const extraDrills = topic.extraDrills?.[targetLang];
  if (extraDrills) {
    for (const drill of extraDrills) {
      blocks.push({
        id: `${idSuffix}-${drill.id}`,
        type: "vocabDrill",
        displayMode: "content",
        estimatedMinutes: 6,
        title: drill.title,
        spokenIntro: drill.spokenIntro ?? framingText((_, p) => p.pronunciationIntro, () => ""),
        content: { items: drill.items, groupLabels: drill.groupLabels, pairedColumns: drill.pairedColumns },
      });
    }
  }

  if (topic.song) {
    blocks.push({
      id: `${idSuffix}-song`,
      type: "readalong",
      displayMode: "face",
      estimatedMinutes: 4,
      isSong: true,
      title: topic.song.title,
      spokenIntro: framingText((_, p) => p.songIntro, () => ""),
      content: { lines: applyOverrides(topic.song.lines, targetLang, topic.overrides) },
    });
  }

  return {
    id: `lesson-${idSuffix}`,
    courseId,
    language: LANGUAGE_DISPLAY_NAME[targetLang],
    targetLangCode: targetLang,
    level: CEFR_LEVEL[targetLang] ?? "A1",
    lessonNumber: topic.lessonNumber,
    title: topic.topicName,
    framingLanguage: "source",
    blocks,
  };
}
