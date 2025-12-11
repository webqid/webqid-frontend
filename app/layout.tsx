import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Serif } from "next/font/google";
import "../styles/globals.css";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "webqid. — Precision-built Web frontends engineered for trust",
  description:
    "webqid builds high-performance Web and Web3 frontends where clarity, speed, and precision meet. Minimalist. Scalable. Built with intent.",
  keywords: [
    "Web3 frontend",
    "Web frontend",
    "Next.js",
    "React",
    "TypeScript",
    "UI engineering",
    "Blockchain interfaces",
    "dApp development",
    "Wallet integration",
    "Design systems",
    "Vercel",
    "webqid",
  ],
  authors: [{ name: "webqid", url: "https://webqid.com" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "webqid. — Precision-built Web frontends engineered for trust",
    description:
      "Turning on-chain complexity into fast, reliable, and elegant interfaces. Built with intent.",
    url: "https://webqid.com",
    siteName: "webqid",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "webqid. — Precision-built Web frontends engineered for trust",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "webqid. — Precision-built Web frontends engineered for trust",
    description:
      "Minimalist. Reliable. Built with intent. Premium Web and Web3 frontends where design, motion, and code align.",
    images: ["/og-image.png"],
    creator: "@webqid",
  },
  metadataBase: new URL("https://webqid.com"),
  alternates: {
    canonical: "https://webqid.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSerif.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">

        {/* Skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only absolute top-2 left-2 bg-black text-white px-3 py-2 rounded"
        >
          Skip to content
        </a>

        <SmoothScrollProvider />

        <Nav aria-label="Primary navigation" />

        {/* Main landmark */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer aria-label="Footer" />
      </body>
    </html>
  );
}
