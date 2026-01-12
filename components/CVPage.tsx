"use client";

import { SKILLS, EXPERIENCE, EDUCATION, LANGUAGES } from "@/data/cv-data";
import { Button } from "@/components/ui/button";
import { Section, SectionTitle, SectionParagraph } from "@/components/sections";
import { ExpertiseSlider } from "@/components/ExpertiseSlider";
import TechMarquee from "@/components/TechMarquee";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

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
          className="w-28 h-28 relative rounded-full overflow-hidden mb-8 ring-2 ring-neutral-300"
        >
          <Image
            src="/jcvandeweerd-pfp.png"
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
          className="mt-4 text-xl text-neutral-300 font-light tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Frontend Developer
        </motion.p>

        <motion.p
          className="mt-6 max-w-xl text-neutral-400 font-light leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          I build frontend architecture that turns complex systems
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
        </motion.nav>
      </section>

      {/* PROFESSIONAL SUMMARY */}
      <Section id="summary" aria-labelledby="summary-title">
        <div className="container max-w-3xl mx-auto text-center space-y-6 px-4">
          <SectionTitle id="summary-title">Summary</SectionTitle>

          <SectionParagraph delay={0.1}>
            Senior Frontend Developer with 20+ years of experience building scalable,
            production-grade web applications. Expert in React, Next.js, and TypeScript, with a strong
            focus on performance, accessibility, and component-driven architecture.
          </SectionParagraph>

          <SectionParagraph delay={0.2}>
            Proven track record in designing and maintaining complex, data-intensive user interfaces,
            working closely with product and backend teams. Experienced in establishing clear
            frontend architectures, reusable UI systems, and consistent design patterns.
          </SectionParagraph>

          <SectionParagraph delay={0.3}>
            Passionate about clean code, best practices, and building
            high-quality frontend solutions that stand the test of time.
          </SectionParagraph>

          <SectionParagraph delay={0.4}>
            <span className="text-teal-500">Available for hybrid and remote opportunities.</span>
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

          <p className="text-xs text-neutral-600 text-center my-8 font-light">
            Levels based on years of practice, project complexity, and depth of
            knowledge.
          </p>

          <TechMarquee />
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
                  {exp.company} <span className="text-neutral-600">/ {exp.location}</span>
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
                        className="text-xs text-neutral-500 hover:text-teal-400 transition-colors font-mono"
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
                    {lang.language} <span className="text-neutral-600">({lang.level})</span>
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
            {/* <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get in touch</Link>
            </Button> */}

            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/jcvandeweerd"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
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
