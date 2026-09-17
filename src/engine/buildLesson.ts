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
  ja: "Japanese", de: "German", en: "English", zh: "Chinese", fr: "French", es: "Spanish",
};

// Builds spoken/visible framing text for every language that HAS a
// phrase template (ja, de, fr, es, zh) — not just targetLang — since
// Translations lookups happen for whichever pair (source/target) is
// active at runtime, and either side could be a templated language.
// en is the one language without a template; it falls back to the raw
// topic name with no sentence wrapper below, rather than breaking
// entirely.
function framingText(
  build: (lang: LangCode, phrases: NonNullable<ReturnType<typeof getPhrases>>) => string,
  fallback: (lang: LangCode) => string,
): Translations {
  const out: Translations = {};
  (["ja", "de", "en", "zh", "fr", "es"] as LangCode[]).forEach((lang) => {
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
  sourceLang: LangCode,
  courseId: string,
): LessonPlan | null {
  const grammar = topic.grammar[targetLang];
  const pronunciation = topic.pronunciation[targetLang];
  if (!grammar || !pronunciation) return null; // can't build a full lesson without these — see topicTypes.ts

  // Every lesson built before this field existed was implicitly
  // en-sourced, and every id derived from idSuffix — including song
  // block ids, which SONG_MELODIES (songMelodies.ts) looks up by exact
  // id — was already baked in on that assumption. Appending sourceLang
  // unconditionally would silently break every existing melody lookup
  // (e.g. "topic-a1-01-family-de-song" would become
  // "...-de-en-song", no longer matching the stored key). So: leave
  // the id alone for the en-source case (preserves every existing id,
  // no migration needed), and only disambiguate for a non-en source —
  // which is exactly the new case this fixes (de-target/zh-source
  // would otherwise collide with the existing de-target/en-source
  // lesson's id).
  const idSuffix = sourceLang === "en"
    ? `${topic.id}-${targetLang}`
    : `${topic.id}-${targetLang}-${sourceLang}`;

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

  const article = topic.article?.[targetLang];
  const questionSet = topic.questions?.[targetLang];

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
        ...(article
          ? [{ id: "a3b", translations: framingText((lang: LangCode, p: NonNullable<ReturnType<typeof getPhrases>>) => p.agendaLabels.article(article.title[lang] ?? article.title.en ?? ""), () => article.title.en ?? "Article") }]
          : []),
        ...(questionSet
          ? [{ id: "a3c", translations: framingText((_: LangCode, p: NonNullable<ReturnType<typeof getPhrases>>) => p.agendaLabels.questions, () => "Comprehension Questions") }]
          : []),
        { id: "a4", translations: framingText((lang, p) => p.agendaLabels.dialogueA(topic.dialogueA.title[lang] ?? topic.dialogueA.title.en ?? ""), () => topic.dialogueA.title.en ?? "Dialogue A") },
        { id: "a5", translations: framingText((lang, p) => p.agendaLabels.dialogueB(topic.dialogueB.title[lang] ?? topic.dialogueB.title.en ?? ""), () => topic.dialogueB.title.en ?? "Dialogue B") },
        { id: "a6", translations: framingText((_, p) => p.agendaLabels.pronunciation, () => "Pronunciation Practice") },
        ...(topic.song ? [{ id: "a7", translations: framingText((_: LangCode, p: NonNullable<ReturnType<typeof getPhrases>>) => p.agendaLabels.song, () => "Song") }] : []),
      ],
    },
  };

  // Bilingual framing message (source then target, both actually spoken —
  // see TeacherCaption's bilingual prop) ending with the transition
  // phrase, followed by the monologue itself as a singlePass read-along
  // (see Block.singlePass) — reusing ReadalongBlock rather than the old
  // bare-bones IntroBlock, which just showed one static caption and
  // never invited the student to actually read anything. Was a full
  // 3-phase (echo/shadow/silent) read-along at first, same as a
  // dialogue; switched to singlePass once it became clear a welcome
  // message someone hears once doesn't need the same repeat-practice
  // treatment as content they're meant to drill — length was shortened
  // to match (the old 14-line monologue made sense to sit through 3
  // times over several minutes; it dragged as a single pass).
  const EN_FALLBACK_MONOLOGUE = [
    "Hello! I'm your trainer for this lesson.",
    "We'll practice vocabulary, grammar, and a short dialogue together.",
    "Don't worry about mistakes — feel free to pause and repeat anytime.",
    "Every lesson builds on what you already know.",
    "I'll guide you the whole way through.",
    "Ready? Let's begin!",
  ];
  const introBlock: Block = {
    id: `${idSuffix}-intro`,
    type: "readalong",
    displayMode: "face",
    estimatedMinutes: 2,
    title: framingText((_, p) => p.labels.intro, () => "Introduction"),
    spokenIntro: framingText(
      (_, p) => p.introTransition,
      () => "Here's a quick word from your trainer before we start.",
    ),
    spokenIntroBilingual: true,
    singlePass: true,
    content: {
      lines: EN_FALLBACK_MONOLOGUE.map((_, i) => ({
        id: `intro-${i}`,
        translations: framingText(
          (_, p) => p.introMonologue[i],
          () => EN_FALLBACK_MONOLOGUE[i],
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

  const grammarDrills = topic.grammarDrills?.[targetLang];
  const grammarDrillBlocks: Block[] = (grammarDrills ?? []).map((r) => ({
    id: `${idSuffix}-${r.id}`,
    type: "readalong",
    displayMode: "content",
    estimatedMinutes: 4,
    title: r.title,
    spokenIntro: r.spokenIntro ?? framingText((_, p) => p.grammarIntro, () => ""),
    content: { lines: r.lines },
  }));

  // Article + comprehension questions (see topicTypes.ts) — currently
  // only relevant for C1+ topics. Article renders as an ordinary
  // "readalong" block (same 3-phase mechanic as a dialogue, just one
  // continuous voice instead of back-and-forth speakers); questions get
  // their own dedicated block type since multiple-choice interaction
  // isn't something any existing block type does. Placed right after
  // grammar/grammarDrills and before the two dialogues — reading
  // comprehension naturally follows grammar instruction and precedes
  // the more conversational dialogue practice, matching the C1 table's
  // own column order (Grammar, Dialogue A, Dialogue B, Article,
  // Questions is the table's literal order, but article+questions read
  // better slotted right after grammar than wedged between the two
  // dialogues or tacked on at the very end).
  const articleBlock: Block | null = article
    ? {
        id: `${idSuffix}-article`,
        type: "readalong",
        displayMode: "face",
        estimatedMinutes: 5,
        title: article.title,
        spokenIntro: framingText((_, p) => p.dialogueIntro("generic"), () => ""),
        content: { lines: article.lines },
      }
    : null;

  const questionsBlock: Block | null = questionSet
    ? {
        id: `${idSuffix}-questions`,
        type: "questions",
        displayMode: "content",
        estimatedMinutes: 5,
        title: questionSet.title,
        spokenIntro: questionSet.spokenIntro ?? framingText((_, p) => p.grammarIntro, () => ""),
        content: { questions: questionSet.questions },
      }
    : null;

  const blocks: Block[] = [
    titleBlock, introBlock, agendaBlock,
    ...(selfIntroBlock ? [selfIntroBlock] : []),
    vocabBlock, grammarBlock,
    ...grammarDrillBlocks,
    ...(articleBlock ? [articleBlock] : []),
    ...(questionsBlock ? [questionsBlock] : []),
    dialogueABlock, dialogueBBlock, pronunciationBlock,
  ];

  const pronunciationDrills = topic.pronunciationDrills?.[targetLang];
  if (pronunciationDrills) {
    for (const drill of pronunciationDrills) {
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
    sourceLangCode: sourceLang,
    level: topic.level ?? CEFR_LEVEL[targetLang] ?? "A1",
    lessonNumber: topic.lessonNumber,
    title: topic.topicName,
    framingLanguage: "source",
    blocks,
  };
}
