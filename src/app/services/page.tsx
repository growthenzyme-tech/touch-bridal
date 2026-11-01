import ServicesShowcase from "@/components/ServicesShowcase";

export const metadata = {
  title: "Bridal Showcase & Services | S Touch Salon",
  description: "Touch Bridal Makeover Studio & Unisex Salon showcase and comprehensive services.",
};

export default function ServicesPage() {
  return (
    <main className="relative flex min-h-[100dvh] w-full flex-col items-center justify-start overflow-x-hidden bg-white text-[#25232A] px-2 pt-16 pb-3 sm:px-3 sm:pt-18 sm:pb-4 lg:px-4 lg:pt-22 xl:pt-24 lg:pb-5">
      {/* Bridal Showcase & Services Sections */}
      <ServicesShowcase />
    </main>
  );
}
