# webqid.

![webqid og-image](https://www.webqid.com/og-image.png)

**Precision-built Web frontends engineered for trust, scalability, and performance.**

---

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

**webqid.** is a senior Web3 frontend engineering studio focused on technical minimalism, calm precision, and reliable systems. The site demonstrates shipped work, technical depth, and multiple conversion paths for high-value Web3 clients.

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
  ├── page.tsx                # Landing page
  ├── robots.ts               # SEO robots
  ├── sitemap.ts              # SEO sitemap
  ├── work/                   # Work index page (case studies)
  ├── case-study/[slug]/      # Individual case study pages
  ├── solutions/              # Services overview
  ├── studio/                 # Studio philosophy/about
  ├── writing/                # Blog/insights (coming soon)
  ├── contact/                # Contact page (CTAs, form)
  ├── about/                  # About page
  ├── cv/                     # CV page
  ├── collaborations/         # Collaborations page
  ├── socials/                # Social links page
  ├── dapp-development/       # Service page
  ├── frontend-engineering/   # Service page
  ├── wallet-connect/         # Service page
  └── web3-integration/       # Service page

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
  ├── Nav.tsx                 # Navigation (live links only)
  ├── Footer.tsx              # Footer (live links, social)
  ├── case-study/             # Case study components (Hero, StatsBar, TechStack, Gallery)
  ├── Carousel.tsx            # Custom carousel
  ├── ExpertiseSlider.tsx     # Skill level indicators
  ├── TechMarquee.tsx         # Tech stack marquee
  ├── ProfileCard.tsx         # Profile card
  ├── PayOff.tsx              # Tagline component
  └── SmoothScrollProvider.tsx # Lenis scroll wrapper

content/
  ├── case-studies.ts         # Case study data/content
  └── solutions.ts            # Content data

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

## Work & Case Studies

See all shipped projects at [webqid.com/work](https://www.webqid.com/work).

- **AITA Protocol** — DeFi staking dashboard, referral system, LST platform. [app.aitaprotocol.com](https://app.aitaprotocol.com)
- **Neby Exchange** — DEX UI, wallet integration, performance. [app.neby.exchange](https://app.neby.exchange)
- **Paladin Punks & Streetart Frankey** — NFT minting, marketplace, brand collabs.

Each case study page details the challenge, technical approach, and outcome, with screenshots and stack badges.

## Writing

Technical deep-dives and engineering notes coming soon at [webqid.com/writing](https://www.webqid.com/writing).

## Storybook

Isolated component development environment with accessibility testing.

### Start Storybook

```bash
npm run storybook
```

### Features

- Isolated UI development
- Motion previews
- Section primitives
- Typography and color tokens
- Accessibility testing (a11y addon)
- Vitest integration for component tests

### Addons

- `@storybook/addon-docs` for documentation
- `@storybook/addon-a11y` for accessibility checks
- `@storybook/addon-vitest` for testing
- `@chromatic-com/storybook` for visual regression

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

## License

MIT

---

> Built with intent.
> Where precision meets trust.
