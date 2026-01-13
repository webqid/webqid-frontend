import Link from "next/link";


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
            @jcvandeweerd<span className="text-teal-500 font-serif">.</span>
          </Link>
        </div>

       
      </div>

      {/* Copyright */}
      <div className="border-t border-neutral-800/50">
        <div className="container px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-xs">
          <p>© {currentYear} @jcvandeweerd. All rights reserved.</p>
          {/* <p>Based in Netherlands, working globally.</p> */}
        </div>
      </div>
    </footer>
  );
}
