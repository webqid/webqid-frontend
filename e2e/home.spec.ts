import { test } from "@playwright/test";

test.describe("webqid home", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
  });
});
