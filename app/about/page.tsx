"use client";

import PayOff from "@/components/PayOff";

/** About page content paragraphs */
const PARAGRAPHS = [
  "webqid. is a studio built on calm precision. We turn complex, on-chain systems into fast, human-centered interfaces, engineered for trust and performance.",
  "Our work blends the rigor of software engineering with the clarity of design. From dApps and staking dashboards to wallet integrations and token systems, every build is intentional, reliable, and ready to scale.",
  "Founded by engineers who believe that technology should feel effortless, webqid. bridges the gap between Web2 familiarity and Web3 innovation. We don't chase trends, we build foundations.",
] as const;

/**
 * About page describing the webqid studio.
 */
export default function AboutPage(): React.JSX.Element {
  return (
    <div className="container py-24 md:py-32 px-4">
      <section
        aria-labelledby="about-title"
        className="max-w-3xl mx-auto space-y-8 text-center"
      >
        <h1
          id="about-title"
          className="text-5xl md:text-6xl font-semibold tracking-tight after:content-['.'] after:text-teal-500 after:ml-1 after:font-[geist-mono]"
        >
          about
        </h1>

        {PARAGRAPHS.map((text) => (
          <p
            key={text.slice(0, 20)}
            className="text-neutral-400 font-light leading-relaxed"
          >
            {text}
          </p>
        ))}
      </section>

      <PayOff />
    </div>
  );
}
