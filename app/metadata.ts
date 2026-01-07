// Shared meta configs for SEO
import type { Metadata } from "next";

export const siteConfig = {
  name: "webqid",
  url: "https://www.webqid.com",
  email: "hello@webqid.com",
  description: "Senior Web3 frontend engineering studio. DeFi dashboards, trading platforms, NFT dApps. Next.js, TypeScript, Wagmi.",
};

export const defaultMeta: Metadata = {
  title: "webqid — Web3 Frontend Engineering Studio | Next.js, TypeScript, Wagmi",
  description: "Senior Web3 frontend engineering for DeFi, NFT, and trading dApps. Next.js, TypeScript, Wagmi, Shadcn UI.",
  keywords: [
    "Web3 frontend developer",
    "DeFi frontend",
    "Next.js developer",
    "TypeScript",
    "Wagmi",
    "React developer",
    "blockchain interface",
    "dApp development",
    "wallet integration",
    "staking dashboard",
    "NFT frontend",
    "trading platform frontend",
  ],
  authors: [{ name: "webqid", url: siteConfig.url }],
  creator: "webqid",
  publisher: "webqid",
  openGraph: {
    title: "webqid — Web3 Frontend Engineering Studio",
    description: "Senior Web3 frontend engineering for DeFi, NFT, and trading dApps.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "webqid.com — Web3 Frontend Engineering Studio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@webqid",
    creator: "@webqid",
    title: "webqid — Web3 Frontend Engineering Studio",
    description: "Senior Web3 frontend engineering for DeFi, NFT, and trading dApps.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
};

// Page-specific metadata
export const pageMetadata = {
  work: {
    title: "Web3 dApps We've Built | webqid Case Studies",
    description: "Explore case studies from webqid: DeFi staking dashboards, decentralized exchanges, NFT platforms. Built with Next.js, TypeScript, Wagmi.",
  },
  solutions: {
    title: "Web3 Frontend Development Services | Staking, Trading, NFT dApps",
    description: "Web3 frontend engineering services: DeFi dashboards, trading interfaces, NFT platforms, wallet integrations. Next.js, TypeScript, Wagmi.",
  },
  studio: {
    title: "About webqid — Senior Web3 Frontend Engineering",
    description: "20+ years software development, 5+ years Web3. Precision-built frontends for DeFi protocols, NFT projects, and trading platforms.",
  },
  contact: {
    title: "Contact webqid — Start a Web3 Project",
    description: "Get in touch to discuss your Web3 frontend project. DeFi, NFT, trading platforms. Based in Netherlands, working globally.",
  },
  writing: {
    title: "Writing — Web3 Frontend Insights | webqid",
    description: "Technical deep-dives, engineering notes, and Web3 frontend insights from webqid.",
  },
};
