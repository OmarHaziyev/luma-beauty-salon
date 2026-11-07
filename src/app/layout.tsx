import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "LUMA Beauty Studio | Bakı",
    template: "%s | LUMA Beauty Studio",
  },
  description:
    "LUMA Beauty Studio — gözəllik, rahatlıq və özünüzə ayırdığınız xüsusi anlar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
