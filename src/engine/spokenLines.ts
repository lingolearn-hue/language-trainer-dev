import type {
  Block,
  LangCode,
  VocabDrillContent,
  ReadalongContent,
  GrammarContent,
  IntroContent,
} from "../types";

export interface SpokenLine {
  label: string; // e.g. "v01", "line 3", "explanation"
  text: string;
}

// Pulls out every piece of text a trainer would speak (or that's shown as
// the "target" language) for a given block, regardless of type. Used by the
// audit overlay so reviewers can read the full verbal content of a slide
// without triggering TTS playback.
export function getSpokenLines(block: Block, targetLang: LangCode): SpokenLine[] {
  switch (block.type) {
    case "vocabDrill": {
      const content = block.content as VocabDrillContent;
      return content.items
        .map((item) => ({ label: item.id, text: item.translations[targetLang] ?? "" }))
        .filter((l) => l.text);
    }
    case "readalong": {
      const content = block.content as ReadalongContent;
      return content.lines
        .map((line) => ({ label: line.id, text: line.translations[targetLang] ?? "" }))
        .filter((l) => l.text);
    }
    case "grammar": {
      const content = block.content as GrammarContent;
      const lines: SpokenLine[] = [];
      if (content.explanation[targetLang]) {
        lines.push({ label: "explanation", text: content.explanation[targetLang]! });
      }
      content.chunks.forEach((chunk) => {
        const text = chunk.translations[targetLang];
        if (text) lines.push({ label: chunk.id, text });
      });
      return lines;
    }
    case "intro": {
      const content = block.content as IntroContent;
      const text = content.text[targetLang];
      return text ? [{ label: "intro", text }] : [];
    }
    default:
      return [];
  }
}
