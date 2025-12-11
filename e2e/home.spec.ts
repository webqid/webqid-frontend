import { test, expect } from "@playwright/test";

test.describe("webqid home", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
  });

  test("renders hero", async ({ page }) => {
    await expect(page.locator("#hero h1")).toBeVisible();
    await expect(page.getByText("Built with intent.")).toBeVisible();
  });

  test("demo link works", async ({ page }) => {
    const demoLink = page.locator("#hero").getByRole("link", { name: "demo" });
    await expect(demoLink).toBeVisible();
    await expect(demoLink).toHaveAttribute("href", "https://demo.webqid.com");
  });

  test("solutions section loads and shows 6 cards", async ({ page }) => {
    const solutions = page.locator("#solutions");
    await expect(solutions).toBeVisible();
    await expect(solutions.getByRole("heading", { name: "solutions" })).toBeVisible();

    // Count the grid children (SolutionCard mounts as grid items)
    const cards = solutions.locator(".grid > *");
    await expect(cards).toHaveCount(6);
  });

  test("studio section visible after scroll", async ({ page }) => {
    const studio = page.locator("#studio");
    await studio.scrollIntoViewIfNeeded();
    await expect(studio.getByRole("heading", { name: "studio" })).toBeVisible();
  });

  test("contact section loads", async ({ page }) => {
    const contact = page.locator("#contact");
    await expect(contact).toBeVisible();
    await expect(contact.getByRole("heading", { name: "contact" })).toBeVisible();

    const email = contact.getByRole("link", { name: "hello@webqid.com" });
    await expect(email).toHaveAttribute("href", "mailto:hello@webqid.com");

    const cta = contact.getByRole("link", { name: "Start a conversation" });
    await expect(cta).toBeVisible();
  });
});
