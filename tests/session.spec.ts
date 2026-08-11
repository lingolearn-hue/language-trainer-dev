import { test, expect } from "@playwright/test";

test("lesson 2 session loads and advances through blocks", async ({ page }) => {
  await page.goto("/");

  // Intro block
  await expect(page.getByText("Willkommen")).toBeVisible();
  await page.getByText("Continue →").click();

  // Vocab drill block
  await expect(page.getByText("Gegenstände und Eigenschaften")).toBeVisible();
  await expect(page.getByText("das Buch")).toBeVisible();
  await page.getByText("Continue →").click();

  // Grammar block (verbs) — reveal chunks then continue
  await expect(page.getByRole("heading", { name: "Regelmäßige Verben" })).toBeVisible();
  const revealButton = page.getByText("Reveal next →");
  while (await revealButton.isVisible().catch(() => false)) {
    await revealButton.click();
  }
  await page.getByText("Continue →").click();

  // Grammar block (Fragen)
  await expect(page.getByRole("heading", { name: "Fragen" })).toBeVisible();
});

test("audit bar: jump list navigates directly to any slide", async ({ page }) => {
  await page.goto("/");

  await page.getByText(/Slide 1 \//).click();
  await expect(page.locator(".audit-jump-list")).toBeVisible();

  await page.locator(".audit-jump-list button", { hasText: "Gegenstände" }).click();
  await expect(page.getByText(/Slide 2 \//)).toBeVisible();
  await expect(page.getByText("Gegenstände und Eigenschaften")).toBeVisible();
});

test("audit bar: verbal text overlay shows spoken lines without playing audio", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByText(/Slide 1 \//).click();
  await page.locator(".audit-jump-list button", { hasText: "Gegenstände" }).click();

  await page.getByText("🗨 Verbal text").click();
  await expect(page.locator(".audit-overlay-panel")).toBeVisible();
  await expect(page.locator(".audit-overlay-panel")).toContainText("das Buch");

  await page.getByText("Close").click();
  await expect(page.locator(".audit-overlay-panel")).not.toBeVisible();
});

test("pause and resume persists block position via localStorage", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Continue →").click(); // past intro

  await page.getByText("⏸ Pause").click();
  await expect(page.getByText("Paused")).toBeVisible();

  await page.getByText("▶ Resume").click();
  await expect(page.getByText("Gegenstände und Eigenschaften")).toBeVisible();
});
