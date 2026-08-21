// Authoring-time model: one TopicLesson holds everything needed to build
// a real LessonPlan for ANY target language that has grammar +
// pronunciation authored for it. Vocab/dialogue/song are genuinely
// shared (already stored as full multi-language Translations objects,
// not "language X content with translations bolted on") — grammar and
// pronunciation are NOT shareable (each teaches that language's own
// actual mechanics) and are keyed per target language, populated only
// where real content has been authored.
import type { LangCode, Translations, VocabItem, ReadalongLine, GrammarContent, VocabDrillContent } from "../types";

export interface TopicDialogue {
  title: Translations;
  lines: ReadalongLine[];
}

export interface TopicSong {
  title: Translations;
  lines: ReadalongLine[];
}

export interface TopicGrammar extends GrammarContent {
  title: Translations;
}

export interface TopicPronunciation extends VocabDrillContent {
  title: Translations;
}

export interface TopicExtraDrill extends VocabDrillContent {
  id: string; // suffix for the generated block id
  title: Translations;
  spokenIntro?: Translations;
}

export interface TopicLesson {
  id: string; // "topic-05-food"
  lessonNumber: number; // master table row
  topicName: Translations; // {en:"Food", ja:"たべもの", de:"Essen", zh:"食物"}
  vocab: VocabItem[];
  dialogueA: TopicDialogue;
  dialogueB: TopicDialogue;
  song?: TopicSong;
  // Extra vocabDrill-style slides beyond the standard vocab+pronunciation
  // pair (e.g. Japanese Lesson 8's number/R-sound drill) — per target
  // language, since these are usually language-specific practice content
  // just like grammar/pronunciation.
  extraDrills?: Partial<Record<LangCode, TopicExtraDrill[]>>;
  // Per-target-language only — see file header. A language missing here
  // means no LessonPlan can be built for that target yet, even if vocab
  // is translated into it.
  grammar: Partial<Record<LangCode, TopicGrammar>>;
  pronunciation: Partial<Record<LangCode, TopicPronunciation>>;
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
