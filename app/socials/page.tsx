"use client";

import { motion } from "motion/react";

/**
 * Animated splash page for social media presence.
 */
export default function SocialsPage(): React.JSX.Element {
  return (
    <div
      role="main"
      aria-label="webqid social splash"
      className="h-screen flex flex-col items-center justify-center bg-[#0A0A0A] text-[#EDEDED] font-[geist-sans]"
    >
      {/* Scene 1 — dot fade-in */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-[#00E0B8] text-6xl mb-4"
        aria-hidden="true"
      >
        •
      </motion.div>

      {/* Scene 2 — text reveal */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-semibold tracking-tight"
      >
        webqid<span className="text-[#00E0B8]">.</span>
      </motion.h1>

      {/* Scene 3 — tagline fade-in */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="mt-6 text-neutral-500 font-[geist-mono] text-sm"
      >
        Precision-built Web3 frontends.
      </motion.p>
    </div>
  );
}
