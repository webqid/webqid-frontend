import type { Easing } from "motion/react";

/**
 * Canonical easings for the app
 * Typed and reusable
 */
export const easings = {
  easeOut: [0.16, 1, 0.3, 1] as Easing,
  easeIn: [0.7, 0, 0.84, 0] as Easing,
  easeInOut: [0.65, 0, 0.35, 1] as Easing,
} as const;
