import type { Block, LessonPlan, VocabDrillContent, ReadalongContent, GrammarContent } from "../types";

// "Flexible" teaching style: each splittable slide becomes 3 slides with
// roughly a third of the content each, shown at a higher font scale (see
// Slide.tsx's fontScale prop) — smaller chunks, easier to read, more
// slides to get through. "Structured" style (the default) leaves the
// lesson completely untouched.
//
// Only vocabDrill/readalong/grammar blocks are split — each has a single
// natural list (items/lines/chunks) to divide. agenda (a one-glance table
// of contents), intro, and selfIntro (a combined template+options
// structure with no single splittable list) pass through unchanged; a
// forced 3-way split wouldn't make sense for any of them.
//
// This only ever runs once, right before a session starts (see App.tsx) —
// not on every render — so lesson.blocks staying a plain array (not
// re-computed reactively) is intentional, not an oversight.
const FONT_SCALE = 1.3;

function splitArray<T>(arr: T[], parts: number): T[][] {
  if (arr.length === 0) return [];
  const size = Math.ceil(arr.length / parts);
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function splitBlock(block: Block): Block[] {
  if (block.type === "vocabDrill") {
    const content = block.content as VocabDrillContent;
    const chunks = splitArray(content.items, 3);
    if (chunks.length <= 1) return [block];
    return chunks.map((items, i) => ({
      ...block,
      id: `${block.id}-flex${i + 1}`,
      fontScale: FONT_SCALE,
      content: { ...content, items },
    }));
  }
  if (block.type === "readalong") {
    const content = block.content as ReadalongContent;
    const chunks = splitArray(content.lines, 3);
    if (chunks.length <= 1) return [block];
    return chunks.map((lines, i) => ({
      ...block,
      id: `${block.id}-flex${i + 1}`,
      fontScale: FONT_SCALE,
      content: { lines },
    }));
  }
  if (block.type === "grammar") {
    const content = block.content as GrammarContent;
    const chunks = splitArray(content.chunks, 3);
    if (chunks.length <= 1) return [block];
    return chunks.map((chunkGroup, i) => ({
      ...block,
      id: `${block.id}-flex${i + 1}`,
      fontScale: FONT_SCALE,
      // Only the first sub-block keeps the framing explanation text —
      // repeating it on all 3 would be redundant since it's not
      // per-example content, just a one-time lead-in.
      content: { explanation: i === 0 ? content.explanation : {}, chunks: chunkGroup },
    }));
  }
  return [block]; // agenda, intro, selfIntro — not split
}

export function applyFlexibleStyle(lesson: LessonPlan): LessonPlan {
  return { ...lesson, blocks: lesson.blocks.flatMap(splitBlock) };
}
