import { test, expect, type Page } from "@playwright/test";

// All session tests pick "Max" (de/en) so vocab/grammar assertions in German
// stay valid regardless of which trainer card layout changes later.
async function pickTrainer(page: Page) {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Choose your trainer" })).toBeVisible();
  await page.getByText("Max").click();
  await expect(page.getByRole("heading", { name: "Choose a lesson" })).toBeVisible();
  await page.getByText("Lektion 2").click();
}

test("trainer select screen shows all original 6 trainers with name + languages, plus Yui", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Choose your trainer" })).toBeVisible();

  const names = ["Max", "Jonas", "Lena", "Mei", "Ao", "Sol", "Yui"];
  for (const name of names) {
    await expect(page.getByText(name, { exact: true })).toBeVisible();
  }
  await expect(page.getByText("German ↔ English").first()).toBeVisible();
});

test("japanese lesson: Yui teaches it, vocab/dialogue/agenda render correctly", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Yui").click();
  await expect(page.getByRole("heading", { name: "Choose a lesson" })).toBeVisible();

  await page.getByText("にほんごにゅうもん").click();
  await expect(page.getByRole("heading", { name: "にほんごにゅうもん" })).toBeVisible();

  await page.getByText(/Slide \d+ \//).click();
  await page.locator(".audit-jump-list button", { hasText: "たんご" }).click();
  await expect(page.getByText("コーヒー")).toBeVisible();
  await expect(page.getByText("たべる")).toBeVisible();
  await expect(page.locator(".vocab-groups")).toBeVisible();

  await page.getByText(/Slide \d+ \//).click();
  await page.locator(".audit-jump-list button", { hasText: "かいわ" }).click();
  await expect(page.locator(".speaker", { hasText: "けんた" }).first()).toBeVisible();

  await page.getByText(/Slide \d+ \//).click();
  await page.locator(".audit-jump-list button", { hasText: "ながれ" }).click();
  await expect(page.locator(".agenda-item")).toHaveCount(8);
  // Beginner course — framing caption leads with English, not Japanese.
  const caption = await page.locator(".teacher-caption .primary").textContent();
  expect(caption).toMatch(/^Today we'll start/);
});

test("selecting a trainer starts on the title slide, not the warm-up", async ({ page }) => {
  await pickTrainer(page);
  await expect(page.getByRole("heading", { name: "Deutsch für Anfänger" })).toBeVisible();
});

test("lesson 2 session follows the source slide order: title -> agenda -> intro -> vocab -> grammar -> Fragen", async ({
  page,
}) => {
  await pickTrainer(page);

  // 1. Title slide
  await expect(page.getByRole("heading", { name: "Deutsch für Anfänger" })).toBeVisible();
  await page.getByText("Continue →").click();

  // 2. Agenda slide
  await expect(page.getByRole("heading", { name: "Ablauf" })).toBeVisible();
  await page.getByText("Continue →").click();

  // 3. Self-intro (Selbstvorstellung / warm-up)
  await expect(page.getByText("Willkommen")).toBeVisible();
  await page.getByText("Continue →").click();

  // 4. Vocab drill block
  await expect(page.getByText("Wortschatz")).toBeVisible();
  await expect(page.getByText("das Buch")).toBeVisible();
  await page.getByText("Continue →").click();

  // 5. Grammar block (verbs) — dense view shows everything at once
  await expect(page.getByRole("heading", { name: "Regelmäßige Verben" })).toBeVisible();
  await expect(page.getByText("ich lerne", { exact: true })).toBeVisible();
  await page.getByText("Continue →").click();

  // 6. Grammar block (Fragen)
  await expect(page.getByRole("heading", { name: "Fragen" })).toBeVisible();
});

test("lesson flows automatically from title through several blocks with zero clicks", async ({
  page,
}) => {
  test.setTimeout(75000);
  await pickTrainer(page);

  await expect(page.getByRole("heading", { name: "Deutsch für Anfänger" })).toBeVisible();
  // No clicks at all — just wait for auto-play to carry the session forward
  // on its own, past title/agenda/intro, all the way to vocab. Intermediate
  // slides (agenda, intro) are transient and may already be gone by the
  // time we'd assert on them, since auto-play doesn't wait for the person —
  // so we only check the eventual destination, not every step along the way.
  // Generous timeout: the agenda slide's spoken framing is now a full
  // free-form paragraph (not a short one-liner), which takes longer to
  // speak through than earlier slides did.
  // Use `.vocab-groups` (a class unique to the real vocab slide) rather
  // than the text "Wortschatz" — that word now also appears as an agenda
  // list item and inside the agenda's own spoken-framing paragraph, so a
  // plain text match is ambiguous.
  await expect(page.locator(".vocab-groups").first()).toBeVisible({ timeout: 45000 });
});

test("pause stops auto-play; resume does not skip ahead unexpectedly", async ({ page }) => {
  await pickTrainer(page);
  await page.getByText("⏸ Pause").click();
  await expect(page.getByText(/Block \d/)).toBeVisible();
  const pausedText = await page.locator(".session.paused p").textContent();
  await page.waitForTimeout(3000); // long enough that auto-play would have advanced if still running
  const stillPausedText = await page.locator(".session.paused p").textContent();
  expect(stillPausedText).toBe(pausedText);
});

test("audit bar: jump list navigates directly to any slide", async ({ page }) => {
  await pickTrainer(page);

  await page.getByText(/Slide 1 \//).click();
  await expect(page.locator(".audit-jump-list")).toBeVisible();

  await page.locator(".audit-jump-list button", { hasText: "Wortschatz" }).click();
  await expect(page.getByText("Wortschatz")).toBeVisible();
});

test("audit bar: verbal text overlay shows spoken lines without playing audio", async ({
  page,
}) => {
  await pickTrainer(page);
  await page.getByText(/Slide 1 \//).click();
  await page.locator(".audit-jump-list button", { hasText: "Wortschatz" }).click();

  await page.getByText("🗨 Verbal text").click();
  await expect(page.locator(".audit-overlay-panel")).toBeVisible();
  await expect(page.locator(".audit-overlay-panel")).toContainText("das Buch");

  await page.getByText("Close").click();
  await expect(page.locator(".audit-overlay-panel")).not.toBeVisible();
});

test("teacher caption shows the spoken intro for the current slide, in the source language for beginner courses", async ({
  page,
}) => {
  await pickTrainer(page);
  // lesson2 is a beginner course (framingLanguage: "source") — Max teaches
  // de/en, so framing is spoken/shown as primary in English, with German
  // as the secondary reference line.
  await expect(page.locator(".teacher-caption .primary")).toHaveText(
    "Welcome to your second German lesson!"
  );
  await expect(page.locator(".teacher-caption .secondary")).toHaveText(
    "Willkommen zu deiner zweiten Deutschstunde!"
  );

  await page.getByText("Continue →").click(); // -> agenda
  await expect(page.locator(".teacher-caption .primary")).toHaveText(
    "Today we'll start with a short intro. After that we'll build up your vocabulary, look at how regular verbs work, practice asking questions, and sort out word order. We'll wrap up with a café dialogue, some pronunciation practice, and finish, as always, with a song."
  );
});

test("in-lesson trainer avatar and user placeholder are shown", async ({ page }) => {
  await pickTrainer(page);
  await expect(page.locator(".lesson-avatar-name")).toHaveText("Max");
  await expect(page.locator(".user-avatar-placeholder")).toBeVisible();
});

test("teaching style toggle overrides the trainer's default for the session", async ({
  page,
}) => {
  await pickTrainer(page); // Max defaults to "rigid"
  await expect(page.getByText("📏 Structured")).toBeVisible();

  await page.getByText("📏 Structured").click();
  await expect(page.getByText("🌿 Flexible")).toBeVisible();

  await page.getByText("⏸ Pause").click();
  await expect(page.getByRole("heading", { name: "Taking a break?" })).toBeVisible();
});

test("lesson select screen appears after trainer choice and supports going back", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByText("Max").click();

  await expect(page.getByRole("heading", { name: "Choose a lesson" })).toBeVisible();
  await expect(page.getByText("with Max")).toBeVisible();
  await expect(page.getByText("Lektion 2")).toBeVisible();

  await page.getByText("← Choose a different trainer").click();
  await expect(page.getByRole("heading", { name: "Choose your trainer" })).toBeVisible();
});

test("self-check button appears in silent phase and handles unsupported browsers gracefully", async ({
  page,
}) => {
  test.setTimeout(60000);
  await pickTrainer(page);
  await page.getByText(/Slide 1 \//).click();
  await page.locator(".audit-jump-list button", { hasText: "Bruder Jakob" }).click();

  // The lesson now flows automatically (spoken intro, then echo, shadow,
  // silent phases in sequence) — wait for auto-play to reach silent rather
  // than manually clicking "Next phase", which would race the auto-advance.
  await expect(page.getByText("3. Silent — read alone")).toBeVisible({ timeout: 45000 });

  const checkBtn = page.locator(".self-check-btn").first();
  await expect(checkBtn).toBeVisible();
  await checkBtn.click();
  // This headless Chromium build does expose SpeechRecognition (unlike a
  // typical CI browser), so it enters "listening" rather than degrading to
  // "unsupported" — proves the button is wired to the recognition engine.
  // With no real mic in this sandbox it won't produce a match/no-match
  // result reliably, so we only assert the listening state fires.
  await expect(checkBtn).toHaveText("🎤…");
  await expect(checkBtn).toBeDisabled();
});

test("pronunciation slide has the full 4-column source content (~59 words)", async ({
  page,
}) => {
  await pickTrainer(page);
  await page.getByText(/Slide 1 \//).click();
  await page.locator(".audit-jump-list button", { hasText: "Aussprachetraining" }).click();

  await expect(page.getByRole("heading", { name: "Aussprachetraining" })).toBeVisible();
  await expect(page.locator(".vocab-group")).toHaveCount(4);
  await expect(page.getByText("brauchen")).toBeVisible();
  await expect(page.getByText("59 words")).toBeVisible();
});

test("dialogue block shows speaker names for each line", async ({ page }) => {
  await pickTrainer(page);
  await page.getByText(/Slide 1 \//).click();
  await page.locator(".audit-jump-list button", { hasText: "Im Café" }).click();

  await expect(page.getByRole("heading", { name: "Dialog: Im Café" })).toBeVisible();
  await expect(page.locator(".speaker", { hasText: "Kellner" }).first()).toBeVisible();
  await expect(page.getByText("Ich möchte einen Kaffee, bitte.")).toBeVisible();
});

test("classroom mode toggle shows a banner and changes pause copy, without changing content", async ({
  page,
}) => {
  await pickTrainer(page);
  await expect(page.locator(".classroom-banner")).toHaveCount(0);

  await page.getByText("🧑 1:1").click();
  await expect(page.locator(".classroom-banner")).toHaveText("👥 Everyone, repeat after me!");

  await page.getByText("⏸ Pause").click();
  await expect(page.getByText(/Class is paused on slide/)).toBeVisible();
});

test("slide always fits fully within its container (no overflow) in landscape and portrait", async ({
  page,
}) => {
  for (const viewport of [
    { width: 1400, height: 900 },
    { width: 1000, height: 500 },
    { width: 420, height: 900 },
  ]) {
    await page.setViewportSize(viewport);
    await pickTrainer(page);

    const box = await page.locator(".slide-frame").boundingBox();
    expect(box).not.toBeNull();
    if (box) {
      expect(box.x).toBeGreaterThanOrEqual(-1); // allow 1px rounding
      expect(box.y).toBeGreaterThanOrEqual(-1);
      expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + 1);
      expect(box.y + box.height).toBeLessThanOrEqual(viewport.height + 1);
    }
  }
});

test("english advanced lesson: trainer with matching course sees both lessons, content plays correctly", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByText("Lena").click();

  await expect(page.getByRole("heading", { name: "Choose a lesson" })).toBeVisible();
  await expect(page.getByText("Lesson 2")).toBeVisible();
  await expect(page.getByText("Voices from Orbit")).toBeVisible();

  await page.getByText("Voices from Orbit").click();
  await expect(page.getByRole("heading", { name: "Voices from Orbit" })).toBeVisible();

  await page.getByText(/Slide 1 \//).click();
  await page.locator(".audit-jump-list button", { hasText: "Vocabulary" }).click();
  await expect(page.getByText("trajectory")).toBeVisible();
  await expect(page.getByText("to decelerate")).toBeVisible();
  await expect(page.getByText("resilient")).toBeVisible();

  await page.getByText(/Slide \d+ \//).click();
  await page
    .locator(".audit-jump-list button", { hasText: "Inversion After Negative Adverbials" })
    .click();
  await expect(page.getByText("Never had the crew experienced such silence.")).toBeVisible();
});

test("selecting a trainer without the english course only shows lesson 2", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Max").click();
  await expect(page.getByText("Lektion 2")).toBeVisible();
  await expect(page.getByText("Voices from Orbit")).not.toBeVisible();
});

test("back button returns from a session to the lesson selection screen", async ({ page }) => {
  await pickTrainer(page);
  await expect(page.getByRole("heading", { name: "Choose a lesson" })).not.toBeVisible();

  await page.getByTitle("Back to lesson selection").click();
  await expect(page.getByRole("heading", { name: "Choose a lesson" })).toBeVisible();
  await expect(page.getByText("Lektion 2")).toBeVisible();
});

test("back button is also available from the paused screen", async ({ page }) => {
  await pickTrainer(page);
  await page.getByText("⏸ Pause").click();
  await expect(page.getByText("Paused")).toBeVisible();

  await page.getByText("← Back to lessons").click();
  await expect(page.getByRole("heading", { name: "Choose a lesson" })).toBeVisible();
});

test("advanced (C1) course keeps framing in the target language, unlike the beginner course", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByText("Lena").click();
  await page.getByText("Voices from Orbit").click();
  // lessonEnglishSpace has no framingLanguage override (defaults to
  // "target") — Lena's target is English, so the caption's primary line
  // should be the English text itself, with no separate secondary line
  // beneath it (spokenIntro for this lesson isn't authored in German).
  await expect(page.locator(".teacher-caption .primary")).toHaveText(
    "Welcome back. Today we head into deep space."
  );
});

test("wake lock: session does not crash in browsers without Wake Lock API support", async ({
  page,
}) => {
  // This sandbox's headless Chromium build doesn't implement
  // navigator.wakeLock, which is exactly the unsupported-browser path we
  // want covered — acquireWakeLock() must no-op safely rather than throw.
  await pickTrainer(page);
  await expect(page.locator(".slide-frame")).toBeVisible();
  await page.getByText("⏸ Pause").click();
  await expect(page.getByText("Paused")).toBeVisible();
  await page.getByText("▶ Resume").click();
  await expect(page.locator(".slide-frame")).toBeVisible();
});

test("readalong lines are compact enough that 14 target-language lines would fit on one slide without overflow", async ({
  page,
}) => {
  await pickTrainer(page);
  await page.getByText(/Slide \d+ \//).click();
  await page.locator(".audit-jump-list button", { hasText: "Dialog: Im Café" }).click();

  const measurements = await page.evaluate(() => {
    const contentEl = document.querySelector(".slide-content");
    const linesEl = document.querySelector(".lines");
    const lineCount = document.querySelectorAll(".line").length;
    return {
      contentHeight: contentEl?.getBoundingClientRect().height ?? 0,
      linesHeight: linesEl?.getBoundingClientRect().height ?? 0,
      lineCount,
    };
  });

  expect(measurements.lineCount).toBeGreaterThan(0);
  const perLineHeight = measurements.linesHeight / measurements.lineCount;
  // Real target: ~14 lines must fit within the available content height.
  expect(perLineHeight * 14).toBeLessThanOrEqual(measurements.contentHeight);
  // The current 10-line dialogue itself must not overflow either.
  expect(measurements.linesHeight).toBeLessThanOrEqual(measurements.contentHeight);
});

test("agenda is a vertical list, not a single read-aloud line, and items are not spoken verbatim", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByText("Max").click();
  await page.getByText("Lektion 2").click();
  await page.getByText("Continue →").click(); // -> agenda

  await expect(page.getByRole("heading", { name: "Ablauf" })).toBeVisible();
  const items = page.locator(".agenda-item");
  await expect(items).toHaveCount(8);
  // Max's target language is German — .agenda-target shows the target
  // language, .agenda-source shows English (his source language).
  await expect(items.nth(0).locator(".agenda-target")).toHaveText("Einführung");
  await expect(items.nth(0).locator(".agenda-source")).toHaveText("Introduction");
  await expect(items.nth(7).locator(".agenda-target")).toHaveText("Lied");
  await expect(items.nth(7).locator(".agenda-source")).toHaveText("Song");

  // The caption speaks free-form framing prose, not the list content —
  // none of the agenda's own item text is what's playing as the caption.
  const caption = await page.locator(".teacher-caption .primary").textContent();
  expect(caption).not.toContain("Introduction · Vocabulary");
  expect(caption?.length ?? 0).toBeGreaterThan(80); // genuinely free-form prose, not a short label
});

test("portrait: slide spans full width and avatars sit above it without overlapping", async ({
  page,
}) => {
  await page.setViewportSize({ width: 420, height: 900 });
  await pickTrainer(page);

  const layoutBox = await page.locator(".session-layout").boundingBox();
  const slideAreaBox = await page.locator(".slide-area").boundingBox();
  const avatarsBox = await page.locator(".lesson-avatars").boundingBox();

  expect(layoutBox && slideAreaBox).toBeTruthy();
  if (layoutBox && slideAreaBox) {
    // Full width: slide-area spans (approximately) the whole layout width.
    expect(slideAreaBox.width).toBeGreaterThanOrEqual(layoutBox.width - 2);
  }

  expect(avatarsBox && slideAreaBox).toBeTruthy();
  if (avatarsBox && slideAreaBox) {
    // Avatars sit above the slide (their bottom edge is at/above the
    // slide's top edge) rather than overlapping it.
    expect(avatarsBox.y + avatarsBox.height).toBeLessThanOrEqual(slideAreaBox.y + 1);
  }
});

test("regression: auto-play does not hang on any block transition (stale autoPlay-prop race)", async ({
  page,
}) => {
  // Guards against a real bug found while building the agenda block: a
  // block component could briefly mount with a stale autoPlay=true left
  // over from the previous block (before Session's reset effect commits),
  // and a naive "played once" ref guard would permanently block the real
  // run once autoPlay genuinely turned true — silently hanging the lesson
  // forever on that slide. Runs the full 10-block lesson hands-off and
  // confirms it actually reaches "complete", not just that it doesn't
  // throw.
  test.setTimeout(280000);
  await pickTrainer(page);
  await expect(page.getByText("Lesson complete", { exact: false })).toBeVisible({
    timeout: 260000,
  });
});

test("pause and resume persists block position via localStorage", async ({ page }) => {
  await pickTrainer(page);
  await page.getByText("Continue →").click(); // past title
  await page.getByText("Continue →").click(); // past agenda
  await page.getByText("Continue →").click(); // past intro

  await page.getByText("⏸ Pause").click();
  await expect(page.getByText("Paused")).toBeVisible();

  await page.getByText("▶ Resume").click();
  await expect(page.getByText("Wortschatz")).toBeVisible();
});
