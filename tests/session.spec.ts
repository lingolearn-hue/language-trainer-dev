import { test, expect, type Page } from "@playwright/test";

// All session tests pick "Max" (de/en) so vocab/grammar assertions in German
// stay valid regardless of which trainer card layout changes later.
async function pickTrainer(page: Page) {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Choose your trainer" })).toBeVisible();
  await page.getByText("Max").click();
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

test("selecting a trainer starts the lesson session", async ({ page }) => {
  await pickTrainer(page);
  await expect(page.getByText("Willkommen")).toBeVisible();
});

test("lesson 2 session loads and advances through blocks", async ({ page }) => {
  await pickTrainer(page);

  // Intro block
  await expect(page.getByText("Willkommen")).toBeVisible();
  await page.getByText("Continue →").click();

  // Vocab drill block
  await expect(page.getByText("Gegenstände und Eigenschaften")).toBeVisible();
  await expect(page.getByText("das Buch")).toBeVisible();
  await page.getByText("Continue →").click();

  // Grammar block (verbs) — dense view shows everything at once now
  await expect(page.getByRole("heading", { name: "Regelmäßige Verben" })).toBeVisible();
  await expect(page.getByText("ich lerne", { exact: true })).toBeVisible();
  await page.getByText("Continue →").click();

  // Grammar block (Fragen)
  await expect(page.getByRole("heading", { name: "Fragen" })).toBeVisible();
});

test("audit bar: jump list navigates directly to any slide", async ({ page }) => {
  await pickTrainer(page);

  await page.getByText(/Slide 1 \//).click();
  await expect(page.locator(".audit-jump-list")).toBeVisible();

  await page.locator(".audit-jump-list button", { hasText: "Gegenstände" }).click();
  await expect(page.getByText(/Slide 2 \//)).toBeVisible();
  await expect(page.getByText("Gegenstände und Eigenschaften")).toBeVisible();
});

test("audit bar: verbal text overlay shows spoken lines without playing audio", async ({
  page,
}) => {
  await pickTrainer(page);
  await page.getByText(/Slide 1 \//).click();
  await page.locator(".audit-jump-list button", { hasText: "Gegenstände" }).click();

  await page.getByText("🗨 Verbal text").click();
  await expect(page.locator(".audit-overlay-panel")).toBeVisible();
  await expect(page.locator(".audit-overlay-panel")).toContainText("das Buch");

  await page.getByText("Close").click();
  await expect(page.locator(".audit-overlay-panel")).not.toBeVisible();
});

test("in-lesson trainer avatar and user placeholder are shown", async ({ page }) => {
  await pickTrainer(page);
  await expect(page.locator(".lesson-avatar-name")).toHaveText("Max");
  await expect(page.locator(".user-avatar-placeholder")).toBeVisible();
});

test("pause and resume persists block position via localStorage", async ({ page }) => {
  await pickTrainer(page);
  await page.getByText("Continue →").click(); // past intro

  await page.getByText("⏸ Pause").click();
  await expect(page.getByText("Paused")).toBeVisible();

  await page.getByText("▶ Resume").click();
  await expect(page.getByText("Gegenstände und Eigenschaften")).toBeVisible();
});
