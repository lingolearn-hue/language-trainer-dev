// The single, definitive list of every lesson the app actually
// generates — every topic, every (target, source, courseId) pairing.
// Extracted out of App.tsx (which used to build this inline) so
// scripts/tts-manifest.ts can import the exact same list rather than
// maintaining a second, separately-hand-copied version that could
// silently drift out of sync as more topics/pairings get added. App.tsx
// now just imports `allLessons` from here.

import { lesson11 } from "./lesson11";
import { lessonEnglishSpace } from "./lessonEnglishSpace";
import { topicFamily } from "./topics/topic-a1-01-family";
import { topicBody } from "./topics/topic-a1-02-body";
import { topicAppearance } from "./topics/topic-a1-03-appearance";
import { topicEmotions } from "./topics/topic-a1-04-emotions";
import { topicFood } from "./topics/topic-a1-05-food";
import { topicHome } from "./topics/topic-a1-06-home";
import { topicClothing } from "./topics/topic-a1-07-clothing";
import { topicShopping } from "./topics/topic-a1-08-shopping";
import { topicAnimals } from "./topics/topic-a1-09-animals";
import { topicHealth } from "./topics/topic-a1-10-health";
import { topicTravel } from "./topics/topic-a1-11-travel";
import { topicDirections } from "./topics/topic-a1-12-directions";
import { topicTime } from "./topics/topic-a1-13-time";
import { topicCountries } from "./topics/topic-a1-14-countries";
import { topicLandscape } from "./topics/topic-a1-15-landscape";
import { topicTraffic } from "./topics/topic-a1-16-traffic";
import { topicWork } from "./topics/topic-a1-17-work";
import { topicSchool } from "./topics/topic-a1-18-school";
import { topicWeather } from "./topics/topic-a1-19-weather";
import { topicWeekend } from "./topics/topic-a2-01-weekend";
import { topicAbilities } from "./topics/topic-a2-02-abilities";
import { topicConditional } from "./topics/topic-a2-03-conditional";
import { topicRoutine } from "./topics/topic-a2-04-routine";
import { topicHobbies } from "./topics/topic-a2-05-hobbies";
import { topicTransport } from "./topics/topic-a2-06-transport";
import { topicCooking } from "./topics/topic-a2-07-cooking";
import { topicSeasons } from "./topics/topic-a2-08-seasons";
import { topicLearning } from "./topics/topic-a2-09-learning";
import { topicRelationships } from "./topics/topic-a2-10-relationships";
import { topicExperiences } from "./topics/topic-a2-11-experiences";
import { topicMemories } from "./topics/topic-a2-12-memories";
import { topicRecommendations } from "./topics/topic-a2-13-recommendations";
import { topicConjunctions } from "./topics/topic-a2-14-conjunctions";
import { topicConditions } from "./topics/topic-a2-15-conditions";
import { topicCommunication } from "./topics/topic-a2-16-communication";
import { topicPlans } from "./topics/topic-a2-17-plans";
import { topicInvitations } from "./topics/topic-a2-18-invitations";
import { topicFavors } from "./topics/topic-a2-19-favors";
import { topicGifts } from "./topics/topic-a2-20-gifts";
import { topicTechnology } from "./topics/topic-a2-21-technology";
import { topicEntertainment } from "./topics/topic-a2-22-entertainment";
import { topicEducation } from "./topics/topic-c1-01-education";
import { topicSociety } from "./topics/topic-c1-02-society";
import { topicPolitics } from "./topics/topic-c1-03-politics";
import { topicEconomy } from "./topics/topic-c1-04-economy";
import { topicEnvironment } from "./topics/topic-c1-05-environment";
import { topicTechnologyC1 } from "./topics/topic-c1-06-technology";
import { topicMedia } from "./topics/topic-c1-07-media";
import { topicTravelMishaps } from "./topics/topic-b1-01-travel-mishaps";
import { topicCareerBeginnings } from "./topics/topic-b1-02-career-beginnings";
import { topicGrowingUp } from "./topics/topic-b1-03-growing-up";
import { topicImaginingAlternatives } from "./topics/topic-b1-04-imagining-alternatives";
import { buildLessonPlan } from "../engine/buildLesson";
import type { LessonPlan } from "../types";
import type { TopicLesson } from "./topicTypes";

// All 13 built lessons (rows 1-13 of the A1 master table) go through the
// topic-based system (see docs/topic-lesson-system.md) instead of
// separate hand-written per-language files. Every topic now has both
// Japanese and German grammar/pronunciation authored, so buildLessonPlan
// produces a full ja-target AND de-target lesson from each one — 26
// generated lessons total. Chinese/English grammar+pronunciation aren't
// authored yet for any topic (vocab/dialogue/song already are, ready for
// that whenever it happens).
const ALL_TOPICS: TopicLesson[] = [
  topicFamily, topicBody, topicAppearance, topicEmotions, topicFood,
  topicHome, topicClothing, topicShopping, topicAnimals, topicHealth,
  topicTravel, topicDirections, topicTime,
  topicCountries, topicLandscape, topicTraffic, topicWork, topicSchool, topicWeather, topicWeekend, topicAbilities, topicConditional, topicRoutine, topicHobbies, topicTransport, topicCooking, topicSeasons, topicLearning, topicRelationships, topicExperiences, topicMemories, topicRecommendations, topicConjunctions, topicConditions, topicCommunication, topicPlans, topicInvitations, topicFavors, topicGifts, topicTechnology, topicEntertainment, // ja-only for now — no German grammar/pronunciation authored yet, buildLessonPlan(..., "de", ...) returns null for these and they're filtered out below
];
const generatedJapaneseLessons = ALL_TOPICS
  .map((topic) => buildLessonPlan(topic, "ja", "en", "japanese-beginner"))
  .filter((l): l is LessonPlan => l !== null);

const generatedGermanLessons = ALL_TOPICS
  .map((topic) => buildLessonPlan(topic, "de", "en", "german-beginner"))
  .filter((l): l is LessonPlan => l !== null);

// Same courseId as the en-sourced German lessons above, not a new
// one — the language-pair filtering fix in LessonSelect.tsx (see its
// own comment) already separates these correctly by sourceLangCode,
// so a learner picking target=de/source=zh sees only these, and
// target=de/source=en sees only the ones above. All 19 A1 topics now
// have zh grammar/pronunciation content for German (verified before
// wiring this — see the per-topic zh-coverage audit in git history),
// so this generates a full 19-lesson course, not a partial one like
// French's current single-topic scope.
const generatedGermanZhLessons = ALL_TOPICS
  .map((topic) => buildLessonPlan(topic, "de", "zh", "german-beginner"))
  .filter((l): l is LessonPlan => l !== null);

// French, like German, is generated straight off ALL_TOPICS rather
// than a separate list — only topic-a1-01-family has `fr` grammar/
// pronunciation authored so far, so every other topic here returns
// null and gets filtered out below, same as de/zh already do against
// topics that don't have their content yet. Extend more A1 topics with
// `fr` the same way (vocab/dialogue/song translations + a new
// grammar.fr/pronunciation.fr block) and they'll start generating
// automatically with no changes needed here.
const generatedFrenchLessons = ALL_TOPICS
  .map((topic) => buildLessonPlan(topic, "fr", "en", "french-beginner"))
  .filter((l): l is LessonPlan => l !== null);

// C1 topics are a separate list from ALL_TOPICS above (not mixed in)
// since they're built for a completely different target language (zh)
// and CEFR level, with their own courseId — folding them into
// ALL_TOPICS and generating ja/de from them would just always produce
// null (no ja/de grammar authored for these), same as it currently does
// for zh/en against ALL_TOPICS's own topics. See
// docs/c1-master-lesson-table-v01.md.
const C1_TOPICS: TopicLesson[] = [topicEducation, topicSociety, topicPolitics, topicEconomy, topicEnvironment, topicTechnologyC1, topicMedia];
const generatedChineseC1Lessons = C1_TOPICS
  .map((topic) => buildLessonPlan(topic, "zh", "en", "chinese-c1"))
  .filter((l): l is LessonPlan => l !== null);

// B1 topics are also a separate list, same reasoning as C1 above —
// entirely new files, not part of A1/A2's shared-vocab ALL_TOPICS
// structure. Unlike C1 though, this reuses the *same* courseId
// ("japanese-beginner") as the A1/A2 Japanese pipeline rather than a
// new one — the intent is one continuous Japanese lesson list a
// learner progresses through (A1 → A2 → B1), not a separate
// "Japanese Intermediate" course Yui would need a second courseIds
// entry for. The courseId's literal name ("beginner") undersells what
// it now contains, but renaming it would mean touching every A1/A2
// reference for a purely cosmetic gain — not worth it for one lesson.
const B1_TOPICS: TopicLesson[] = [topicTravelMishaps, topicCareerBeginnings, topicGrowingUp, topicImaginingAlternatives];
const generatedJapaneseB1Lessons = B1_TOPICS
  .map((topic) => buildLessonPlan(topic, "ja", "en", "japanese-beginner"))
  .filter((l): l is LessonPlan => l !== null);

const allLessons: LessonPlan[] = [
  lesson11,
  lessonEnglishSpace,
  ...generatedJapaneseLessons,
  ...generatedGermanLessons,
  ...generatedGermanZhLessons,
  ...generatedFrenchLessons,
  ...generatedJapaneseB1Lessons,
  ...generatedChineseC1Lessons,
]; // grows as more lessons are built

export { allLessons };
