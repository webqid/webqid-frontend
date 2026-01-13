import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TypeScript Examples — Christian van de Weerd",
  description:
    "Best practice TypeScript patterns, types, and utility examples for reference.",
};

export default function TypeScriptExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
