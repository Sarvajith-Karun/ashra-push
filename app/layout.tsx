import type { Metadata } from "next";
import { Noto_Serif } from "@next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";

const noto_serif = Noto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ASHRA - Be The Hope",
  description: "Be the Hope",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto_serif.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}