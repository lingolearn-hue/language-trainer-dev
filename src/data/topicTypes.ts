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

export interface TopicLesson {
  id: string; // "topic-05-food"
  lessonNumber: number; // master table row
  topicName: Translations; // {en:"Food", ja:"たべもの", de:"Essen", zh:"食物"}
  vocab: VocabItem[];
  dialogueA: TopicDialogue;
  dialogueB: TopicDialogue;
  song?: TopicSong;
  // Per-target-language only — see file header. A language missing here
  // means no LessonPlan can be built for that target yet, even if vocab
  // is translated into it.
  grammar: Partial<Record<LangCode, TopicGrammar>>;
  pronunciation: Partial<Record<LangCode, TopicPronunciation>>;
}
