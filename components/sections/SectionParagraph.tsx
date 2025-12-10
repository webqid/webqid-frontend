"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type SectionParagraphProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function SectionParagraph({
  children,
  className = "",
  delay = 0.1
}: SectionParagraphProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`text-neutral-400 font-light leading-relaxed tracking-wide ${className}`}
    >
      {children}
    </motion.p>
  );
}
