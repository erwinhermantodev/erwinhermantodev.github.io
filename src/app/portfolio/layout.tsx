import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Project Experience | Erwin Hermanto",
  description: "Detailed IT project experience and system architectures built by Erwin Hermanto.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
