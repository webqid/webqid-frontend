// Shared meta configs for SEO
import type { Metadata } from "next";

export const siteConfig = {
  name: "webqid",
  url: "https://www.webqid.com",
  email: "hello@webqid.com",
  description: "Senior Frontend Developer studio. Next.js, TypeScript, Wagmi.",
};

export const defaultMeta: Metadata = {
  title: "webqid — Frontend Developer | Next.js, TypeScript, Wagmi",
  description: "Senior Frontend Developer. Next.js, TypeScript, Wagmi, Shadcn UI.",
  keywords: [
    "Frontend developer",
    "Next.js developer",
    "TypeScript",
    "React developer",
    "trading platform frontend",
  ],
  authors: [{ name: "webqid", url: siteConfig.url }],
  creator: "webqid",
  publisher: "webqid",
  openGraph: {
    title: "webqid — Frontend Developer | Next.js, TypeScript, Wagmi",
    description: "Senior Frontend Developer.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "webqid.com — Frontend Developer | Next.js, TypeScript, Wagmi",
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@webqid",
    creator: "@webqid",
    title: "webqid — Frontend Developer | Next.js, TypeScript, Wagmi",
    description: "Senior Frontend Developer.",
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

