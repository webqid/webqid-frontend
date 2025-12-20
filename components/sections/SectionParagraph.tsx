"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionParagraphProps {
  /** Paragraph content */
  readonly children: ReactNode;
  /** Additional CSS classes */
  readonly className?: string;
  /** Animation delay in seconds */
  readonly delay?: number;
}

/**
 * Animated paragraph with consistent styling for section content.
 */
export function SectionParagraph({
  children,
  className,
  delay = 0.1,
}: SectionParagraphProps): React.JSX.Element {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={cn(
        "text-neutral-400 font-light leading-relaxed tracking-wide",
        className
      )}
    >
      {children}
    </motion.p>
  );
}
