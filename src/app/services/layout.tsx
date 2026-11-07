import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xidmətlər",
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
