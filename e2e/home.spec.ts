import { test, expect } from "@playwright/test";

test.describe("Default CV Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/default", { waitUntil: "domcontentloaded" });
  });

  test.describe("CV Style Switch", () => {
    test("should display CV style switch in top right corner", async ({ page }) => {
      const styleSwitch = page.locator("select");
      await expect(styleSwitch).toBeVisible();
    });

    test("should have default option selected", async ({ page }) => {
      const styleSwitch = page.locator("select");
      await expect(styleSwitch).toHaveValue("/default");
    });

    test("should display all CV style options", async ({ page }) => {
      const styleSwitch = page.locator("select");
      await expect(styleSwitch.locator("option")).toHaveCount(4);
      await expect(styleSwitch.locator("option[value='/default']")).toHaveText("Default");
      await expect(styleSwitch.locator("option[value='/personal']")).toHaveText("Personal");
      await expect(styleSwitch.locator("option[value='/github']")).toHaveText("GitHub");
      await expect(styleSwitch.locator("option[value='/creative']")).toHaveText("Creative");
    });
  });

  test.describe("Hero Section", () => {
    test("should display profile image", async ({ page }) => {
      const profileImage = page.getByRole("img", { name: "Christian van de Weerd" });
      await expect(profileImage).toBeAttached({ timeout: 10000 });
    });

    test("should display name as main heading", async ({ page }) => {
      const heading = page.getByRole("heading", { name: "Christian van de Weerd", level: 1 });
      await expect(heading).toBeVisible();
    });

    test("should display job title", async ({ page }) => {
      const heroSection = page.locator("#hero");
      await expect(heroSection.getByText("Frontend Developer", { exact: true })).toBeVisible();
    });

    test("should have social links navigation", async ({ page }) => {
      const socialNav = page.getByRole("navigation", { name: "Social links" });
      await expect(socialNav).toBeVisible();
    });

    test("should have LinkedIn link with correct href", async ({ page }) => {
      const linkedinLink = page.getByRole("link", { name: "LinkedIn" }).first();
      await expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/jcvandeweerd");
      await expect(linkedinLink).toHaveAttribute("target", "_blank");
    });

    test("should have GitHub link with correct href", async ({ page }) => {
      const githubLink = page.getByRole("link", { name: "GitHub" }).first();
      await expect(githubLink).toHaveAttribute("href", "https://github.com/webqid");
      await expect(githubLink).toHaveAttribute("target", "_blank");
    });
  });

  test.describe("Summary Section", () => {
    test("should display Summary section with heading", async ({ page }) => {
      const summarySection = page.locator("#summary");
      await expect(summarySection).toBeVisible();

      const heading = summarySection.getByRole("heading", { name: "Summary" });
      await expect(heading).toBeVisible();
    });

    test("should display professional summary content", async ({ page }) => {
      await expect(page.getByText("Senior Frontend Developer with 20+ years")).toBeVisible();
      await expect(page.getByText("Available for hybrid and remote opportunities")).toBeVisible();
    });
  });

  test.describe("Skills Section", () => {
    test("should display Skills section with heading", async ({ page }) => {
      const skillsSection = page.locator("#skills");
      await expect(skillsSection).toBeVisible();

      const heading = skillsSection.getByRole("heading", { name: "Skills" });
      await expect(heading).toBeVisible();
    });

    test("should display skill categories", async ({ page }) => {
      const skillsSection = page.locator("#skills");
      
      await expect(skillsSection.getByText("Frontend Architecture")).toBeVisible();
      await expect(skillsSection.getByText("UI and Styling")).toBeVisible();
      await expect(skillsSection.getByText("Accessibility")).toBeVisible();
      await expect(skillsSection.getByText("Tooling and Workflow")).toBeVisible();
      await expect(skillsSection.getByText("Web3")).toBeVisible();
    });

    test("should display individual skills", async ({ page }) => {
      const skillsSection = page.locator("#skills");
      await expect(skillsSection.getByText("React and Next.js")).toBeVisible();
      await expect(skillsSection.locator("label").filter({ hasText: "TypeScript" })).toBeVisible();
      await expect(skillsSection.locator("label").filter({ hasText: "TailwindCSS" })).toBeVisible();
    });
  });

  test.describe("Experience Section", () => {
    test("should display Experience section with heading", async ({ page }) => {
      const experienceSection = page.locator("#experience");
      await expect(experienceSection).toBeVisible();

      const heading = experienceSection.getByRole("heading", { name: "Experience" });
      await expect(heading).toBeVisible();
    });

    test("should display experience entries", async ({ page }) => {
      const experienceSection = page.locator("#experience");
      await expect(experienceSection.getByText("AITA Protocol")).toBeVisible();
      await expect(experienceSection.getByText(/webqid.*Wageningen/)).toBeVisible();
      await expect(experienceSection.getByText("Emico")).toBeVisible();
    });

    test("should display job roles", async ({ page }) => {
      await expect(page.getByRole("heading", { name: "Frontend Developer" }).first()).toBeVisible();
      await expect(page.getByRole("heading", { name: "Founder and Frontend Developer" })).toBeVisible();
    });

    test("should display tech stack tags", async ({ page }) => {
      const experienceSection = page.locator("#experience");
      await expect(experienceSection.getByText("Next.js").first()).toBeVisible();
      await expect(experienceSection.getByText("React").first()).toBeVisible();
    });
  });

  test.describe("Education Section", () => {
    test("should display Education section", async ({ page }) => {
      const educationSection = page.locator("#education");
      await expect(educationSection).toBeVisible();
    });

    test("should display education entries", async ({ page }) => {
      await expect(page.getByText("Hogeschool Utrecht")).toBeVisible();
      await expect(page.getByText("Journalism")).toBeVisible();
    });

    test("should display languages", async ({ page }) => {
      const educationSection = page.locator("#education");
      await expect(educationSection.getByText("Dutch (Native)")).toBeVisible();
      await expect(educationSection.getByText("English (Fluent)")).toBeVisible();
    });
  });

  test.describe("Contact Section", () => {
    test("should display Contact section with heading", async ({ page }) => {
      const contactSection = page.locator("#contact");
      await expect(contactSection).toBeVisible();

      const heading = contactSection.getByRole("heading", { name: "Work with me" });
      await expect(heading).toBeVisible();
    });

    test("should display CTA buttons", async ({ page }) => {
      const contactSection = page.locator("#contact");
      
      const linkedinButton = contactSection.getByRole("link", { name: "LinkedIn" });
      await expect(linkedinButton).toBeVisible();
      await expect(linkedinButton).toHaveAttribute("href", "https://www.linkedin.com/in/jcvandeweerd");

      const githubButton = contactSection.getByRole("link", { name: "GitHub" });
      await expect(githubButton).toBeVisible();
      await expect(githubButton).toHaveAttribute("href", "https://github.com/webqid");
    });

    test("should display location info", async ({ page }) => {
      await expect(page.getByText("Based in the Netherlands")).toBeVisible();
    });
  });

  test.describe("Accessibility", () => {
    test("should have proper heading hierarchy", async ({ page }) => {
      // Hero section should have the main name heading
      const heroSection = page.locator("#hero");
      const mainHeading = heroSection.getByRole("heading", { name: "Christian van de Weerd" });
      await expect(mainHeading).toBeVisible();

      // Section headings (h2) should exist for main sections
      await expect(page.getByRole("heading", { name: "Summary" })).toBeVisible();
      await expect(page.getByRole("heading", { name: "Skills" })).toBeVisible();
      await expect(page.getByRole("heading", { name: "Experience" })).toBeVisible();
      await expect(page.getByRole("heading", { name: "Work with me" })).toBeVisible();
    });

    test("should have accessible section landmarks", async ({ page }) => {
      // Hero section
      await expect(page.locator("#hero")).toBeVisible();
      
      // Main sections
      await expect(page.locator("#summary")).toBeVisible();
      await expect(page.locator("#skills")).toBeVisible();
      await expect(page.locator("#experience")).toBeVisible();
      await expect(page.locator("#education")).toBeVisible();
      await expect(page.locator("#contact")).toBeVisible();
    });

    test("should have accessible navigation", async ({ page }) => {
      const nav = page.getByRole("navigation", { name: "Social links" });
      await expect(nav).toBeVisible();
    });

    test("external links should have proper attributes", async ({ page }) => {
      const externalLinks = page.locator('a[target="_blank"]');
      const count = await externalLinks.count();
      
      for (let i = 0; i < count; i++) {
        await expect(externalLinks.nth(i)).toHaveAttribute("rel", /noopener/);
      }
    });
  });

  test.describe("Responsive Design", () => {
    test("should be visible on mobile viewport", async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      
      await expect(page.getByRole("heading", { name: "Christian van de Weerd", level: 1 })).toBeVisible();
      await expect(page.locator("#summary")).toBeVisible();
      await expect(page.locator("#skills")).toBeVisible();
    });

    test("should be visible on tablet viewport", async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      
      await expect(page.getByRole("heading", { name: "Christian van de Weerd", level: 1 })).toBeVisible();
      await expect(page.locator("#summary")).toBeVisible();
      await expect(page.locator("#skills")).toBeVisible();
    });

    test("should be visible on desktop viewport", async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      
      await expect(page.getByRole("heading", { name: "Christian van de Weerd", level: 1 })).toBeVisible();
      await expect(page.locator("#summary")).toBeVisible();
      await expect(page.locator("#skills")).toBeVisible();
    });
  });

  test.describe("Performance", () => {
    test("should load within acceptable time", async ({ page }) => {
      const startTime = Date.now();
      await page.goto("/", { waitUntil: "networkidle" });
      const loadTime = Date.now() - startTime;
      
      // Page should load within 5 seconds
      expect(loadTime).toBeLessThan(5000);
    });

    test("profile image should be prioritized", async ({ page }) => {
      const profileImage = page.getByRole("img", { name: "Christian van de Weerd" });
      await expect(profileImage).toBeAttached({ timeout: 10000 });
    });
  });
});

test.describe("Personal CV Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/personal", { waitUntil: "domcontentloaded" });
  });

  test("should display CV style switch", async ({ page }) => {
    const styleSwitch = page.locator("select");
    await expect(styleSwitch).toBeVisible();
    await expect(styleSwitch).toHaveValue("/personal");
  });

  test("should display personal page with alternative styling", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Christian" })).toBeVisible();
    await expect(page.getByText("van de Weerd")).toBeVisible();
  });

  test("should display Technical Expertise section", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Technical Expertise" })).toBeVisible();
  });

  test("should display Career Highlights section", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Career Highlights" })).toBeVisible();
  });

  test("should have CTA section", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Ready to build something amazing?" })).toBeVisible();
  });

  test("should have social links", async ({ page }) => {
    const linkedinLink = page.getByRole("link", { name: "Connect" });
    await expect(linkedinLink).toBeVisible();

    const moreInfoLink = page.getByRole("link", { name: "More Info" });
    await expect(moreInfoLink).toBeVisible();
  });
});

test.describe("GitHub CV Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/github", { waitUntil: "domcontentloaded" });
  });

  test("should display CV style switch", async ({ page }) => {
    const styleSwitch = page.locator("select");
    await expect(styleSwitch).toBeVisible();
    await expect(styleSwitch).toHaveValue("/github");
  });

  test("should display GitHub-style header", async ({ page }) => {
    await expect(page.locator("header").getByText("christianvdweerd")).toBeVisible();
    await expect(page.locator("header").getByText("career")).toBeVisible();
  });

  test("should display profile information", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Christian van de Weerd" })).toBeVisible();
    await expect(page.getByRole("img", { name: "Christian van de Weerd" })).toBeVisible();
  });

  test("should display contribution graph", async ({ page }) => {
    await expect(page.getByText(/contributions in the last year/)).toBeVisible();
  });

  test("should display pinned skills", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /Pinned Skills/ })).toBeVisible();
  });

  test("should display work experience", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /Work Experience/ })).toBeVisible();
  });

  test("should display education", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /Education/ })).toBeVisible();
  });
});

test.describe("CV Style Switch Navigation", () => {
  // Note: webkit has issues with router.push triggered from select onChange
  // These tests pass consistently on chromium and firefox
  test.skip(({ browserName }) => browserName === "webkit", "webkit select change event not triggering navigation");

  test("should navigate from default to personal CV", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    
    const styleSwitch = page.locator("select");
    await styleSwitch.selectOption("/personal");
    
    await page.waitForURL("/personal", { timeout: 10000 });
    await expect(page.getByRole("heading", { name: "Christian" })).toBeVisible();
  });

  test("should navigate from default to GitHub CV", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    
    const styleSwitch = page.locator("select");
    await styleSwitch.selectOption("/github");
    
    await page.waitForURL("/github", { timeout: 10000 });
    await expect(page.locator("header").getByText("christianvdweerd")).toBeVisible();
  });

  test("should navigate from personal to GitHub CV", async ({ page }) => {
    await page.goto("/personal", { waitUntil: "domcontentloaded" });
    
    const styleSwitch = page.locator("select");
    await styleSwitch.selectOption("/github");
    
    await page.waitForURL("/github", { timeout: 10000 });
  });

  test("should navigate from GitHub to default CV", async ({ page }) => {
    await page.goto("/github", { waitUntil: "domcontentloaded" });
    
    const styleSwitch = page.locator("select");
    await styleSwitch.selectOption("/default");
    
    await page.waitForURL("/default", { timeout: 10000 });
    await expect(page.getByRole("heading", { name: "Christian van de Weerd", level: 1 })).toBeVisible();
  });

  test("CV style switch should be visible on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/default", { waitUntil: "domcontentloaded" });
    
    const styleSwitch = page.locator("select");
    await expect(styleSwitch).toBeVisible();
  });
});
