"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Inter_Tight } from "next/font/google";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});
export interface MensSubService {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const MENS_SUB_SERVICES: MensSubService[] = [
  {
    id: "mens-hair-cut",
    number: "01",
    title: "Men's Hair Cut",
    description:
      "Complete your look with precision haircuts and expert beard grooming for a perfectly refined style.",
    image: "/images/mens hair cut.jpg",
    alt: "Men's Hair Cut by Touch Salon",
  },
  {
    id: "boy-baby-hair-cuts",
    number: "02",
    title: "Boy Baby Hair Cuts",
    description:
      "Make your little prince’s first haircut special with gentle care and a comfortable salon experience.",
    image: "/images/boys hair cut.jpg",
    alt: "Boy Baby Hair Cuts by Touch Salon",
  },
  {
    id: "mens-beard-styles",
    number: "03",
    title: "Men's Beard Styles",
    description:
      "Perfectly shaped facial hair that enhances your features and completes your signature style.",
    image: "/images/mens beard.jpg",
    alt: "Men's Beard Styles by Touch Salon",
  },
  {
    id: "colour-me-gorgeous",
    number: "04",
    title: "Colour Me Gorgeous",
    description:
      "A rich, natural-looking black shade for a neat and polished appearance.",
    image: "/images/color me hair.jpg",
    alt: "Colour Me Gorgeous by Touch Salon",
  },
  {
    id: "chemical-hair-treatments",
    number: "05",
    title: "Chemical Hair Treatments",
    description:
      "A deep-conditioning service designed to improve softness, shine, and the appearance of damaged hair.",
    image: "/images/chemical hair treatment.jpg",
    alt: "Chemical Hair Treatments by Touch Salon",
  },
  {
    id: "hair-care",
    number: "06",
    title: "Hair Care",
    description:
      "Discover a flattering haircut tailored to your face shape, personality, and lifestyle.",
    image: "/images/hair care.jpg",
    alt: "Hair Care by Touch Salon",
  },
  {
    id: "facials",
    number: "07",
    title: "Facials",
    description:
      "Experience premium skincare designed to leave your skin feeling smooth and looking luminous.",
    image: "/images/men facial.jpg",
    alt: "Men's Facials by Touch Salon",
  },
  {
    id: "hydra-facials",
    number: "08",
    title: "Hydra Facials",
    description:
      "A glow-enhancing treatment focused on hydration and skin radiance for a fresh, luminous look.",
    image: "/images/hydrafacial.jpg",
    alt: "Hydra Facials by Touch Salon",
  },
  {
    id: "korean-facials",
    number: "09",
    title: "Korean Facials",
    description:
      "Help revive dull-looking skin and enhance your natural radiance with a personalised skincare routine.",
    image: "/images/korean man.jpg",
    alt: "Korean Facials by Touch Salon",
  },
  {
    id: "groom-facials",
    number: "10",
    title: "Groom Facials",
    description:
      "Refresh and revitalise your skin for a clean, radiant, and camera-ready look on your special day.",
    image: "/images/groom facials.jpg",
    alt: "Groom Facials by Touch Salon",
  },
  {
    id: "bleach",
    number: "11",
    title: "Bleach",
    description:
      "Lighten your natural hair colour for a bold, modern transformation and a striking new look.",
    image: "/images/men bleach.jpg",
    alt: "Men's Bleach Service by Touch Salon",
  },
  {
    id: "d-tan",
    number: "12",
    title: "D-Tan",
    description:
      "A refreshing treatment designed to cleanse, nourish, and revive sun-exposed, dull-looking skin.",
    image: "/images/d tan man.jpg",
    alt: "Men's D-Tan by Touch Salon",
  },
  {
    id: "face-mask",
    number: "13",
    title: "Face Mask",
    description:
      "A luxurious finishing treatment to refresh the skin and enhance its radiant appearance.",
    image: "/images/face mask.jpg",
    alt: "Face Mask Treatment by Touch Salon",
  },
  {
    id: "serum-face-mask",
    number: "14",
    title: "Serum Face Mask",
    description:
      "Helps brighten dull-looking skin and improve the appearance of uneven skin tone.",
    image: "/images/serum face mask.jpg",
    alt: "Serum Face Mask by Touch Salon",
  },
  {
    id: "body-polishing",
    number: "15",
    title: "Body Polishing",
    description:
      "Gently exfoliate your skin to improve its smoothness and reveal a fresh, polished appearance.",
    image: "/images/body polishing.jpg",
    alt: "Men's Body Polishing by Touch Salon",
  },
  {
    id: "hands-and-feet",
    number: "16",
    title: "Hands & Feet",
    description:
      "Experience premium relaxation with a nourishing treatment designed to soften your hands and feet feeling refreshed.",
    image: "/images/hand and feet.jpg",
    alt: "Hands & Feet Treatment by Touch Salon",
  },
  {
    id: "relax-and-rejuvenate",
    number: "17",
    title: "Relax & Rejuvenate",
    description:
      "Escape the everyday stress and indulge in a soothing spa experience that relaxes your body.",
    image: "/images/relax.jpg",
    alt: "Relax & Rejuvenate Spa by Touch Salon",
  },
  {
    id: "waxing",
    number: "18",
    title: "Waxing",
    description:
      "Enjoy smooth, silky skin with our professional waxing services, designed to gently remove unwanted hair.",
    image: "/images/wax man.jpg",
    alt: "Men's Waxing by Touch Salon",
  },
];

interface MensServicesSectionProps {
  onBackToServices?: () => void;
}

const ROW_HEIGHT = 110;
const PANEL_HEIGHT = 440;

// Splits text into half black and half lavender matching "Every bride, beautifully unique."
function renderHalfAndHalf(text: string, isActive: boolean = false) {
  const words = text.trim().split(/\s+/);
  if (words.length <= 1) {
    return <span className={isActive ? "text-white" : "text-[#25232A]"}>{text}</span>;
  }
  const mid = Math.ceil(words.length / 2);
  const part1 = words.slice(0, mid).join(" ");
  const part2 = words.slice(mid).join(" ");
  return (
    <>
      <span className={isActive ? "text-white" : "text-[#25232A]"}>{part1} </span>
      <span className={isActive ? "text-[#EDE4F3]" : "text-[#8D6CA3]"}>{part2}</span>
    </>
  );
}

function renderPanelTitle(text: string) {
  const words = text.trim().split(/\s+/);
  if (words.length <= 1) {
    return <span className="text-white">{text}</span>;
  }
  const mid = Math.ceil(words.length / 2);
  const part1 = words.slice(0, mid).join(" ");
  const part2 = words.slice(mid).join(" ");
  return (
    <>
      <span className="text-white">{part1} </span>
      <span className="text-[#EDE4F3]">{part2}</span>
    </>
  );
}

export default function MensServicesSection({
  onBackToServices,
}: MensServicesSectionProps) {
  // First item selected by default
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [displayIndex, setDisplayIndex] = useState(0);

  const activeService = MENS_SUB_SERVICES[displayIndex];

  const handleServiceClick = (serviceTitle: string) => {
    router.push(`/?service=${encodeURIComponent(serviceTitle)}#booking`);
  };

  // Smoothly maps activeIndex across the available container height so the full card is revealed
  const getPanelY = (index: number) => {
    const totalHeight = MENS_SUB_SERVICES.length * ROW_HEIGHT;
    const travelRange = Math.max(0, totalHeight - PANEL_HEIGHT);
    return (index / (MENS_SUB_SERVICES.length - 1)) * travelRange;
  };

  return (
    <section
      aria-label="Men's Services Collection"
      className="relative w-full overflow-hidden rounded-none bg-[#F1EDF7] border border-[#8D6CA3]/30 py-6 sm:py-10 lg:py-16 px-3 sm:px-8 lg:px-14 select-none"
    >
      {/* 1. Thin vertical muted-gold accent line near the left edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 sm:left-7 lg:left-8 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-[#8D6CA3]/40 to-transparent"
      />

      {/* 2. Soft Ambient Warm Glow */}
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
            className="group inline-flex items-center gap-2.5 rounded-full border border-[#8D6CA3]/25 bg-white px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-[13px] font-semibold tracking-wide text-[#25232A] shadow-sm transition-all duration-250 hover:border-[#8D6CA3] hover:bg-[#8D6CA3] hover:text-white hover:shadow-[0_4px_16px_rgba(141,108,163,0.25)]"
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
            <span className="text-[#25232A] font-semibold">Men&apos;s Services Collection</span>
          </nav>
        </div>

        {/* Section Heading matching the editorial design */}
        <div className="mb-5 sm:mb-8 lg:mb-12 pl-1 sm:pl-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#8D6CA3]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] font-bold text-[#8D6CA3] sm:text-xs">
              Gentlemen&apos;s Grooming &amp; Styling
            </span>
          </div>

          <h2
            className={`${interTight.className} mt-3 max-w-[580px] text-2xl font-bold uppercase leading-[1.1] tracking-[-0.02em] sm:text-4xl lg:text-[50px]`}
          >
            <span className="block text-[#25232A]">Men's Services,</span>
            <span className="block text-[#8D6CA3]">Collection.</span>
          </h2>

          <div className="mt-3.5 flex items-center gap-2">
            <span className="h-[1.5px] w-12 bg-[#8D6CA3]" />
            <span className="h-1 w-1 rounded-full bg-[#8D6CA3]" />
            <span className="h-[1px] w-20 bg-[#8D6CA3]/40" />
          </div>
        </div>

        {/* =========================================================================
            FULL-WIDTH SERVICE LIST with Interactive Selected Row & Floating Image
           ========================================================================= */}
        <div className="relative w-full">
          {/* Vertical Stack of 18 Full-Width Rows */}
          <div onMouseLeave={() => setHoveredIndex(null)}
          className="flex flex-col divide-y divide-[#8D6CA3]/15">
            {MENS_SUB_SERVICES.map((service, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => handleServiceClick(service.title)}
                  onMouseEnter={() => { setHoveredIndex(index); setDisplayIndex(index); }}
                  aria-selected={isHovered}
                  role="tab"
                  className="group relative w-full text-left transition-colors duration-200 min-h-[82px] sm:min-h-[105px] lg:h-[115px] flex items-center justify-between gap-2.5 sm:gap-6 px-2.5 sm:px-6 lg:px-12 py-2.5 sm:py-4.5 rounded-[12px] sm:rounded-[18px] bg-transparent hover:bg-[#8D6CA3]/10 focus:outline-none cursor-pointer"
                >
                  {/* Left: Mobile Image Thumbnail + Content */}
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0 pr-2 sm:pr-4">
                    {/* Mobile Thumbnail (Reveals image on mobile/tablet where hover panel is hidden) */}
                    <img
                      src={service.image}
                      alt={service.alt || service.title}
                      className="lg:hidden h-14 w-14 sm:h-16 sm:w-16 rounded-[8px] sm:rounded-[10px] object-cover object-top border border-[#8D6CA3]/30 shadow-xs shrink-0"
                    />

                    <div className="flex-1 min-w-0 max-w-[420px] sm:max-w-md lg:max-w-lg xl:max-w-xl">
                      <div className="flex items-baseline gap-2 sm:gap-3">
                        <span
                          className={`${interTight.className} text-[11px] sm:text-xs font-bold tracking-wider text-[#8D6CA3] shrink-0`}
                        >
                          {service.number}
                        </span>
                        <h3
                          className={`${interTight.className} text-[15px] sm:text-xl lg:text-[23px] font-bold tracking-[-0.01em] text-[#25232A] group-hover:text-[#8D6CA3] transition-colors truncate sm:whitespace-normal`}
                        >
                          {service.title}
                        </h3>
                      </div>

                      <p
                        className={`mt-1 text-[11px] sm:text-[13px] lg:text-[14px] leading-relaxed line-clamp-2 transition-colors text-[#716B76] group-hover:text-[#25232A]`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Far Right: Diagonal Arrow-Up-Right Icon */}
                  <div className="flex-shrink-0 z-10">
                    <div
                      className="h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center transition-all duration-200 border border-[#8D6CA3]/25 text-[#8D6CA3] bg-[#EDE4F3]/60 group-hover:border-[#8D6CA3] group-hover:bg-[#8D6CA3] group-hover:text-white"
                    >
                      <ArrowUpRight
                        className="h-5 w-5 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
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
            className={`hidden lg:block absolute right-14 lg:right-20 xl:right-28 top-0 w-[320px] xl:w-[350px] h-[440px] rounded-none overflow-hidden border-2 border-[#8D6CA3] bg-[#25232A] shadow-[0_25px_60px_rgba(37,35,42,0.25)] transition-all duration-300 ease-out z-20 pointer-events-none ${
              hoveredIndex !== null
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            {/* Stack of All 18 Images with Smooth Cross-Dissolve */}
            {MENS_SUB_SERVICES.map((service, index) => {
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
                    className="h-full w-full object-cover object-center"
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
                  {activeService.number} • SIGNATURE GROOMING
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
                className="inline-flex items-center gap-1.5 rounded-full bg-[#8D6CA3] px-3.5 py-1.5 text-xs font-semibold text-white shadow-md transition-transform duration-250 hover:scale-105 hover:bg-[#76558D]"
              >
                <span>Book</span>
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

