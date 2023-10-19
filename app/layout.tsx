import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";

import "./globals.css";
import ModalProvider from "@/providers/modal-provider";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Commercio store",
  description: "Commercio store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
