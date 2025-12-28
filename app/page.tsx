"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

import TechMarquee from "@/components/TechMarquee";
import StructuredData from "@/components/StructuredData";
import { SOLUTIONS } from "@/content/solutions";
import { getFeaturedCaseStudy, getSecondaryProjects } from "@/lib/case-studies";
import {
  Section,
  SectionTitle,
  SectionParagraph,
  SolutionCard,
} from "@/components/sections";

/**
 * Home page with hero, featured work, solutions, studio, and contact sections.
 * Redesigned to lead with proof of work and multiple conversion paths.
 */
export default function Home(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const featured = getFeaturedCaseStudy();
  const secondary = getSecondaryProjects();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const studioY = useTransform(scrollYProgress, [0, 1], [0, -120]);


  // GSAP refs for hero section
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null);
  const heroDescRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    // Flashy animation for the hero title
    tl.fromTo(
      heroTitleRef.current,
      { opacity: 0, y: 60, scale: 0.7, color: "#0f172a" },
      {
        opacity: 1,
        y: 0,
        scale: 1.15,
        color: "#14b8a6",
        duration: 0.7,
        ease: "bounce.out",
        filter: "drop-shadow(0 0 32px #14b8a6)",
      }
    )
      .to(
        heroTitleRef.current,
        {
          scale: 1,
          color: "#fff",
          filter: "none",
          duration: 0.4,
          ease: "power2.inOut",
        },
        ">"
      )
      // Subtitle fade-in with scale
      .fromTo(
        heroSubtitleRef.current,
        { opacity: 0, y: 40, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .to(
        heroSubtitleRef.current,
        {
          scale: 1,
          duration: 0.3,
          ease: "power2.inOut",
        },
        ">"
      )
      // Description fade-in with scale
      .fromTo(
        heroDescRef.current,
        { opacity: 0, y: 40, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1.05,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .to(
        heroDescRef.current,
        {
          scale: 1,
          duration: 0.3,
          ease: "power2.inOut",
        },
        ">"
      );
  }, []);

  // Structured data for homepage
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "webqid",
    url: "https://www.webqid.com",
    logo: "https://www.webqid.com/logo.png",
    description: "Senior Web3 frontend engineering studio specializing in DeFi, NFT, and trading dApps.",
    sameAs: [
      "https://github.com/webqid",
      "https://www.linkedin.com/company/webqid/",
      "https://x.com/webqid",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "hello@webqid.com",
        contactType: "sales",
        url: "https://www.webqid.com/contact",
      },
    ],
    knowsAbout: [
      "Web3 Development",
      "DeFi Frontends",
      "Next.js",
      "TypeScript",
      "Wagmi",
      "React",
    ],
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "AITA Protocol",
    url: "https://app.aitaprotocol.com",
    creator: { "@type": "Organization", name: "webqid" },
    description:
      "DeFi staking dashboard, referral system, LST platform. Next.js, Wagmi, GraphQL.",
    image: "https://www.webqid.com/work/aita-dashboard-1.webp",
  };
  return (
    <>
      <StructuredData data={orgSchema} />
      <StructuredData data={portfolioSchema} />
      <div
        ref={containerRef}
        className="text-neutral-300 font-[geist-sans] antialiased flex flex-col"
      >
      {/* HERO */}
      <section
        id="hero"
        aria-labelledby="hero-title"
        aria-label="Homepage hero section"
        className="h-[80vh] flex flex-col items-center justify-center relative overflow-hidden text-center px-4"
      >
        <h1
          id="hero-title"
          ref={heroTitleRef}
          tabIndex={0}
          className="text-7xl md:text-8xl font-medium tracking-tight relative after:content-['.'] after:text-teal-500 after:font-[geist-mono] focus-visible:ring-2 focus-visible:ring-teal-500 rounded-sm"
        >
          webqid
        </h1>

        <p
          ref={heroSubtitleRef}
          className="mt-6 text-xl text-neutral-400 font-light tracking-wide"
        >
          Built with intent.
        </p>

        <p
          ref={heroDescRef}
          className="mt-4 text-lg text-neutral-500 max-w-md leading-relaxed font-light tracking-wide"
        >
          Precision-built Web frontends.
          <br />
          Engineered for trust, scalability, and performance.
        </p>

        <Link
          href="#featured-work"
          className="mt-10 inline-block px-6 py-3 bg-teal-500/10 border border-teal-500/20 rounded-xl text-teal-400 hover:bg-teal-500/20 transition font-sans tracking-tight text-lg font-medium focus-visible:ring-2 focus-visible:ring-teal-500"
        >
          See our work ↓
        </Link>
      </section>

      {/* FEATURED WORK */}
      <section
        id="featured-work"
        aria-labelledby="featured-work-title"
        className="py-24 border-t border-neutral-800/50"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-teal-400 font-mono text-sm uppercase tracking-wider">
                Featured
              </span>
              <h2
                id="featured-work-title"
                className="text-4xl md:text-5xl font-bold mt-2"
              >
                Recent Work
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden md:flex items-center gap-2 text-neutral-400 hover:text-teal-400 transition-colors"
            >
              <span>View all</span>
              <span>→</span>
            </Link>
          </div>

          {/* Featured Project - AITA */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Link
                href={`/case-study/${featured.slug}`}
                className="group block"
              >
                <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 transition-all duration-300 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/10">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative aspect-16/10 lg:aspect-auto lg:min-h-100 overflow-hidden">
                      {featured.screenshots?.[0] && (
                        <Image
                          src={featured.screenshots[0]}
                          alt={`${featured.title} dashboard preview`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          priority
                        />
                      )}
                      <div className="absolute inset-0 bg-linear-to-r from-transparent to-neutral-950/50 lg:block hidden" />
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-teal-500/20 text-teal-400 border border-teal-500/30">
                          {featured.status}
                        </span>
                        <span className="text-neutral-500 text-sm">
                          {featured.period}
                        </span>
                      </div>

                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                        {featured.title}
                      </h3>

                      <p className="text-teal-400 font-mono text-sm mb-4">
                        {featured.description}
                      </p>

                      <p className="text-neutral-400 leading-relaxed mb-6 text-lg">
                        {featured.tagline}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {featured.stack.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="bg-neutral-800/50 text-neutral-400 text-xs px-3 py-1 rounded-full font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                        {featured.stack.length > 5 && (
                          <span className="text-neutral-500 text-xs px-2 py-1">
                            +{featured.stack.length - 5} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center text-teal-400 font-medium group-hover:gap-3 transition-all">
                        <span>Read case study</span>
                        <span className="ml-2 transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Secondary Projects */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {secondary.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/case-study/${project.slug}`}
                  className="group block h-full"
                >
                  <div className="h-full rounded-xl border border-neutral-800 bg-neutral-950/50 p-6 transition-all duration-300 hover:border-teal-500/40 hover:bg-neutral-900/50">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-mono uppercase tracking-wider ${
                          project.status === "live"
                            ? "bg-teal-500/10 text-teal-400"
                            : project.status === "ongoing"
                              ? "bg-blue-500/10 text-blue-400"
                              : "bg-neutral-500/10 text-neutral-400"
                        }`}
                      >
                        {project.status}
                      </span>
                      <span className="text-neutral-600 text-xs">
                        {project.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-neutral-400 text-sm mb-3">
                      {project.description}
                    </p>

                    <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                      {project.tagline}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="bg-neutral-800/30 text-neutral-500 text-xs px-2 py-0.5 rounded font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-teal-400 text-sm font-medium">
                      <span>View project</span>
                      <span className="ml-1.5 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All CTA (mobile) */}
          <div className="md:hidden text-center">
            <Link
              href="/work"
              className="inline-block px-6 py-3 bg-teal-500/10 border border-teal-500/20 rounded-xl text-teal-400 hover:bg-teal-500/20 transition font-medium"
            >
              View all work →
            </Link>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <Section
        id="solutions"
        aria-labelledby="solutions-title"
        aria-label="Solutions overview"
      >
        <div className="container text-center space-y-8 px-4">
          <SectionTitle id="solutions-title">solutions</SectionTitle>
          <SectionParagraph className="max-w-2xl mx-auto" delay={0.2}>
            Web3 frontend engineering for staking, DeFi, NFT, and trading
            dApps. Precision, speed, and clarity for technical teams.
          </SectionParagraph>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
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
      <TechMarquee aria-label="Tech stack marquee" />

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

            {/* Credentials */}
            <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">
                  20+
                </div>
                <div className="text-neutral-500 text-sm">
                  Years in software
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">
                  5+
                </div>
                <div className="text-neutral-500 text-sm">
                  Years in Web3
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">
                  NL
                </div>
                <div className="text-neutral-500 text-sm">
                  Based, global work
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" aria-labelledby="contact-title">
        <div className="container max-w-4xl mx-auto text-center py-16 space-y-8 px-4">
          <SectionTitle id="contact-title">contact</SectionTitle>

          <p className="text-neutral-400 font-light leading-relaxed tracking-wide max-w-xl mx-auto">
            We partner with Web3 teams building production dApps. Ideal
            projects: $30k+ budget, 8-12 week timelines, technical founders.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link
                href="mailto:hello@webqid.com"
                className="inline-block px-6 py-3 bg-teal-500/10 border border-teal-500/20 rounded-xl text-teal-400 hover:bg-teal-500/20 transition font-sans tracking-tight text-lg font-medium"
              >
                Start a conversation
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <a
                href="https://cal.com/webqid/intro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border border-neutral-700 rounded-xl text-neutral-200 hover:bg-neutral-900 transition font-sans tracking-tight text-lg font-medium"
              >
                Book a technical discussion
              </a>
            </motion.div>
          </div>

          <p className="text-neutral-500 text-sm font-light tracking-wide pt-4">
            Based in the Netherlands, collaborating worldwide.
            <br />
            Expect a calm, thoughtful reply—no automation, just intent.
          </p>
        </div>
      </Section>
    </div>
    </>
  );
}
