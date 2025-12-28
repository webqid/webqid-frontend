import type { Metadata } from "next";
import Link from "next/link";
import { SectionParagraph } from "@/components/sections";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "About webqid — Senior Web3 Frontend Engineering",
  description: "20+ years software development, 5+ years Web3. Precision-built frontends for DeFi protocols, NFT projects, and trading platforms.",
  openGraph: {
    title: "About webqid — Senior Web3 Frontend Engineering",
    description: "20+ years software development, 5+ years Web3. Precision-built Web3 frontends.",
    url: "https://www.webqid.com/studio",
  },
};

export default function StudioPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "webqid",
    url: "https://www.webqid.com",
    description: "Senior Web3 frontend engineering studio based in the Netherlands.",
    founder: {
      "@type": "Person",
      jobTitle: "Senior Web3 Frontend Engineer",
      knowsAbout: ["Web3", "DeFi", "Next.js", "TypeScript", "React", "Wagmi"],
    },
    areaServed: "Worldwide",
    foundingLocation: {
      "@type": "Place",
      name: "Netherlands",
    },
  };

  return (
    <>
      <StructuredData data={personSchema} />
      <main className="container mx-auto py-24 px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-teal-400 font-mono text-sm uppercase tracking-wider mb-4 block">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Studio<span className="text-teal-500 font-serif">.</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            A senior Web3 frontend engineering studio built on calm precision.
            We build fewer things, but better.
          </p>
        </div>

        {/* About Content */}
        <div className="max-w-3xl mx-auto space-y-8 mb-16">
          <SectionParagraph>
            webqid is a senior Web3 frontend engineering studio based in the
            Netherlands, working globally. We build production-grade dApps for
            protocols, DAOs, and technical founders who value engineering
            quality.
          </SectionParagraph>

          <SectionParagraph>
            Our approach blends the rigor of software engineering with the
            clarity of design. From staking dashboards and token systems to
            wallet integrations and NFT marketplaces, every build is
            intentional, reliable, and ready to scale.
          </SectionParagraph>

          <SectionParagraph>
            We don&apos;t chase trends. We build foundations. Technology should
            feel effortless—refined, quiet, and precise.
          </SectionParagraph>
        </div>

        {/* Credentials */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="grid sm:grid-cols-3 gap-8 border-y border-neutral-800 py-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">20+</div>
              <div className="text-neutral-500 text-sm">Years in software development</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">5+</div>
              <div className="text-neutral-500 text-sm">Years in Web3</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">NL</div>
              <div className="text-neutral-500 text-sm">Based, working globally</div>
            </div>
          </div>
        </div>

        {/* Background */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-6">Background</h2>
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <p>
              Before Web3, two decades of software engineering across enterprise
              systems, startups, and technical consulting. Full-stack background
              with .NET, C#, SQL—then a deliberate shift to frontend
              specialization and Web3.
            </p>
            <p>
              Previous experience as a technical founder. Understanding of both
              building products and building teams. This shapes how we approach
              client work: with an ownership mindset, not just execution.
            </p>
            <p>
              Today, focused exclusively on Web3 frontend engineering. The stack
              is deliberate: Next.js, TypeScript, Wagmi, Viem. Modern patterns,
              type safety, and production reliability.
            </p>
          </div>
        </div>

        {/* How We Work */}
        <div className="max-w-3xl mx-auto bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-4">How we work</h2>
          <div className="space-y-4 text-neutral-400">
            <p>
              Every detail is deliberate, from architecture to code. We start
              with understanding—your protocol, your users, your constraints.
            </p>
            <p>
              Direct communication, no project managers in between. You work
              with the engineer who builds your product.
            </p>
            <p>
              Ideal engagements: 8-12 week projects, \$30k+ budget, technical
              founders who understand the value of quality engineering.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to build?</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
            Let&apos;s discuss your project. No sales calls—just a technical
            conversation about what you&apos;re building.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="mailto:hello@webqid.com"
              className="px-6 py-3 bg-teal-500/10 border border-teal-500/20 rounded-xl text-teal-400 hover:bg-teal-500/20 transition font-medium"
            >
              Start a conversation
            </Link>
            <Link
              href="/work"
              className="px-6 py-3 border border-neutral-700 rounded-xl text-neutral-200 hover:bg-neutral-900 transition font-medium"
            >
              See our work
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
