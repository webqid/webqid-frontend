import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Examples — webqid",
  description:
    "Best practice React patterns, hooks, and component examples for reference.",
};

export default function ReactExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
