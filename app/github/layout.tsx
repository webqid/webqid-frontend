import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GitHub Profile — Christian van de Weerd",
  description: "GitHub-style developer profile and experience overview.",
};

export default function GitHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
