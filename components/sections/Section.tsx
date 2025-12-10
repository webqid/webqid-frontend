"use client";

import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  withTopBorder?: boolean;
};

export function Section({
  id,
  children,
  className = "",
  withTopBorder = true
}: SectionProps) {
  const base = "py-24 overflow-hidden";
  const border = withTopBorder ? "border-t border-neutral-800/50" : "";
  const classes = [base, border, className].filter(Boolean).join(" ");

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}
