"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

import TechMarquee from "@/components/TechMarquee";
import { SOLUTIONS } from "@/content/solutions";
import {
  Section,
  SectionTitle,
  SectionParagraph,
  SolutionCard,
} from "@/components/sections";

/**
 * Home page with hero, solutions, studio, workspace, and contact sections.
 */
export default function Home(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const studioY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div
      ref={containerRef}
      className="text-neutral-300 font-[geist-sans] antialiased flex flex-col"
    >
      {/* HERO */}
      <section
        id="hero"
        aria-labelledby="hero-title"
        className="h-[80vh] flex flex-col items-center justify-center relative overflow-hidden text-center px-4"
      >
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-7xl md:text-8xl font-medium tracking-tight relative after:content-['.'] after:text-teal-500 after:font-[geist-mono]"
        >
          webqid
        </motion.h1>

        <motion.p
          className="mt-6 text-xl text-neutral-400 font-light tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          Built with intent.
        </motion.p>

        <motion.p
          className="mt-4 text-lg text-neutral-500 max-w-md leading-relaxed font-light tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
        >
          Precision-built Web frontends.
          <br />
          Engineered for trust, scalability, and performance.
        </motion.p>
      </section>

      {/* SOLUTIONS */}
      <Section id="solutions" aria-labelledby="solutions-title">
        <div className="container text-center space-y-10 px-4">
          <SectionTitle id="solutions-title">solutions</SectionTitle>

          <SectionParagraph className="max-w-2xl mx-auto" delay={0.2}>
            We design and build for Web3 teams who demand precision, speed, and
            clarity, transforming complex on-chain systems into refined, human
            interfaces.
          </SectionParagraph>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {SOLUTIONS.map((solution, index) => (
              <SolutionCard
                key={solution.title}
                index={index}
                title={solution.title}
                desc={solution.desc}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* TECH MARQUEE */}
      <TechMarquee />

      {/* STUDIO */}
      <Section id="studio" aria-labelledby="studio-title">
        <motion.div style={{ y: studioY }}>
          <div className="container text-center space-y-10 px-4">
            <SectionTitle id="studio-title">studio</SectionTitle>

            <SectionParagraph className="max-w-2xl mx-auto">
              webqid. is a high-end engineering studio built on calm precision.
              We translate complex on-chain systems into fast, human-centered
              interfaces, engineered for trust and performance.
            </SectionParagraph>

            <SectionParagraph className="max-w-2xl mx-auto">
              Our approach blends the rigor of software engineering with the
              clarity of design. From staking dashboards and token systems to
              wallet integrations and dApps. Every build is intentional,
              reliable, and ready to scale.
            </SectionParagraph>

            <SectionParagraph className="max-w-2xl mx-auto">
              We don&apos;t chase trends. We build foundations. Technology
              should feel effortless. Refined, quiet, and precise.
            </SectionParagraph>
          </div>
        </motion.div>
      </Section>

      {/* WORKSPACE */}
      <Section id="workspace" aria-labelledby="workspace-title">
        <div className="container max-w-4xl mx-auto text-center py-32 space-y-10 px-4">
          <SectionTitle id="workspace-title">workspace</SectionTitle>

          <SectionParagraph className="max-w-2xl mx-auto">
            Every detail is deliberate, from architecture to code. Our workspace
            mirrors our philosophy: calm, precise, and built for focus. We build
            fewer things, but better.
          </SectionParagraph>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" aria-labelledby="contact-title">
        <div className="container max-w-4xl mx-auto text-center py-32 space-y-10 px-4">
          <SectionTitle id="contact-title">contact</SectionTitle>

          <p className="text-neutral-400 font-light leading-relaxed tracking-wide">
            We keep things simple, direct contact, no forms.
          </p>

          <p className="text-neutral-400 font-light leading-relaxed tracking-wide">
            For collaborations, inquiries, or project discussions, reach out
            anytime at{" "}
            <Link
              href="mailto:hello@webqid.com"
              className="text-teal-500 hover:text-teal-300 transition-colors font-medium"
            >
              hello@webqid.com
            </Link>
            .
          </p>

          <p className="text-neutral-500 text-sm font-light tracking-wide">
            Based in the Netherlands, collaborating worldwide.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Link
              href="mailto:hello@webqid.com"
              className="inline-block mt-4 px-5 py-3 bg-teal-500/10 border border-teal-500/20 rounded-xl text-teal-400 hover:bg-teal-500/20 transition font-sans tracking-tight"
            >
              Start a conversation
            </Link>
          </motion.div>

          <p className="text-neutral-500 text-sm font-light tracking-wide">
            Expect a calm, thoughtful reply, no automation, just intent.
          </p>
        </div>
      </Section>
    </div>
  );
}
