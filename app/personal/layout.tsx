import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal — webqid",
  description: "Personal information and details.",
};

export default function PersonalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
