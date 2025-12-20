"use client";

import { motion } from "motion/react";
import { clamp } from "@/lib/utils";

interface ExpertiseSliderProps {
  /** Skill or expertise label */
  readonly label: string;
  /** Description of the skill */
  readonly description: string;
  /** Expertise level from 0-100 */
  readonly level: number;
  /** Animation delay in seconds */
  readonly delay?: number;
}

/**
 * Accessible expertise/skill level indicator with animated progress bar.
 * Uses ARIA meter role for screen reader support.
 */
export function ExpertiseSlider({
  label,
  description,
  level,
  delay = 0,
}: ExpertiseSliderProps): React.JSX.Element {
  const clampedLevel = clamp(level, 0, 100);
  const meterId = `meter-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="space-y-3"
    >
      <div className="flex flex-col gap-1">
        <label
          id={`${meterId}-label`}
          className="text-neutral-100 font-medium text-sm tracking-wide"
        >
          {label}
        </label>
        <span
          id={`${meterId}-desc`}
          className="text-neutral-500 text-xs font-light leading-relaxed"
        >
          {description}
        </span>
      </div>

      <div
        role="meter"
        aria-labelledby={`${meterId}-label`}
        aria-describedby={`${meterId}-desc`}
        aria-valuenow={clampedLevel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuetext={`${clampedLevel}% proficiency`}
        className="relative h-1.5 w-full rounded-full bg-neutral-800/80 overflow-hidden"
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-teal-600/80 to-teal-400/90"
          initial={{ width: 0 }}
          whileInView={{ width: `${clampedLevel}%` }}
          transition={{
            delay: delay + 0.2,
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
}
