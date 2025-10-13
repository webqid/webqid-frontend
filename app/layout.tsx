import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "webqid. — Precision-built frontends for the modern web",
  description:
    "webqid builds high-performance frontends where precision meets trust. Minimalist, scalable, and engineered for seamless digital and on-chain experiences.",
  keywords: [
    "Frontend development",
    "Next.js",
    "React",
    "TypeScript",
    "UI engineering",
    "Blockchain interfaces",
    "Design systems",
    "Scalable web apps",
    "Vercel",
    "webqid",
  ],
  authors: [{ name: "webqid", url: "https://webqid.com" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "webqid. — Precision-built frontends for the modern web",
    description:
      "Turning complex technology into refined, high-performance interfaces. Built with intent.",
    url: "https://webqid.com",
    siteName: "webqid.",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "webqid. — Precision-built frontends for the modern web",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "webqid. — Precision-built frontends for the modern web",
    description:
      "Minimalist. Reliable. Built with intent. webqid engineers premium frontends for the digital and on-chain web.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
