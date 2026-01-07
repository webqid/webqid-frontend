import Link from "next/link";
import Image from "next/image";

/** Footer navigation link */
interface FooterLink {
  readonly label: string;
  readonly href: string;
}

/** Social link with icon */
interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: string;
}

const WORK_LINKS: readonly FooterLink[] = [
  { label: "All Projects", href: "/work" },
  { label: "AITA Protocol", href: "/case-study/aita-protocol" },
  { label: "Neby Exchange", href: "/case-study/neby-exchange" },
  { label: "Paladin Punks", href: "/case-study/paladin-punks" },
] as const;

const SERVICES_LINKS: readonly FooterLink[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Web3 Integration", href: "/web3-integration" },
  { label: "dApp Development", href: "/dapp-development" },
] as const;

const STUDIO_LINKS: readonly FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/contact" },
] as const;

const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: "webqid on X", href: "https://x.com/webqid", icon: "logo-x.svg" },
  {
    label: "webqid on GitHub",
    href: "https://github.com/webqid",
    icon: "logo-github.svg",
  },
  {
    label: "webqid on LinkedIn",
    href: "https://linkedin.com/company/webqid",
    icon: "logo-linkedin.svg",
  },
] as const;

/**
 * Site footer with navigation and social links.
 */
export default function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-neutral-800 bg-[#000000]/20 text-sm text-neutral-400"
    >
      <div className="container py-16 px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
        {/* Logo */}
        <div className="col-span-2 p-0 relative row-span-2 md:row-span-1 sm:col-span-1">
          <Link
            href="/"
            className="absolute -top-3 text-2xl font-medium text-neutral-200 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
          >
            webqid<span className="text-teal-500 font-serif">.</span>
          </Link>
        </div>

        {/* Work */}
        {/* <nav aria-labelledby="footer-work">
          <h3 id="footer-work" className="text-neutral-200 mb-4">
            Work
          </h3>
          <ul className="space-y-2 text-neutral-300">
            {WORK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav> */}

        {/* Services */}
        {/* <nav aria-labelledby="footer-services">
          <h3 id="footer-services" className="text-neutral-200 mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-neutral-300">
            {SERVICES_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav> */}

        {/* Studio */}
        {/* <nav aria-labelledby="footer-studio">
          <h3 id="footer-studio" className="text-neutral-200 mb-3">
            Studio
          </h3>
          <ul className="space-y-2">
            {STUDIO_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav> */}

        {/* Connect */}
        {/* <div aria-labelledby="footer-connect">
          <h3 id="footer-connect" className="text-neutral-200 mb-4">
            Connect
          </h3>
          <ul className="space-y-2 flex flex-row gap-4 md:gap-2">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
                >
                  <Image
                    src={`/icons/${link.icon}`}
                    alt=""
                    aria-hidden="true"
                    width={16}
                    height={16}
                    className="inline-block"
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <a
              href="mailto:hello@webqid.com"
              className="text-neutral-400 hover:text-teal-400 transition-colors"
            >
              hello@webqid.com
            </a>
          </div>
        </div> */}
      </div>

      {/* Copyright */}
      <div className="border-t border-neutral-800/50">
        <div className="container px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-xs">
          <p>© {currentYear} webqid. All rights reserved.</p>
          {/* <p>Based in Netherlands, working globally.</p> */}
        </div>
      </div>
    </footer>
  );
}
