import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Default CV — webqid",
  description: "Default style developer profile and experience overview.",
};

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
