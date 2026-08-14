import type { LessonPlan, LangCode } from "../types";

// Small at-a-glance summary shown next to a lesson's button on the
// chooser screen — derived from the lesson's own blocks rather than
// authored separately, so it can't drift out of sync with the actual
// content. Relies on two conventions already established across every
// lesson file (lesson2.ts, lessonEnglishSpace.ts, lessonJapanese2.ts):
//   - the FIRST vocabDrill block is the lesson's main vocab topic
//     (a later vocabDrill, e.g. a pronunciation/reading-practice slide,
//     is a secondary drill, not "the" topic)
//   - the LAST readalong block is always the closing song (see the
//     "song always closes the lesson" comment in each lesson's blocks
//     array) — earlier readalong blocks are dialogues, not songs
export interface LessonSummary {
  vocabTopic?: string;
  grammarItems: string[];
  songTitle?: string;
}

export function summarizeLesson(lesson: LessonPlan, lang: LangCode): LessonSummary {
  const firstVocab = lesson.blocks.find((b) => b.type === "vocabDrill");
  const grammarBlocks = lesson.blocks.filter((b) => b.type === "grammar");
  const readalongBlocks = lesson.blocks.filter((b) => b.type === "readalong");
  const songBlock = readalongBlocks[readalongBlocks.length - 1];

  return {
    vocabTopic: firstVocab?.title?.[lang] ?? firstVocab?.title?.en,
    grammarItems: grammarBlocks.map((b) => b.title?.[lang] ?? b.title?.en ?? "").filter(Boolean),
    songTitle: songBlock?.title?.[lang] ?? songBlock?.title?.en,
  };
}
