"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.65]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

  return (
    <div
      ref={ref}
      className="min-h-[200vh] bg-gradient-to-br from-[#0A0A0A] to-[#111111] text-[#EDEDED]"
    >
      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center">
        <motion.h1
          style={{ scale, y, opacity }}
          className="text-7xl font-medium tracking-tight relative after:content-['.'] after:text-teal-400 after:text-9xl after:-ml-2 after:font-[geist-mono]"
        >
          webqid
        </motion.h1>

        <motion.p
          className="mt-6 text-lg text-zinc-400 font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Built with intent.
        </motion.p>
      </section>

      {/* Content */}
      <section className="h-[100vh] flex flex-col justify-center items-center space-y-8 text-center px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-semibold"
        >
          Precision-built frontend & Web3 systems
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-zinc-400 max-w-2xl font-light leading-relaxed"
        >
          Turning on-chain complexity into fast, elegant, and dependable user interfaces.
          Engineered with care — designed for trust.
        </motion.p>
      </section>
    </div>
  );
}
