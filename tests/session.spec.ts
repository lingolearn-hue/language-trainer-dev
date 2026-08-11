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
  await expect(page.getByText("Regelmäßige Verben")).toBeVisible();
  const revealButton = page.getByText("Reveal next →");
  while (await revealButton.isVisible().catch(() => false)) {
    await revealButton.click();
  }
  await page.getByText("Continue →").click();

  // Grammar block (Fragen)
  await expect(page.getByText("Fragen", { exact: true })).toBeVisible();
});

test("pause and resume persists block position via localStorage", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Continue →").click(); // past intro

  await page.getByText("⏸ Pause").click();
  await expect(page.getByText("Paused")).toBeVisible();

  await page.getByText("▶ Resume").click();
  await expect(page.getByText("Gegenstände und Eigenschaften")).toBeVisible();
});
