import type { Metadata } from "next";
import BridalGalleryClient from "./BridalGalleryClient";

export const metadata: Metadata = {
  title:
    "Bridal Makeup in Nagercoil | S Touch Bridal Makeover Studio & Unisex Salon",

  description:
    "Discover professional bridal makeup in Nagercoil, including traditional wedding, reception and engagement makeup at S Touch Bridal Makeover Studio & Unisex Salon.",

  keywords: [
    "bridal makeup in Nagercoil",
    "bridal makeup artist Nagercoil",
    "bridal makeover Nagercoil",
    "wedding makeup Nagercoil",
    "engagement makeup Nagercoil",
    "reception makeup Nagercoil",
    "bridal makeup studio Nagercoil",
    "S Touch Bridal Makeover Studio & Unisex Salon",
  ],

  openGraph: {
    title: "Bridal Makeup in Nagercoil | S Touch Bridal Makeover Studio & Unisex Salon",
    description:
      "Explore beautiful bridal makeup transformations and wedding styling at S Touch Bridal Makeover Studio in Nagercoil, Tamil Nadu.",
    url: "https://touchbridal.com/gallery",
    siteName: "S Touch Bridal Makeover Studio & Unisex Salon",
    locale: "en_IN",
    type: "website",
  },
};

export default function GalleryPage() {
  return <BridalGalleryClient />;
}
