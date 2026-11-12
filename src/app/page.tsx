import BridalHero from "@/components/BridalHero";
import EditorialServicesMosaic from "@/components/EditorialServicesMosaic";
import AboutUs from "@/components/AboutUs";
import FeaturedServices from "@/components/FeaturedServices";
import BridalGalleryPreview from "@/components/BridalGalleryPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import LocationContact from "@/components/LocationContact";
import ContactCTA from "@/components/ContactCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Bridal Makeover & Unisex Salon in Nagercoil | S TOUCH",
  description:
    "S TOUCH in Nagercoil offers premium HD bridal makeup, expert hair styling, and comprehensive grooming for men and women. Book your makeover or salon visit today!",
  keywords: [
    "bridal makeup Nagercoil",
    "groom makeover Nagercoil",
    "unisex salon Nagercoil",
    "wedding jewelry rental Nagercoil",
    "nail art Nagercoil",
    "S Touch Bridal Makeover Studio & Unisex Salon",
    "hair salon Ramavarmapuram",
    "bridal makeover studio Tamil Nadu", "bridal makeup artist Nagercoil",
    "Looking for bridal and groom makeup in Nagercoil",
    "Best bridal makeup",
    "Best groom makeup",
    "Top Bridal makeup salon in Tamil Nadu",
    "Women's Beauty Salon",
    "Hair salon Nagercoil",
    "Top Unisex salon"
  ],
  openGraph: {
    title: "Best Bridal Makeover & Unisex Salon in Nagercoil | S TOUCH",
    description:
      "S TOUCH in Nagercoil offers premium HD bridal makeup, expert hair styling, and comprehensive grooming for men and women. Book your makeover or salon visit today!",
    url: "https://touchbridal.com",
    siteName: "S Touch Bridal Makeover Studio & Unisex Salon",
    locale: "en_IN",
    type: "website",
  },
};
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#302832]">
      <BridalHero />
      <EditorialServicesMosaic />
      <AboutUs />
      <FeaturedServices />
      <BridalGalleryPreview />
      <WhyChooseUs />
      <CustomerTestimonials />
      <LocationContact />
      <ContactCTA />
    </main>
  );
}