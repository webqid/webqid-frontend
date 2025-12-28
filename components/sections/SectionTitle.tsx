"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  /** Title content */
  readonly children: ReactNode;
  /** Optional id for aria-labelledby linking */
  readonly id?: string;
  /** Additional CSS classes */
  readonly className?: string;
}

/**
 * Animated section heading with decorative period.
 * Uses h1 for proper document outline.
 */
export function SectionTitle({
  children,
  id,
  className,
}: SectionTitleProps): React.JSX.Element {
  return (
    <motion.h1
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={cn(
        "text-4xl font-medium",
        "after:content-['.'] after:text-teal-500 after:font-[geist-mono] after:text-5xl",
        className
      )}
    >
      {children}
    </motion.h1>
  );
}
