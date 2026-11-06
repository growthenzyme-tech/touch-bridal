"use client";

import { useRef, useState } from "react";
import { useScroll, useTransform } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { Inter_Tight } from "next/font/google";


gsap.registerPlugin(useGSAP);

// Tall, condensed display font for the headline (like the reference design).
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});


const bridalImages = [
  {
    src: "/images/hero/brid.jpg",
    alt: "Touch Bridal signature bridal makeover",
    label: "Bridal Makeup",
  },
  {
    src: "/images/hero/Groomm.jpg",
    alt: "Touch Bridal groom makeover and styling",
    label: "Groom Styling",
  },
  {
    src: "/images/hero/wedding.jpg",
    alt: "Touch Bridal wedding couple styling",
    label: "Wedding Styling",
  },
  {
    src: "/images/hero/rental.jpg",
    alt: "Touch Bridal wedding and bridal jewelry rentals",
    label: "Wedding Rentals",
  },
  {
    src: "/images/hero/nail.jpg",
    alt: "Touch Bridal creative nail art and extensions",
    label: "Nail Artistry",
  },
];

const paragraphText =
  "Discover professional bridal makeup, groom makeover styling, unisex salon services, wedding rental collections and creative nail art at Touch Bridal Makeover Studio & Unisex Salon. Your destination for beauty, grooming and wedding styling.";

// TODO: replace these placeholder details with your real information.
const happyCount = "500+";

const trustPoints = [
  { title: "Free Consultation", detail: "before your big day" },
  { title: "Premium Products", detail: "skin-safe & long lasting" },
];

const navLinks = [
  { name: "Home", href: "/", chevron: false },
  { name: "Services", href: "/services", chevron: true },
  { name: "Bridal Gallery", href: "/gallery", chevron: false },
];

// const services = [
//   { number: "01", title: "Bridal Makeup", detail: "Your signature look" },
//   { number: "02", title: "Hair Styling", detail: "Beautifully finished" },
//   { number: "03", title: "Beauty Services", detail: "Care made personal" },
//   { number: "04", title: "Bridal Gallery", detail: "Explore our work" },
// ];
const services = [
  {
    number: "01",
    title: "Unisex Salon",
    detail: "Beauty & Grooming",
  },
  {
    number: "02",
    title: "Bridal Makeover Studio",
    detail: "Your perfect bridal look",
  },
  {
    number: "03",
    title: "Wedding Rentals",
    detail: "Exclusive wedding collections",
  },
  {
    number: "04",
    title: "Nail Arts",
    detail: "Creative nail designs",
  },
];

/* ---------- Small inline icons ---------- */

type IconProps = { className?: string };

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function SearchIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function HeartIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
    </svg>
  );
}

function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ArrowIcon({ className, direction = "right" }: IconProps & { direction?: "left" | "right" }) {
  return (
    <svg {...iconProps} className={className}>
      {direction === "right" ? (
        <path d="M5 12h14m-6-6 6 6-6 6" />
      ) : (
        <path d="M19 12H5m6-6-6 6 6 6" />
      )}
    </svg>
  );
}

function CalendarIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <rect x="4" y="5" width="16" height="15" rx="2.5" />
      <path d="M8 3v4m8-4v4M4 10h16" />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function SparkIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <path d="M12 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7Z" />
    </svg>
  );
}

/* ---------- Component ---------- */

export default function BridalHero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const servicesTrackRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(0);

  /*
    IMAGE FLOW (all images are used, add as many as you like to bridalImages):

      featured card  ->  main arch  ->  bottom photo

    Left arrow  : featured -> main, main -> bottom, and the next image in the
                  list comes into the featured card.
    Right arrow : the exact reverse.

    The images are a ring, so after the last image the first one comes back.
  */
  const total = bridalImages.length;
  const wrap = (index: number) => ((index % total) + total) % total;

  const mainImage = bridalImages[wrap(active)];
  const featuredImage = bridalImages[wrap(active + 1)]; // moves to main next
  const smallImage = bridalImages[wrap(active - 1)]; // was in main before

  // Left arrow: featured -> main, main -> bottom
  const goLeft = () => setActive((current) => wrap(current + 1));

  // Right arrow: the exact reverse
  const goRight = () => setActive((current) => wrap(current - 1));

  // Gentle parallax on the main arch image while scrolling.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const archY = useTransform(scrollYProgress, [0, 1], [0, 60]);

 
useGSAP(
  () => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Eyebrow: smooth fade-up
      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.1,
      );

      // Heading: smooth fade-up with subtle scale
      tl.fromTo(
        ".hero-line",
        {
          opacity: 0,
          y: 35,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.18,
          ease: "power3.out",
        },
        0.2,
      );

      // Description
      tl.fromTo(
        ".hero-description",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.7,
      );

      // CTA buttons: smooth fade-up
      tl.fromTo(
        ".hero-cta",
        {
          opacity: 0,
          y: 20,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        1.5,
      );

      // Other hero elements
      tl.fromTo(
        ".hero-fade",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
        },
        0.9,
      );

      // Hero visual
      tl.fromTo(
        ".hero-visual",
        {
          opacity: 0,
          y: 35,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
        },
        0.3,
      );

      // Floating info cards
      gsap.to(".float-card", {
        y: -8,
        duration: 2.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });
    });

    // Reduced motion accessibility
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(
        ".hero-eyebrow, .hero-line, .hero-description, .hero-fade, .hero-cta, .hero-visual",
        {
          opacity: 1,
          y: 0,
          scale: 1,
        },
      );
    });

    return () => mm.revert();
  },
  { scope: contentRef },
);


  const whatsappLink =
    "https://wa.me/919789376174?text=" +
    encodeURIComponent(
      "Hi, I would like to enquire about bridal makeup and salon appointments.",
    );



    
  // Continuous right-to-left services marquee
  useGSAP(
    () => {
      const track = servicesTrackRef.current;
      if (!track) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const animation = gsap.to(track, {
          xPercent: -50,
          duration: 24,
          ease: "none",
          repeat: -1,
        });

        return () => animation.kill();
      });

      return () => mm.revert();
    },
    { scope: contentRef }
  );


return (
  <section
    ref={heroRef}
    className="relative overflow-hidden px-2 pb-2 pt-14 sm:px-3 sm:pb-3 sm:pt-16 lg:px-4 lg:pb-4 lg:pt-22 xl:pt-24"
  >
    {/* Hero main container */}
    <div
      ref={contentRef}
      className="relative mx-auto w-full max-w-[1320px] overflow-hidden bg-[#F1EDF7] text-[#25232A]"
    >
      {/* HERO */}
      <div className="px-5 pb-3 pt-8 sm:px-8 sm:pb-4 sm:pt-10 lg:px-12 lg:pb-4 lg:pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
          {/* LEFT: HEADLINE AND BOOKING */}
          <div className="relative z-10 flex flex-col items-start">
            <p
  className={`${interTight.className} hero-eyebrow mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#9675ba] opacity-0 sm:text-xs`}
>
  Touch Bridal Makeover Studio & Unisex Salon
</p>

        <h1
  className={`${interTight.className} text-[clamp(2.15rem,4.5vw,4.3rem)] font-bold uppercase leading-[1.03] tracking-[-0.02em] text-[#25232A]`}
>
  <span className="hero-line block opacity-0">
    Bridal Makeup,
  </span>

  <span className="hero-line block opacity-0">
    Groom Styling
  </span>

  <span className="hero-line block text-[#8D6CA3] opacity-0">
    & Beauty in Nagercoil.
  </span>
</h1>

            <p className="hero-description mt-7 max-w-[400px] text-sm leading-7 text-[#716B76] opacity-0 sm:text-[15px]">
              {paragraphText}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* PRIMARY: BOOK APPOINTMENT */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta opacity-0 group relative isolate inline-flex min-h-12 items-center justify-center gap-2.5 overflow-hidden border border-[#8D6CA3]/30 bg-[#8D6CA3] px-7 text-xs font-semibold tracking-[0.04em] text-white shadow-[0_8px_24px_rgba(141,108,163,0.22)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#76558D] hover:shadow-[0_12px_30px_rgba(141,108,163,0.3)]"
              >
                <span className="relative">
                  Book an Appointment
                </span>
              </a>

              {/* SECONDARY: BRIDAL GALLERY */}
              <Link
                href="/gallery"
                className="hero-cta opacity-0 group relative isolate inline-flex min-h-12 items-center justify-center gap-2.5 overflow-hidden border border-[#8D6CA3]/25 bg-white/75 px-7 text-xs font-semibold tracking-[0.04em] text-[#25232A] shadow-[0_5px_18px_rgba(37,35,42,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#8D6CA3]/50 hover:bg-white"
              >
                <span className="relative">
                 Bridal Gallery
                </span>
              </Link>
            </div>

            {/* HAPPY BRIDES */}
            <div className="hero-fade mt-8 flex items-center gap-3 opacity-0">
              <div className="flex -space-x-2.5">
                {bridalImages.map((image) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt=""
                    loading="lazy"
                    className="h-9 w-9 rounded-full border-2 border-[#F1EDF7] object-cover"
                  />
                ))}
              </div>

              <div className="leading-tight">
                <p
                  className={`${interTight.className} text-lg font-semibold text-[#25232A]`}
                >
                  {happyCount}
                </p>

                <p className="text-[10px] text-[#817887]">
                  Happy Brides &amp; Grooms
                </p>
              </div>
            </div>
          </div>

        
{/* RIGHT: ANIMATED IMAGE FLOW */}
<div className="hero-visual relative mx-auto h-[430px] w-full max-w-[560px] opacity-0 sm:h-[540px] lg:h-[630px] lg:max-w-none">

  {/* Soft backdrop shape */}
  <div className="absolute inset-x-[8%] bottom-0 top-[14%] rounded-[44px] bg-[#E4D9ED]" />

   
{/* MAIN ARCH IMAGE */}
<div
  className="absolute right-[6%] top-[2%] h-[88%] w-[65%]"
>
  <div className="relative h-full w-full overflow-hidden rounded-b-[32px] rounded-t-[999px] bg-[#D8C8E4] shadow-[0_30px_60px_-30px_rgba(37,35,42,0.35)]">

    <img
      key={mainImage.src}
      src={mainImage.src}
      alt={mainImage.alt}
      loading="eager"
      draggable={false}
      className="absolute inset-0 h-full w-full object-cover"
    />

    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#25232A]/35 via-transparent to-transparent" />

  </div>
</div>


    {/* SMALL OVERLAPPING PHOTO */}
   
{/* SMALL OVERLAPPING PHOTO */}
<div className="float-card absolute bottom-[3%] left-[1%] w-[30%] max-w-[170px]">

  <div className="aspect-[3/4] overflow-hidden rounded-2xl border-[5px] border-[#F1EDF7] shadow-[0_18px_36px_-18px_rgba(37,35,42,0.35)]">

    <img
      key={smallImage.src}
      src={smallImage.src}
      alt={smallImage.alt}
      loading="eager"
      draggable={false}
      className="h-full w-full object-cover"
    />

  </div>
</div>


    {/* FEATURED LOOK CARD */}
    <div className="float-card absolute right-0 top-[5%] w-[46%] max-w-[215px]">

      <div className="border border-[#8D6CA3]/10 bg-white/95 p-3 shadow-[0_18px_40px_-20px_rgba(37,35,42,0.25)] backdrop-blur">

        <div className="flex items-center gap-2.5">

     
<img
  key={featuredImage.src}
  src={featuredImage.src}
  alt={featuredImage.alt}
  loading="eager"
  draggable={false}
  className="h-11 w-11 shrink-0 object-cover sm:h-12 sm:w-12"
/>


          <div className="min-w-0 leading-tight">

            <p className="text-[8px] uppercase tracking-[0.14em] text-[#817887] sm:text-[9px]">
              Featured Look
            </p>

            <p className="truncate text-[11px] font-semibold text-[#25232A] sm:text-xs">
              {featuredImage.label}
            </p>

            <p className="mt-0.5 text-[8px] text-[#817887] sm:text-[9px]">
              Start Booking
            </p>

          </div>
        </div>

        {/* NAVIGATION ARROWS */}
        <div className="mt-3 flex items-center justify-end gap-2">

          <button
            type="button"
            aria-label="Previous look"
            onClick={goLeft}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-[#8D6CA3]/25 text-[#25232A] transition-colors hover:bg-[#8D6CA3] hover:text-white"
          >
            <ArrowIcon direction="left" className="h-3 w-3" />
          </button>

          <button
            type="button"
            aria-label="Next look"
            onClick={goRight}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-[#8D6CA3]/25 text-[#25232A] transition-colors hover:bg-[#8D6CA3] hover:text-white"
          >
            <ArrowIcon className="h-3 w-3" />
          </button>

        </div>

      </div>
    </div>

 
</div>

        </div>

        {/* SERVICES STRIP */}
        
  {/* CONTINUOUS SERVICES MARQUEE */}
  <div className="mt-10 overflow-hidden rounded-2xl border border-[#8D6CA3]/15 bg-white/60 py-5 sm:mt-12 sm:py-6">

    <div
      ref={servicesTrackRef}
      className="flex w-max will-change-transform"
    >

      {/* FIRST SERVICES GROUP */}
      <div className="flex shrink-0 items-center gap-10 px-5 sm:gap-16 sm:px-8 lg:gap-20">

        {services.map((item) => (
          <div
            key={item.number}
            className="flex shrink-0 items-center gap-3"
          >
            {/* <span
              className={`${interTight.className} text-sm font-semibold text-[#8D6CA3]`}
            >
              {item.number}
            </span> */}

            <div className="min-w-max">
              <p className="text-xs uppercase tracking-wide font-semibold text-[#25232A] sm:text-sm">
                {item.title}
              </p>

              <p className="mt-1 text-[10px] text-[#817887] sm:text-xs">
                {item.detail}
              </p>
            </div>

            <span
              aria-hidden="true"
              className="ml-5 h-2 w-2 rounded-full bg-[#8D6CA3]/50 sm:ml-8"
            />
          </div>
        ))}

      </div>

      {/* DUPLICATE GROUP FOR SEAMLESS LOOP */}
      <div
        aria-hidden="true"
        className="flex shrink-0 items-center gap-10 px-5 sm:gap-16 sm:px-8 lg:gap-20"
      >

        {services.map((item) => (
          <div
            key={`duplicate-${item.number}`}
            className="flex shrink-0 items-center gap-3"
          >
            {/* <span
              className={`${interTight.className} text-sm font-semibold text-[#8D6CA3]`}
            >
              {item.number}
            </span> */}

            <div className="min-w-max">
              <p className="text-xs uppercase tracking-wide font-semibold text-[#25232A] sm:text-sm">
                {item.title}
              </p>

              <p className="mt-1 text-[10px] text-[#817887] sm:text-xs">
                {item.detail}
              </p>
            </div>

            <span
              className="ml-5 h-2 w-2 rounded-full bg-[#8D6CA3]/50 sm:ml-8"
            />
          </div>
        ))}

      </div>

    </div>
  </div>


        {/* FOOTER NOTE */}
      </div>
    </div>
  </section>
);
}