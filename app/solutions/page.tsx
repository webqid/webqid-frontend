import type { Metadata } from "next";
import Link from "next/link";
import { SOLUTIONS } from "@/content/solutions";
import { SolutionCard } from "@/components/sections";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Web3 Frontend Development Services | Staking, Trading, NFT dApps",
  description: "Web3 frontend engineering services: DeFi dashboards, trading interfaces, NFT platforms, wallet integrations. Next.js, TypeScript, Wagmi.",
  openGraph: {
    title: "Web3 Frontend Development Services | webqid",
    description: "Web3 frontend engineering: DeFi dashboards, trading interfaces, NFT platforms.",
    url: "https://www.webqid.com/solutions",
  },
};

export default function SolutionsPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web3 Frontend Development",
    provider: {
      "@type": "Organization",
      name: "webqid",
      url: "https://www.webqid.com",
    },
    description: "Production-grade Web3 frontend development for DeFi, NFT, and trading platforms.",
    serviceType: "Web Development",
    areaServed: "Worldwide",
  };

  return (
    <>
      <StructuredData data={servicesSchema} />
      <main className="container mx-auto py-24 px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-teal-400 font-mono text-sm uppercase tracking-wider mb-4 block">
            What We Build
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Solutions<span className="text-teal-500 font-serif">.</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Production-grade Web3 frontends for teams building serious dApps.
            Every project is engineered for trust, scalability, and performance.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SOLUTIONS.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              index={index}
              title={solution.title}
              desc={solution.desc}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-neutral-800 pt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to build?</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
            We partner with Web3 teams building production dApps. 
            Let&apos;s discuss your project requirements.
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
