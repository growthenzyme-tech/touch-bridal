import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Touch Bridal Makeover Studio & Unisex Salon",
  description:
    "Discover your perfect bridal look with Touch Bridal Makeover Studio & Unisex Salon.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} h-full antialiased`}
    >
      <body className={`${interTight.className} flex min-h-full flex-col`}>
        <Navbar />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
