// Language matrix ------------------------------------------------------

export type LangCode = "de" | "en" | "zh";

export type Translations = Partial<Record<LangCode, string>>;

// Block model ------------------------------------------------------------

export type BlockType = "readalong" | "vocabDrill" | "intro" | "grammar";
// 'readalong' also covers dialogue/singAlong content — same 3-phase mechanic.
// more to come: 'dialogue' as a distinct type if it needs branching later.

export type DisplayMode = "face" | "content";

export interface VocabItem {
  id: string;
  translations: Translations;
  category?: string; // e.g. "noun"/"verb"/"adjective", or a sound-group key for pronunciation slides
}

export interface VocabDrillContent {
  items: VocabItem[];
  // Optional per-category column headers, keyed by the same string used in
  // VocabItem.category. If omitted, the component falls back to its
  // built-in noun/verb/adjective labels.
  groupLabels?: Record<string, Translations>;
}

export interface ReadalongLine {
  id: string;
  speaker?: string; // e.g. trainer name, or undefined for narration
  translations: Translations;
}

export interface ReadalongContent {
  lines: ReadalongLine[];
}

export interface IntroContent {
  text: Translations; // short warm-up / framing text, no reveal steps
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
  | GrammarContent;

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
  content: BlockContent;
}

// Session ------------------------------------------------------------

export interface LessonPlan {
  id: string;
  courseId: string; // which course this lesson belongs to, matched against Trainer.courseIds
  title: Translations;
  blocks: Block[];
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
