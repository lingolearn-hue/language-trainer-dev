# Language Trainer

Version: 6 — 2026-08-11

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
