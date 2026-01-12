import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GitHub Profile — webqid",
  description: "GitHub-style developer profile and experience overview.",
};

export default function GitHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
