"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
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
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

  const solutions = [
    {
      title: "Web3 Frontend Engineering",
      desc: "High-performance apps built with Next.js, TypeScript, and Tailwind. Fast, predictable, and built to scale without friction.",
    },
    {
      title: "Design Systems in Code",
      desc: "Consistent, accessible UI components — engineered directly in code for clarity, speed, and long-term maintainability.",
    },
    {
      title: "Figma-to-Web Implementation",
      desc: "From Figma file to production-ready frontend. Pixel-perfect translation with clean, optimized, and accessible code.",
    },
    {
      title: "API & Realtime Data",
      desc: "GraphQL, REST, and WebSocket integrations that turn complex data into clear, real-time interfaces users can trust.",
    },
    {
      title: "Wallet & Trading Integrations",
      desc: "Seamless wallet and exchange connections using RainbowKit, Wagmi, Viem, and Hyperliquid APIs — secure, smooth, and ready to trade.",
    },
    {
      title: "Deployment & Performance",
      desc: "Deployed on Vercel with edge rendering, analytics, and monitoring. Tuned for speed, reliability, and continuous improvement.",
    },
  ]

  return (
    <div ref={ref} className="text-neutral-200 flex flex-col">
      {/* ───────────── HERO ───────────── */}
      <section className="h-[75vh] flex flex-col items-center justify-center relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-7xl font-medium tracking-tight relative after:content-['.'] after:text-teal-500 after:text-8xl after:-ml-1 after:font-[geist-mono]"
        >
          webqid
        </motion.h1>

        <motion.p
          className="mt-6 text-xl text-zinc-400 font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}

        >
          Built with intent.
        </motion.p>

        {/* Accent glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
        />
      </section>

      {/* ───────────── WORK ───────────── */}
      <section id="work" className="py-32 border-t border-neutral-800/50 overflow-hidden hidden">
        <div className="container text-center space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl font-semibold after:content-['.'] after:text-teal-500 after:text-4xl after:ml-1 after:font-[geist-mono]"
          >
            work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Selected projects that show how precision, design, and trust come together.
          </motion.p>

          <motion.div style={{ y: workY }} className="mt-12">
            <CarouselPage />
          </motion.div>


        </div>
      </section>

      {/* ───────────── SOLUTIONS ───────────── */}
      <section
        id="solutions"
        className="py-32 border-t border-neutral-800/50 overflow-hidden"
      >
        <div className="container text-center space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl font-semibold after:content-['.'] after:text-teal-500 after:text-4xl after:ml-1 after:font-[geist-mono]"
          >
            solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            From concept and design systems to complete Web3-ready applications.
            We turn complex architectures into refined, performant, and scalable user experiences.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {solutions.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 text-left space-y-2 hover:border-accent transition-colors"
              >
                <h3 className="text-lg font-medium text-zinc-200">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH MARQUEE       */}
      <TechMarquee />
      
      {/* ───────────── STUDIO ───────────── */}
      <section
        id="studio"
        className="relative border-t border-neutral-800/50 "
      >
        <div className="container max-w-4xl mx-auto text-center py-32 space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-4xl font-semibold after:content-['.'] after:text-teal-500 after:text-4xl after:ml-1 after:font-[geist-mono]"
          >
            studio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto"
          >
            webqid. is a high-end engineering studio crafting frontends with the
            precision of architecture. We blend technology, aesthetics, and
            reliability — building fewer things, better.
          </motion.p>
        </div>

        {/* Image wrapper outside of content flow */}
        <div className="relative w-full overflow-hidden border-t border-neutral-800">
          <motion.div
            style={{ y: studioY }}
            className="w-full h-[480px] md:h-[560px] lg:h-[600px] overflow-hidden"
          >
            <Image
              src="/studio.jpg"
              alt="Studio workspace"
              width={1280}
              height={731}
              className="w-full h-full object-cover opacity-80"
              priority
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
