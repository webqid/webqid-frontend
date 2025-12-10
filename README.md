# webqid.

![webqid og-image](https://www.webqid.com/og-image.png)

**Precision-built Web3 frontends — engineered for trust, scalability, and performance.**

---

# 🚀 Shields & Badges

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-16.0.8-black?logo=nextdotjs" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/ShadCN-UI%20Kit-000000" />
  <img src="https://img.shields.io/badge/Motion-React-EC5990?logo=framer" />
  <img src="https://img.shields.io/badge/Storybook-Ready-FF4785?logo=storybook&logoColor=white" />
  <img src="https://img.shields.io/badge/Wagmi-v3-blue?logo=ethereum" />
</p>

---

# 🔍 SEO Metadata

**Title:** webqid. — Precision-built Web3 frontends  
**Description:** High-end Web2/Web3 frontend engineering studio specializing in technical minimalism, calm precision, and scalable UI systems.  
**Keywords:** Web3 frontend, Next.js 16, Wagmi, viem, Ethers.js, TailwindCSS, ShadCN, Motion, dApp engineering, blockchain UI, high-performance frontend  
**Author:** webqid.  
**URL:** https://webqid.com  

Suggested `<head>` block:

```html
<title>webqid. — Precision-built Web3 frontends</title>
<meta name="description" content="High-end Web2/Web3 frontend engineering studio specializing in technical minimalism, calm precision, and scalable UI systems." />
<meta name="keywords" content="Web3 frontend, Next.js 16, Wagmi, viem, Ethers.js, dApp, blockchain UI, TailwindCSS, ShadCN" />
<meta property="og:title" content="webqid. — Precision-built Web3 frontends" />
<meta property="og:description" content="Precision-built Web3 interfaces engineered for trust, scalability, and performance." />
<meta property="og:image" content="https://www.webqid.com/og-image.png" />
<meta property="og:url" content="https://webqid.com" />
<meta name="twitter:card" content="summary_large_image" />
```

---

# 🧱 Overview

**webqid.** is a high-end Web2 + Web3 frontend framework dedicated to  
**technical minimalism**, **calm precision**, and **reliable engineering**.

Built on:

- **Next.js 16.0.8 (App Router)**
- **TypeScript**
- **TailwindCSS + ShadCN/UI**
- **Motion**
- **Wagmi + viem**
- **Ethers.js**

---

# ⚙️ Stack Philosophy

| Principle | Description |
|----------|-------------|
| Calm authority | Quiet, confident UI patterns. |
| Technical elegance | Depth without noise — clean and intentional. |
| Performance first | Lean bundles, edge rendering, optimized motion. |
| Scalable design | Modular primitives built for long-term use. |

---

# 🧩 Project Structure

```
app/
 ┣ components/        → UI blocks, sections, layouts
 ┣ hooks/             → Motion, wallet logic, scroll transforms
 ┣ lib/               → Config, constants, utils
 ┣ styles/            → Global styles
 ┣ public/            → Static assets
 ┗ page.tsx           → Root landing page
```

---

# 📘 Storybook (Design System)

webqid ships with an isolated **Storybook design environment**  
for calm, focused UI development.

### Start Storybook

```bash
npm run storybook
```

### Features

- Isolated UI development  
- Motion previews (easeOut, stagger, scroll transforms)  
- Section primitives  
- Typography and color tokens  
- Solution grid & card previews  
- Fully themed with Tailwind and Geist fonts  

### Story layout

```
stories/
 ┣ Section.stories.tsx
 ┣ SectionTitle.stories.tsx
 ┣ SectionParagraph.stories.tsx
 ┣ SolutionCard.stories.tsx
 ┗ SolutionsGrid.stories.tsx
```

### Config

`.storybook/preview.ts`:

```ts
import "../styles/globals.css";

export const parameters = {
  layout: "centered",
  controls: { expanded: true }
};
```

`.storybook/main.ts`:

```ts
const config = {
  stories: ["../stories/**/*.stories.@(ts|tsx|mdx)"],
  addons: ["@storybook/addon-essentials"],
  framework: { name: "@storybook/nextjs", options: {} }
};

export default config;
```

---

# 🎨 Branding System

| Element | Value |
|---------|--------|
| Fonts | Geist Sans / Geist Mono |
| Base | #0A0A0A |
| Accent | #00E0B8 |
| Text | #EDEDED |
| Secondary | #A3A3A3 |

---

# 🪶 Motion

Soft `easeOut` transitions (~0.6s).  
Designed for calm, intentional flow.

---

# 💳 Web3 Integration

Includes:

- Wagmi v3 connectors  
- viem typed interactions  
- Ethers.js compatibility  
- Hyperliquid typed data patterns  
- Wallet onboarding flow  

Secure. Composable. Predictable.

---

# 🚀 Development

```
npm install
npm run dev
npm run build
npm run start
```

---

# 🧭 License

MIT © webqid.

> Built with intent.  
> Where precision meets trust.
