"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CarouselPage } from "@/components/Carousel";
import TechMarquee from "@/components/TechMarquee";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const studioY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const workY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const solutions = [
    {
      title: "Web3 Interfaces",
      desc: "Frontends built with precision — engineered in Next.js, TypeScript, and Tailwind for clarity, speed, and reliability.",
    },
    {
      title: "Design Handoff",
      desc: "From Figma to code. Pixel-perfect, accessible, and maintainable — a direct translation from concept to production.",
    },
    {
      title: "Design Systems in Code",
      desc: "UI foundations crafted for scalability. Consistent, accessible, and easy to evolve across products.",
    },
    {
      title: "API & Realtime Data",
      desc: "Integrations with GraphQL, REST, and WebSockets that turn complex data into clear, reactive experiences.",
    },
    {
      title: "Wallet & dApp Integrations",
      desc: "Seamless Web3 onboarding through RainbowKit, Wagmi, Viem, and Hyperliquid APIs — smooth, secure, and trusted.",
    },
    {
      title: "Optimized Delivery",
      desc: "Deployed on Vercel with edge rendering, analytics, and continuous performance tuning.",
    },
  ];

  return (
    <div ref={ref} className="text-neutral-300 font-[geist-sans] antialiased flex flex-col">
      {/* ───────────── HERO ───────────── */}
      <section id="hero" className="h-[80vh] flex flex-col items-center justify-center relative overflow-hidden text-center">
        <motion.h1
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
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        >
          Built with intent.
        </motion.p>

        <motion.p
          className="mt-4 text-lg text-neutral-500 max-w-md leading-relaxed font-light tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
        >
          Precision-built Web3 frontends — engineered for trust, scalability, and performance.
        </motion.p>
      </section>

      {/* ───────────── PHILOSOPHY ───────────── */}
      <section id="philosophy" className="py-24 border-t border-neutral-800/50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="container max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-4xl font-medium after:content-['.'] after:text-teal-500 after:font-[geist-mono] after:text-5xl">
            philosophy
          </h2>

          <p className="text-neutral-400 font-light leading-relaxed tracking-wide">
            Web3 shouldn’t feel experimental — it should feel inevitable.<br />
            At webqid, we translate complex on-chain systems into fast, reliable, and elegant interfaces.
          </p>

          <p className="text-neutral-400 font-light leading-relaxed tracking-wide">
            Our philosophy is simple: technology serves clarity.<br />
            Every line of code, every animation, every pixel is placed with intent — never decoration.
          </p>

          <p className="text-neutral-400 font-light leading-relaxed tracking-wide">
            The result is calm precision.<br />
            Products that don’t shout, but work — built to last, and built with intent.
          </p>
        </motion.div>
      </section>

      {/* ───────────── SOLUTIONS ───────────── */}
      <section id="solutions" className="py-24 border-t border-neutral-800/50 overflow-hidden">
        <div className="container text-center space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-medium after:content-['.'] after:text-teal-500 after:font-[geist-mono] after:text-5xl"
          >
            solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
          >
            We design and build for Web3 teams who demand precision, speed, and clarity —
            transforming complex on-chain systems into refined, human interfaces.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {solutions.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 text-left space-y-2 hover:border-teal-500/40 transition-colors"
              >
                <h3 className="text-lg font-medium text-neutral-200 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed tracking-wide">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── STUDIO ───────────── */}
      <TechMarquee />      

     <section id="studio" className="py-24 border-t border-neutral-800/50 overflow-hidden">
     <div className="container text-center space-y-10">
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-medium after:content-['.'] after:text-teal-500 after:font-[geist-mono] after:text-5xl"
          >
            studio
          </motion.h2>

        <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-neutral-400 font-light leading-relaxed tracking-wide max-w-2xl mx-auto"
          >
          webqid. is a high-end engineering studio built on calm precision.  
          We translate complex on-chain systems into fast, human-centered interfaces — engineered for trust and performance.
        </motion.p>

         <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-neutral-400 font-light leading-relaxed tracking-wide max-w-2xl mx-auto"
          >
          Our approach blends the rigor of software engineering with the clarity of design.  
          From staking dashboards and token systems to wallet integrations and dApps —  
          every build is intentional, reliable, and ready to scale.
        </motion.p>

         <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-neutral-400 font-light leading-relaxed tracking-wide max-w-2xl mx-auto"
          >
          We don’t chase trends. We build foundations.  
          Technology should feel effortless — refined, quiet, and precise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto mt-8"
        >
          <div className="inline-flex items-center gap-4 bg-neutral-900/40 border border-neutral-800 rounded-xl p-4">
            <div className="w-14 h-14 relative rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/profile.jpg"
                alt="Studio founder profile"
                fill
                className="object-cover grayscale brightness-90"
              />
            </div>

            <div className="text-left">
              <div className="text-sm font-medium text-neutral-100">
                Christian van de Weerd
              </div>
              <div className="text-xs font-sans text-neutral-400">
                Senior Web3 Developer
              </div>
              <div className="text-[10px] italic text-neutral-500/80 mt-1 tracking-wide">
                Precision is how I show care.
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/jcvandeweerd"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-teal-400 hover:text-teal-300 transition-colors"
              aria-label="Open LinkedIn profile"
            >
              <Image
                src="/icons/logo-linkedin.svg"
                alt="LinkedIn"
                width={16}
                height={16}
                className="inline-block"
              />
            </a>
          </div>
        </motion.div>
        </div>
      </section>

      {/* ───────────── WORKSPACE ───────────── */}
      <section id="workspace" className="py-24 border-t border-neutral-800/50 overflow-hidden">
        <div className="container max-w-4xl mx-auto text-center py-32 space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-medium after:content-['.'] after:text-teal-500 after:font-[geist-mono] after:text-5xl"
          >
            workspace
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-neutral-400 font-light leading-relaxed tracking-wide max-w-2xl mx-auto"
          >
            Every detail is deliberate — from architecture to code.  
            Our workspace mirrors our philosophy: calm, precise, and built for focus.  
            We build fewer things, but better.
          </motion.p>
        </div>

        <div className="relative w-full overflow-hidden border-t border-neutral-800">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full h-[480px] md:h-[560px] lg:h-[600px] overflow-hidden"
          >
            <Image
              src="/studio.jpg"
              alt="Studio workspace"
              width={1280}
              height={731}
              className="w-full h-full object-cover opacity-80 brightness-[0.85]"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* ───────────── CONTACT ───────────── */}
      <section id="contact" className="py-24 border-t border-neutral-800/50 overflow-hidden">
        <div className="container max-w-4xl mx-auto text-center py-32 space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-medium after:content-['.'] after:text-teal-500 after:font-[geist-mono] after:text-5xl"
          >
            contact
          </motion.h2>

          <p className="text-neutral-400 font-light leading-relaxed tracking-wide">
            We keep things simple — direct contact, no forms.
          </p>

          <p className="text-neutral-400 font-light leading-relaxed tracking-wide">
            For collaborations, inquiries, or project discussions, reach out anytime at{" "}
            <Link
              href="mailto:hello@webqid.com"
              className="text-teal-500 hover:text-teal-300 transition-colors font-medium"
            >
              hello@webqid.com
            </Link>.
          </p>

          <p className="text-neutral-500 text-sm font-light tracking-wide">
            Based in the Netherlands — collaborating worldwide.
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
            Expect a calm, thoughtful reply — no automation, just intent.
          </p>
        </div>
      </section>
    </div>
  );
}
