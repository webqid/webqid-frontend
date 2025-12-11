"use client";

import { motion } from "motion/react";

type SolutionCardProps = {
  title: string;
  desc: string;
  index: number;
};

export function SolutionCard({ title, desc, index }: SolutionCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 text-left space-y-2 hover:border-teal-500/40 transition-colors"
      data-testid="solution-card"
    >
      <h3 className="text-lg font-medium text-neutral-200 tracking-tight">
        {title}
      </h3>

      <p className="text-neutral-400 text-sm leading-relaxed tracking-wide">
        {desc}
      </p>
    </motion.article>
  );
}
