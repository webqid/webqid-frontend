"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section, SectionTitle, SectionParagraph } from "@/components/sections";
import { ExpertiseSlider } from "@/components/ExpertiseSlider";

const EXPERTISE = [
  {
    label: "React and Next.js",
    description: "Server components, app router, performance optimization, and component driven architecture.",
    level: 95
  },
  {
    label: "TypeScript and JavaScript",
    description: "Type safety, modern patterns, and maintainable codebases.",
    level: 94
  },
  {
    label: "Frontend Architecture",
    description: "Design systems, component libraries, and scalable application structure.",
    level: 92
  },
  {
    label: "Web3 Frontend Engineering",
    description: "Wallet integrations, secure signing flows, dApp interfaces, and on-chain data.",
    level: 90
  },
  {
    label: "Accessibility and UX Quality",
    description: "Semantic HTML, ARIA, WCAG compliance, keyboard navigation, and contrast awareness.",
    level: 88
  },
  {
    label: "Testing and Reliability",
    description: "Playwright UI tests, integration testing, and regression prevention.",
    level: 80
  }
//   {
//     label: "AI Integration",
//     description: "LLM integration, intelligent assistants, and AI driven product development.",
//     level: 70
//   }
];

const EXPERIENCE = [
  {
    period: "2023 to present",
    role: "Lead Frontend Engineer",
    company: "AITA Protocol (AQTIS)",
    location: "Remote",
    description: "Designed and built multiple frontend applications with React, Next.js, and TypeScript. Set up component driven architecture reused across dApps. Aligned UX and data flows with backend engineers and product teams. Applied accessibility principles to interactive components. Mentored designers and developers.",
    stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Shadcn UI", "GraphQL", "Wagmi", "Ethers"],
    links: [
      { label: "app.aitaprotocol.com", url: "https://app.aitaprotocol.com" },
      { label: "lst.aitaprotocol.com", url: "https://lst.aitaprotocol.com" }
    ]
  },
  {
    period: "2023 to present",
    role: "Frontend Contributor",
    company: "Neby Exchange",
    location: "Remote",
    description: "Developed and integrated UI components in a performant frontend stack. Improved and optimized wallet connections. Analyzed UX and implemented improvements for speed and consistency.",
    stack: ["React", "TypeScript", "TailwindCSS", "Radix UI"],
    links: [
      { label: "app.neby.exchange", url: "https://app.neby.exchange" }
    ]
  },
  {
    period: "2021 to present",
    role: "Frontend Engineer and Founder",
    company: "webqid",
    location: "Wageningen",
    description: "Developed Next.js projects and design system components for various clients. Built landing pages, dashboards, and custom frontends. Implemented Playwright UI tests and preview workflows. Developed proof of concept AI image generator with Stability AI API, FastAPI backend, and frontend integration.",
    stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Shadcn UI", "Framer Motion", "GSAP", "Playwright", "Wagmi", "Ethers"],
    links: [
      { label: "webqid.com", url: "https://www.webqid.com" }
    ]
  },
  {
    period: "2022 to 2023",
    role: "Frontend Developer",
    company: "Emico",
    location: "Rhenen",
    description: "Built and maintained e-commerce frontends for Zitmaxx and Tegeldepot. Implemented Playwright UI tests for critical user flows. Maintained headless Magento implementations. Developed custom UI components with Tailwind and Hyvä.",
    stack: ["React", "Hyvä", "Magento", "TailwindCSS", "Alpine.js", "Playwright"]
  },
  {
    period: "2019 to 2020",
    role: "Microsoft O365 Developer",
    company: "DotOffice B.V.",
    location: "Netherlands",
    description: "Built document generation and workflow tooling within Microsoft Office 365. Developed automation solutions for legal and financial processes.",
    stack: ["Microsoft Office 365", "C#", ".NET"]
  },
  {
    period: "2018 to 2019",
    role: "Frontend Developer and Project Coordinator",
    company: "Infocaster B.V.",
    location: "Netherlands",
    description: "Lead frontend for the new TeamNL website (NOC*NSF), with focus on performance and accessibility. Built educational dashboards for public and government projects. Coordinated projects and managed teams.",
    stack: ["Vue.js", "AngularJS", "Umbraco", "Bootstrap"]
  },
  {
    period: "2010 to 2018",
    role: "Co-founder and Developer",
    company: "Prodev B.V.",
    location: "Netherlands",
    description: "Developed custom platforms for housing, logistics, government, and legal sectors. Full project cycle: scoping, implementation, architecture, and delivery. Designed backend architecture with .NET and SQL Server.",
    stack: [".NET (C#)", "MS SQL Server", "JavaScript", "jQuery", "Bootstrap"]
  },
  {
    period: "2006 to 2010",
    role: "Software Developer",
    company: "Covadis B.V.",
    location: "Netherlands",
    description: "Developed medical applications with focus on compliance and data security. Built GIS applications for local government. Full stack development within Agile teams.",
    stack: [".NET (C#)", "MS SQL Server", "Oracle", "JavaScript", "GIS libraries"]
  },
  {
    period: "2001 to 2006",
    role: "Software Developer",
    company: "Business Media B.V.",
    location: "Netherlands",
    description: "Built digital image bank for Vodafone. Developed custom applications for legal and franchise organizations.",
    stack: ["ASP.NET", "C#", "MS SQL Server", "JavaScript"]
  }
];

const TECH_STACK = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "Shadcn UI", "Radix UI"],
  accessibility: ["Semantic HTML", "ARIA", "WCAG", "Keyboard Navigation"],
  testing: ["Playwright", "Vitest", "Testing Library"],
  tooling: ["Git", "CI/CD", "Vercel", "Node.js", "REST", "GraphQL", "Figma", "Notion"],
  web3: ["Wagmi", "Viem", "Ethers.js", "RainbowKit", "Secure Signing", "Solidity"]
};

const WAY_OF_WORKING = [
  {
    title: "Clarity first",
    description: "Clear code. Clear communication. No ambiguity."
  },
  {
    title: "Component driven",
    description: "Reusable systems. Consistent interfaces. Scalable architecture."
  },
  {
    title: "Test what matters",
    description: "Playwright for critical flows. Regression prevention. Confidence in deploys."
  },
  {
    title: "Mentor and guide",
    description: "Technical guidance for designers and developers. Knowledge sharing."
  }
];

const EDUCATION = [
  {
    institution: "Hogeschool Utrecht",
    field: "Journalism",
    period: "1998 to 1999"
  },
  {
    institution: "Neder Veluwe College, Ede",
    field: "MBO Retail",
    period: "1994 to 1998"
  }
];

const LANGUAGES = [
  { language: "Dutch", level: "Native" },
  { language: "English", level: "Fluent" }
];

export default function CVPage() {
  return (
    <div className="text-neutral-300 font-[geist-sans] antialiased flex flex-col">
      {/* HERO */}
      <section
        id="hero"
        className="min-h-[60vh] flex flex-col items-center justify-center relative overflow-hidden text-center py-24"
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
          Senior Frontend Developer
        </motion.p>

        <motion.p
          className="mt-2 text-sm text-neutral-500 font-mono tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          20+ years of experience
        </motion.p>

        <motion.div
          className="flex items-center gap-4 mt-6 font-sans"
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
          <span className="text-neutral-700">|</span>
          <a
            href="https://github.com/webqid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-teal-400 transition-colors"
          >
            GitHub - Webqid
          </a>
           <a
            href="https://github.com/jcvandeweerd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-teal-400 transition-colors"
          >
            GitHub - Personal
          </a>
          <span className="text-neutral-700">|</span>
          <a
            href="https://www.webqid.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-teal-400 transition-colors"
          >
            webqid.com
          </a>
        </motion.div>
      </section>

      {/* PROFESSIONAL SUMMARY */}
      <Section id="summary">
        <div className="container max-w-3xl mx-auto text-center space-y-6">
          <SectionTitle>Summary</SectionTitle>

          <SectionParagraph delay={0.1}>
            Senior Frontend Developer with more than twenty years of experience
            designing and building scalable web applications. Specialized in React,
            Next.js, and TypeScript, with strong focus on accessibility, performance,
            and component driven architecture.
          </SectionParagraph>

          <SectionParagraph delay={0.2}>
            Strong interest in AI driven product development and integrating LLMs
            and intelligent assistance into user interfaces.
          </SectionParagraph>

          <SectionParagraph delay={0.3}>
            Experienced in working with multidisciplinary teams, mentoring colleagues,
            and delivering consistent UIs within complex digital products. My broad
            background in Web2, combined with Web3 expertise, allows me to make impact
            in both traditional IT environments and modern high performance platforms.
          </SectionParagraph>
        </div>
      </Section>

      {/* CORE EXPERTISE */}
      <Section id="expertise">
        <div className="container max-w-3xl mx-auto space-y-10">
          <div className="text-center">
            <SectionTitle>Core Expertise</SectionTitle>
            <SectionParagraph className="mt-4" delay={0.1}>
              Depth built over two decades of focused practice.
            </SectionParagraph>
          </div>

          <div className="grid gap-8 mt-12">
            {EXPERTISE.map((skill, index) => (
              <ExpertiseSlider
                key={skill.label}
                label={skill.label}
                description={skill.description}
                level={skill.level}
                delay={0.1 + index * 0.08}
              />
            ))}
          </div>

          <p className="text-xs text-neutral-600 text-center mt-8 font-light">
            Depth indicator based on years of practice and project complexity.
          </p>
        </div>
      </Section>

      {/* SELECTED EXPERIENCE */}
      <Section id="experience">
        <div className="container max-w-3xl mx-auto space-y-10">
          <div className="text-center">
            <SectionTitle>Experience</SectionTitle>
          </div>

          <div className="space-y-10 mt-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.period + exp.company}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.6, ease: "easeOut" }}
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
                  {exp.company} <span className="text-neutral-600">/ {exp.location}</span>
                </p>
                <p className="text-sm text-neutral-400 font-light mt-3 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
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
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* WAY OF WORKING */}
      <Section id="way-of-working">
        <div className="container max-w-3xl mx-auto space-y-10">
          <div className="text-center">
            <SectionTitle>Way of Working</SectionTitle>
            <SectionParagraph className="mt-4" delay={0.1}>
              Principles that guide my craft.
            </SectionParagraph>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {WAY_OF_WORKING.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="p-5 rounded-xl border border-neutral-800/60 bg-neutral-900/30"
              >
                <h3 className="text-sm font-medium text-neutral-100">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 font-light mt-1 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* TECH STACK */}
      <Section id="tech-stack">
        <div className="container max-w-3xl mx-auto space-y-10">
          <div className="text-center">
            <SectionTitle>Tech Stack</SectionTitle>
            <SectionParagraph className="mt-4" delay={0.1}>
              Tools I use daily.
            </SectionParagraph>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {Object.entries(TECH_STACK).map(([category, items], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + catIndex * 0.08, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-3">
                  {category}
                </h3>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-neutral-300 font-light"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* WEB2 AND WEB3 CONTEXT */}
      <Section id="web2-web3">
        <div className="container max-w-3xl mx-auto space-y-6 text-center">
          <SectionTitle>Web2 and Web3</SectionTitle>

          <SectionParagraph delay={0.1}>
            I started in Web2. Building e-commerce platforms, enterprise applications,
            medical software, and government systems.
          </SectionParagraph>

          <SectionParagraph delay={0.2}>
            Today I work across both worlds. Web3 frontends with wallet connections,
            secure signing flows, and on-chain data. Web2 applications with complex
            data flows and high performance requirements.
          </SectionParagraph>

          <SectionParagraph delay={0.3}>
            The foundation is the same. Clean code. Clear interfaces. Reliable systems.
            The context changes, the craft remains.
          </SectionParagraph>
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education">
        <div className="container max-w-3xl mx-auto space-y-10">
          <div className="text-center">
            <SectionTitle>Education</SectionTitle>
          </div>

          <div className="space-y-6 mt-12">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center"
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center pt-6"
          >
            <h4 className="text-xs font-mono text-neutral-600 uppercase tracking-wider mb-3">
              Languages
            </h4>
            <div className="flex justify-center gap-6">
              {LANGUAGES.map((lang) => (
                <span key={lang.language} className="text-sm text-neutral-400 font-light">
                  {lang.language} <span className="text-neutral-600">({lang.level})</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* LEADERSHIP AND MENTORSHIP */}
      <Section id="leadership">
        <div className="container max-w-3xl mx-auto space-y-6 text-center">
          <SectionTitle>Mentorship</SectionTitle>

          <SectionParagraph delay={0.1}>
            I lead by example. Code reviews are teaching moments.
            Pull requests are conversations.
          </SectionParagraph>

          <SectionParagraph delay={0.2}>
            I have mentored designers and developers. Helping them understand
            component architecture, accessibility principles, and testing strategies.
          </SectionParagraph>

          <SectionParagraph delay={0.3}>
            I want people to do well. I focus on clarity, trust, and creating space for others to work at their best.
          </SectionParagraph>
        </div>
      </Section>

      {/* CALL TO ACTION */}
      <Section id="contact">
        <div className="container max-w-2xl mx-auto text-center space-y-8">
          <SectionTitle>Work with me</SectionTitle>

          <SectionParagraph delay={0.1}>
            Looking for a senior frontend developer who builds with precision?
          </SectionParagraph>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Get in touch
              </Link>
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
            Based in the Netherlands. Available for remote collaboration worldwide.
          </motion.p>
        </div>
      </Section>
    </div>
  );
}
