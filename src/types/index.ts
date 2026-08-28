// Language matrix ------------------------------------------------------

export type LangCode = "de" | "en" | "zh" | "ja";

export type Translations = Partial<Record<LangCode, string>> & {
  // Optional kanji form of the ja field, which is otherwise kana-only
  // throughout this app. Authored explicitly per string (not derived) —
  // kana-to-kanji is genuinely ambiguous without full NLP (many words
  // share a reading but map to different kanji depending on meaning),
  // so this is never auto-generated. Falls back to the kana `ja` field
  // wherever not yet authored. See engine/scriptDisplay.ts.
  jaKanji?: string;
};

// Block model ------------------------------------------------------------

export type BlockType = "readalong" | "vocabDrill" | "intro" | "grammar" | "agenda" | "selfIntro";
// 'readalong' also covers dialogue/singAlong content — same 3-phase mechanic.
// 'agenda' is a distinct type from 'intro' because it's never read aloud
// verbatim (a table of contents read as a run-on sentence sounds terrible)
// — instead the block's spokenIntro carries a free-form spoken framing of
// what's ahead, and the visible list is just for reading/reference.

export type DisplayMode = "face" | "content";

export interface VocabItem {
  id: string;
  translations: Translations;
  category?: string; // e.g. "noun"/"verb"/"adjective", or a sound-group key for pronunciation slides
  tag?: string; // small disambiguating label shown next to the word — e.g. the kanji form, to tell apart same-kana pitch-accent pairs like はし(橋) vs はし(箸)
}

export interface VocabDrillContent {
  items: VocabItem[];
  // Optional per-category column headers, keyed by the same string used in
  // VocabItem.category. If omitted, the component falls back to its
  // built-in noun/verb/adjective labels.
  groupLabels?: Record<string, Translations>;
  // Optional list of category-key pairs that should render as ONE merged
  // table with shared rows (item i of category A next to item i of
  // category B), instead of two independently-flowing columns — for
  // direct row-by-row comparison, e.g. a pitch-accent HL/LH pair like
  // はし(橋, bridge) vs はし(箸, chopsticks) shown side by side on the
  // same row rather than in two separate stacked lists.
  pairedColumns?: [string, string][];
}

export interface ReadalongLine {
  id: string;
  // Plain string (existing behavior, all hand-written lesson files) or a
  // full Translations object (topic-based lessons — see topicTypes.ts —
  // where the same dialogue line backs multiple target languages, so a
  // role label like "waiter" needs to actually translate, not just carry
  // over the original language's word untranslated).
  speaker?: string | Translations;
  translations: Translations;
}

export interface ReadalongContent {
  lines: ReadalongLine[];
}

export interface IntroContent {
  text: Translations; // short warm-up / framing text, no reveal steps
}

// Self-introduction template slide (e.g. Lesson 2's "Selbstvorstellung").
// Two independent halves on one slide:
//  - `template`: a fixed self-intro readalong, target-language only, no
//    on-screen translation (student fills in name/hometown live) — reuses
//    ReadalongLine/3-phase mechanic like any other readalong content.
//  - `options`: a list of "reason" lines (e.g. "...ich Philosophie mag.").
//    Each is narrated once in the target language, immediately followed by
//    a SPOKEN-ONLY translation in the source language (never shown as
//    on-screen text — this slide has no visible translation at all).
//    After all options are narrated, `choosePrompt` is spoken in the
//    source language, inviting the student to pick their own reason.
//    Purely a demonstration pass — no selection is recorded.
export interface SelfIntroOption {
  id: string;
  translations: Translations; // target-language line; other langs used only for spoken narration, never displayed
}

// A small labelled word list for one template blank (e.g. "eye color" ->
// brown/black/blue/green) — shown on screen as a silent reference, NEVER
// spoken by the trainer (unlike `options` below, which is a spoken
// demonstration pass). Both label and each word are full Translations
// objects, same as everywhere else in the data, so target+source can be
// shown together as a real translation pair rather than target-only.
export interface SelfIntroWordBankGroup {
  id: string;
  label: Translations;
  words: Translations[];
}

export interface SelfIntroContent {
  template: ReadalongLine[];
  wordBank?: SelfIntroWordBankGroup[];
  optionsIntro: Translations; // e.g. "Ich lerne Deutsch, weil ..." lead-in line, narrated once before options
  options: SelfIntroOption[];
  choosePrompt: Translations; // spoken in source language after all options are demonstrated
}

// Table of contents — a vertical list of short labelled items, never read
// aloud verbatim (see BlockType note). The spoken counterpart lives on
// the block's spokenIntro as free-form prose, not a readout of this list.
export interface AgendaItem {
  id: string;
  number?: number; // optional explicit ordering label, e.g. "1"
  translations: Translations;
}

export interface AgendaContent {
  items: AgendaItem[];
}

// Grammar block: explanation + a sequence of example chunks that reveal
// progressively. Density (dense = several chunks visible/added per step,
// sparse = one chunk on screen at a time) is a *display* setting, not part
// of the content data — same content works either way.
export interface GrammarChunk {
  id: string;
  translations: Translations; // the example/rule line itself
}

export interface GrammarContent {
  explanation: Translations; // short framing text shown before chunks
  chunks: GrammarChunk[];
}

export type RevealDensity = "dense" | "sparse";

export type BlockContent =
  | VocabDrillContent
  | ReadalongContent
  | IntroContent
  | GrammarContent
  | AgendaContent
  | SelfIntroContent;

export interface Block {
  id: string;
  type: BlockType;
  displayMode: DisplayMode;
  estimatedMinutes: number;
  title?: Translations;
  // Short spoken framing line the trainer says when the slide opens —
  // distinct from the slide's own visible content (e.g. "Let's look at
  // some vocabulary now."). Auto-played as audio + shown as a caption
  // below the slide frame.
  spokenIntro?: Translations;
  // Explicit flag for readalong blocks that are a song (vs a dialogue —
  // both use the same readalong mechanic/content shape). Positional
  // inference ("the last readalong block is always the song") broke once
  // lessons started having two dialogues plus an optional, sometimes-reused
  // song (see a1-master-lesson-table v02) — this flag is now the single
  // source of truth for lessonSummary.ts and anywhere else that needs to
  // tell a song apart from a dialogue. Undefined/false = not a song
  // (dialogue, or any other block type where the question doesn't apply).
  isSong?: boolean;
  // Extra content-only display scale — set on sub-blocks produced by the
  // phone-style split (see engine/phoneStyle.ts): each original
  // slide becomes 3 smaller-content slides, shown bigger to match.
  // Undefined/1 = normal size, no effect.
  fontScale?: number;
  // When true, spokenIntro is actually spoken in BOTH languages in
  // sequence (source fully, then target fully) instead of just one
  // spoken with the other as an unspoken secondary caption — see
  // TeacherCaption.tsx's bilingual prop. Used for the intro block's
  // framing message, which is meant to be heard in both languages.
  spokenIntroBilingual?: boolean;
  content: BlockContent;
}

// Session ------------------------------------------------------------

export interface LessonPlan {
  id: string;
  courseId: string; // which course this lesson belongs to, matched against Trainer.courseIds
  title: Translations;
  blocks: Block[];
  // Which language the trainer's spoken *framing* lines (spokenIntro, e.g.
  // "now we sing a song") are delivered in. "source" = the student's own
  // language — appropriate for early/beginner courses where the student
  // can't yet follow instructions in the target language. "target" (or
  // omitted, the default) = framing is spoken in the target language too,
  // appropriate once a student can follow along. This only affects the
  // trainer's framing lines — actual lesson content (vocab, dialogue,
  // song lyrics) is always narrated in the target language regardless.
  framingLanguage?: "source" | "target";
  // The lesson's actual target language, as a LangCode — used to pick
  // which key of `title` (and other Translations fields) to display.
  // Distinct from the human-readable `language` string below (e.g.
  // "German") which is just display text. Optional for older/hand-authored
  // lessons that predate this field; LessonSelect falls back to the
  // trainer's own primary language in that case.
  targetLangCode?: LangCode;
  // Display metadata for the slide footer (e.g. "German A1 — Lesson 2"):
  // human-readable target-language name, CEFR-style level, and lesson
  // number within that course. All optional — Slide falls back to
  // showing just the lesson title if any are missing, rather than
  // rendering a broken/partial label.
  language?: string;
  level?: string;
  lessonNumber?: number;
}

export type ReadalongPhase = "echo" | "shadow" | "silent";

export interface SessionCheckpoint {
  lessonId: string;
  blockIndex: number;
  // block-type-specific sub-state, kept generic here
  subState?: Record<string, unknown>;
  updatedAt: string; // ISO timestamp
}

export interface LanguageSettings {
  sourceLang: LangCode;
  targetLang: LangCode;
}

export interface DisplaySettings {
  density: RevealDensity;
}

// Session mode — same block-engine for both, only framing/copy differs
// per spec (03-lessons.md). No branching-logic difference in v1.
export type SessionMode = "oneOnOne" | "classroom";
