# Language Trainer

Version: 89 — 2026-08-29

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

## Current state (as of v83 — see note below on changelog staleness)

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
- **Lessons**: 24 topic-based (topic-lesson system — 19 A1, all
  Japanese, 13 of those also German; 5 A2, Japanese only) + 3
  hand-written standalone (German Lektion 2, German Lektion 11, English
  C1 "Voices from Orbit") = 37 total. See `docs/topic-lesson-system.md`
  for the full architecture, current per-feature coverage (self-intro
  slides, extra drill slides, row-by-row pronunciation comparison,
  per-language content overrides), the A2 topics section, and known
  gaps.
- **Songs**: every A1 topic has one (17 of 19 with real melody data —
  2 share the one song still missing a melody transcription); every A2
  topic built so far also has one. See
  `docs/song-melodies.md`.
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

The per-version "Recent changes" log below was actively maintained
through roughly v14, then fell behind — a large amount of work (Japanese
lessons 1–13, German Lesson 11, the topic-lesson system, melody
playback, settings persistence, and more) happened without corresponding
entries. **The "Current state" section above is the authoritative,
up-to-date summary; the dated entries below are a historical record from
the project's early phase, not a complete log.** See `git log` for the
full detailed history since.

## Version history

## Recent changes (v5-v6)

- **Slide design**: beamer-style fixed 16:9 frame (`components/Slide.tsx`),
  dense-by-default (everything shown at once, no click-through required).
  Grammar slides have an opt-in "Step through" toggle for progressive
  reveal; off by default.
- **Vocab density**: rebuilt to 30-50 items per slide, grouped by word class
  (noun/verb/adjective columns with headers) — matches the source course's
  own vocab-slide density instead of a flat 2-column list. Lesson 2 now has
  38 items (16/10/12).
- **Slide order**: now tracks the real source PDF slide order closely
  (title/cover -> agenda -> warm-up -> content), added missing title and
  agenda slides. One deliberate deviation: the lesson's song always closes
  the lesson (moved to the last block), regardless of its position in the
  source deck.
- **Trainer select screen**: Preply-style grid (name, language pair, avatar
  placeholder) before the session starts.
- **In-lesson avatars**: trainer avatar+name and a user placeholder, fixed
  top-right during content slides.
- **Grammar explanation is now speakable** (🔊 button), not just the
  example chunks.
- **Audit bar**: bottom bar for QA — jump to any slide directly, and a
  "verbal text" overlay listing everything a trainer would speak on the
  current slide without triggering TTS.
- Portrait no longer blocked by a rotate overlay; the slide frame just
  shrinks to a short horizontal strip on narrow/tall viewports.
- Version numbering switched to integers only (was `0.5`, is now `6`).

## Recent changes (v8) — Road-to-MVP gap closure

Closed all 10 gaps found comparing the build against `/spec` (tracked
temporarily in `road-to-MVP.md`, deleted once complete per policy — nothing
worth keeping there long-term wasn't already folded into `/spec` or here):

- `face`/`content` display modes now visually differ (avatar size, slide width)
- `Trainer.voiceProfile.voiceURI` + runtime SpeechSynthesis voice enumeration
- Teaching style is now a session-level toggle (📏 Structured / 🌿 Flexible),
  overriding the trainer's default, affecting pause-screen copy
- Avatar animation: orb pulse + mouth-state indicator, driven by a real
  shared "is speaking" store tied to actual `speak()` calls
- Language matrix: all 6 ordered de/en/zh pairs now covered across the
  trainer roster (was missing en→de, zh→de)
- Dialogue content: real "Im Café" dialogue reused from Deutsch_3.pdf,
  validating the `readalong`-covers-`dialogue` decision. Along the way,
  found and fixed a real bug — the `speaker` field existed in the type but
  was never rendered anywhere.
- Course/lesson selection: `courseIds` on `Trainer`, new lesson-select
  screen between trainer pick and session start
- Classroom-mode framing: session toggle (🧑 1:1 / 👥 Classroom), banner,
  alternate pause copy — same content and engine either way, framing only
- SpeechRecognition self-check: rudimentary, ungraded, loose word-overlap
  matching (`engine/recognition.ts`), 🎤 button in the readalong silent
  phase. Along the way, found a real build/typecheck mismatch — `tsc
  --noEmit` passed against ambient DOM types that `tsc -b` (the actual
  build command) didn't have; fixed by declaring minimal self-contained
  types instead of depending on inconsistent lib.dom SpeechRecognition typings.

Test suite grew from 8 to 13 during this pass, all passing.

## Recent changes (v9)

- Pronunciation slide (Lesson 2, slide 9) now carries the full real source
  content from Deutsch_3.pdf's own Aussprachetraining slide — all 4
  sound-group columns (ei / eu-äu / soft ch / hard ch), ~59 words total,
  up from the earlier 8-word placeholder subset.
- Generalized `VocabDrillBlock`'s column grouping: was hardcoded to
  noun/verb/adjective, now data-driven via optional `groupLabels` on the
  block content, so slides can define their own category groups (e.g.
  sound groups) without touching the component. CSS also gained a denser
  variant that auto-applies for 4+ column layouts.
- Delivered a real Beamer-compiled (xelatex, CJK via Noto Sans CJK SC)
  4:3 PDF preview of that slide as a one-off deliverable, separate from
  the in-app HTML/CSS rendering — not part of the app build.

## Recent changes (v10)

- Real Beamer-class rendering: slide frame is now fixed-size (960×540px,
  16:9) — no scale-to-fit, no `vw`/`vh`-based clamping/letterboxing.
  Renders at its literal size everywhere, like an exported `.beamer` PDF
  page. If it doesn't fit the viewport, the page scrolls instead of the
  slide shrinking.
- Layout restructured: trainer/user avatars now sit beside the slide as a
  normal sidebar in landscape (`.session-layout` flex row), reverting to
  the fixed top-right corner overlay only in portrait, where there's no
  room beside a stacked layout.
- Portrait behavior changed as a direct consequence: the slide can now
  overflow narrow viewports and scroll horizontally, rather than shrinking
  to fit — this is the expected tradeoff of "no zoom, no fitting."

## Recent changes (v11)

- **Full auto-play**: the whole lesson now plays itself end to end once
  started — spoken intro caption, then the slide's own content narration
  (every vocab word, every grammar chunk, every dialogue/song line across
  echo/shadow phases), then auto-advance to the next block. No manual
  clicks required for normal playback; manual buttons remain available as
  optional overrides/replay only.
- Pause genuinely halts everything mid-narration (cancels speech, unmounts
  the active block, in-flight async loops check a cancellation flag before
  every step).
- Fixed a real React rules-of-hooks violation in `Session.tsx` (hooks were
  called after conditional early returns).
- Spec review: clarified that the app is fully teacher-led by design (no
  interaction required except intentional skip/rewind or pause/resume),
  corrected a doc inconsistency where the audit bar was described as
  "not part of the student experience" even though its prev/next/jump
  controls are the actual skip/rewind mechanism, and documented exactly
  what is/isn't narrated (target-language content only; source subtitles,
  the silent phase, structural chrome, and speaker names are intentionally
  silent, not gaps).
- Test suite grew from 14 to 16, including a zero-click full-flow test and
  a pause-halts-autoplay test.

## Recent changes (v12)

- Slide fit-to-screen: the 960×540 Beamer-style slide now scales via a
  `ResizeObserver`-driven CSS transform to always fully fill either the
  available width or height (whichever is tighter) — no cropping, no
  scrolling to see a cropped slide. Found and fixed a real flexbox bug
  along the way: `.slide-area`'s width relied on `align-items: stretch`,
  which worked as the flex *main* axis in landscape but silently failed as
  the *cross* axis in portrait, causing the slide to overflow badly. Fixed
  with an explicit `width/height: 100%`. Covered by a new regression test
  that checks the slide's bounding box against the viewport across three
  viewport shapes.
- New lesson: **"Voices from Orbit"** — English for advanced learners
  (~C1), space-travel themed, same structure as Lesson 2 (title, agenda,
  warm-up, vocab, 3 grammar points, dialogue, pronunciation, song).
  Grammar: inversion after negative adverbials, cleft sentences, and
  nominalization. Original closing song (not reused/copyrighted). New
  `courseId: "english-advanced-c1"`, assigned to Lena and Sol (both target
  English). Along the way, fixed a pre-existing bug: Lena's
  `voiceProfile.lang` was still `"de-DE"` despite her target being English.
- Test suite grew from 17 to 19.

## Recent changes (v14)

- **Japanese support added** — first language beyond the original
  de/en/zh matrix. `LangCode` extended to include `ja`; BCP-47 voice
  mapping, `SpeechRecognition` lang mapping, trainer-select language
  labels, and vocab-drill default category labels all updated to match
  (these were exhaustive `Record<LangCode, ...>` maps that needed a `ja`
  entry each — a genuine type-safety win, since TypeScript's `tsc -b`
  caught every one of them at build time rather than failing silently at
  runtime).
- New trainer: **Yui** (ja↔en), 7th trainer overall — no existing trainer
  covered this pair. Breaks the original 6-trainer "2 per avatar type"
  symmetry; not rebalanced to a full 4-language matrix in this pass.
- New lesson: **にほんごにゅうもん / Japanese for Beginners**
  (`japanese-beginner`) — a structural conversion of Lesson 2 (same
  10-block shape), JLPT N5 level. Vocabulary (38 items, same 16/10/12
  noun/verb/adjective split), grammar explanations (topic は, ます form,
  word order), and the market dialogue are sourced from
  `lingolearn-hue/vocab-games-dev`'s existing vocab/grammar/dialogue
  corpus rather than authored from scratch — the CEFR/JLPT level tags on
  that data made picking beginner-appropriate content fast. Grammar
  example sentences were newly written using this lesson's own vocab
  selection; the reading-practice block (real Japanese homophone pairs:
  はし = chopsticks/bridge, etc.) and the closing song are original, since
  the source repo has no equivalent content for either. Target text is
  hiragana throughout rather than kanji — this app has no furigana/ruby
  rendering, so kanji without a reading aid isn't usable for an absolute
  beginner. 2 interactive comprehension-check turns in the source
  dialogue were dropped (don't map to this app's plain-line readalong
  model) — the 6 spoken lines that remain are unmodified from the source.
- Test suite grew from 27 to 28.

## Recent changes (v13)

- Back button: "← Lessons" in the session header, plus "← Back to lessons"
  on paused/complete screens — returns to lesson selection without
  reloading, cancels speech and releases the wake lock on exit.
- Beginner-course framing language: new `LessonPlan.framingLanguage`
  ("source" | "target"). Lesson 2 (beginner German) now speaks the
  trainer's framing lines (e.g. "now let's sing a song") in the student's
  own language, with the target-language line shown as a secondary
  caption — actual content narration (vocab, dialogue, song lyrics)
  always stays in the target language regardless. The C1 English course
  keeps framing in the target language (advanced learners can follow it).
- Screen wake lock: new `engine/wakeLock.ts`, active while a session is
  running, prevents the device from auto-dimming/locking during long
  (45-90 min) sessions. Feature-detected, no-ops gracefully where
  unsupported.
- Readalong (dialogue/song) redesign: target and source now split
  left/right per line in a compact grid instead of stacking vertically —
  fits ~14 lines of target-language content on one slide without overflow
  (previously the dialogue block could overflow). Speaker column only
  appears when the content actually has speakers.
- Agenda/table-of-contents redesign: new `agenda` block type — a proper
  vertical list (target + source per item), never read aloud verbatim.
  The trainer's spokenIntro now carries genuine free-form spoken framing
  of the lesson ahead instead of a flattened, comma-separated readout.
- Portrait layout: slide now spans the full width edge-to-edge (no side
  padding), and the trainer/student avatars sit in normal document flow
  directly above the slide instead of a fixed corner overlay that
  overlapped it.
- **Real bug found and fixed**: several block components used a
  `played`-once ref guard that could get permanently stuck true from a
  stale `autoPlay=true` prop briefly carried over across a block
  transition (before Session's reset effect commits) — this silently hung
  the lesson forever on affected slides. Fixed across all 5 block
  components (Agenda/Intro/Grammar/VocabDrill/Readalong) by removing the
  `played` ref and relying solely on a per-invocation `cancelled` flag.
  Covered by a dedicated regression test that runs the full 10-block
  lesson hands-off and confirms it actually reaches "complete".
- Test suite grew from 19 to 27.

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
