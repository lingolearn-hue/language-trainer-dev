# Archive — Historical / Superseded Content

This file holds content moved out of the active docs because it's
either a dated historical record (kept for context, not current status)
or was found to be stale/self-contradicted by a newer section in the
same or another doc. Nothing here should be treated as describing the
current state of the project — see `README.md`, `docs/topic-lesson-
system.md`, and the two master lesson tables for that.

---

## From `README.md`: "Recent changes (v5–v14)"

Moved here in full. This was already self-labeled in `README.md` as a
historical record, not a complete log ("actively maintained through
roughly v14, then fell behind... a large amount of work... happened
without corresponding entries"). Superseded by `README.md`'s "Current
state" section and `git log` for anything after v14.

### Recent changes (v5-v6)

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

### Recent changes (v8) — Road-to-MVP gap closure

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

### Recent changes (v9)

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

### Recent changes (v10)

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

### Recent changes (v11)

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

### Recent changes (v12)

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

### Recent changes (v14)

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

### Recent changes (v13)

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

---

## From `docs/a1-master-lesson-table-v05.md`: pre-v05a "Status summary" and "Known open items"

Moved here because these two sections directly contradicted the
"Build status" and "Songs — implemented status" sections earlier in the
same document (which were updated for v05a; these two sections were
not). For example, this section claimed "7 actually built so far"
while the corrected Build status table said all of Japanese rows 1–19
and German rows 1–13 were built. Also contains a literal duplicated
paragraph in the original (kept verbatim below, not deduplicated, since
this is an archival copy).

For current status, see `docs/a1-master-lesson-table-v05.md`'s own
"Build status" section and `docs/topic-lesson-system.md`.

### Status summary (stale — see note above)
- 34 lessons total in the plan; 7 actually built so far (Japanese 1,2,3,4,5,8,10 — see
  Build status above)
- Vocab: ~30 words/lesson is a floor, not a cap — built lessons range from 30 to 41
  words once the dialogue-vs-vocab audit is applied (any word a dialogue actually uses
  gets added if missing, regardless of running total). UI caps a single column at 16
  rows before auto-splitting into sub-columns.
- Grammar: all 15 universal + 7 language-specific A1 items introduced by Lesson 18,
  Lessons 19–34 cycle back through in mixed review pairs/triples
- Dialogue: 2 topic titles per lesson (A/B), each a uniform 14 lines in built lessons —
  confirmed as the standing target for every future lesson
- Pronunciation: German example track, C-C-C-V cycle, each lesson pairs a universal
  contrast (Concept 1) with a German-specific item (Concept 2). Japanese track has its
  own real two-concept pass for all 7 built lessons (pitch accent, long/short vowels,
  sokuon, dakuten, devoicing, ん-assimilation, mora-timing, R-sound, and the ほん
  counter's irregular sokuon pattern — no two lessons reuse the same concept pairing)
- Song: 11 distinct songs total, each usable up to twice (its introducing lesson + one
  reuse). Across all 34 lessons, 20 now have a song assigned and 14 remain open —
  every song now originates in a new-grammar lesson (1–18) and is only ever reused in
  a review lesson (19–34), no exceptions (see "Changes from v03" above for the fix).
  Of the 9 built lessons total (Japanese 1,2,3,4,5,8,10; German 2,11), only Japanese
  Lesson 2 (Head Shoulders Knees and Toes) and German Lesson 11 (Row Row Row Your
  Boat) have their table-assigned song actually translated and wired in. Japanese
  Lessons 1 and 8 are missing songs the table says they should have (Frere Jacques,
  This Old Man — not yet translated). Japanese Lessons 3, 4, 5, 10 correctly have no
  song (open slots). German Lesson 2 predates the table and doesn't map cleanly to
  any single row (see "Build status"), so its own song (Bruder Jakob) isn't really
  validated against this table either way — pre-existing, not a new issue.

### Known open items (stale — see note above)
- A2–C2 vocab-to-grammar mapping not yet attempted (A1 only so far)
- Real per-category word counts checked for only 3 of 34 categories (Food, Shopping,
  Health — see "Changes from v02" above); the other 31 are still unverified against
  the actual tagged vocab corpus
- Pronunciation/song tracks are resolved for German (full) and Japanese (7 of 34
  lessons) — Chinese and the remaining 27 Japanese rows still need their own
  Concept 2 / native-song research pass
- Pronunciation/song tracks are resolved for German (full) and Japanese (7 of 34
  lessons) — Chinese and the remaining 27 Japanese rows still need their own
  Concept 2 / native-song research pass
- Japanese Lessons 1 and 8 (both built) are missing songs the table assigns them
  (Frere Jacques, This Old Man) — translation not yet done, tracked above under Song
- 14 lesson slots still have no song at all: 7 in 1–18 (lessons 4, 5, 6, 10, 14, 16,
  17 — never filled) and 7 in 19–34 (lessons 23, 27, 29, 30, 31, 32, and now 34 —
  either their nearest grammar-match song is already at its 2-use cap, or, for L34
  specifically, no single-lesson reuse partner exists at all) — candidates for new
  native-language song research, one tier below the reuse-mapping resolved in v02/v04
- Vocab-column 16-row cap (new this version) hasn't been checked against every
  planned category — a few of the 34 topics may produce lopsided columns once built
  (e.g. a topic with many more nouns than verbs), which is fine functionally (it just
  auto-splits) but worth a glance during authoring for balance
