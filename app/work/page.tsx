import { CASE_STUDIES, getFeaturedCaseStudy, getSecondaryProjects } from "@/lib/case-studies";
import Link from "next/link";
import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { CaseStudyCard } from "@/components/case-study/CaseStudyCard";

export const metadata: Metadata = {
  title: "Web3 dApps We've Built | webqid Case Studies",
  description:
    "Explore case studies from webqid: DeFi staking dashboards, decentralized exchanges, NFT platforms. Built with Next.js, TypeScript, Wagmi.",
  openGraph: {
    title: "Web3 dApps We've Built | webqid Case Studies",
    description:
      "Explore case studies from webqid: DeFi staking dashboards, decentralized exchanges, NFT platforms.",
    url: "https://www.webqid.com/work",
  },
};

export default function WorkPage() {
  const featured = getFeaturedCaseStudy();
  const secondary = getSecondaryProjects();

  // Structured data for portfolio
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "webqid Portfolio",
    description: "Web3 frontend projects built by webqid",
    url: "https://www.webqid.com/work",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: CASE_STUDIES.map((cs, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: cs.title,
          url: `https://www.webqid.com/case-study/${cs.slug}`,
          description: cs.tagline,
        },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.webqid.com" },
      { "@type": "ListItem", position: 2, name: "Work", item: "https://www.webqid.com/work" },
    ],
  };

  return (
    <>
      <StructuredData data={portfolioSchema} />
      <StructuredData data={breadcrumbSchema} />

      <main className="min-h-screen">
        {/* Header */}
        <section className="container mx-auto pt-24 pb-16 px-4">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-neutral-400">
              <li>
                <Link href="/" className="hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-neutral-200">Work</li>
            </ol>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Work<span className="text-teal-500 font-serif">.</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
            Production Web3 frontends for DeFi protocols, decentralized
            exchanges, and NFT platforms. Each project built with
            precision—architected for security, optimized for performance.
          </p>
        </section>

        {/* Featured Project */}
        {featured && (
          <section className="container mx-auto px-4 mb-16">
            <div className="mb-8">
              <span className="text-teal-400 font-mono text-sm uppercase tracking-wider">
                Featured Project
              </span>
            </div>
            <CaseStudyCard caseStudy={featured} featured index={0} />
          </section>
        )}

        {/* Secondary Projects */}
        {secondary.length > 0 && (
          <section className="container mx-auto px-4 pb-24">
            <div className="mb-8">
              <span className="text-neutral-400 font-mono text-sm uppercase tracking-wider">
                More Projects
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {secondary.map((cs, i) => (
                <CaseStudyCard key={cs.slug} caseStudy={cs} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="border-t border-neutral-800">
          <div className="container mx-auto px-4 py-24 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Ready to build?
            </h2>
            <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
              We partner with Web3 teams building production dApps. 
              Let&apos;s discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="mailto:hello@webqid.com"
                className="px-6 py-3 bg-teal-500/10 border border-teal-500/20 rounded-xl text-teal-400 hover:bg-teal-500/20 transition font-medium"
              >
                Start a conversation
              </Link>
              <Link
                href="https://cal.com/webqid/intro"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-neutral-700 rounded-xl text-neutral-200 hover:bg-neutral-900 transition font-medium"
              >
                Book a technical discussion
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
