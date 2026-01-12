"use client";

import { SKILLS, EXPERIENCE, EDUCATION, LANGUAGES } from "@/data/cv-data";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import React, { useRef, useState } from "react";

/**
 * Netflix-inspired CV page with cinematic design and smooth animations.
 */
export default function PersonalCVPage(): React.JSX.Element {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 1.1]);

  return (
    <div className="relative min-h-screen bg-[#141414] text-white overflow-x-hidden">
      {/* Netflix-style top gradient */}
      <div className="fixed top-0 left-0 right-0 h-24 bg-linear-to-b from-black/80 to-transparent z-40 pointer-events-none" />

      {/* HERO BILLBOARD */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Background image with parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ scale: heroScale }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-linear-to-t from-[#141414] via-transparent to-black/50 z-10" />
          {/* Netflix-style subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute inset-0 bg-linear-to-br from-red-900/20 via-transparent to-black" />
        </motion.div>

        {/* Hero content */}
        <motion.div
          className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-4xl"
          style={{ opacity: heroOpacity }}
        >
          {/* Netflix-style "N" badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-bold text-lg">
              C
            </div>
            <span className="text-sm font-medium tracking-widest text-neutral-400 uppercase">
              Developer Profile
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-none tracking-tight"
          >
            Christian
            <br />
            <span className="text-red-600">van de Weerd</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-neutral-300 mb-6 max-w-2xl leading-relaxed"
          >
            Senior Frontend Developer crafting pixel-perfect interfaces 
            with 20+ years of engineering excellence.
          </motion.p>

          {/* Meta info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 text-sm text-neutral-400 mb-8"
          >
            <span className="text-green-500 font-semibold">Available Now</span>
            <span className="w-1 h-1 bg-neutral-600 rounded-full" />
            <span>2001 - Present</span>
            <span className="w-1 h-1 bg-neutral-600 rounded-full" />
            <span className="border border-neutral-600 px-2 py-0.5 text-xs">SENIOR</span>
            <span className="w-1 h-1 bg-neutral-600 rounded-full" />
            <span>Netherlands 🇳🇱</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="https://www.linkedin.com/in/jcvandeweerd"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded font-semibold text-lg hover:bg-neutral-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Connect
            </motion.a>
            <motion.a
              href="https://github.com/webqid"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-neutral-700/80 text-white px-8 py-3 rounded font-semibold text-lg hover:bg-neutral-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              More Info
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile image - floating on the right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 z-20"
        >
          <div className="relative w-80 h-80 rounded-lg overflow-hidden shadow-2xl shadow-red-900/30">
            <Image
              src="/jcvandeweerd-pfp.png"
              alt="Christian van de Weerd"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-neutral-500 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* SKILLS CAROUSEL SECTION */}
      <section className="relative py-12 -mt-20 z-30">
        <div className="px-8 md:px-16 lg:px-24 mb-4">
          <h2 className="text-2xl font-bold">Technical Expertise</h2>
        </div>

        {Object.entries(SKILLS).map(([category, skills], categoryIndex) => (
          <SkillRow 
            key={category} 
            title={category} 
            skills={skills} 
            delay={categoryIndex * 0.1} 
          />
        ))}
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="relative py-16 px-8 md:px-16 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-8"
        >
          Career Highlights
        </motion.h2>

        <div className="space-y-6">
          {EXPERIENCE.map((exp, index) => (
            <ExperienceCard key={`${exp.period}-${exp.company}`} experience={exp} index={index} />
          ))}
        </div>
      </section>

      {/* EDUCATION & LANGUAGES */}
      <section className="relative py-16 px-8 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.institution}
                  className="bg-neutral-800/50 rounded-lg p-6 hover:bg-neutral-800 transition-colors"
                >
                  <h3 className="font-semibold text-lg">{edu.field}</h3>
                  <p className="text-neutral-400">{edu.institution}</p>
                  <p className="text-sm text-neutral-500 mt-2">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">Languages</h2>
            <div className="space-y-4">
              {LANGUAGES.map((lang) => (
                <div
                  key={lang.language}
                  className="bg-neutral-800/50 rounded-lg p-6 hover:bg-neutral-800 transition-colors flex justify-between items-center"
                >
                  <span className="font-semibold text-lg">{lang.language}</span>
                  <span className="text-green-500 font-medium">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="relative py-24 px-8 md:px-16 lg:px-24">
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 p-12 md:p-16">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to build something amazing?
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Let's create exceptional frontend experiences together.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="https://www.linkedin.com/in/jcvandeweerd"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white px-10 py-4 rounded font-bold text-lg hover:bg-red-700 transition-colors"
              >
                Get Started
              </motion.a>
              <motion.a
                href="https://github.com/webqid"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-neutral-500 text-white px-10 py-4 rounded font-bold text-lg hover:border-white transition-colors"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>
        </div>

        <p className="text-center text-neutral-600 mt-12 text-sm">
          Based in the Netherlands • Available for remote collaboration worldwide
        </p>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Skill Row Component - Netflix horizontal scroll                            */
/* -------------------------------------------------------------------------- */
interface SkillRowProps {
  title: string;
  skills: readonly { label: string; description: string; level: number }[];
  delay?: number;
}

function SkillRow({ title, skills, delay = 0 }: SkillRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="relative group mb-8"
    >
      <h3 className="text-lg font-medium text-neutral-300 px-8 md:px-16 lg:px-24 mb-3">
        {title}
      </h3>

      {/* Left arrow */}
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 translate-y-2 z-10 w-12 h-32 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Right arrow */}
      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 translate-y-2 z-10 w-12 h-32 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-3 overflow-x-auto scrollbar-hide px-8 md:px-16 lg:px-24 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {skills.map((skill) => (
          <SkillCard key={skill.label} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Skill Card Component - Netflix-style hover card                            */
/* -------------------------------------------------------------------------- */
interface SkillCardProps {
  skill: { label: string; description: string; level: number };
}

function SkillCard({ skill }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ duration: 0.2 }}
      className="relative flex-shrink-0 w-64 h-36 rounded-md overflow-hidden cursor-pointer group"
    >
      {/* Card background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
      
      {/* Skill level indicator bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-700">
        <motion.div
          className="h-full bg-red-600"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full p-4 flex flex-col justify-between">
        <div>
          <h4 className="font-bold text-white text-lg leading-tight">{skill.label}</h4>
          <p className="text-sm text-neutral-400 mt-1 line-clamp-2">{skill.description}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-neutral-500">{skill.level}% proficiency</span>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            className="flex items-center gap-1 text-red-500 text-xs font-medium"
          >
            View details
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Hover border effect */}
      <motion.div
        className="absolute inset-0 border-2 border-white/0 rounded-md pointer-events-none"
        animate={{ borderColor: isHovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0)" }}
      />
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Experience Card Component                                                   */
/* -------------------------------------------------------------------------- */
interface ExperienceCardProps {
  experience: {
    period: string;
    role: string;
    company: string;
    location: string;
    highlights: readonly string[];
    stack: readonly string[];
    links?: readonly { label: string; url: string }[];
  };
  index: number;
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <motion.div
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative bg-neutral-800/50 rounded-lg overflow-hidden cursor-pointer hover:bg-neutral-800 transition-all"
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-1 h-full bg-red-600" />

        <div className="p-6 pl-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{experience.role}</h3>
              <p className="text-red-500 font-medium">{experience.company}</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-neutral-400">
              <span>{experience.period}</span>
              <span className="w-1 h-1 bg-neutral-600 rounded-full" />
              <span>{experience.location}</span>
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {experience.stack.slice(0, isExpanded ? undefined : 5).map((tech) => (
              <span
                key={tech}
                className="text-xs bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
            {!isExpanded && experience.stack.length > 5 && (
              <span className="text-xs text-neutral-500">+{experience.stack.length - 5} more</span>
            )}
          </div>

          {/* Expandable content */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="space-y-2 mb-4">
              {experience.highlights.map((highlight, i) => (
                <li key={i} className="flex gap-3 text-neutral-300 text-sm">
                  <span className="text-red-500 mt-1">▸</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {experience.links && experience.links.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {experience.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-red-500 hover:text-red-400 font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            )}
          </motion.div>

          {/* Expand indicator */}
          <div className="flex items-center justify-center mt-2">
            <motion.svg
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="w-5 h-5 text-neutral-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
