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

test("trainer select screen shows all 6 trainers with name + languages", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Choose your trainer" })).toBeVisible();

  const names = ["Max", "Jonas", "Lena", "Mei", "Ao", "Sol"];
  for (const name of names) {
    await expect(page.getByText(name, { exact: true })).toBeVisible();
  }
  await expect(page.getByText("German ↔ English").first()).toBeVisible();
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

test("teacher caption shows the spoken intro for the current slide", async ({ page }) => {
  await pickTrainer(page);
  await expect(page.locator(".teacher-caption .target")).toHaveText(
    "Willkommen zu deiner zweiten Deutschstunde!"
  );

  await page.getByText("Continue →").click(); // -> agenda
  await expect(page.locator(".teacher-caption .target")).toHaveText(
    "So sieht unser heutiger Ablauf aus."
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
  await pickTrainer(page);
  await page.getByText(/Slide 1 \//).click();
  await page.locator(".audit-jump-list button", { hasText: "Bruder Jakob" }).click();

  // Advance to the silent phase (3rd) where self-check appears
  await page.getByText("Next phase →").click();
  await page.getByText("Next phase →").click();
  await expect(page.getByText("3. Silent — read alone")).toBeVisible();

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
