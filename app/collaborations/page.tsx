"use client";

import { motion, type Variants } from "motion/react";
import { Separator } from "@/components/ui/separator";

/** Animation variants for initial mount */
const baseVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/** Animation variants for in-view triggers */
const inViewVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/** Collaboration card data */
interface CollaborationCard {
  readonly title: string;
  readonly body: string;
}

const COLLABORATION_CARDS: readonly CollaborationCard[] = [
  {
    title: "Design Studios",
    body: "We translate visual systems into performant, precise frontends. Shared Figma-to-code workflows, pixel-accurate delivery.",
  },
  {
    title: "Motion Artists",
    body: "Subtle transitions, cinematic flow, crafted with Motion or GSAP. Movement that feels inevitable, never loud.",
  },
  {
    title: "Creative Developers",
    body: "Open-source tools, experimental prototypes, or shared R&D. We enjoy pushing boundaries quietly and precisely.",
  },
] as const;

/**
 * Styled separator component for visual breaks.
 */
function SectionSeparator({
  className = "",
}: {
  readonly className?: string;
}): React.JSX.Element {
  return (
    <Separator className={`my-24 bg-neutral-800/70 ${className}`} />
  );
}

/**
 * Collaborations page showcasing partnership opportunities.
 */
export default function CollaborationsPage(): React.JSX.Element {
  return (
    <div className="container py-28 md:py-36 text-neutral-300 font-[geist-sans] antialiased px-4">
      {/* ─── Intro ───────────────────────────────────────────── */}
      <section aria-labelledby="collaborations-title" className="text-center space-y-6">
        <motion.h1
          id="collaborations-title"
          variants={baseVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-medium tracking-tight after:content-['.'] after:text-teal-500 after:ml-1 after:font-[geist-mono]"
        >
          collaborations
        </motion.h1>

        <motion.p
          variants={baseVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto"
        >
          webqid. collaborates with design studios, motion artists, and creative
          developers who share a mindset of precision and calm execution. If
          your craft aligns with ours, let&apos;s explore what we can build
          together.
        </motion.p>

        <motion.p
          variants={baseVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-sm text-center text-neutral-500 tracking-wide"
        >
          collaboration is craft, not coincidence.
        </motion.p>
      </section>

      <SectionSeparator />

      {/* ─── Collaboration Types ───────────────────────────── */}
      <section
        aria-labelledby="who-we-build-with-title"
        className="max-w-5xl mx-auto space-y-12"
      >
        <div className="text-center space-y-3">
          <h2
            id="who-we-build-with-title"
            className="text-2xl font-medium tracking-tight after:content-['.'] after:text-teal-500 after:text-3xl after:font-[geist-mono]"
          >
            who we build with
          </h2>
          <p className="text-sm text-center text-neutral-500 tracking-wide">
            intentional collaborations across design, motion, and code.
          </p>
        </div>

        <motion.div
          variants={inViewVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {COLLABORATION_CARDS.map(({ title, body }) => (
            <article
              key={title}
              className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 text-left space-y-2 hover:border-teal-500/40 focus-within:border-teal-500/40 transition-colors"
            >
              <h3 className="text-neutral-100 text-lg font-medium tracking-tight">
                {title}
              </h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                {body}
              </p>
            </article>
          ))}
        </motion.div>
      </section>

      <SectionSeparator />

      {/* ─── Philosophy ───────────────────────────── */}
      <section className="max-w-3xl mx-auto text-center space-y-8">
        <motion.p
          variants={inViewVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-neutral-400 font-light leading-relaxed"
        >
          Collaboration at webqid. means sharing intent, not just workload. We
          value calm precision, honest pace, and the craft of clarity. No forms,
          no noise, just shared focus and respect for detail.
        </motion.p>
      </section>

      <SectionSeparator />

      {/* ─── Call To Connect ───────────────────────────── */}
      <motion.div
        variants={inViewVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center space-y-4 font-sans"
      >
        <p className="text-neutral-400">
          if this feels aligned —{" "}
          <a
            href="mailto:hello@webqid.com"
            className="text-teal-400 hover:text-teal-300 underline underline-offset-4 transition-colors"
          >
            hello@webqid.com
          </a>
        </p>
      </motion.div>
    </div>
  );
}
