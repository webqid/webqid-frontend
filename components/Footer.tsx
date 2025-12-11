import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Footer"
      className="border-t border-neutral-800 bg-[#000000]/20 text-sm text-neutral-400"
    >
      <div className="container py-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
        
        {/* Logo */}
        <div className="col-span-2 p-0 relative row-span-2 md:row-span-1 sm:col-span-1">
          <Link
            href="/"
            className="absolute -top-3 text-2xl font-medium text-neutral-200 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
          >
            webqid<span className="text-teal-500 font-serif">.</span>
          </Link>
        </div>

        {/* Expertise */}
        <div aria-labelledby="footer-expertise">
          <h3 id="footer-expertise" className="text-neutral-200 mb-4">
            Expertise
          </h3>
          <ul className="space-y-2 text-neutral-300">
            <li>
              <Link
                href="/frontend-engineering"
                className="focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
              >
                Frontend Engineering
              </Link>
            </li>
            <li>
              <Link
                href="/web3-integration"
                className="focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
              >
                Web3 Integration
              </Link>
            </li>
            <li>
              <Link
                href="/dapp-development"
                className="focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
              >
                dApp Development
              </Link>
            </li>
          </ul>
        </div>

        {/* Studio */}
        <div aria-labelledby="footer-studio">
          <h3 id="footer-studio" className="text-neutral-200 mb-3">
            Studio
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/collaborations"
                className="focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
              >
                Collaborations
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div aria-labelledby="footer-connect">
          <h3 id="footer-connect" className="text-neutral-200 mb-4">
            Connect
          </h3>
          <ul className="space-y-2 flex flex-row gap-4 md:gap-2">
            <li>
              <a
                href="https://x.com/webqid"
                aria-label="webqid on X"
                target="_blank"
                rel="noopener noreferrer"
                className="focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
              >
                <Image
                  src="/icons/logo-x.svg"
                  alt=""
                  aria-hidden="true"
                  width={16}
                  height={16}
                  className="inline-block"
                />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/webqid"
                aria-label="webqid on GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
              >
                <Image
                  src="/icons/logo-github.svg"
                  alt=""
                  aria-hidden="true"
                  width={16}
                  height={16}
                  className="inline-block"
                />
              </a>
            </li>

            <li>
              <a
                href="https://linkedin.com/company/webqid"
                aria-label="webqid on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
              >
                <Image
                  src="/icons/logo-linkedin.svg"
                  alt=""
                  aria-hidden="true"
                  width={16}
                  height={16}
                  className="inline-block"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}