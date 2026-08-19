import type { LangCode } from "../types";

export type AvatarType = "male" | "female" | "orb";

export interface Trainer {
  id: string;
  name: string;
  languages: [LangCode, LangCode]; // bilingual pair this trainer teaches
  avatarType: AvatarType;
  appearance: string;
  hobby: string;
  defaultStyle: "rigid" | "flexible";
  personalityNote: string;
  courseIds: string[]; // course(s) this trainer can teach — matched against LessonPlan.courseId
  voiceProfile: {
    lang: string; // BCP-47 for primary teaching voice
    pitch: number;
    rate: number;
    voiceURI?: string; // preferred voice, resolved at runtime if available
  };
}

// 6 trainers: male x2, female x2, orb x2. Each bilingual (target/source pair).
// All 6 ordered de/en/zh pairs are covered, one trainer each: de-en, de-zh,
// en-de, zh-en, zh-de, en-zh. Note: Lesson 2's content is authored as a
// German course, so picking a trainer whose target isn't "de" (e.g. Lena,
// en-de) will still run, but the content itself won't feel tailored to that
// direction yet — that's a content-authoring gap, not a data-model one.
export const trainers: Trainer[] = [
  {
    id: "t-max",
    name: "Max",
    languages: ["de", "en"],
    avatarType: "male",
    appearance:
      "Early 30s, short dark-blond hair, glasses, casual cardigan over a plain shirt.",
    hobby: "Amateur astronomer — often relates grammar drills to star names.",
    defaultStyle: "rigid",
    courseIds: ["german-beginner"],
    personalityNote:
      "Precise and a little formal. Corrects mistakes immediately, expects full sentences.",
    voiceProfile: { lang: "de-DE", pitch: 0.95, rate: 0.95, voiceURI: "Google Deutsch" },
  },
  {
    id: "t-jonas",
    name: "Jonas",
    languages: ["de", "zh"],
    avatarType: "male",
    appearance:
      "Late 20s, curly brown hair, hoodie, tends to lean into frame when speaking.",
    hobby: "Plays in an amateur football league on weekends.",
    defaultStyle: "flexible",
    courseIds: ["german-beginner"],
    personalityNote:
      "Relaxed, humorous, happy to repeat things without making it feel like a correction.",
    voiceProfile: { lang: "de-DE", pitch: 1.0, rate: 1.0 },
  },
  {
    id: "t-lena",
    name: "Lena",
    languages: ["en", "de"],
    avatarType: "female",
    appearance:
      "Mid-30s, shoulder-length auburn hair, blazer, sits very upright.",
    hobby: "Restores old furniture in her spare time.",
    defaultStyle: "rigid",
    courseIds: ["german-beginner", "english-advanced-c1"],
    personalityNote:
      "Structured and calm. Sticks to the lesson plan, praises sparingly but genuinely.",
    voiceProfile: { lang: "en-US", pitch: 1.1, rate: 0.95 },
  },
  {
    id: "t-mei",
    name: "Mei",
    languages: ["zh", "en"],
    avatarType: "female",
    appearance:
      "Early 20s, long straight black hair, bright cardigan, expressive hand gestures.",
    hobby: "Runs a small tea-tasting blog.",
    defaultStyle: "flexible",
    courseIds: ["german-beginner"],
    personalityNote:
      "Warm and encouraging, adapts pace visibly to how the student is doing.",
    voiceProfile: { lang: "zh-CN", pitch: 1.15, rate: 1.0 },
  },
  {
    id: "t-orb-a",
    name: "Ao",
    languages: ["zh", "de"],
    avatarType: "orb",
    appearance:
      "Abstract glowing orb, cool blue-white palette, slow steady pulse when idle.",
    hobby: "N/A — flavor text kept minimal by design for the abstract persona.",
    defaultStyle: "rigid",
    courseIds: ["german-beginner"],
    personalityNote:
      "Neutral, metronomic pacing. Good fit for students who want zero social overhead.",
    voiceProfile: { lang: "de-DE", pitch: 1.0, rate: 1.0 },
  },
  {
    id: "t-orb-b",
    name: "Sol",
    languages: ["en", "zh"],
    avatarType: "orb",
    appearance:
      "Abstract glowing orb, warm amber palette, brighter/faster pulse on emphasis.",
    hobby: "N/A — abstract persona.",
    defaultStyle: "flexible",
    courseIds: ["german-beginner", "english-advanced-c1"],
    personalityNote:
      "Slightly more animated pulse timing than Ao; reads as more casual despite no face.",
    voiceProfile: { lang: "en-US", pitch: 1.0, rate: 1.05 },
  },
  // 7th trainer, added when Japanese support landed — breaks the original
  // "6 trainers, exactly 2 per avatar type, all 6 ordered de/en/zh pairs"
  // MVP symmetry (see 02-trainers.md), which predates the 4-language
  // matrix. Not rebalanced to a full 12-pair de/en/zh/ja roster yet —
  // that's a separate scope decision, not something to default into here.
  {
    id: "t-yui",
    name: "Yui",
    languages: ["ja", "en"],
    avatarType: "female",
    appearance:
      "Early 20s, straight black bob, oversized cardigan, tends to sketch kanji in the air while explaining.",
    hobby: "Collects stationery — pens and notebooks in particular.",
    defaultStyle: "flexible",
    courseIds: ["japanese-beginner"],
    personalityNote:
      "Patient and encouraging, repeats readings without being asked, celebrates small wins.",
    voiceProfile: { lang: "ja-JP", pitch: 1.1, rate: 0.95 },
  },
  // 8th trainer, added for the ja-de pair once German translations were
  // added to the Japanese lesson set. Same non-rebalancing note as Yui
  // above applies — this doesn't attempt to restore full MVP symmetry.
  {
    id: "t-hiro",
    name: "Hiro",
    languages: ["ja", "de"],
    avatarType: "male",
    appearance:
      "Late 20s, short tidy black hair, round glasses, plain button-up shirt, calm posture.",
    hobby: "Amateur woodworker — builds small furniture on weekends.",
    defaultStyle: "rigid",
    courseIds: ["japanese-beginner"],
    personalityNote:
      "Measured and methodical, explains grammar step by step, rarely rushes ahead.",
    voiceProfile: { lang: "ja-JP", pitch: 1.0, rate: 1.0 },
  },
  // 9th trainer, added for the zh-ja pair once Chinese translations were
  // added to the Japanese lesson set — completes all 6 possible pairs
  // among {en, de, ja, zh} for the Japanese course.
  {
    id: "t-lin",
    name: "Lin",
    languages: ["zh", "ja"],
    avatarType: "female",
    appearance:
      "Mid 20s, straight shoulder-length hair, small silver earrings, soft cardigan, gentle expression.",
    hobby: "Calligraphy — practices both Chinese and Japanese brush writing.",
    defaultStyle: "flexible",
    courseIds: ["japanese-beginner"],
    personalityNote:
      "Warm and encouraging, draws comparisons between Chinese and Japanese where useful, patient with mistakes.",
    voiceProfile: { lang: "ja-JP", pitch: 1.1, rate: 1.0 },
  },
];
