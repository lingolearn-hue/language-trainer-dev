import type { LessonPlan, LangCode } from "../types";

// Small at-a-glance summary shown next to a lesson's button on the
// chooser screen — derived from the lesson's own blocks rather than
// authored separately, so it can't drift out of sync with the actual
// content.
//
// vocabTopic: the FIRST vocabDrill block is the lesson's main vocab topic
// (a later vocabDrill, e.g. a pronunciation/reading-practice slide, is a
// secondary drill, not "the" topic).
//
// songTitle: uses the explicit `isSong` flag on the block (see
// types/index.ts), NOT positional inference. An earlier version assumed
// "the last readalong block is always the song" — that broke once lessons
// started having two dialogues plus an optional, sometimes-reused song
// (see a1-master-lesson-table v02), since the last readalong could just
// as easily be Dialogue B with no song at all.
export interface LessonSummary {
  vocabTopic?: string;
  grammarItems: string[];
  songTitle?: string;
}

export function summarizeLesson(lesson: LessonPlan, lang: LangCode): LessonSummary {
  const firstVocab = lesson.blocks.find((b) => b.type === "vocabDrill");
  const grammarBlocks = lesson.blocks.filter((b) => b.type === "grammar");
  const songBlock = lesson.blocks.find((b) => b.type === "readalong" && b.isSong);

  return {
    vocabTopic: firstVocab?.title?.[lang] ?? firstVocab?.title?.en,
    grammarItems: grammarBlocks.map((b) => b.title?.[lang] ?? b.title?.en ?? "").filter(Boolean),
    songTitle: songBlock?.title?.[lang] ?? songBlock?.title?.en,
  };
}
