import type { LangCode } from "../types";

export type AvatarType = "male" | "female" | "orb";

export interface Trainer {
  id: string;
  name: string;
  languages: LangCode[]; // all languages this trainer teaches, any direction between any two
  avatarType: AvatarType;
  avatarSeed: string; // seed for the Lorelei (Lisa Wischofsky, CC0) DiceBear avatar — see TrainerAvatar.tsx. Deterministic: same seed always renders the same face.
  appearance: string;
  hobby: string;
  defaultStyle: "rigid" | "flexible";
  personalityNote: string;
  courseIds: string[]; // course(s) this trainer can teach — matched against LessonPlan.courseId
  voiceProfile: {
    lang: string; // BCP-47 — documentation only; actual voice is resolved per-utterance by the spoken text's own language (see engine/speech.ts resolveVoice), not this field
    pitch: number;
    rate: number;
    voiceURI?: string; // preferred voice, resolved at runtime if available
  };
}

// Streamlined from a 9-trainer roster (one per language pair) down to 3,
// each covering multiple languages bidirectionally via the trainer-select
// filters (see TrainerSelect.tsx matchesFilter — already worked generically
// off trainer.languages.includes(), no changes needed there for N>2).
//
// Avatars are real now: TrainerAvatar.tsx renders the Lorelei DiceBear
// style (Lisa Wischofsky, CC0), keyed by avatarSeed — same seed always
// generates the same face. Vincent reuses the old Hiro trainer's seed,
// Yui reuses the old Jonas trainer's seed (both were previously in
// AvatarStyleComparison.tsx's preview list), Max gets a newly picked seed
// that wasn't used by anyone before. See AvatarStyleComparison.tsx (the
// "🎨 Preview avatar styles" dev tool on the trainer-select screen) to
// browse other seeds/styles before settling on final ones.
//
// courseIds reflect what content actually exists today, not the full
// aspirational language coverage: no Chinese-target or English-beginner
// course has been authored yet (only german-beginner, japanese-beginner,
// and english-advanced-c1 exist — see App.tsx ALL_TOPICS). Max is the one
// trainer whose full language set already has matching content on both
// sides (ja + de). Vincent and Yui list courseIds for what exists now;
// their zh/en-beginner coverage is real in `languages` (so the trainer-
// select filters surface them correctly) but has no lessons behind it yet.
export const trainers: Trainer[] = [
  {
    id: "t-vincent",
    name: "Vincent",
    languages: ["en", "zh", "de"],
    avatarType: "male",
    avatarSeed: "t-hiro", // reuses the old Hiro trainer's generated look
    appearance: "Late 20s, Caucasian, short tidy black hair, round glasses, plain button-up shirt, calm posture.",
    hobby: "Amateur woodworker — builds small furniture on weekends.",
    defaultStyle: "rigid",
    courseIds: ["german-beginner", "english-advanced-c1"],
    personalityNote:
      "Measured and methodical, explains grammar step by step, rarely rushes ahead.",
    voiceProfile: { lang: "en-US", pitch: 1.0, rate: 1.0 },
  },
  {
    id: "t-max",
    name: "Max",
    languages: ["ja", "de"],
    avatarType: "male",
    avatarSeed: "t-max-mueller", // newly picked — not reused from any prior trainer
    appearance: "Early 30s, Caucasian, short dark-blond hair, glasses, casual cardigan over a plain shirt.",
    hobby: "Amateur astronomer — often relates grammar drills to star names.",
    defaultStyle: "rigid",
    courseIds: ["japanese-beginner", "german-beginner"],
    personalityNote:
      "Precise and a little formal. Corrects mistakes immediately, expects full sentences.",
    voiceProfile: { lang: "de-DE", pitch: 0.95, rate: 0.95, voiceURI: "Google Deutsch" },
  },
  {
    id: "t-yui",
    name: "Yui",
    languages: ["ja", "en", "zh"],
    avatarType: "female",
    avatarSeed: "t-jonas", // reuses the old Jonas trainer's generated look
    appearance: "Early 20s, Asian, straight black bob, oversized cardigan, tends to sketch kanji in the air while explaining.",
    hobby: "Collects stationery — pens and notebooks in particular.",
    defaultStyle: "flexible",
    courseIds: ["japanese-beginner"],
    personalityNote:
      "Patient and encouraging, repeats readings without being asked, celebrates small wins.",
    voiceProfile: { lang: "ja-JP", pitch: 1.1, rate: 0.95 },
  },
];
