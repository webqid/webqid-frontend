import type { Metadata } from "next";
import PayOff from "@/components/PayOff";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Contact webqid — Start a Web3 Project",
  description: "Get in touch to discuss your Web3 frontend project. DeFi, NFT, trading platforms. Based in Netherlands, working globally.",
  openGraph: {
    title: "Contact webqid — Start a Web3 Project",
    description: "Get in touch to discuss your Web3 frontend project.",
    url: "https://www.webqid.com/contact",
  },
};

/**
 * Contact page with direct email link, booking link, and inquiry form.
 */
export default function ContactPage(): React.JSX.Element {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact webqid",
    url: "https://www.webqid.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "webqid",
      email: "hello@webqid.com",
      url: "https://www.webqid.com",
    },
  };

  return (
    <>
      <StructuredData data={contactSchema} />
      <div className="container py-24 md:py-32 px-4">
      <section
        aria-labelledby="contact-title"
        className="max-w-2xl mx-auto text-center space-y-8"
      >
        <h1
          id="contact-title"
          className="text-5xl md:text-6xl font-semibold tracking-tight after:content-['.'] after:text-teal-500 after:ml-1 after:font-[geist-mono]"
        >
          contact
        </h1>

        <div className="flex flex-col gap-4 items-center justify-center">
          <a
            href="mailto:hello@webqid.com"
            className="inline-block px-6 py-3 bg-teal-500/10 border border-teal-500/20 rounded-xl text-teal-400 hover:bg-teal-500/20 transition font-sans tracking-tight text-lg font-medium"
          >
            Start a conversation
          </a>
          <a
            href="https://cal.com/webqid/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-neutral-700 rounded-xl text-neutral-200 hover:bg-neutral-900 transition font-sans tracking-tight text-lg font-medium"
          >
            Book a technical discussion
          </a>
        </div>

        <div className="mt-6 text-neutral-400 text-base font-light">
          We work with Web3 teams building production dApps.<br />
          <span className="text-neutral-500 text-sm">Ideal projects: $30k+ budget, 8-12 week timelines, technical founders.</span>
        </div>

        {/* Simple project inquiry form (optional) */}
        <form className="mt-10 space-y-4 max-w-xl mx-auto text-left" method="POST" action="#">
          <div>
            <label htmlFor="projectType" className="block text-neutral-300 mb-1">Project type</label>
            <select id="projectType" name="projectType" className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-neutral-200">
              <option>Staking/DeFi</option>
              <option>NFT/Minting</option>
              <option>Trading</option>
              <option>Other dApp</option>
            </select>
          </div>
          <div>
            <label htmlFor="timeline" className="block text-neutral-300 mb-1">Timeline</label>
            <select id="timeline" name="timeline" className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-neutral-200">
              <option>4-8 weeks</option>
              <option>8-12 weeks</option>
              <option>3+ months</option>
              <option>Ongoing</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="block text-neutral-300 mb-1">Budget range</label>
            <select id="budget" name="budget" className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-neutral-200">
              <option>$30-50k</option>
              <option>$50-100k</option>
              <option>$100k+</option>
              <option>Let's discuss</option>
            </select>
          </div>
          <div>
            <label htmlFor="description" className="block text-neutral-300 mb-1">Brief description</label>
            <textarea id="description" name="description" rows={3} className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-neutral-200" />
          </div>
          <div>
            <label htmlFor="contact" className="block text-neutral-300 mb-1">Contact details</label>
            <input id="contact" name="contact" type="text" className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-neutral-200" />
          </div>
          <button type="submit" className="w-full mt-4 px-6 py-3 bg-teal-500/10 border border-teal-500/20 rounded-xl text-teal-400 hover:bg-teal-500/20 transition font-sans tracking-tight text-lg font-medium">Submit inquiry</button>
        </form>

        <p className="text-neutral-400 text-sm font-light mt-8">
          Expect a calm, thoughtful reply—no automation, just intent.
        </p>
      </section>

      <PayOff />
    </div>
    </>
  );
}
