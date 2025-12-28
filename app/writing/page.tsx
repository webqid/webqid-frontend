import Link from "next/link";
import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Writing — Web3 Frontend Insights | webqid",
  description: "Technical deep-dives, engineering notes, and Web3 frontend insights from webqid.",
  openGraph: {
    title: "Writing — Web3 Frontend Insights | webqid",
    description: "Technical deep-dives, engineering notes, and Web3 frontend insights.",
    url: "https://www.webqid.com/writing",
  },
};

export default function WritingPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "webqid Writing",
    description: "Technical deep-dives, engineering notes, and Web3 frontend insights from webqid.",
    url: "https://www.webqid.com/writing",
    publisher: {
      "@type": "Organization",
      name: "webqid",
      url: "https://www.webqid.com",
    },
  };

  return (
    <>
      <StructuredData data={blogSchema} />
      <main className="container mx-auto py-24 px-4 text-center min-h-[70vh] flex flex-col items-center justify-center">
        <span className="text-teal-400 font-mono text-sm uppercase tracking-wider mb-4">
          Coming Soon
        </span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Writing<span className="text-teal-500 font-serif">.</span>
        </h1>
        <p className="text-neutral-400 text-lg mb-8 max-w-xl">
          Technical deep-dives, engineering notes, and Web3 frontend insights.
          In-depth case studies, architecture decisions, and lessons from production.
        </p>
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 max-w-xl">
          <h2 className="text-xl font-semibold mb-3 text-white">
            What to expect
          </h2>
          <ul className="text-neutral-400 text-left space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-teal-500 mt-1">→</span>
              <span>Deep technical case studies on production Web3 frontends</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-500 mt-1">→</span>
              <span>Architecture decisions and trade-offs explained</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-500 mt-1">→</span>
              <span>Wagmi, Viem, and Web3 integration patterns</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-500 mt-1">→</span>
              <span>Performance optimization for dApps</span>
            </li>
          </ul>
          <Link
            href="/work"
            className="text-teal-400 hover:text-teal-300 font-medium inline-flex items-center gap-2"
          >
            <span>See our work in the meantime</span>
            <span>→</span>
          </Link>
        </div>
      </main>
    </>
  );
}
