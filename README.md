# Christian van de Weerd.

## Shields and Badges

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-16.1.1-black?logo=nextdotjs" />
  <img src="https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.x-38B2AC?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Shadcn_UI-Components-000000" />
  <img src="https://img.shields.io/badge/Radix_UI-Primitives-161618" />
  <img src="https://img.shields.io/badge/Motion-12.x-EC5990?logo=framer" />
  <img src="https://img.shields.io/badge/Storybook-10.x-FF4785?logo=storybook&logoColor=white" />
  <img src="https://img.shields.io/badge/Playwright-E2E-2EAD33?logo=playwright&logoColor=white" />
</p>

---

## Overview

**Christian van de Weerd.** Senior Frontend Developer focused on technical minimalism, calm precision, and reliable systems. The site demonstrates shipped work, technical depth, and multiple conversion paths.

### CV Style Themes

The site features three distinct CV presentation styles, switchable via a dropdown in the top-right corner:

| Theme | Route | Description |
|-------|-------|-------------|
| **Default** | `/` | Clean, minimal CV with elegant typography and subtle animations |
| **Personal** | `/personal` | Netflix-inspired cinematic design with bold visuals and scroll effects |
| **GitHub** | `/github` | GitHub profile-style layout with contribution graph and repository cards |

Built with:

- **Next.js 16.1.1** (App Router, Turbopack)
- **React 19**
- **TypeScript 5**
- **TailwindCSS 4** with custom design tokens
- **Shadcn UI** and **Radix UI** primitives
- **Motion** (Framer Motion) for animations
- **Lenis** for smooth scrolling
- **Storybook 10** for component development
- **Playwright** for E2E testing

---

## Branches

- **master**: Stable production branch with released features.
- **development**: Active development branch for new features and updates.

---

## Stack Philosophy

| Principle | Description |
|-----------|-------------|
| Calm authority | Quiet, confident UI patterns |
| Technical elegance | Depth without noise, clean and intentional |
| Performance first | Turbopack builds, optimized motion, lean bundles |
| Accessible by default | Semantic HTML, ARIA, keyboard navigation |
| Scalable design | Modular primitives built for long term use |

---

## Project Structure

```
app/
  ├── layout.tsx              # Root layout with fonts and providers
  ├── page.tsx                # Default CV landing page
  ├── personal/
  │   └── page.tsx            # Netflix-inspired CV with cinematic design
  ├── github/
  │   └── page.tsx            # GitHub-inspired CV with repository-style design
  ├── robots.ts               # SEO robots
  └── sitemap.ts              # SEO sitemap

components/
  ├── ui/                     # Shadcn UI components
  │   ├── accordion.tsx
  │   ├── button.tsx
  │   ├── card.tsx
  │   ├── carousel.tsx
  │   ├── input.tsx
  │   ├── label.tsx
  │   ├── navigation-menu.tsx
  │   ├── sheet.tsx
  │   └── ...
  ├── sections/               # Section primitives
  │   ├── Section.tsx
  │   ├── SectionTitle.tsx
  │   ├── SectionParagraph.tsx
  │   └── SolutionCard.tsx
  ├── CVPage.tsx              # Default CV page component
  ├── PersonalCVPage.tsx      # Netflix-inspired CV with modern animations
  ├── GitHubCVPage.tsx        # GitHub-inspired CV with contribution graph
  ├── CVStyleSwitch.tsx       # CV style switcher (navigates between CV themes)
  ├── Nav.tsx                 # Navigation (live links only)
  ├── Footer.tsx              # Footer (live links, social)
  ├── ExpertiseSlider.tsx     # Skill level indicators
  ├── TechMarquee.tsx         # Tech stack marquee
  ├── ProfileCard.tsx         # Profile card
  ├── PayOff.tsx              # Tagline component
  └── SmoothScrollProvider.tsx # Lenis scroll wrapper

data/
  └── cv-data.ts              # CV data (skills, experience, education, languages)

e2e/
  └── home.spec.ts            # Playwright E2E tests

stories/
  ├── Section.stories.tsx
  ├── SectionTitle.stories.tsx
  ├── SectionParagraph.stories.tsx
  ├── SolutionCard.stories.tsx
  └── SolutionsGrid.stories.tsx

lib/
  └── utils.ts                # Utility functions (cn, etc.)

styles/
  └── globals.css             # Global styles and design tokens
```

---

## Design Tokens

| Element | Value |
|---------|-------|
| Fonts | Geist Sans, Geist Mono, IBM Plex Serif |
| Background | #0a0a0a |
| Background Secondary | #111111 |
| Background Tertiary | #1a1a1a |
| Text | #ededed |
| Subtle | #a3a3a3 |
| Border | #262626 |
| Accent | oklch(70.4% 0.14 182.503) (teal) |

---

## Motion

Soft `easeOut` transitions (~0.6s) with `whileInView` animations.
Designed for calm, intentional flow using Motion (Framer Motion).

---

## Development

```bash
# Install dependencies
npm install

# Start development server (Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run Storybook
npm run storybook

# Build Storybook
npm run build-storybook

# Run E2E tests
npm run test:e2e
```

---

## E2E Testing

Playwright is configured for end-to-end testing.

```bash
npm run test:e2e
```

Test files are located in the `e2e/` directory.

---

> Built with intent.
> Where precision meets trust.
