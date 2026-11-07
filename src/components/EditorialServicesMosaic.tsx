"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter_Tight } from "next/font/google";
import { motion } from "motion/react";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

interface ServiceCategory {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaText: string;
  ctaHref: string;
  ctaAriaLabel: string;
  isExternal?: boolean;
  isTopTextOnDesktop: boolean;
  // Animation coordinates: revealing from the outside
  desktopImageInitial: { x?: number; y?: number; opacity: number; scale: number };
  desktopTextInitial: { x?: number; y?: number; opacity: number };
  delay: number;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "unisex-salon",
    category: "CARE & GROOMING",
    title: "UNISEX SALON",
    description:
      "Refined hair styling, luxury skin treatments, and precision grooming for men and women in Nagercoil.",
    image: "/images/unisex.jpg",
    imageAlt:
      "Touch Bridal Unisex Salon in Nagercoil - Hair care, skin facials, and grooming services for men and women",
    ctaText: "EXPLORE",
    ctaHref: "/services",
    ctaAriaLabel:
      "Explore Unisex Salon hair styling and skin care services in Nagercoil",
    isTopTextOnDesktop: false, // Column 1: Image top, Text below
    // Reveals from outside LEFT
    desktopImageInitial: { x: -140, y: -30, opacity: 0, scale: 0.9 },
    desktopTextInitial: { y: 40, opacity: 0 },
    delay: 0.05,
  },
  {
    id: "bridal-makeover",
    category: "SIGNATURE BRIDAL",
    title: "BRIDAL MAKEOVER STUDIO",
    description:
      "Complete bridal and groom beauty experiences, HD makeup, and styling in Nagercoil.",
    image: "/images/studio.jpg",
    imageAlt:
      "Touch Bridal Makeover Studio in Nagercoil - Professional bridal makeup, groom makeover, and wedding styling",
    ctaText: "EXPLORE",
    ctaHref: "/services?section=bridal-makeup#bridal-makeup",
    ctaAriaLabel:
      "Explore Bridal Makeup and wedding styling services",
    isTopTextOnDesktop: true, // Column 2: Text top, Image below
    // Reveals from outside BOTTOM
    desktopImageInitial: { y: 140, opacity: 0, scale: 0.9 },
    desktopTextInitial: { y: -40, opacity: 0 },
    delay: 0.15,
  },
  {
    id: "rentals",
    category: "OCCASION ESSENTIALS",
    title: "RENTALS",
    description:
      "Curated bridal jewelry, antique temple sets, crowns, and wedding accessories available for rent in Nagercoil.",
    image: "/images/jewel.jpg",
    imageAlt:
      "Wedding and bridal jewelry rental collection in Nagercoil - Antique, temple, and royal adornments",
    ctaText: "EXPLORE",
    ctaHref: "/services?section=rental-jewels#rental-jewels",
    ctaAriaLabel:
      "Explore Rental Jewellery collections on services page",
    isTopTextOnDesktop: false, // Column 3: Image top, Text below
    // Reveals from outside TOP
    desktopImageInitial: { y: -140, opacity: 0, scale: 0.9 },
    desktopTextInitial: { y: 40, opacity: 0 },
    delay: 0.25,
  },
  {
    id: "nail-art",
    category: "BESPOKE ARTISTRY",
    title: "NAIL ART",
    description:
      "Express your individuality with detailed nail artistry, custom extensions, and elegant finishes in Nagercoil.",
    image: "/images/art.jpg",
    imageAlt:
      "Creative nail art and luxury nail extensions in Nagercoil at Touch Bridal",
    ctaText: "EXPLORE",
    ctaHref: "/services",
    ctaAriaLabel:
      "Explore salon services in Nagercoil",
    isExternal: false,
    isTopTextOnDesktop: true, // Column 4: Text top, Image below
    // Reveals from outside RIGHT
    desktopImageInitial: { x: 140, y: 30, opacity: 0, scale: 0.9 },
    desktopTextInitial: { y: -40, opacity: 0 },
    delay: 0.35,
  },
];

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": ["BeautySalon", "HairSalon"],
  name: "Touch Bridal Makeover Studio & Unisex Salon",
  image: "https://touchbridal.com/images/studio.jpg",
  description:
    "Bespoke bridal and groom makeover transformations, luxury unisex salon hair & skin care, exclusive wedding jewelry rentals, and statement nail artistry in Nagercoil, Tamil Nadu.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "215 B Sargunaveethi, Pothys Backside, Ramavarmapuram",
    addressLocality: "Nagercoil",
    addressRegion: "Tamil Nadu",
    postalCode: "629001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 8.1833,
    longitude: 77.4119,
  },
  telephone: "+919789376174",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Editorial Bridal, Groom & Salon Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Unisex Salon Services",
          description:
            "Refined hair styling, luxury skin treatments, facials, and precision grooming for men and women in Nagercoil.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bridal Makeover Studio & Groom Makeover",
          description:
            "Complete bridal and groom beauty experiences, HD makeup, and styling in Nagercoil.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wedding & Bridal Jewelry Rentals",
          description:
            "Curated bridal jewelry, antique temple sets, crowns, and wedding accessories available for rent in Nagercoil.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Creative Nail Art & Extensions",
          description:
            "Detailed nail artistry, custom extensions, and elegant finishes in Nagercoil.",
        },
      },
    ],
  },
};

export default function EditorialServicesMosaic() {
  return (
  <section
  id="services-expertise"
  className={`${interTight.className} relative overflow-hidden px-2 pb-2 pt-0 sm:px-3 sm:pb-3 lg:px-4 lg:pb-4 mt-4 sm:mt-6 lg:mt-10`}
>
      {/* Schema.org Structured Data for Local SEO & Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* Container matching Hero max-w-[1320px] and bg-[#F1EDF7] */}
      <div className="relative mx-auto w-full max-w-[1320px] overflow-hidden bg-[#F1EDF7] px-5 py-12 text-[#25232A] sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        {/* ATTRACTIVE SECTION HEADER WITH ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex flex-col items-center text-center sm:mb-14"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.15em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.32em" }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-3 text-[10px] font-bold uppercase tracking-[0.32em] text-[#9677bb] sm:text-xs"
          >
            SERVICES &amp; EXPERTISE
          </motion.p>
          <h2
            className={`${interTight.className} max-w-4xl text-[clamp(2.3rem,4.8vw,4.5rem)] font-bold uppercase leading-[1] tracking-[-0.02em] text-[#25232A]`}
          >
            ONE SIGNATURE{" "}
            <span className="text-[#8D6CA3]">TOUCH.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#716B76] sm:text-[15px]">
            Looking for a premier makeover salon in Nagercoil? Experience bespoke bridal transformations, luxury unisex salon care, exclusive wedding rentals, and statement nail artistry at Touch Bridal.
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 h-px w-14 origin-center bg-[#8D6CA3]/30"
          />
        </motion.div>

        {/* 4-COLUMN ASYMMETRICAL EDITORIAL MOSAIC GRID */}
        {/* All images have the exact same height; all text cards have the exact same height */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6">
          {serviceCategories.map((item) => {
            // UNIFORM HEIGHT INFORMATION CARD WITH ANIMATED REVEAL
            const infoCardNode = (
              <motion.div
                key={`text-${item.id}`}
                initial={item.desktopTextInitial}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.85,
                  delay: item.delay + 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="group flex h-[230px] w-full flex-col justify-between border border-[#8D6CA3]/15 bg-white/95 p-6 shadow-[0_4px_20px_rgba(37,35,42,0.04)] backdrop-blur-sm transition-colors duration-400 hover:border-[#8D6CA3]/40 hover:bg-white hover:shadow-[0_14px_32px_rgba(141,108,163,0.14)] sm:h-[240px] sm:p-7 lg:h-[250px]"
              >
                <div>
                  {/* Category small box label (no numbering, no ovals) */}
                  <div className="flex items-center justify-between">
                    <span className="border border-[#8D6CA3]/30 bg-[#F1EDF7] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#8D6CA3] transition-colors duration-300 group-hover:border-[#8D6CA3] group-hover:bg-[#8D6CA3] group-hover:text-white">
                      {item.category}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="mt-4 text-base font-bold uppercase tracking-[-0.01em] text-[#25232A] transition-colors duration-300 group-hover:text-[#8D6CA3] sm:text-lg">
                    {item.isExternal ? (
                      <a
                        href={item.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#8D6CA3] transition-colors"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <Link
                        href={item.ctaHref}
                        className="hover:text-[#8D6CA3] transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                  </h3>

                  {/* Supporting Text */}
                  <p className="mt-2 text-xs font-normal leading-relaxed text-[#716B76] sm:text-[13px] sm:leading-6">
                    {item.description}
                  </p>
                </div>

                {/* BOXED EXPLORE CTA */}
                <div className="pt-2">
                  {item.isExternal ? (
                    <a
                      href={item.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.ctaAriaLabel}
                      className="inline-flex items-center justify-center border border-[#8D6CA3]/35 bg-white px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#25232A] shadow-sm transition-all duration-300 hover:scale-[1.04] hover:border-[#8D6CA3] hover:bg-[#8D6CA3] hover:text-white hover:shadow active:scale-95"
                    >
                      {item.ctaText}
                    </a>
                  ) : (
                    <Link
                      href={item.ctaHref}
                      aria-label={item.ctaAriaLabel}
                      className="inline-flex items-center justify-center border border-[#8D6CA3]/35 bg-white px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#25232A] shadow-sm transition-all duration-300 hover:scale-[1.04] hover:border-[#8D6CA3] hover:bg-[#8D6CA3] hover:text-white hover:shadow active:scale-95"
                    >
                      {item.ctaText}
                    </Link>
                  )}
                </div>
              </motion.div>
            );

            // UNIFORM HEIGHT IMAGE CARD (Reveals dynamically from outside the layout)
            const imageCardNode = (
              <motion.div
                key={`image-${item.id}`}
                initial={item.desktopImageInitial}
                whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.95,
                  delay: item.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative h-[320px] w-full overflow-hidden border border-[#8D6CA3]/15 bg-[#E4D9ED] shadow-[0_4px_20px_rgba(37,35,42,0.04)] transition-shadow duration-500 hover:shadow-[0_20px_45px_rgba(141,108,163,0.22)] sm:h-[350px] lg:h-[380px]"
              >
                {item.isExternal ? (
                  <a
                    href={item.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.ctaAriaLabel}
                    className="block relative h-full w-full overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    {/* Luxury diagonal light shimmer on hover */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-1000 group-hover:inset-full group-hover:opacity-100"
                    />
                    {/* Subtle dark tint on hover for depth */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />
                  </a>
                ) : (
                  <Link
                    href={item.ctaHref}
                    aria-label={item.ctaAriaLabel}
                    className="block relative h-full w-full overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    {/* Luxury diagonal light shimmer on hover */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-1000 group-hover:inset-full group-hover:opacity-100"
                    />
                    {/* Subtle dark tint on hover for depth */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />
                  </Link>
                )}
              </motion.div>
            );

            return (
              <div
                key={item.id}
                className="flex flex-col gap-5 sm:gap-6"
              >
                {/* 
                  DESKTOP VS MOBILE ORDERING:
                  On Mobile (< lg):
                    Always show Image first, then Information card second
                  On Desktop (lg):
                    Column 1 & 3: Image (top) -> Text (bottom)
                    Column 2 & 4: Text (top) -> Image (bottom)
                */}
                {item.isTopTextOnDesktop ? (
                  <>
                    {/* On Desktop: Text is top */}
                    <div className="order-2 lg:order-1">{infoCardNode}</div>
                    {/* On Desktop: Image is bottom */}
                    <div className="order-1 lg:order-2">{imageCardNode}</div>
                  </>
                ) : (
                  <>
                    {/* On Desktop: Image is top */}
                    <div className="order-1">{imageCardNode}</div>
                    {/* On Desktop: Text is bottom */}
                    <div className="order-2">{infoCardNode}</div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
