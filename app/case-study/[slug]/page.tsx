// Static params for Next.js 16+
export { default as generateStaticParams } from "./generateStaticParams";
import { getCaseStudy } from "@/lib/case-studies";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

type PageParams = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Case Study Not Found" };

  return {
    title: `${cs.title} — Web3 Frontend by webqid`,
    description: cs.tagline,
    openGraph: {
      title: `${cs.title} — Web3 Frontend Case Study`,
      description: cs.tagline,
      url: `https://www.webqid.com/case-study/${slug}`,
      images: cs.screenshots?.[0] ? [{ url: cs.screenshots[0] }] : undefined,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return notFound();

  // Structured data for case study
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: cs.title,
    description: cs.tagline,
    creator: { "@type": "Organization", name: "webqid" },
    url: `https://www.webqid.com/case-study/${slug}`,
    image: cs.screenshots?.[0],
    dateCreated: cs.period.split("–")[0],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.webqid.com" },
      { "@type": "ListItem", position: 2, name: "Work", item: "https://www.webqid.com/work" },
      { "@type": "ListItem", position: 3, name: cs.title, item: `https://www.webqid.com/case-study/${slug}` },
    ],
  };

  return (
    <>
      <StructuredData data={caseStudySchema} />
      <StructuredData data={breadcrumbSchema} />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative">
          {/* Hero Image */}
          <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
            {cs.screenshots?.[0] ? (
              <Image
                src={cs.screenshots[0]}
                alt={`${cs.title} interface`}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-linear-to-br from-neutral-900 to-neutral-800" />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/30" />
          </div>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container mx-auto px-4 pb-12">
              {/* Breadcrumb */}
              <nav className="mb-6" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-sm text-neutral-400">
                  <li>
                    <Link href="/" className="hover:text-teal-400 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link href="/work" className="hover:text-teal-400 transition-colors">
                      Work
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="text-neutral-200">{cs.title}</li>
                </ol>
              </nav>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {cs.title}
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-4 max-w-2xl">
                {cs.tagline}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="text-teal-400 font-mono">{cs.description}</span>
                <span className="text-neutral-600">•</span>
                <span className="text-neutral-400">{cs.period}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        {cs.metrics && cs.metrics.length > 0 && (
          <section className="border-b border-neutral-800 bg-neutral-950/50">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {cs.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-teal-400">
                      {metric.value}
                    </div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* The Challenge */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
              <span className="text-teal-500 font-mono text-lg">01.</span>
              The Challenge
            </h2>
            <p className="text-neutral-300 leading-relaxed text-lg">
              {cs.challenge}
            </p>
          </section>

          {/* My Role */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
              <span className="text-teal-500 font-mono text-lg">02.</span>
              My Role
            </h2>
            <p className="text-neutral-300 leading-relaxed text-lg">
              {cs.myRole}
            </p>

            {/* Deliverables */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-neutral-200 mb-4">
                Deliverables
              </h3>
              <ul className="grid gap-3">
                {cs.deliverables.map((deliverable, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-neutral-400"
                  >
                    <span className="text-teal-500 mt-1">→</span>
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Technical Approach */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
              <span className="text-teal-500 font-mono text-lg">03.</span>
              Technical Approach
            </h2>
            <div className="space-y-8">
              {cs.technical.map((item, i) => (
                <div
                  key={i}
                  className="border-l-2 border-neutral-800 pl-6 hover:border-teal-500/50 transition-colors"
                >
                  <h3 className="text-lg font-medium text-white mb-2">
                    {item.decision}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {item.rationale}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Outcome */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
              <span className="text-teal-500 font-mono text-lg">04.</span>
              Outcome
            </h2>
            <p className="text-neutral-300 leading-relaxed text-lg">
              {cs.outcome}
            </p>
          </section>

          {/* Gallery */}
          {cs.screenshots && cs.screenshots.length > 1 && (
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-white">
                Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cs.screenshots.slice(1).map((src, i) => (
                  <div
                    key={i}
                    className="relative aspect-video rounded-xl overflow-hidden border border-neutral-800"
                  >
                    <Image
                      src={src}
                      alt={`${cs.title} screenshot ${i + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tech Stack */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-white">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {cs.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-neutral-800 text-teal-400 text-sm px-4 py-2 rounded-full font-mono border border-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* External Links */}
          {cs.links.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-white">
                Live Project
              </h2>
              <div className="flex flex-wrap gap-4">
                {cs.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500/10 border border-teal-500/20 rounded-xl text-teal-400 hover:bg-teal-500/20 transition font-medium"
                  >
                    {link.label}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Navigation */}
          <section className="border-t border-neutral-800 pt-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <Link
                href="/work"
                className="text-neutral-400 hover:text-teal-400 transition-colors flex items-center gap-2"
              >
                <span>←</span>
                <span>All projects</span>
              </Link>
              <Link
                href="/#contact"
                className="px-6 py-3 bg-teal-500/10 border border-teal-500/20 rounded-xl text-teal-400 hover:bg-teal-500/20 transition font-medium"
              >
                Start a conversation
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
