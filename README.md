# Language Trainer

Version: 9 — 2026-08-12

React-based long-form language tutor simulation. Static content, multiple
trainer personas, block-based session engine with pause/resume.

See `/spec` (in project history) for concept, trainer, and lesson-structure docs.

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
