// Authoring-time model: one TopicLesson holds everything needed to build
// a real LessonPlan for ANY target language that has grammar +
// pronunciation authored for it. Vocab/dialogue/song are genuinely
// shared (already stored as full multi-language Translations objects,
// not "language X content with translations bolted on") — grammar and
// pronunciation are NOT shareable (each teaches that language's own
// actual mechanics) and are keyed per target language, populated only
// where real content has been authored.
import type { LangCode, Translations, VocabItem, ReadalongLine, GrammarContent, VocabDrillContent, SelfIntroContent, ComprehensionQuestion } from "../types";

export interface TopicDialogue {
  title: Translations;
  lines: ReadalongLine[];
}

export interface TopicSong {
  title: Translations;
  lines: ReadalongLine[];
}

export interface TopicGrammarPrimer extends GrammarContent {
  title: Translations;
}

export interface TopicPronunciationPrimer extends VocabDrillContent {
  title: Translations;
}

export interface TopicPronunciationDrill extends VocabDrillContent {
  id: string; // suffix for the generated block id
  title: Translations;
  spokenIntro?: Translations;
}

// A reinforcement slide in dialogue format (target left / source right,
// 3-phase echo/shadow/silent) instead of TopicPronunciationDrill's
// column-grouped vocab-table format — for content that reads better as
// a flowing list of example sentences than as short word-bank columns.
// Each line's translations are a full Translations object, same as
// everywhere else, so any language can be picked as target/source at
// session time — not fixed to whichever pair the sentences were
// originally drafted for.
export interface TopicGrammarDrill {
  id: string; // suffix for the generated block id
  title: Translations;
  spokenIntro?: Translations;
  lines: ReadalongLine[];
}

export interface TopicSelfIntro extends SelfIntroContent {
  title: Translations;
}

// A standalone reading passage — e.g. the C1 master table's "Article"
// column (docs/c1-master-lesson-table-v01.md). Modeled exactly like
// TopicDialogue (title + lines), since it's read the same way: a
// 3-phase echo/shadow/silent readalong via the existing ReadalongBlock,
// just narrated as continuous prose (one "speaker": the article itself)
// rather than back-and-forth dialogue. No new rendering component
// needed — see buildLesson.ts, which turns this into an ordinary
// "readalong" block the same way it already does for dialogueA/B.
export interface TopicArticle {
  title: Translations;
  lines: ReadalongLine[]; // paragraphs/sentences, no `speaker` needed
}

// Reading-comprehension multiple-choice questions tied to `article`
// above. See ComprehensionQuestion/QuestionsContent in types/index.ts
// for why multiple-choice specifically. Independent of TopicArticle
// (both optional) so a topic can have one without the other, though in
// practice they're expected to be paired — see the C1 table's
// "Questions" column, which always has a matching "Article" column.
export interface TopicQuestionSet {
  title: Translations;
  spokenIntro?: Translations;
  questions: ComprehensionQuestion[];
}

export interface TopicLesson {
  id: string; // "topic-05-food"
  lessonNumber: number; // master table row
  topicName: Translations; // {en:"Food", ja:"たべもの", de:"Essen", zh:"食物"}
  // CEFR level, e.g. "A1", "A2". Optional — defaults to the target
  // language's usual level (buildLesson.ts's CEFR_LEVEL) when not set,
  // since every topic before A2 lessons existed was implicitly A1.
  level?: string;
  vocab: VocabItem[];
  dialogueA: TopicDialogue;
  dialogueB: TopicDialogue;
  song?: TopicSong;
  // Extra vocabDrill-style slides beyond the standard vocab+pronunciation
  // pair (e.g. Japanese Lesson 8's number/R-sound drill) — per target
  // language, since these are usually language-specific practice content
  // just like grammar/pronunciation.
  pronunciationDrills?: Partial<Record<LangCode, TopicPronunciationDrill[]>>;
  // Same idea as pronunciationDrills, but dialogue-format (see
  // TopicGrammarDrill) instead of column-grouped vocab tables — e.g.
  // grammar reinforcement as flowing example sentences, one grammar
  // sub-concept per slide, rather than one dense multi-column table.
  grammarDrills?: Partial<Record<LangCode, TopicGrammarDrill[]>>;
  // Self-introduction template slide (fill-in-the-blank name/hometown/etc
  // read by the student, plus a silent word-bank and a spoken "reasons"
  // demonstration) — per target language, same as grammar/pronunciation,
  // since the template phrasing is language-specific. Optional: topics
  // without one just skip this slide (see buildLesson.ts).
  selfIntro?: Partial<Record<LangCode, TopicSelfIntro>>;
  // A standalone reading passage (see TopicArticle above) — optional,
  // per target language like grammar/pronunciation since the passage
  // text itself IS the target-language content being read, not shared
  // vocab/dialogue data. Currently only relevant for C1+ topics (see
  // docs/c1-master-lesson-table-v01.md); no A1/A2 topic uses this.
  article?: Partial<Record<LangCode, TopicArticle>>;
  // Comprehension questions tied to `article` above — same per-language
  // keying, same reasoning. See TopicQuestionSet above.
  questions?: Partial<Record<LangCode, TopicQuestionSet>>;
  // Per-target-language only — see file header. A language missing here
  // means no LessonPlan can be built for that target yet, even if vocab
  // is translated into it.
  grammar: Partial<Record<LangCode, TopicGrammarPrimer>>;
  pronunciation: Partial<Record<LangCode, TopicPronunciationPrimer>>;
  // Small per-target-language text patches applied to the otherwise-fully
  // -shared vocab/dialogueA/dialogueB/song content. For isolated cases
  // where a single word or phrase in the shared content is specific to
  // another language's cultural context (e.g. Yen pricing baked into a
  // shared shopping dialogue) and shouldn't leak into a different target
  // language's course — without forking the whole shared item, which
  // would duplicate everything else about it and drift out of sync.
  // Keyed by [targetLang][itemId], where itemId is the vocab item's or
  // dialogue line's own id. The override replaces only that language's
  // own translations entry for that one item; every other language's
  // text for that item, and every other item, is untouched.
  overrides?: Partial<Record<LangCode, Record<string, string>>>;
}
