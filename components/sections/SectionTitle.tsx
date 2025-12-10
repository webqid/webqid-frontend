"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type SectionTitleProps = {
  children: ReactNode;
};

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-4xl font-medium after:content-['.'] after:text-teal-500 after:font-[geist-mono] after:text-5xl"
    >
      {children}
    </motion.h2>
  );
}
