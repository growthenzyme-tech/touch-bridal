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
  title: "Best Bridal Makeover & Unisex Salon in Nagercoil | S TOUCH",
  description:
    "S TOUCH in Nagercoil offers premium HD bridal makeup, expert hair styling, and comprehensive grooming for men and women. Book your makeover or salon visit today!",
  icons: {
    icon: [
      { url: "/icon.png?v=8", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico?v=8" },
    ],
    apple: [
      { url: "/apple-icon.png?v=8", sizes: "180x180", type: "image/png" },
    ],
  },
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
