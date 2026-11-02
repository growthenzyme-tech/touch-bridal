"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Inter_Tight } from "next/font/google";
import { ArrowLeft } from "lucide-react";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export interface RentalJewelsSubService {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const RENTAL_JEWELS_SUB_SERVICES: RentalJewelsSubService[] = [
  {
    id: "temple-collections",
    number: "01",
    title: "Temple Collections",
    description:
      "Complete your traditional look with elegant temple collections, featuring beautiful accessories for a graceful and traditional appearance on your special day.",
    image: "/images/temple.jpg",
    alt: "Temple Collections Rental Jewels by S Touch Salon",
  },
  {
    id: "antique-collections",
    number: "02",
    title: "Antique Collections",
    description:
      "Regal handcrafted bridal jewellery ensembles with intricate vintage detailing and timeless allure.",
    image: "/images/antique.jpg",
    alt: "Antique Collections Rental Jewels by S Touch Salon",
  },
  {
    id: "kundan-collections",
    number: "03",
    title: "Kundan Collections",
    description:
      "Discover our elegant Kundan collections, featuring beautiful traditional designs that add sparkle and royal charm to your special look.",
    image: "/images/kundan.jpg",
    alt: "Kundan Collections Rental Jewels by S Touch Salon",
  },
  {
    id: "victorian-collections",
    number: "04",
    title: "Victorian Collections",
    description:
      "Discover our elegant Victorian collections, featuring beautiful traditional designs that add sparkle and royal charm to your special look.",
    image: "/images/victorian.jpg",
    alt: "Victorian Collections Rental Jewels by S Touch Salon",
  },
  {
    id: "ad-collections",
    number: "05",
    title: "AD Collections",
    description:
      "Explore our exclusive AD collections, featuring elegant and sparkling designs that add a touch of luxury to every special occasion.",
    image: "/images/AD.jpg",
    alt: "AD Collections Rental Jewels by S Touch Salon",
  },
  {
    id: "jadavu-collections",
    number: "06",
    title: "Jadavu Collections",
    description:
      "Discover our beautiful Jadau collections, featuring intricate traditional designs that bring timeless elegance and royal charm to your special occasions.",
    image: "/images/jadavu.jpg",
    alt: "Jadavu Collections Rental Jewels by S Touch Salon",
  },
];

interface RentalJewelsSectionProps {
  onBackToServices?: () => void;
}

const ROW_HEIGHT = 115;
const PANEL_HEIGHT = 360;

export default function RentalJewelsSection({
  onBackToServices,
}: RentalJewelsSectionProps) {
  // Temple Collections is initially highlighted by default
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [displayIndex, setDisplayIndex] = useState(0);

  const activeService = RENTAL_JEWELS_SUB_SERVICES[displayIndex];

  const handleServiceClick = (serviceTitle: string) => {
    router.push(`/?service=${encodeURIComponent(serviceTitle)}#booking`);
  };

  // Smoothly maps activeIndex across the available container height so the full card is revealed
  const getPanelY = (index: number) => {
    const totalHeight = RENTAL_JEWELS_SUB_SERVICES.length * ROW_HEIGHT;
    const travelRange = Math.max(0, totalHeight - PANEL_HEIGHT);
    return (index / (RENTAL_JEWELS_SUB_SERVICES.length - 1)) * travelRange;
  };

  return (
    <section
      aria-label="Rental Jewels Collection"
      className="relative w-full overflow-hidden rounded-none bg-[#F1EDF7] border border-[#8D6CA3]/30 py-6 sm:py-10 lg:py-16 px-3 sm:px-8 lg:px-14 select-none"
    >
      {/* 1. Thin vertical lavender accent line near the left edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 sm:left-7 lg:left-8 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-[#8D6CA3]/40 to-transparent"
      />

      {/* 2. Soft Ambient Lavender Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-20 h-72 w-96 rounded-full bg-[#8D6CA3]/10 blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-[1320px]">
        {/* Navigation & Breadcrumbs Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8 lg:mb-10 pl-2 sm:pl-4">
          <button
            type="button"
            onClick={onBackToServices}
            aria-label="Back to all services"
            className="group inline-flex items-center gap-2.5 rounded-none border border-[#8D6CA3]/25 bg-white px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-[13px] font-semibold tracking-wide text-[#25232A] shadow-sm transition-all duration-250 hover:border-[#8D6CA3] hover:bg-[#8D6CA3] hover:text-white hover:shadow-[0_4px_16px_rgba(141,108,163,0.25)]"
          >
            <ArrowLeft className="h-4 w-4 stroke-[2.2] transition-transform duration-250 group-hover:-translate-x-1 text-[#25232A] group-hover:text-white" />
            <span>Back to All Services</span>
          </button>

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium tracking-wider">
            <button
              type="button"
              onClick={onBackToServices}
              className="text-[#716B76] hover:text-[#25232A] hover:underline transition-colors cursor-pointer"
            >
              Services
            </button>
            <span className="text-[#8D6CA3]">/</span>
            <span className="text-[#25232A] font-semibold">Rental Jewels Collection</span>
          </nav>
        </div>

        {/* Section Heading matching Bridal Makeup design */}
        <div className="mb-5 sm:mb-8 lg:mb-12 pl-1 sm:pl-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#8D6CA3]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] font-bold text-[#8D6CA3] sm:text-xs">
              Heritage Jewellery &amp; Temple Adornments
            </span>
          </div>

          <h2
            className={`${interTight.className} mt-3 max-w-[580px] text-2xl font-bold uppercase leading-[1.1] tracking-[-0.02em] sm:text-4xl lg:text-[50px]`}
          >
            <span className="block text-[#25232A]">Rental Jewels,</span>
            <span className="block text-[#8D6CA3]">Collection.</span>
          </h2>
        </div>

        {/* =========================================================================
            FULL-WIDTH SERVICE LIST with Interactive Selected Row & Floating Image
           ========================================================================= */}
        <div className="relative w-full">
          {/* Vertical Stack of Full-Width Rows */}
          <div onMouseLeave={() => setHoveredIndex(null)}
          className="flex flex-col divide-y divide-[#8D6CA3]/15">
            {RENTAL_JEWELS_SUB_SERVICES.map((service, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => handleServiceClick(service.title)}
                  onMouseEnter={() => { setHoveredIndex(index); setDisplayIndex(index); }}
                  aria-selected={isHovered}
                  role="tab"
                  className="group relative w-full text-left transition-colors duration-200 min-h-[82px] sm:min-h-[105px] lg:h-[115px] flex items-center justify-between gap-2.5 sm:gap-6 px-2.5 sm:px-6 lg:px-12 py-2.5 sm:py-4.5 rounded-none bg-transparent hover:bg-[#8D6CA3]/10 focus:outline-none cursor-pointer"
                >
                  {/* Left: Mobile Image Thumbnail + Content */}
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0 pr-2 sm:pr-4">
                    {/* Mobile Thumbnail (Reveals image on mobile/tablet where hover panel is hidden) */}
                    <img
                      src={service.image}
                      alt={service.alt || service.title}
                      className="lg:hidden h-14 w-14 sm:h-16 sm:w-16 rounded-none object-cover object-top border border-[#8D6CA3]/30 shadow-xs shrink-0"
                    />

                    <div className="flex-1 min-w-0 max-w-[420px] sm:max-w-md lg:max-w-lg xl:max-w-xl">
                      <div className="flex items-baseline gap-2 sm:gap-3">
                        <h3
                          className={`${interTight.className} text-[15px] sm:text-xl lg:text-[23px] font-bold tracking-[-0.01em] text-[#25232A] group-hover:text-[#8D6CA3] transition-colors truncate sm:whitespace-normal`}
                        >
                          {service.title}
                        </h3>
                      </div>

                      <p
                        className={`${interTight.className} mt-1 text-[11px] sm:text-[13px] lg:text-[14px] leading-relaxed line-clamp-2 transition-colors text-[#716B76] group-hover:text-[#25232A]`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>

                  
                </button>
              );
            })}
          </div>

          {/* =========================================================================
              FLOATING RECTANGULAR IMAGE PANEL (Desktop)
              - Reveals full portrait card, overlapping the active row
              - Follows the active service row smoothly via translateY
             ========================================================================= */}
          <div
            style={{
              transform: `translateY(${getPanelY(displayIndex)}px)`,
            }}
            className={`hidden lg:block absolute right-14 lg:right-20 xl:right-28 top-0 w-[275px] xl:w-[305px] h-[360px] rounded-none overflow-hidden border-2 border-[#8D6CA3] bg-[#25232A] shadow-[0_25px_60px_rgba(37,35,42,0.25)] transition-all duration-300 ease-out z-20 pointer-events-none ${
              hoveredIndex !== null
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            {/* Stack of All Images with Smooth Cross-Dissolve */}
            {RENTAL_JEWELS_SUB_SERVICES.map((service, index) => {
              const isSelected = displayIndex === index;
              return (
                <div
                  key={service.id}
                  className={`absolute inset-0 transition-all duration-500 ease-out ${
                    isSelected
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-[1.02] pointer-events-none z-0"
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              );
            })}

            {/* Subtle Bottom Scrim with Look Title */}
            <div className="absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[#25232A]/95 via-[#25232A]/50 to-transparent pointer-events-none" />

            {/* Specular Top Gold Sheen */}
            <div className="absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#8D6CA3] to-transparent pointer-events-none" />

            <div className="absolute inset-x-0 bottom-0 z-30 p-4 sm:p-5 flex items-end justify-between gap-3">
              <div>
                <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-white/80 uppercase block">
                  SIGNATURE COLLECTION
                </span>
                <span
                  className={`${interTight.className} text-lg xl:text-xl font-bold uppercase tracking-tight text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]`}
                >
                  {activeService.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleServiceClick(activeService.title)}
                className="inline-flex items-center gap-1.5 rounded-none bg-[#8D6CA3] px-3.5 py-1.5 text-xs font-semibold text-white shadow-md transition-transform duration-250 hover:scale-105 hover:bg-[#76558D]"
              >
                <span>Book</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
