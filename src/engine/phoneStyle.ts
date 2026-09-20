import type { Block, LessonPlan, VocabDrillContent, VocabItem, ReadalongContent, GrammarContent, Translations } from "../types";
import { DEFAULT_CATEGORY_LABEL } from "../components/VocabDrillBlock";

// "Phone" teaching style: vocab/pronunciation slides with multiple
// columns get split so each column (or each declared paired-comparison
// group, see types/index.ts pairedColumns — kept together as one slide,
// since a row-by-row comparison only makes sense shown side by side)
// becomes its own single-column slide, shown at a higher font scale (see
// Slide.tsx's fontScale prop) — easier to read on a small screen, more
// slides to get through. Dialogue and grammar blocks have no column
// concept, so they keep the older even 3-way split instead. "Computer"
// style (the default) leaves the lesson completely untouched.
//
// Only vocabDrill/readalong/grammar blocks are split — each has a single
// natural list (items/lines/chunks) to divide. agenda (a one-glance table
// of contents), intro, and selfIntro (a combined template+options
// structure with no single splittable list) pass through unchanged; a
// forced split wouldn't make sense for any of them.
//
// This only ever runs once, right before a session starts (see App.tsx) —
// not on every render — so lesson.blocks staying a plain array (not
// re-computed reactively) is intentional, not an oversight.
const FONT_SCALE = 1.3;

// A category with more items than this still ends up on one slide
// today — VocabDrillBlock.tsx's own MAX_ROWS_PER_COLUMN=16 splits it
// into "Label 1"/"Label 2" sub-COLUMNS, but .vocab-groups lays every
// column out in a row regardless of that split, so on a narrow phone
// screen "Nouns 1" and "Nouns 2" still render squeezed side by side on
// the same slide rather than as separate pages — not what "only one
// column per slide, ~15 words" (the actual per-topic request this is
// solving) means on a phone. Chunking here, before groupKeysForPhone
// even runs, makes each chunk its own distinct category key, so it
// naturally becomes its own slide instead of a same-slide column.
const MAX_ITEMS_PER_SLIDE = 15;

// Splits any category over MAX_ITEMS_PER_SLIDE into several same-sized
// chunks, each given a synthetic category key ("noun#0", "noun#1", ...)
// and a matching numbered label ("Nouns 1", "Nouns 2", ...) so it reads
// the same way VocabDrillBlock.tsx's own internal splitting already
// labels things. Categories that are part of a declared pairedColumns
// comparison are left alone — those exist specifically to stay
// side-by-side for a row-by-row comparison, and are usually short
// enough (curated phonetic pairs, not a full vocab list) not to need
// this anyway.
function chunkLargeCategories(content: VocabDrillContent): VocabDrillContent {
  const byCategory = new Map<string, VocabItem[]>();
  const order: string[] = [];
  for (const item of content.items) {
    const key = item.category ?? "other";
    if (!byCategory.has(key)) {
      byCategory.set(key, []);
      order.push(key);
    }
    byCategory.get(key)!.push(item);
  }
  const pairedKeys = new Set(content.pairedColumns?.flat() ?? []);
  const newItems: VocabItem[] = [];
  const newGroupLabels: Record<string, Translations> = { ...content.groupLabels };

  for (const key of order) {
    const items = byCategory.get(key)!;
    if (items.length <= MAX_ITEMS_PER_SLIDE || pairedKeys.has(key)) {
      newItems.push(...items);
      continue;
    }
    const baseLabel: Translations | undefined = content.groupLabels?.[key] ?? DEFAULT_CATEGORY_LABEL[key];
    const chunkCount = Math.ceil(items.length / MAX_ITEMS_PER_SLIDE);
    for (let i = 0; i < chunkCount; i++) {
      const chunkKey = `${key}#${i}`;
      const chunkItems = items
        .slice(i * MAX_ITEMS_PER_SLIDE, (i + 1) * MAX_ITEMS_PER_SLIDE)
        .map((it) => ({ ...it, category: chunkKey }));
      newItems.push(...chunkItems);
      if (baseLabel) {
        const numbered: Translations = {};
        for (const [lang, text] of Object.entries(baseLabel)) {
          if (typeof text === "string") numbered[lang as keyof Translations] = `${text} ${i + 1}`;
        }
        newGroupLabels[chunkKey] = numbered;
      }
    }
  }
  return { ...content, items: newItems, groupLabels: newGroupLabels };
}

function splitArray<T>(arr: T[], parts: number): T[][] {
  if (arr.length === 0) return [];
  const size = Math.ceil(arr.length / parts);
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

// Groups a vocab-drill's items by category (preserving first-seen order),
// then folds any declared pairedColumns into one combined group each —
// keeping a comparison pair like pitch HL/LH together on a single slide
// rather than splitting a row-by-row comparison across two separate
// slides, which would defeat the point of pairing them at all.
function groupKeysForPhone(content: VocabDrillContent): string[][] {
  const order: string[] = [];
  const seen = new Set<string>();
  for (const item of content.items) {
    const key = item.category ?? "other";
    if (!seen.has(key)) {
      seen.add(key);
      order.push(key);
    }
  }
  const consumed = new Set<string>();
  const groups: string[][] = [];
  for (const key of order) {
    if (consumed.has(key)) continue;
    const pair = content.pairedColumns?.find(([a, b]) => a === key || b === key);
    if (pair && pair.every((k) => seen.has(k))) {
      groups.push(pair);
      pair.forEach((k) => consumed.add(k));
      continue;
    }
    groups.push([key]);
    consumed.add(key);
  }
  return groups;
}

function splitBlock(block: Block): Block[] {
  if (block.type === "vocabDrill") {
    const rawContent = block.content as VocabDrillContent;
    const content = chunkLargeCategories(rawContent);
    const groups = groupKeysForPhone(content);
    if (groups.length <= 1) return [block]; // nothing to split — single category already fits one slide
    return groups.map((keys, i) => {
      const items: VocabItem[] = content.items.filter((it) => keys.includes(it.category ?? "other"));
      return {
        ...block,
        id: `${block.id}-phone${i + 1}`,
        fontScale: FONT_SCALE,
        // Only the first fragment keeps spokenIntro — it's a one-time
        // "let's look at vocabulary" transition, not per-category
        // content; repeating it before every split-off category would
        // mean it gets read again and again as the learner pages
        // through what was originally one slide.
        spokenIntro: i === 0 ? block.spokenIntro : undefined,
        content: { items, groupLabels: content.groupLabels, pairedColumns: content.pairedColumns },
      };
    });
  }
  if (block.type === "readalong") {
    if (block.singlePass) return [block]; // intro (currently the only singlePass block) is a short welcome message meant to be seen as one continuous pass, not fragmented into several 2-line slides each needing its own "Continue" click — the comment above already said intro isn't split, but nothing actually enforced that until now
    const content = block.content as ReadalongContent;
    const chunks = splitArray(content.lines, 3);
    if (chunks.length <= 1) return [block];
    return chunks.map((lines, i) => ({
      ...block,
      id: `${block.id}-phone${i + 1}`,
      fontScale: FONT_SCALE,
      spokenIntro: i === 0 ? block.spokenIntro : undefined, // same reasoning as the vocabDrill case above — one-time transition, not per-fragment content
      content: { lines },
    }));
  }
  if (block.type === "grammar") {
    const content = block.content as GrammarContent;
    const hasExplanation = content.explanation && Object.keys(content.explanation).length > 0;
    const chunkGroups = splitArray(content.chunks, 3);
    const result: Block[] = [];
    // Explanation is prose meant to be read as its own thing before any
    // examples — cramming it onto the same slide as the first 1-2
    // examples (the old behavior) meant the explanation and the first
    // example competed for the same cramped slide. A dedicated
    // explanation-only slide first, then chunks-only slides after.
    if (hasExplanation) {
      result.push({
        ...block,
        id: `${block.id}-phone-explanation`,
        fontScale: FONT_SCALE,
        content: { explanation: content.explanation, chunks: [] },
      });
    }
    chunkGroups.forEach((chunkGroup, i) => {
      const isVeryFirstFragment = !hasExplanation && i === 0;
      result.push({
        ...block,
        id: `${block.id}-phone${i + 1}`,
        fontScale: FONT_SCALE,
        // Same reasoning as the vocabDrill/readalong cases above — but
        // here the "first fragment" is the dedicated explanation slide
        // when there is one, so every chunk-group slide clears it,
        // unless there was no explanation at all (isVeryFirstFragment).
        spokenIntro: isVeryFirstFragment ? block.spokenIntro : undefined,
        content: { explanation: {}, chunks: chunkGroup },
      });
    });
    if (result.length <= 1) return [block]; // nothing gained from splitting
    return result;
  }
  return [block]; // agenda, intro, selfIntro — not split
}

export function applyPhoneStyle(lesson: LessonPlan): LessonPlan {
  return { ...lesson, blocks: lesson.blocks.flatMap(splitBlock) };
}
