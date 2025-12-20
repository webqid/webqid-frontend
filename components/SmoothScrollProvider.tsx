"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { prefersReducedMotion } from "@/lib/utils";

/**
 * Provides smooth scrolling behavior using Lenis.
 * Respects user's reduced motion preference.
 */
export function SmoothScrollProvider(): null {
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Skip smooth scrolling if user prefers reduced motion
    if (prefersReducedMotion()) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.3,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number): void {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    }

    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      lenis.destroy();
    };
  }, []);

  return null;
}
