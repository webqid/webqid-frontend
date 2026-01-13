"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { SKILLS, EXPERIENCE } from "@/data/cv-data";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Magnetic button component with improved UX
function MagneticButton({ 
  children, 
  href 
}: { 
  children: React.ReactNode; 
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, { 
        x: x * 0.3, 
        y: y * 0.3, 
        duration: 0.4, 
        ease: "power3.out" 
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, { 
        x: 0, 
        y: 0, 
        duration: 0.6, 
        ease: "elastic.out(1, 0.4)" 
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border border-white/20 rounded-full text-white text-sm sm:text-base font-medium hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      {children}
    </a>
  );
}

// Split text animation component with improved rendering
function SplitText({ 
  children, 
  className = "" 
}: { 
  children: string; 
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || hasAnimated.current) return;

    const chars = container.querySelectorAll(".char");
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        { y: 100, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, container);

    hasAnimated.current = true;

    return () => ctx.revert();
  }, []);

  const chars = useMemo(() => 
    children.split("").map((char, i) => (
      <span 
        key={i} 
        className="char inline-block will-change-transform" 
        style={{ transformStyle: "preserve-3d" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    )), 
    [children]
  );

  return (
    <div 
      ref={containerRef} 
      className={`overflow-hidden ${className}`} 
      style={{ perspective: "1000px" }}
      aria-label={children}
    >
      {chars}
    </div>
  );
}

// Optimized particle field with reduced particle count on mobile
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Recreate particles on resize
      createParticles();
    };

    const createParticles = () => {
      particles = [];
      // Fewer particles on mobile for performance
      const particleCount = window.innerWidth < 768 ? 40 : 80;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections (skip on mobile for performance)
      if (window.innerWidth >= 768) {
        const connectionDistance = 120;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            if (!p1 || !p2) continue;
            const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (dist < connectionDistance) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - dist / connectionDistance)})`;
              ctx.stroke();
            }
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0" 
      aria-hidden="true"
    />
  );
}

// Glitch text effect with reduced motion support
function GlitchText({ children }: { children: string }) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 150);
    }, 4000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <span>{children}</span>;
  }

  return (
    <span className="relative inline-block">
      <span>{children}</span>
      {isGlitching && (
        <>
          <span 
            className="absolute inset-0 text-cyan-400 animate-glitch-1" 
            aria-hidden="true"
          >
            {children}
          </span>
          <span 
            className="absolute inset-0 text-red-400 animate-glitch-2" 
            aria-hidden="true"
          >
            {children}
          </span>
        </>
      )}
    </span>
  );
}

// Marquee component with improved accessibility
function InfiniteMarquee({ 
  items, 
  speed = 20, 
  reverse = false 
}: { 
  items: string[]; 
  speed?: number; 
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden whitespace-nowrap py-4" aria-hidden="true">
      <motion.div
        className="inline-flex gap-8 md:gap-12"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span 
            key={i} 
            className="text-5xl sm:text-7xl md:text-9xl font-black text-white/[0.03] uppercase tracking-tighter select-none"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// Skill bar with animated fill
function SkillBar({ 
  label, 
  level, 
  delay = 0 
}: { 
  label: string; 
  level: number; 
  delay?: number;
}) {
  const barRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar || hasAnimated.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: level / 100,
          duration: 1.2,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 92%",
            once: true,
          },
        }
      );
    }, bar);

    hasAnimated.current = true;

    return () => ctx.revert();
  }, [level, delay]);

  return (
    <div className="group" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      <div className="flex justify-between mb-2 text-sm">
        <span className="text-white/70 group-hover:text-white transition-colors duration-200">{label}</span>
        <span className="text-white/40 group-hover:text-teal-400 transition-colors duration-200 tabular-nums">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full bg-linear-to-r from-teal-500 to-cyan-400 rounded-full origin-left will-change-transform"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </div>
  );
}

// Experience card with stagger animation
function ExperienceCard({ entry }: { entry: typeof EXPERIENCE[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || hasAnimated.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, card);

    hasAnimated.current = true;

    return () => ctx.revert();
  }, []);

  return (
    <motion.article
      ref={cardRef}
      className="relative group"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div 
        className="absolute -inset-px bg-linear-to-r from-teal-500/50 to-cyan-500/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" 
        aria-hidden="true" 
      />
      <div className="relative bg-black/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-300">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
              {entry.role}
            </h3>
            <p className="text-white/50 mt-1 text-sm sm:text-base">
              {entry.company} — {entry.location}
            </p>
          </div>
          <span className="text-xs sm:text-sm text-white/40 font-mono shrink-0">
            {entry.period}
          </span>
        </div>

        <ul className="space-y-2.5 mb-6">
          {entry.highlights.slice(0, 3).map((highlight, i) => (
            <li key={i} className="text-white/60 text-sm leading-relaxed flex gap-3">
              <span className="text-teal-400 shrink-0" aria-hidden="true">→</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {entry.stack.slice(0, 6).map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-white/50 hover:text-white hover:border-teal-400/40 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

// Main component
export default function CreativeCVPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Move all useTransform calls to component level
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.9]);
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -80]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    // Text reveal animations
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal-text").forEach((text) => {
        gsap.fromTo(
          text,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: text,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isMounted]);

  const allSkills = useMemo(() => Object.values(SKILLS).flat(), []);

  return (
    <>
      {/* Custom cursor - desktop only */}
      {isMounted && (
        <motion.div
          className="fixed w-5 h-5 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference hidden lg:block"
          animate={{
            x: mousePos.x - 10,
            y: mousePos.y - 10,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.5 }}
          aria-hidden="true"
        />
      )}

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 sm:h-1 bg-linear-to-r from-teal-500 via-cyan-400 to-teal-500 origin-left z-50"
        style={{ scaleX: smoothProgress }}
        aria-hidden="true"
      />

      <ParticleField />

      <div ref={containerRef} className="relative bg-black text-white overflow-x-hidden">
        {/* HERO SECTION */}
        <motion.section
          ref={heroRef}
          className="min-h-svh flex flex-col items-center justify-center relative overflow-hidden"
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          aria-labelledby="hero-title"
        >
          {/* Background image with parallax */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{ y: parallaxY }}
          >
            <Image
              src="/hero.png"
              alt=""
              fill
              className="object-cover opacity-25"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black" />
          </motion.div>

          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <motion.div
              className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-teal-500/15 rounded-full blur-[120px] md:blur-[150px]"
              animate={{
                x: ["-40%", "40%", "-40%"],
                y: ["-20%", "20%", "-20%"],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ left: "10%", top: "10%" }}
            />
            <motion.div
              className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-purple-500/15 rounded-full blur-[100px] md:blur-[120px]"
              animate={{
                x: ["40%", "-40%", "40%"],
                y: ["20%", "-20%", "20%"],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ right: "10%", bottom: "10%" }}
            />
          </div>

          {/* Hero content */}
          <div className="relative z-10 text-center px-4 sm:px-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-8 sm:mb-12 relative"
            >
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-teal-400 to-cyan-400 animate-spin-slow" />
              <div className="absolute inset-1 rounded-full overflow-hidden bg-black">
                <Image
                  src="/jcvandeweerd-pfp.png"
                  alt="Christian van de Weerd"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 160px"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              <h1 id="hero-title" className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none">
                <GlitchText>CHRISTIAN</GlitchText>
              </h1>
              <p className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-linear-to-r from-teal-400 via-cyan-300 to-teal-400">
                VAN DE WEERD
              </p>
            </motion.div>

            <motion.p
              className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-white/50 font-light tracking-widest uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Frontend Developer & Creative Technologist
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <MagneticButton href="https://www.linkedin.com/in/jcvandeweerd">
                LinkedIn
              </MagneticButton>
              <MagneticButton href="https://github.com/webqid">
                GitHub
              </MagneticButton>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ 
              opacity: { delay: 1.5, duration: 0.5 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            aria-hidden="true"
          >
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-2 sm:w-1.5 sm:h-3 bg-white/50 rounded-full mt-1.5 sm:mt-2"
                animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.section>

        {/* MARQUEE */}
        <section className="py-12 sm:py-20 overflow-hidden border-y border-white/10">
          <InfiniteMarquee items={["FRONTEND", "REACT", "NEXT.JS", "TYPESCRIPT", "WEB3"]} speed={35} />
          <InfiniteMarquee items={["ARCHITECTURE", "SYSTEMS", "DESIGN", "MOTION", "UX"]} speed={30} reverse />
        </section>

        {/* ABOUT SECTION */}
        <section className="min-h-svh flex items-center py-20 sm:py-32 px-4 sm:px-6" aria-labelledby="about-title">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 sm:mb-16"
            >
              <span className="text-teal-400 text-xs sm:text-sm font-mono tracking-widest">01 — ABOUT</span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 id="about-title">
                  <SplitText className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 sm:mb-8">
                    Building digital experiences
                  </SplitText>
                </h2>
                <p className="reveal-text text-lg sm:text-xl text-white/50 leading-relaxed mb-6 sm:mb-8">
                  I build frontend architecture that turns complex systems into clear, usable interfaces.
                  Focus on structure, accessibility, and long term maintainability.
                </p>
                <p className="reveal-text text-lg sm:text-xl text-white/50 leading-relaxed">
                  With over two decades of experience in software development, I specialize in crafting
                  scalable React applications with TypeScript, modern CSS, and motion design.
                </p>
              </div>

              <motion.div
                className="relative aspect-square max-w-md lg:max-w-none mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-teal-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl" />
                <Image
                  src="/hero.png"
                  alt="Creative development work"
                  fill
                  className="object-cover rounded-2xl sm:rounded-3xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent rounded-2xl sm:rounded-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="min-h-svh py-20 sm:py-32 px-4 sm:px-6 bg-linear-to-b from-black via-neutral-950 to-black" aria-labelledby="skills-title">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 sm:mb-16"
            >
              <span className="text-teal-400 text-xs sm:text-sm font-mono tracking-widest">02 — SKILLS</span>
            </motion.div>

            <h2 id="skills-title">
              <SplitText className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-12 sm:mb-16">
                Technical expertise
              </SplitText>
            </h2>

            <div className="grid sm:grid-cols-2 gap-x-8 sm:gap-x-16 gap-y-6 sm:gap-y-8">
              {allSkills.slice(0, 12).map((skill, i) => (
                <SkillBar 
                  key={skill.label} 
                  label={skill.label} 
                  level={skill.level} 
                  delay={i * 0.08} 
                />
              ))}
            </div>

            {/* Animated skill tags */}
            <motion.div
              className="mt-16 sm:mt-20 flex flex-wrap gap-3 sm:gap-4 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {["React", "Next.js", "TypeScript", "TailwindCSS", "GSAP", "Motion", "Wagmi", "GraphQL", "Playwright", "Node.js", "Figma", "Git"].map((tag, i) => (
                <motion.span
                  key={tag}
                  className="px-4 py-2 sm:px-6 sm:py-3 border border-white/20 rounded-full text-xs sm:text-sm text-white/70 hover:bg-white hover:text-black transition-all duration-300 cursor-default select-none"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="min-h-svh py-20 sm:py-32 px-4 sm:px-6" aria-labelledby="experience-title">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 sm:mb-16"
            >
              <span className="text-teal-400 text-xs sm:text-sm font-mono tracking-widest">03 — EXPERIENCE</span>
            </motion.div>

            <h2 id="experience-title">
              <SplitText className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-12 sm:mb-16">
                Career highlights
              </SplitText>
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {EXPERIENCE.map((entry, i) => (
                <ExperienceCard key={i} entry={entry} />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="min-h-svh flex items-center justify-center py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden" aria-labelledby="contact-title">
          <div className="absolute inset-0" aria-hidden="true">
            <motion.div
              className="absolute w-full h-full bg-linear-to-r from-teal-500/5 to-purple-500/5"
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 sm:mb-16"
            >
              <span className="text-teal-400 text-xs sm:text-sm font-mono tracking-widest">04 — CONTACT</span>
            </motion.div>

            <h2 id="contact-title">
              <SplitText className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl  font-bold mb-6 sm:mb-8">
                Let&#39;s work together
              </SplitText>
            </h2>

            <motion.p
              className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 sm:mb-12"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Open to frontend architecture roles, consulting, and creative collaborations.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <MagneticButton href="mailto:christian@webqid.com">
                Get in touch
              </MagneticButton>
              <MagneticButton href="https://www.linkedin.com/in/jcvandeweerd">
                Connect on LinkedIn
              </MagneticButton>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 sm:py-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-white/40 text-xs sm:text-sm text-center sm:text-left">
              © 2025 Christian van de Weerd. Built with chaos and caffeine.
            </p>
            <nav className="flex gap-6" aria-label="Footer navigation">
              <a 
                href="https://www.linkedin.com/in/jcvandeweerd" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/40 hover:text-teal-400 transition-colors duration-200 text-xs sm:text-sm focus:outline-none focus-visible:text-teal-400"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/webqid" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/40 hover:text-teal-400 transition-colors duration-200 text-xs sm:text-sm focus:outline-none focus-visible:text-teal-400"
              >
                GitHub
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
