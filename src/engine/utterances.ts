import type {
  Block,
  LangCode,
  Translations,
  VocabDrillContent,
  ReadalongContent,
  GrammarContent,
  SelfIntroContent,
  QuestionsContent,
} from "../types";
import { splitIntoSentences } from "./speech";

// Pure enumeration of every DISTINCT (lang, text) pair a block can ever
// have spoken aloud, for the TTS pre-generation manifest (see
// scripts/tts-manifest.ts) — not a replacement for the actual runtime
// playback logic in TeacherCaption.tsx/GrammarBlock.tsx/ReadalongBlock.tsx
// /VocabDrillBlock.tsx/SelfIntroBlock.tsx/QuestionsBlock.tsx, which each
// keep their own autoplay timing, phase-cycling, and UI-sync code
// untouched. This file exists because, for pre-generation, none of that
// matters — a line spoken 3 times across echo/shadow/silent phases still
// only needs ONE audio file, since lookup is by content hash (see
// audioHash.ts), not by when/how-often it plays. So the only thing that
// has to stay in sync with the real components is the simple part: which
// language(s) is each field spoken in, and (for explanation/spokenIntro)
// how it's split into sentences. Verified line-by-line against each
// component's actual speak() calls when written — re-check here first if
// a component's speak() calls ever change language/splitting behavior.
//
// Deliberately NOT wired into runtime playback as a shared code path —
// see the design discussion this came from: refactoring 5 components'
// autoplay effects (each with their own cancellation/timing/state-sync
// wrinkles) to funnel through one shared list-then-iterate function was
// judged higher regression risk than keeping this as a separate,
// periodically-reconciled enumeration of the same simple rules.

export interface Utterance {
  text: string;
  lang: LangCode;
}

function pushIfNew(list: Utterance[], text: string | undefined, lang: LangCode) {
  if (text && text.trim()) list.push({ text, lang });
}

// Target, then source if it's meaningfully different from target — the
// pattern used for grammar explanation/chunks and selfIntro options.
function pushPaired(list: Utterance[], translations: Translations, targetLang: LangCode, sourceLang: LangCode) {
  const targetText = translations[targetLang];
  const sourceText = translations[sourceLang];
  pushIfNew(list, targetText, targetLang);
  if (sourceText && sourceText !== targetText) pushIfNew(list, sourceText, sourceLang);
}

function pushSentencesPaired(list: Utterance[], translations: Translations, targetLang: LangCode, sourceLang: LangCode) {
  const targetText = translations[targetLang];
  const sourceText = translations[sourceLang];
  if (targetText) {
    for (const sentence of splitIntoSentences(targetText)) pushIfNew(list, sentence, targetLang);
  }
  if (sourceText && sourceText !== targetText) {
    for (const sentence of splitIntoSentences(sourceText)) pushIfNew(list, sentence, sourceLang);
  }
}

// The lesson-level framing-narration language (see LessonPlan.framingLanguage)
// plus whether THIS block's spokenIntro is bilingual (see Block.spokenIntroBilingual) —
// both needed to reproduce TeacherCaption.tsx's spokenLangCode/otherLangCode logic.
export function getTitleAndIntroUtterances(
  block: Block,
  targetLang: LangCode,
  sourceLang: LangCode,
  framingLanguage: "source" | "target" = "target",
): Utterance[] {
  const out: Utterance[] = [];
  // Every block's title is spoken target-then-source (if different) —
  // see TeacherCaption.tsx's "sacrificial warmup utterance" comment.
  // Unconditional: happens regardless of spokenIntro/bilingual.
  if (block.title) pushPaired(out, block.title, targetLang, sourceLang);

  const spokenLangCode = framingLanguage === "source" ? sourceLang : targetLang;
  const otherLangCode = framingLanguage === "source" ? targetLang : sourceLang;
  const text = block.spokenIntro?.[spokenLangCode];
  const otherText = block.spokenIntro?.[otherLangCode];
  if (text) {
    for (const sentence of splitIntoSentences(text)) pushIfNew(out, sentence, spokenLangCode);
  }
  if (block.spokenIntroBilingual && otherText && otherText !== text) {
    for (const sentence of splitIntoSentences(otherText)) pushIfNew(out, sentence, otherLangCode);
  }
  return out;
}

export function getContentUtterances(block: Block, targetLang: LangCode, sourceLang: LangCode): Utterance[] {
  const out: Utterance[] = [];

  switch (block.type) {
    case "vocabDrill": {
      const content = block.content as VocabDrillContent;
      for (const item of content.items) pushIfNew(out, item.translations[targetLang], targetLang);
      break;
    }
    case "readalong": {
      // Covers dialogue, grammarDrills, song, intro, article, and the
      // selfIntro block's own `template` sub-part — all target-only,
      // per LessonPlan.framingLanguage's own doc comment ("actual
      // lesson content ... is always narrated in the target language
      // regardless").
      const content = block.content as ReadalongContent;
      for (const line of content.lines) pushIfNew(out, line.translations[targetLang], targetLang);
      break;
    }
    case "grammar": {
      const content = block.content as GrammarContent;
      if (content.explanation) pushSentencesPaired(out, content.explanation, targetLang, sourceLang);
      for (const chunk of content.chunks) pushPaired(out, chunk.translations, targetLang, sourceLang);
      break;
    }
    case "selfIntro": {
      const content = block.content as SelfIntroContent;
      for (const line of content.template) pushIfNew(out, line.translations[targetLang], targetLang);
      if (content.optionsIntro) pushIfNew(out, content.optionsIntro[targetLang], targetLang);
      for (const option of content.options) pushPaired(out, option.translations, targetLang, sourceLang);
      if (content.choosePrompt) pushIfNew(out, content.choosePrompt[sourceLang], sourceLang);
      break;
    }
    case "questions": {
      // QuestionsBlock.tsx — question text + every option, target only.
      const content = block.content as QuestionsContent;
      for (const q of content.questions) {
        pushIfNew(out, q.question[targetLang], targetLang);
        for (const opt of q.options) pushIfNew(out, opt[targetLang], targetLang);
      }
      break;
    }
    case "intro": {
      // IntroBlock.tsx — the title slide (Block.type "intro", distinct
      // from Block.type "readalong" used for the intro *monologue*).
      // Speaks its own content.text (e.g. "Lektion 1 — Familie"),
      // target only.
      const content = block.content as { text: Translations };
      pushIfNew(out, content.text?.[targetLang], targetLang);
      break;
    }
    case "agenda":
      // AgendaBlock.tsx has zero speak() calls — items are visual-only,
      // the spoken counterpart is the block's own spokenIntro (handled
      // by getTitleAndIntroUtterances above), not a readout of the list.
      break;
    default:
      break;
  }
  return out;
}

export function getBlockUtterances(
  block: Block,
  targetLang: LangCode,
  sourceLang: LangCode,
  framingLanguage: "source" | "target" = "target",
): Utterance[] {
  return [
    ...getTitleAndIntroUtterances(block, targetLang, sourceLang, framingLanguage),
    ...getContentUtterances(block, targetLang, sourceLang),
  ];
}
