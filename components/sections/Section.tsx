"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  /** Unique section identifier for navigation */
  readonly id: string;
  /** Section content */
  readonly children: ReactNode;
  /** Additional CSS classes */
  readonly className?: string;
  /** Whether to show top border */
  readonly withTopBorder?: boolean;
  /** Optional aria-labelledby for accessibility */
  readonly "aria-labelledby"?: string;
}

/**
 * Semantic section component with consistent spacing and optional border.
 */
export function Section({
  id,
  children,
  className,
  withTopBorder = true,
  "aria-labelledby": ariaLabelledby,
}: SectionProps): React.JSX.Element {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "py-24 overflow-hidden",
        withTopBorder && "border-t border-neutral-800/50",
        className
      )}
    >
      {children}
    </section>
  );
}
