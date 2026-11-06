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
  title:
    "Touch Bridal | Unisex Salon, Bridal Makeup, Wedding Rentals & Nail Art in Nagercoil, Tamil Nadu",

  description:
    "Visit Touch Bridal Makeover Studio & Unisex Salon at Ramavarmapuram, Nagercoil, Tamil Nadu for bridal makeup, unisex salon services, wedding rentals and creative nail art.",
};
export default function HomePage() {
  return (
   <main className="min-h-screen bg-white text-[#302832]">
      <BridalHero />
      <EditorialServicesMosaic />
      <AboutUs />
      <FeaturedServices />
      <BridalGalleryPreview/>
      <WhyChooseUs />
      <CustomerTestimonials />
      <LocationContact />
      <ContactCTA />
    </main>
  );
}