"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Section,
  SectionTitle,
  SectionParagraph,
} from "@/components/sections";
import { ExpertiseSlider } from "@/components/ExpertiseSlider";

/** Skill definition with label, description and expertise level */
interface Skill {
  readonly label: string;
  readonly description: string;
  readonly level: number;
}

/** Skills grouped by category */
const SKILLS: Readonly<Record<string, readonly Skill[]>> = {
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
interface ExperienceEntry {
  readonly period: string;
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly highlights: readonly string[];
  readonly stack: readonly string[];
  readonly links?: readonly { readonly label: string; readonly url: string }[];
}

const EXPERIENCE: readonly ExperienceEntry[] = [
  {
    period: "2023 to present",
    role: "Lead Web3 Frontend Developer",
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
    role: "Founder and Frontend Engineer",
    company: "webqid",
    location: "Wageningen, Netherlands",
    highlights: [
      "Founded freelance practice focused on Web3 frontend development and design system implementation",
      "Delivered production frontends for DeFi protocols, NFT platforms, and traditional web applications",
      "Built reusable component libraries with Shadcn UI patterns for client projects",
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
    links: [{ label: "webqid.com", url: "https://www.webqid.com" }],
  },
  {
    period: "2023 to present",
    role: "Frontend Contributor",
    company: "Neby Exchange",
    location: "Remote",
    highlights: [
      "Developed and integrated UI components for decentralized exchange interface",
      "Optimized wallet connection flows for improved reliability and UX",
      "Contributed to trading interface improvements focused on speed and visual consistency",
    ],
    stack: ["React", "TypeScript", "TailwindCSS", "Radix UI"],
    links: [{ label: "app.neby.exchange", url: "https://app.neby.exchange" }],
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
interface EducationEntry {
  readonly institution: string;
  readonly field: string;
  readonly period: string;
}

const EDUCATION: readonly EducationEntry[] = [
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
interface LanguageEntry {
  readonly language: string;
  readonly level: string;
}

const LANGUAGES: readonly LanguageEntry[] = [
  { language: "Dutch", level: "Native" },
  { language: "English", level: "Fluent" },
] as const;

/**
 * CV page showcasing professional experience and skills.
 */
export default function CVPage(): React.JSX.Element {
  return (
    <div className="text-neutral-300 font-[geist-sans] antialiased flex flex-col">
      {/* HERO */}
      <section
        id="hero"
        aria-labelledby="hero-title"
        className="min-h-[60vh] flex flex-col items-center justify-center relative overflow-hidden text-center py-24 px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-28 h-28 relative rounded-full overflow-hidden mb-8 ring-2 ring-neutral-800"
        >
          <Image
            src="/profile.jpg"
            alt="Christian van de Weerd"
            fill
            className="object-cover grayscale brightness-90"
            priority
          />
        </motion.div>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-medium tracking-tight"
        >
          Christian van de Weerd
        </motion.h1>

        <motion.p
          className="mt-4 text-xl text-neutral-400 font-light tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Senior Web3 Frontend Engineer
        </motion.p>

        <motion.p
          className="mt-6 max-w-xl text-neutral-500 font-light leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          I build frontend architecture that turns complex blockchain systems
          into clear, usable interfaces. Focus on structure, accessibility, and
          long term maintainability.
        </motion.p>

        <motion.nav
          aria-label="Social links"
          className="flex flex-wrap items-center justify-center gap-4 mt-8 font-sans"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <a
            href="https://www.linkedin.com/in/jcvandeweerd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-teal-400 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-neutral-700" aria-hidden="true">
            |
          </span>
          <a
            href="https://github.com/webqid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-teal-400 transition-colors"
          >
            GitHub
          </a>
          <span className="text-neutral-700" aria-hidden="true">
            |
          </span>
          <a
            href="https://www.webqid.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-teal-400 transition-colors"
          >
            webqid.com
          </a>
        </motion.nav>
      </section>

      {/* PROFESSIONAL SUMMARY */}
      <Section id="summary" aria-labelledby="summary-title">
        <div className="container max-w-3xl mx-auto text-center space-y-6 px-4">
          <SectionTitle id="summary-title">Summary</SectionTitle>

          <SectionParagraph delay={0.1}>
            Twenty plus years in software development. Five plus years focused
            on Web3 frontends. I specialize in building production grade dApps,
            staking dashboards, and trading interfaces where clarity and
            reliability matter.
          </SectionParagraph>

          <SectionParagraph delay={0.2}>
            My work emphasizes accessibility, security, and modular design. I
            build component systems that scale across teams and projects. I
            focus on calm UX that reduces cognitive load and builds user trust.
          </SectionParagraph>

          <SectionParagraph delay={0.3}>
            Based in the Netherlands. Available for remote collaboration.
          </SectionParagraph>
        </div>
      </Section>

      {/* SKILLS BY CATEGORY */}
      <Section id="skills" aria-labelledby="skills-title">
        <div className="container max-w-4xl mx-auto space-y-16 px-4">
          <div className="text-center">
            <SectionTitle id="skills-title">Skills</SectionTitle>
            <SectionParagraph className="mt-4" delay={0.1}>
              Expertise built over two decades of focused practice.
            </SectionParagraph>
          </div>

          {Object.entries(SKILLS).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + categoryIndex * 0.05,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xs font-mono text-teal-500/80 uppercase tracking-wider">
                {category}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {skills.map((skill, skillIndex) => (
                  <ExpertiseSlider
                    key={skill.label}
                    label={skill.label}
                    description={skill.description}
                    level={skill.level}
                    delay={0.05 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}

          <p className="text-xs text-neutral-600 text-center mt-8 font-light">
            Levels based on years of practice, project complexity, and depth of
            knowledge.
          </p>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" aria-labelledby="experience-title">
        <div className="container max-w-3xl mx-auto space-y-10 px-4">
          <div className="text-center">
            <SectionTitle id="experience-title">Experience</SectionTitle>
          </div>

          <div className="space-y-12 mt-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.article
                key={`${exp.period}-${exp.company}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + index * 0.05,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="border-l-2 border-neutral-800 pl-6 py-2"
              >
                <span className="text-xs font-mono text-neutral-500 tracking-wide">
                  {exp.period}
                </span>
                <h3 className="text-lg font-medium text-neutral-100 mt-1">
                  {exp.role}
                </h3>
                <p className="text-sm text-teal-400/80 font-light">
                  {exp.company}{" "}
                  <span className="text-neutral-600">/ {exp.location}</span>
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight.slice(0, 30)}
                      className="text-sm text-neutral-400 font-light leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-neutral-700 before:rounded-full"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono text-neutral-500 bg-neutral-800/50 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.links && exp.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-3">
                    {exp.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-neutral-500 hover:text-teal-400 transition-colors"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      {/* EDUCATION AND LANGUAGES */}
      <Section id="education" aria-labelledby="education-title">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div className="space-y-6">
              <h2
                id="education-title"
                className="text-xs font-mono text-teal-500/80 uppercase tracking-wider"
              >
                Education
              </h2>
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + index * 0.08,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm font-medium text-neutral-100">
                    {edu.field}
                  </h3>
                  <p className="text-sm text-neutral-500 font-light">
                    {edu.institution}
                  </p>
                  <p className="text-xs font-mono text-neutral-600 mt-1">
                    {edu.period}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <div className="space-y-6">
              <h2 className="text-xs font-mono text-teal-500/80 uppercase tracking-wider">
                Languages
              </h2>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                {LANGUAGES.map((lang) => (
                  <p
                    key={lang.language}
                    className="text-sm text-neutral-300 font-light"
                  >
                    {lang.language}{" "}
                    <span className="text-neutral-600">({lang.level})</span>
                  </p>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* CALL TO ACTION */}
      <Section id="contact" aria-labelledby="contact-title">
        <div className="container max-w-2xl mx-auto text-center space-y-8 px-4">
          <SectionTitle id="contact-title">Work with me</SectionTitle>

          <SectionParagraph delay={0.1}>
            Looking for a senior frontend engineer who builds with precision and
            care?
          </SectionParagraph>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get in touch</Link>
            </Button>

            <Button variant="ghost" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/jcvandeweerd"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>

            <Button variant="ghost" size="lg" asChild>
              <a
                href="https://github.com/webqid"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs text-neutral-600 font-light mt-8"
          >
            Based in the Netherlands. Available for remote collaboration
            worldwide.
          </motion.p>
        </div>
      </Section>
    </div>
  );
}
