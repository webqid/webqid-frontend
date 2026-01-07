import { test, expect } from "@playwright/test";

test.describe("webqid home", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
  });

  // test("renders hero with title and tagline", async ({ page }) => {
  //   const hero = page.locator("#hero");
  //   await expect(hero).toBeVisible();
  //   await expect(hero.locator("h1")).toContainText("webqid");
  //   await expect(page.getByText("Built with intent.")).toBeVisible();
  //   await expect(
  //     page.getByText("Precision-built Web frontends.")
  //   ).toBeVisible();
  // });

  // test("hero section has proper aria-labelledby", async ({ page }) => {
  //   const hero = page.locator("#hero");
  //   await expect(hero).toHaveAttribute("aria-labelledby", "hero-title");
  //   await expect(page.locator("#hero-title")).toBeVisible();
  // });

  // test("solutions section loads and shows 6 cards", async ({ page }) => {
  //   const solutions = page.locator("#solutions");
  //   await expect(solutions).toBeVisible();
  //   await expect(
  //     solutions.getByRole("heading", { name: "solutions" })
  //   ).toBeVisible();

  //   // Count the grid children (SolutionCard mounts as grid items)
  //   const cards = solutions.locator(".grid > *");
  //   await expect(cards).toHaveCount(6);
  // });

  // test("solutions section has proper accessibility", async ({ page }) => {
  //   const solutions = page.locator("#solutions");
  //   await expect(solutions).toHaveAttribute("aria-labelledby", "solutions-title");
  //   await expect(page.locator("#solutions-title")).toBeVisible();
  // });

  // test("tech marquee is visible", async ({ page }) => {
  //   const marquee = page.locator("[aria-label='Technologies we use']");
  //   await expect(marquee).toBeVisible();
  // });

  // test("studio section visible after scroll", async ({ page }) => {
  //   const studio = page.locator("#studio");
  //   await studio.scrollIntoViewIfNeeded();
  //   await expect(
  //     studio.getByRole("heading", { name: "studio" })
  //   ).toBeVisible();
  // });

  // test("workspace section loads", async ({ page }) => {
  //   const workspace = page.locator("#workspace");
  //   await workspace.scrollIntoViewIfNeeded();
  //   await expect(
  //     workspace.getByRole("heading", { name: "workspace" })
  //   ).toBeVisible();
  // });

  // test("contact section loads with email link", async ({ page }) => {
  //   const contact = page.locator("#contact");
  //   await contact.scrollIntoViewIfNeeded();
  //   await expect(
  //     contact.getByRole("heading", { name: "contact" })
  //   ).toBeVisible();

  //   const email = contact.getByRole("link", { name: "hello@webqid.com" });
  //   await expect(email).toHaveAttribute("href", "mailto:hello@webqid.com");

  //   const cta = contact.getByRole("link", { name: "Start a conversation" });
  //   await expect(cta).toBeVisible();
  // });

  // test("skip link is present for accessibility", async ({ page }) => {
  //   const skipLink = page.getByRole("link", { name: "Skip to content" });
  //   await expect(skipLink).toBeAttached();
  // });

  // test("navigation is present", async ({ page }) => {
  //   const nav = page.locator("nav[aria-label='Main navigation']");
  //   await expect(nav).toBeVisible();
  // });

  // test("footer is present with social links", async ({ page }) => {
  //   const footer = page.locator("footer");
  //   await footer.scrollIntoViewIfNeeded();
  //   await expect(footer).toBeVisible();

    // Check for social links
    // await expect(
    //   footer.getByRole("link", { name: "webqid on GitHub" })
    // ).toBeVisible();
    // await expect(
    //   footer.getByRole("link", { name: "webqid on LinkedIn" })
    // ).toBeVisible();
  //});
});
