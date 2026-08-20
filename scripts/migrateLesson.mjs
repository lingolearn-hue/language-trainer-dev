// One-off migration helper: imports an existing hand-written lesson
// module (run via `npx tsx`, which handles on-the-fly TS transpilation)
// and emits the equivalent TopicLesson source file. Used to migrate the
// Japanese lessons into the topic-based system (see
// docs/topic-lesson-system.md) without hand-retyping ~300 lines of
// already-correct content per lesson — this only restructures data that
// already exists, it doesn't author anything new.

function jsLiteral(value, indent = 2) {
  return JSON.stringify(value, null, indent).replace(/"([a-zA-Z_$][a-zA-Z0-9_$]*)":/g, "$1:");
}

export async function migrate(modulePath, exportName, opts) {
  const mod = await import(modulePath);
  const lesson = mod[exportName];
  const blocks = lesson.blocks;

  const titleBlock = blocks.find((b) => b.type === "intro" && b.id.endsWith("-title"));
  const vocabBlock = blocks.find((b) => b.type === "vocabDrill" && b.content.items && !b.content.groupLabels);
  const grammarBlock = blocks.find((b) => b.type === "grammar");
  const dialogueBlocks = blocks.filter((b) => b.type === "readalong" && !b.isSong);
  const pronunciationBlock = blocks.find((b) => b.type === "vocabDrill" && b.id.includes("pronunciation"));
  const songBlock = blocks.find((b) => b.isSong);

  const topic = {
    id: opts.topicId,
    lessonNumber: lesson.lessonNumber,
    topicName: titleBlock.title,
    vocab: vocabBlock.content.items,
    dialogueA: { title: dialogueBlocks[0].title, lines: dialogueBlocks[0].content.lines },
    dialogueB: { title: dialogueBlocks[1].title, lines: dialogueBlocks[1].content.lines },
  };
  if (songBlock) {
    topic.song = { title: songBlock.title, lines: songBlock.content.lines };
  }
  topic.grammar = {
    [opts.lang]: {
      title: grammarBlock.title,
      explanation: grammarBlock.content.explanation,
      chunks: grammarBlock.content.chunks,
    },
  };
  topic.pronunciation = {
    [opts.lang]: {
      title: pronunciationBlock.title,
      groupLabels: pronunciationBlock.content.groupLabels,
      items: pronunciationBlock.content.items,
    },
  };

  const source = `import type { TopicLesson } from "../topicTypes";

// Migrated from ${opts.sourceFile} — see docs/topic-lesson-system.md.
// Vocab/dialogue/song extracted verbatim (already fully multi-language
// data); ${opts.lang} grammar/pronunciation carried over unchanged from
// the original file. No content was rewritten in this migration.

export const ${opts.exportVar}: TopicLesson = ${jsLiteral(topic)};
`;

  return source;
}
