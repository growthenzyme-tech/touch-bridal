
"use client";

import RentalEnquiry from "@/components/RentalEnquiry";
import { Inter_Tight } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const rentalCategories = [
  {
    id: "01",
    title: "Wedding Jewellery",
    description: "Elegant jewellery pieces to complete your bridal look.",
    image: "/rentals/jewellery.jpg",
    count: "Jewellery Collection",
  },
  {
    id: "02",
    title: "Wedding Bouquets",
    description: "Beautiful floral arrangements for your special moments.",
    image: "/rentals/bouquet.jpg",
    count: "Floral Collection",
  },
  {
    id: "03",
    title: "Wedding Hairnets",
    description: "Traditional and delicate details for bridal hairstyles.",
    image: "/rentals/hairnet.jpg",
    count: "Hair Accessories",
  },
  {
    id: "04",
    title: "Wedding Crowns",
    description: "Statement crowns that add a royal touch to your look.",
    image: "/rentals/crown.jpg",
    count: "Crown Collection",
  },
];

export default function WeddingRentals() {
  const [active, setActive] = useState(0);

  const total = rentalCategories.length;

  const go = (direction: number) => {
    setActive((previous) => (previous + direction + total) % total);
  };

  return (
    <>
      <section
        id="wedding-rentals"
        className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-[1320px]">
          {/* SECTION INTRO */}
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex bg-[#F1EDF7] px-3 py-1 text-[9px] font-medium uppercase tracking-[0.15em] text-[#8D6CA3]">
              The Wedding Collection
            </span>

            <h2
              className={`${interTight.className} mt-4 max-w-[800px] text-[clamp(2.3rem,4.8vw,4.5rem)] font-bold uppercase leading-[1] tracking-[-0.02em] text-[#25232A]`}
            >
              The Finishing Touch of
              <br />
              <span className="text-[#8D6CA3]">Elegance.</span>
            </h2>

            <p
              className={`${interTight.className} mt-5 max-w-[600px] text-xs leading-6 text-[#817887] sm:text-sm`}
            >
              Discover our curated wedding rental collection. From timeless
              jewellery to delicate accessories, find the perfect finishing
              touches for your unforgettable bridal moments.
            </p>

            <div className="mt-5 flex items-center justify-center gap-3">
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8D6CA3]">
                Available for Rental
              </span>
            </div>
          </div>

          {/* RENTAL COLLECTION */}
          <div className="mt-8 overflow-hidden bg-[#F1EDF7] px-3 py-8 sm:mt-10 sm:px-6 sm:py-10 lg:py-12">
            <div
              className="relative mx-auto h-[360px] max-w-[1100px] [--step:190px] sm:h-[480px] sm:[--step:300px] lg:h-[540px] lg:[--step:360px]"
              role="region"
              aria-roledescription="carousel"
              aria-label="Wedding rental collection"
            >
              {rentalCategories.map((item, index) => {
                let distance = (index - active + total) % total;

                if (distance > total / 2) {
                  distance -= total;
                }

                const isActive = distance === 0;
                const isSideCard = Math.abs(distance) === 1;

                const scale = isActive ? 1 : isSideCard ? 0.82 : 0.7;
                const opacity = isActive ? 1 : isSideCard ? 0.7 : 0;

                return (
                  <article
                    key={item.id}
                    onClick={() => {
                      if (!isActive) {
                        setActive(index);
                      }
                    }}
                    aria-hidden={!isActive}
                    style={{
                      transform: `translateX(calc(-50% + (${distance} * var(--step)))) scale(${scale})`,
                      opacity,
                      zIndex: 10 - Math.abs(distance),
                      pointerEvents: Math.abs(distance) > 1 ? "none" : "auto",
                    }}
                    className={`group absolute left-1/2 top-0 aspect-[4/5] w-[260px] overflow-hidden bg-[#E9E1F2] transition-all duration-700 ease-out sm:w-[340px] lg:w-[400px] ${
                      isActive
                        ? "shadow-[0_24px_50px_-24px_rgba(37,35,42,0.45)]"
                        : "cursor-pointer"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 260px, (max-width: 1024px) 340px, 400px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* IMAGE OVERLAY */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent"
                    />

                    {/* CARD CONTENT */}
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4 sm:p-5">
                      <h3
                        className={`${interTight.className} text-base font-semibold tracking-[-0.02em] text-white sm:text-lg`}
                      >
                        {item.title}
                      </h3>

                      <a
                        href="#rental-enquiry"
                        tabIndex={isActive ? 0 : -1}
                        onClick={(event) => event.stopPropagation()}
                        className={`${interTight.className} shrink-0 bg-white px-3 py-2 text-[10px] font-semibold text-[#25232A] transition-colors duration-300 hover:bg-[#8D6CA3] hover:text-white sm:px-4 sm:text-[11px]`}
                      >
                        Enquire
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* CAROUSEL ARROWS */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous rental category"
                className="flex h-10 w-10 items-center justify-center border border-[#8D6CA3]/30 bg-white text-[#25232A] transition-colors duration-300 hover:bg-[#8D6CA3] hover:text-white"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next rental category"
                className="flex h-10 w-10 items-center justify-center border border-[#8D6CA3]/30 bg-white text-[#25232A] transition-colors duration-300 hover:bg-[#8D6CA3] hover:text-white"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RENTAL ENQUIRY SECTION */}
    
        <RentalEnquiry />
    
    </>
  );
}
