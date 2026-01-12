// CV data for Christian van de Weerd

/** Skill definition with label, description and expertise level */
export interface Skill {
  readonly label: string;
  readonly description: string;
  readonly level: number;
}

/** Skills grouped by category */
export const SKILLS: Readonly<Record<string, readonly Skill[]>> = {
  "Frontend Architecture": [
    {
      label: "React and Next.js",
      description:
        "Server components, App Router, ISR, performance optimization",
      level: 95,
    },
    {
      label: "TypeScript",
      description:
        "Type safety, generics, utility types, strict configurations",
      level: 94,
    },
    {
      label: "Component Systems",
      description: "Design systems, atomic design, compound components",
      level: 92,
    },
    {
      label: "State Management",
      description: "React Query, Zustand, context patterns, server state",
      level: 88,
    },
  ],
  "UI and Styling": [
    {
      label: "TailwindCSS",
      description: "Utility first, custom configurations, design tokens",
      level: 95,
    },
    {
      label: "Shadcn UI and Radix",
      description: "Accessible primitives, headless components, composition",
      level: 92,
    },
    {
      label: "CSS Architecture",
      description: "Responsive design, CSS variables, layout patterns",
      level: 90,
    },
    {
      label: "Motion and Animation",
      description: "Framer Motion, GSAP, performant transitions",
      level: 85,
    },
  ],
  Accessibility: [
    {
      label: "Semantic HTML",
      description: "Proper heading structure, landmarks, document outline",
      level: 90,
    },
    {
      label: "ARIA and WCAG",
      description: "Accessible patterns, compliance testing, screen readers",
      level: 88,
    },
    {
      label: "Keyboard Navigation",
      description: "Focus management, tab order, skip links",
      level: 88,
    },
  ],
  "Tooling and Workflow": [
    {
      label: "Testing",
      description: "Playwright, Vitest, Testing Library, E2E strategies",
      level: 80,
    },
    {
      label: "Build Tools",
      description: "Vite, Turbopack, bundler optimization, CI/CD",
      level: 85,
    },
    {
      label: "Version Control",
      description: "Git workflows, code review, branch strategies",
      level: 90,
    },
  ],
  Web3: [
    {
      label: "Wallet Integration",
      description: "Wagmi, RainbowKit, WalletConnect, multi chain support",
      level: 90,
    },
    {
      label: "Blockchain Data",
      description: "Viem, Ethers.js, contract reads, event subscriptions",
      level: 88,
    },
    {
      label: "Signing Flows",
      description: "Transaction handling, message signing, security patterns",
      level: 88,
    },
    {
      label: "dApp Architecture",
      description: "Staking interfaces, trading UIs, dashboard patterns",
      level: 85,
    },
  ],
} as const;

/** Experience entry */
export interface ExperienceEntry {
  readonly period: string;
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly highlights: readonly string[];
  readonly stack: readonly string[];
  readonly links?: readonly { readonly label: string; readonly url: string }[];
}

export const EXPERIENCE: readonly ExperienceEntry[] = [
  {
    period: "2023 to 2025",
    role: "Frontend Developer",
    company: "AITA Protocol",
    location: "Remote",
    highlights: [
      "Designed and built multiple frontend applications using React, Next.js, and TypeScript",
      "Established component driven architecture reused across multiple dApps",
      "Aligned UX and data flows with backend engineers and product teams, including AI driven decision making and automated flows (AWS)",
      "Set up UI systems with TailwindCSS and Shadcn/Radix",
      "Applied accessibility principles to interactive components",
      "Designed edge cases, error handling, and fallback states in complex data environments",
      "Mentored and provided technical guidance to designers and developers",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Shadcn UI",
      "GraphQL",
      "Wagmi",
      "Ethers",
    ],
    links: [{ label: "app.aitaprotocol.com", url: "https://app.aitaprotocol.com" }],
  },
  {
    period: "2021 to present",
    role: "Founder and Frontend Developer",
    company: "webqid",
    location: "Wageningen, Netherlands",
    highlights: [
      "Founded and operate a frontend studio used as both client delivery platform and R&D environment",
      "Explore and prototype modern frontend patterns, UX flows, and on-chain integrations",
      "Built reusable component libraries with Shadcn UI patterns",
      "Implemented Playwright E2E testing and preview deployment workflows",
      "Developed AI image generation proof of concept integrating Stability AI API with FastAPI backend",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Shadcn UI",
      "Framer Motion",
      "GSAP",
      "Playwright",
      "Wagmi",
    ],
    links: [
      { label: "webqid.com", url: "https://www.webqid.com" },
      { label: "dashboard.webqid.com", url: "https://dashboard.webqid.com" },
    ],
  },
  {
    period: "2022 to 2023",
    role: "Frontend Developer",
    company: "Emico",
    location: "Rhenen, Netherlands",
    highlights: [
      "Built and maintained e-commerce frontends for Zitmaxx and Tegeldepot brands",
      "Implemented Playwright E2E tests covering critical checkout and payment flows",
      "Developed custom UI components with TailwindCSS and Hyva theme framework",
    ],
    stack: ["React", "Hyva", "Magento", "TailwindCSS", "Alpine.js", "Playwright"],
  },
  {
    period: "2018 to 2020",
    role: "Frontend Developer",
    company: "Infocaster B.V. and DotOffice B.V.",
    location: "Netherlands",
    highlights: [
      "Led frontend development for TeamNL website (Dutch Olympic Committee) with focus on performance",
      "Built educational dashboards for government and public sector projects",
      "Developed document generation tooling within Microsoft 365 ecosystem",
    ],
    stack: ["Vue.js", "AngularJS", "C#", ".NET", "Microsoft 365"],
  },
  {
    period: "2001 to 2018",
    role: "Software Developer and Co-founder",
    company: "Prodev B.V., Covadis B.V., Business Media B.V.",
    location: "Netherlands",
    highlights: [
      "Co-founded Prodev B.V. and delivered custom platforms for housing, logistics, and legal sectors",
      "Developed medical software with strict compliance and data security requirements",
      "Built GIS applications for local government infrastructure planning",
      "Full stack development across .NET, SQL Server, and JavaScript ecosystems",
    ],
    stack: [".NET", "C#", "SQL Server", "JavaScript", "jQuery"],
  },
] as const;

/** Education entry */
export interface EducationEntry {
  readonly institution: string;
  readonly field: string;
  readonly period: string;
}

export const EDUCATION: readonly EducationEntry[] = [
  {
    institution: "Hogeschool Utrecht",
    field: "Journalism",
    period: "1998 to 1999",
  },
  {
    institution: "Neder Veluwe College, Ede",
    field: "MBO Retail",
    period: "1994 to 1998",
  },
] as const;

/** Language proficiency */
export interface LanguageEntry {
  readonly language: string;
  readonly level: string;
}

export const LANGUAGES: readonly LanguageEntry[] = [
  { language: "Dutch", level: "Native" },
  { language: "English", level: "Fluent" },
] as const;
