"use client";

import { motion } from "motion/react";

type ExpertiseSliderProps = {
  label: string;
  description: string;
  level: number;
  delay?: number;
};

export function ExpertiseSlider({
  label,
  description,
  level,
  delay = 0
}: ExpertiseSliderProps) {
  const clampedLevel = Math.min(100, Math.max(0, level));

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="space-y-3"
    >
      <div className="flex flex-col gap-1">
        <span className="text-neutral-100 font-medium text-sm tracking-wide">
          {label}
        </span>
        <span className="text-neutral-500 text-xs font-light leading-relaxed">
          {description}
        </span>
      </div>

      <div
        role="meter"
        aria-label={`${label} experience level`}
        aria-valuenow={clampedLevel}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        className="relative h-1.5 w-full rounded-full bg-neutral-800/80 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-teal-600/80 to-teal-400/90"
          initial={{ width: 0 }}
          whileInView={{ width: `${clampedLevel}%` }}
          transition={{
            delay: delay + 0.2,
            duration: 0.8,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
          style={{
            willChange: "width"
          }}
        />
      </div>

      <span className="sr-only">
        Depth: {clampedLevel} out of 100
      </span>
    </motion.div>
  );
}
