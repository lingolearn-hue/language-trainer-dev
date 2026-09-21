// Run with: npx tsx scripts/tts-manifest.ts
//           npx tsx scripts/tts-manifest.ts --trainer=Vincent --target=de --source=zh
//
// Walks every lesson the app actually generates (src/data/allLessons.ts
// — the same list App.tsx renders from, not a separately-maintained
// copy) and every trainer who can teach each one (matched by
// courseId, same as LessonSelect.tsx does at runtime), enumerates the
// exact set of utterances each block speaks (engine/utterances.ts —
// traced directly from each component's real speak() calls), and
// diffs that against what's already sitting in public/audio/.
//
// Optional filters (any combination) scope the manifest to a subset —
// e.g. a single trainer/pair for a pilot batch instead of generating
// the full corpus at once:
//   --trainer=Vincent   trainer name, exact match
//   --target=de         lesson.targetLangCode
//   --source=zh         lesson.sourceLangCode
// The output filename reflects whichever filters are active, so
// running different slices doesn't overwrite each other.
//
// Two outputs:
//   1. tts-manifest[-<filters>].csv — everything MISSING (within the
//      filter, if any), for feeding to a TTS engine: hash, trainerName
//      (for your reference only — not part of the lookup), lang, text.
//   2. src/data/audioIndex.json — regenerated from whatever mp3s
//      currently exist in public/audio/, so the app picks up newly
//      generated clips — ALWAYS the full unfiltered scan, regardless
//      of any manifest filter, since the app needs to know about every
//      clip that exists, not just the ones a particular pilot batch
//      cares about. Run this a second time after adding new mp3s to
//      public/audio/ to refresh the index without needing to
//      regenerate a manifest too.

import { readdirSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { allLessons } from "../src/data/allLessons";
import { trainers } from "../src/data/trainers";
import { getBlockUtterances } from "../src/engine/utterances";
import { audioHash, voiceIdFor } from "../src/engine/audioHash";
import type { LangCode } from "../src/types";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const AUDIO_DIR = join(ROOT, "public", "audio");
const INDEX_PATH = join(ROOT, "src", "data", "audioIndex.json");

// --- CLI filters -------------------------------------------------------
function argValue(flag: string): string | undefined {
  const arg = process.argv.find((a) => a.startsWith(`--${flag}=`));
  return arg ? arg.slice(flag.length + 3) : undefined;
}
const filterTrainer = argValue("trainer");
const filterTarget = argValue("target") as LangCode | undefined;
const filterSource = argValue("source") as LangCode | undefined;

const filterSuffix = [
  filterTrainer && `trainer-${filterTrainer.toLowerCase()}`,
  filterTarget && `target-${filterTarget}`,
  filterSource && `source-${filterSource}`,
]
  .filter(Boolean)
  .join("-");
const MANIFEST_PATH = join(ROOT, filterSuffix ? `tts-manifest-${filterSuffix}.csv` : "tts-manifest.csv");

if (filterTrainer || filterTarget || filterSource) {
  console.log(`Filtering: trainer=${filterTrainer ?? "any"} target=${filterTarget ?? "any"} source=${filterSource ?? "any"}`);
}

if (!existsSync(AUDIO_DIR)) mkdirSync(AUDIO_DIR, { recursive: true });

// --- Step 1: what audio already exists -------------------------------
const existingHashes = new Set(
  readdirSync(AUDIO_DIR)
    .filter((f) => f.endsWith(".mp3"))
    .map((f) => f.slice(0, -4))
);
console.log(`Found ${existingHashes.size} existing audio file(s) in public/audio/.`);

// Refresh the bundled index unconditionally — cheap, and means running
// this script after manually dropping in new mp3s is enough to make
// the app recognize them, without also needing a fresh manifest run.
writeFileSync(INDEX_PATH, JSON.stringify([...existingHashes].sort(), null, 0));
console.log(`Wrote ${INDEX_PATH} (${existingHashes.size} hashes).`);

// --- Step 2: enumerate every utterance the app can ever speak --------
interface ManifestRow {
  hash: string;
  trainerName: string; // human reference — which trainer's voice this should sound like
  lang: LangCode;
  text: string;
}

async function main() {
  // hash -> row, so the same utterance needed by multiple lessons/
  // trainers only appears once in the output.
  const missing = new Map<string, ManifestRow>();
  let totalUtterances = 0;

  for (const lesson of allLessons) {
    const targetLang = lesson.targetLangCode;
    const sourceLang = lesson.sourceLangCode;
    if (!targetLang || !sourceLang) {
      console.warn(`Skipping lesson "${lesson.id}" — missing targetLangCode/sourceLangCode.`);
      continue;
    }
    if (filterTarget && targetLang !== filterTarget) continue;
    if (filterSource && sourceLang !== filterSource) continue;
    const framingLanguage = lesson.framingLanguage ?? "target";

    let eligibleTrainers = trainers.filter((t) => t.courseIds.includes(lesson.courseId));
    if (eligibleTrainers.length === 0) {
      console.warn(`Lesson "${lesson.id}" (courseId "${lesson.courseId}") has no matching trainer at all — skipping.`);
      continue;
    }
    if (filterTrainer) eligibleTrainers = eligibleTrainers.filter((t) => t.name === filterTrainer);
    if (eligibleTrainers.length === 0) continue; // this lesson has trainers, just none matching the filter — expected, not a warning

    for (const block of lesson.blocks) {
      const utterances = getBlockUtterances(block, targetLang, sourceLang, framingLanguage);
      for (const trainer of eligibleTrainers) {
        const voiceId = voiceIdFor(trainer.voiceProfile);
        for (const { text, lang } of utterances) {
          totalUtterances++;
          const hash = await audioHash(voiceId, lang, text);
          if (existingHashes.has(hash) || missing.has(hash)) continue;
          missing.set(hash, { hash, trainerName: trainer.name, lang, text });
        }
      }
    }
  }

  console.log(`Walked ${allLessons.length} lesson(s), ${totalUtterances} utterance-instances total.`);
  console.log(`${missing.size} distinct utterance(s) need audio generated.`);

  const rows = [...missing.values()].sort((a, b) => a.lang.localeCompare(b.lang) || a.text.localeCompare(b.text));
  const csvEscape = (s: string) => `"${s.replace(/"/g, '""')}"`;
  const csv = [
    "hash,trainerName,lang,text",
    ...rows.map((r) => [r.hash, csvEscape(r.trainerName), r.lang, csvEscape(r.text)].join(",")),
  ].join("\n");
  writeFileSync(MANIFEST_PATH, csv);
  console.log(`Wrote ${MANIFEST_PATH} (${rows.length} row(s)).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
