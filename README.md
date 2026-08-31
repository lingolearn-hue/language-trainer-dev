# Language Trainer

Version: 96 — 2026-08-30

React-based long-form language tutor simulation (45-90 min sessions).
Static content, multiple trainer personas, block-based session engine
with pause/resume, fully auto-playing by default.

See `/spec` (in project history) for concept, trainer, and lesson-structure docs.

See `docs/topic-lesson-system.md` for the topic-based lesson architecture
(vocab/dialogue/song shared across target languages, grammar/pronunciation
authored per language) — 19 topics built. Status and next steps are
documented there.

See `docs/song-melodies.md` for how song melody playback works and how
to add melody data for a new song.

See `docs/a1-master-lesson-table-v05.md` for the full A1 content plan
(per-lesson vocab/grammar/dialogue/pronunciation/song assignments) — now
tracked in the repo itself instead of only existing in session
workspace. Build status there reflects what's actually implemented vs
still planned.

## Current state (as of v91)

- **Languages**: de, en, zh, ja (`LangCode`). Only `ja` and `de` have any
  grammar/pronunciation authored anywhere — `en`/`zh` exist as shared
  vocab/dialogue/song data and in trainer language lists, but no
  `en`-/`zh`-target lesson can be generated yet.
- **Trainers**: 3 — **Vincent** (en/zh/de), **Max** (ja/de, the only
  trainer whose full language set already has matching lesson content
  both ways), **Yui** (ja/en/zh). Each teaches every direction among
  their own languages, not a fixed pair. Real generated avatars
  (Lorelei/DiceBear, CC0, keyed by seed) — not placeholders. A blue ring
  appears around the trainer's avatar while speaking; a green ring
  appears around the student's (plain grey silhouette) during genuine
  "your turn" windows. Per-language ordered voice-name fallback lists
  (`voicesByLang`), since most platforms default to a female voice per
  locale unless the user has downloaded an alternative.
- **Lessons**: 28 topic-based (topic-lesson system — 19 A1, all
  Japanese, 13 of those also German; 9 A2, Japanese only) + 3
  hand-written standalone (German Lektion 2, German Lektion 11, English
  C1 "Voices from Orbit") = 41 total. See `docs/topic-lesson-system.md`
  for the full architecture, current per-feature coverage (self-intro
  slides, grammar/pronunciation drill slides, row-by-row pronunciation
  comparison, per-language content overrides), the A2 topics section,
  and known gaps.
- **Songs**: every A1 topic has one, all with real melody data; every
  A2 topic built so far also has one (melody data not yet added for
  any A2 topic). See `docs/song-melodies.md`.
- **Lesson picker**: single-column compact rows (number+level | title+
  content summary | status+slide-count), sorted by level then lesson
  number. Lesson mastery status (Unseen / For review / Archived) persists
  per lesson, hiding mastered/snoozed lessons from the default view. A
  compact language-filter (two button rows, "I want to learn"/"I already
  know") is lifted to shared state between the trainer-select and
  lesson-select screens — linked and persisted, not two independently
  drifting copies.
- **Display style**: Computer/Phone toggle (was Structured/Flexible).
  Phone mode splits multi-column vocab/pronunciation slides one column
  per slide (by category, not an arbitrary split), at a higher font
  scale. Landscape/portrait orientation is a separate, unrelated CSS
  mechanism — both display styles support both orientations.
- **Session engine**: fully auto-plays end to end once started, with
  pause/resume, tap-to-pause, a screen wake lock, session-level style
  and mode (1:1/classroom) toggles, a declutter toggle (speed controls
  stay visible even when decluttered), a subtitles toggle, and an audit
  bar for QA. User settings persist via `localStorage`
  (`engine/userSettings.ts`).
- **Narration engine**: mixed-script sentences routed to the correct
  voice per segment automatically; every block speaks its own title as
  a sacrificial "primer" utterance before real content (works around a
  browser quirk where the first utterance per navigation can silently
  fail); dialogue/vocab pause timing scales with sentence length. Real
  bug fixed: `speak()` used to be able to hang forever if the browser
  silently never fired `onend`/`onerror` (tab backgrounding, Chrome
  speech-engine idle bugs, iOS quirks) — every block's auto-play is a
  sequential await-chain, so one stuck utterance stalled the whole
  lesson. Now races against a generous length-scaled timeout instead.
- **Intro slide**: no longer a near-empty static caption. Opens with a
  short framing message spoken in both languages in sequence (source
  fully, then target fully), then a 14-line monologue as a real 3-phase
  (echo/shadow/silent) read-along, reusing the same target-left/
  source-right layout dialogues already use.
- **Slide rendering**: 960×600 scaled via `ResizeObserver` to always
  fully fill the available width or height in any orientation.
  Vocab/pronunciation tables group into independent columns by category,
  with an opt-in `pairedColumns` mode for genuine row-by-row minimal-pair
  comparison (e.g. pitch-accent HL/LH shown side by side) instead of two
  separately-flowing lists. Dialogue font size is computed per-slide from
  estimated wrapped-row count.
- **PWA**: installable, offline-capable (manifest + service worker via
  `vite-plugin-pwa`), with a "Check for updates" button (updates never
  apply silently mid-session).

### Changelog note

Per-version "Recent changes" entries were actively maintained through
roughly v14, then fell behind — a large amount of work (Japanese
lessons 1–13, German Lesson 11, the topic-lesson system, melody
playback, settings persistence, and more) happened without
corresponding entries. **The "Current state" section above is the
authoritative, up-to-date summary.** The old v5–v14 entries are
preserved in `docs/ARCHIVE.md` as a historical record, not a complete
log. See `git log` for the full detailed history since.

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
