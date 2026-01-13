import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian van de Weerd | Creative CV",
  description:
    "An immersive, animation-heavy portfolio experience showcasing frontend development expertise with GSAP, Motion, and creative interactions.",
  openGraph: {
    title: "Christian van de Weerd | Creative CV",
    description:
      "An immersive, animation-heavy portfolio experience showcasing frontend development expertise.",
    type: "website",
  },
};

export default function CreativeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
