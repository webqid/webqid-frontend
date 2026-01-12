import { useReducedMotion } from "motion/react";
import { easings } from "@/lib/motion";

export function useFadeUp(delay = 0) {
  const reduceMotion = useReducedMotion();

  return {
    initial: { opacity: 0, y: reduceMotion ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay,
      duration: reduceMotion ? 0 : 0.6,
      ease: easings.easeOut,
    },
  } as const;
}
