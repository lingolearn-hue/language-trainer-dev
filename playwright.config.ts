import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  webServer: {
    command: "npm run dev -- --port 5173",
    port: 5173,
    reuseExistingServer: true,
  },
  use: {
    baseURL: "http://localhost:5173",
    // Sandbox has no network access to download Playwright's own browser
    // binaries (cdn.playwright.dev is not on the egress allowlist). Instead
    // we use the Chromium bundled inside @sparticuz/chromium, which ships
    // as an npm package (registry.npmjs.org is allowlisted).
    launchOptions: {
      executablePath: process.env.PW_CHROMIUM_PATH,
      args: ["--no-sandbox", "--disable-dev-shm-usage", "--headless=new"],
    },
  },
});
