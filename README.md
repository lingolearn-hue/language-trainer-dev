# Language Trainer

Version: 106 — 2026-09-04

React-based long-form language tutor simulation (45-90 min sessions).
Static content, multiple trainer personas, block-based session engine
with pause/resume, fully auto-playing by default.

See `/spec` (in project history) for concept, trainer, and lesson-structure docs.

See `docs/topic-lesson-system.md` for the topic-based lesson architecture
(vocab/dialogue/song shared across target languages, grammar/pronunciation
authored per language) — 48 topics built. Status and next steps are
documented there.

See `docs/song-melodies.md` for how song melody playback works and how
to add melody data for a new song.

See `docs/a1-master-lesson-table-v05.md` for the full A1 content plan
(per-lesson vocab/grammar/dialogue/pronunciation/song assignments) — now
tracked in the repo itself instead of only existing in session
workspace. Build status there reflects what's actually implemented vs
still planned.

## Current state (as of v99)

- **Languages**: de, en, zh, ja (`LangCode`). Only `ja` and `de` have any
  grammar/pronunciation authored anywhere — `en`/`zh` exist as shared
  vocab/dialogue/song data and in trainer language lists, but no
  `en`-/`zh`-target lesson can be generated yet.
- **Trainers**: 3 — **Vincent** (en/zh/de), **Max** (ja/de, the only
  trainer whose full language set already has matching lesson content
  both ways), **Yui** (ja/en/zh). Each teaches every direction among
  their own languages, not a fixed pair. Real generated avatars
  (Lorelei/DiceBear, CC0, keyed by seed). Per-language ordered
  voice-name fallback lists (`voicesByLang`), since most platforms
  default to a female voice per locale unless the user has downloaded
  an alternative.
- **Lessons**: 48 topic-based (19 A1, all Japanese and now all with
  German grammar and pronunciation content; 22 A2, Japanese only; 7 C1,
  Chinese only) + 3 hand-written standalone (German Lektion 2, German
  Lektion 11, English C1 "Voices from Orbit") = 51 total. Topic files
  and ids are level-prefixed and level-relative (`topic-a1-06-home`,
  `topic-a2-14-conjunctions`, `topic-c1-03-politics`) so adding more
  lessons to any level can't collide with another level's numbering.
  See `docs/topic-lesson-system.md` for architecture and per-feature
  coverage, `docs/status.md` for the build-status table and
  methodology, `docs/a2-master-lesson-table-v01.md` for the A2 plan
  (35 rows, 22 built), and `docs/c1-master-lesson-table-v01.md` for the
  C1 plan (34 rows, 7 built).
- **Kanji**: `jaKanji` display toggle exists app-wide (see
  `engine/scriptDisplay.ts`); only Topic 3 and A2 Topics 20–24 have
  full coverage (vocab/dialogue/grammar). Every other topic is
  kana-only except for `grammarDrills` lines, which have kanji
  wherever that feature exists. See `docs/topic-lesson-system.md` for
  exact per-topic status.
- **Vocab categories**: `noun` / `verb` / `adjective` / `conjunction` /
  `other`. Items tagged `adverb` display in the same column as
  `adjective` (relabeled "Adjectives/Adverbs" in the UI) — see
  `components/VocabDrillBlock.tsx`'s `CATEGORY_MERGE`.
- **Songs**: every A1 topic has one, all with real melody data; every
  A2 topic built so far also has one (melody data not yet added for
  any A2 topic). See `docs/song-melodies.md`.
- **Lesson picker**: single-column compact rows (number+level | title+
  content summary | status+slide-count), sorted by level then lesson
  number. Lesson mastery status (Unseen / For review / Archived)
  persists per lesson. A compact language-filter is shared state
  between the trainer-select and lesson-select screens.
- **Display style**: Computer/Phone toggle. Phone mode splits
  multi-column vocab/pronunciation slides one column per slide (by
  category), at a higher font scale. Landscape/portrait is a separate
  CSS mechanism independent of display style.
- **Session engine**: fully auto-plays end to end once started, with
  pause/resume, tap-to-pause, a screen wake lock, session-level style
  and mode (1:1/classroom) toggles, a declutter toggle, a subtitles
  toggle, and an audit bar for QA. User settings persist via
  `localStorage` (`engine/userSettings.ts`).
- **Narration engine**: mixed-script sentences routed to the correct
  voice per segment automatically; every block speaks its own title as
  a sacrificial "primer" utterance before real content; dialogue/vocab
  pause timing scales with sentence length; auto-play races a
  length-scaled timeout so one stuck utterance can't stall the lesson.
- **Slide rendering**: 960×600 scaled via `ResizeObserver` to fully
  fill the available space in any orientation. Vocab/pronunciation
  tables group into columns by category, with an opt-in
  `pairedColumns` mode for row-by-row minimal-pair comparison instead
  of two separately-flowing lists.
- **PWA**: installable, offline-capable (manifest + service worker via
  `vite-plugin-pwa`), with a "Check for updates" button.

### Changelog note

Per-version changelog entries stopped being maintained after roughly
v14. The "Current state" section above is the authoritative summary.
Historical v5–v14 entries are preserved in `docs/ARCHIVE.md`. See
`git log` for detailed history since.

## Dev

```
npm install
npm run dev
```

## Test

```
npx playwright install chromium   # first time only
npx playwright test
```

## Playwright in constrained sandboxes

If `npx playwright install` can't reach `cdn.playwright.dev` (blocked egress),
use the Chromium binary bundled in `@sparticuz/chromium` (distributed via npm)
instead:

```
npm install -D @sparticuz/chromium
node -e "require('@sparticuz/chromium').default.executablePath().then(console.log)"  # or .mjs, see note below
PW_CHROMIUM_PATH=/tmp/chromium npx playwright test
```
Note: `@sparticuz/chromium`'s CJS export is unreliable via `require()` in some
Node versions — resolve the path via a `.mjs` script if `require` gives you
`{ graphicsMode }` only.
