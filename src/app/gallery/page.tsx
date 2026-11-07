import type { Metadata } from "next";
import BridalGalleryClient from "./BridalGalleryClient";

export const metadata: Metadata = {
  title:
    "Bridal Makeup in Nagercoil | Touch Bridal Makeover Studio",

  description:
    "Discover professional bridal makeup in Nagercoil, including traditional wedding, reception and engagement makeup at Touch Bridal Makeover Studio & Unisex Salon.",

  keywords: [
    "bridal makeup in Nagercoil",
    "bridal makeup artist Nagercoil",
    "bridal makeover Nagercoil",
    "wedding makeup Nagercoil",
    "engagement makeup Nagercoil",
    "reception makeup Nagercoil",
    "bridal makeup studio Nagercoil",
    "Touch Bridal Makeover Studio",
  ],

  openGraph: {
    title: "Bridal Makeup in Nagercoil | Touch Bridal",
    description:
      "Explore beautiful bridal makeup transformations and wedding styling at Touch Bridal Makeover Studio in Nagercoil, Tamil Nadu.",
    url: "https://touchbridal.com/gallery",
    siteName: "Touch Bridal Makeover Studio & Unisex Salon",
    locale: "en_IN",
    type: "website",
  },
};

export default function GalleryPage() {
  return <BridalGalleryClient />;
}