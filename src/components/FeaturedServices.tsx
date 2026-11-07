"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useRef, useState, useCallback, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Cormorant_Garamond,Inter_Tight } from "next/font/google";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Same heading font as the other sections.
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

/*
  Colour guide (this section sits on the dark brown page background):
  gold accent      #e7c895
  heading / text   #fff7ec
  muted text       white at 70-75%
  card background  #f7f1e9 with brown text #2d1b13
  card accent      #8b4a28
*/

const services = [
  {
    number: "01",
    title: "Bridal & Groom Makeovers",
    description:
      "Beautiful bridal makeup, groom styling and special occasion looks tailored to your special day.",
    image: "/makeover 2.jpg",
    image2: "/makeover.jpg",
    imageAlt: "Bridal makeup and wedding makeover",
    image2Alt: "Groom makeover and wedding styling",
    tag: "BRIDAL BEAUTY",
  },
  {
    number: "02",
    title: "Hair Care & Styling",
    description:
      "Haircuts, styling, colouring and hair treatments for both men and women.",
    image: "/hair.jpg",
    image2: "/care 1.jpg",
    imageAlt: "Professional hair styling and hair care",
    image2Alt: "Hair styling for men and women",
    tag: "HAIR CARE",
  },
  {
    number: "03",
    title: "Skin Care for Men & Women",
    description:
      "Refreshing facials and skincare treatments to help everyone look and feel their best.",
    image: "/spa1.jpg",
    image2: "/spa.jpg",
    imageAlt: "Professional skincare and facial treatments",
    image2Alt: "Skincare treatment for men and women",
    tag: "UNISEX SKIN CARE",
  },
  {
    number: "04",
    title: "Beauty & Personal Care",
    description:
      "Makeup, beauty treatments and finishing touches for men and women, for everyday care and special occasions.",
    image: "/waxx.jpg",
    image2: "/waxx1.jpg",
    imageAlt: "Beauty treatments and personal care",
    image2Alt: "Professional beauty and makeup services",
    tag: "BEAUTY SERVICES",
  },
];

const featureHighlights = [
  {
    icon: "✳",
    title: "PERSONALIZED BEAUTY",
    text: "Looks created for you",
  },
  {
    icon: "♡",
    title: "EXPERT ARTISTRY",
    text: "Care in every detail",
  },
  {
    icon: "✧",
    title: "BEAUTY & GROOMING",
    text: "For every occasion",
  },
  {
    icon: "❋",
    title: "MADE FOR YOU",
    text: "Feel your very best",
  },
];

export default function FeaturedServices() {
  const introRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const maxScrollLeft = Math.max(
      0,
      carousel.scrollWidth - carousel.clientWidth,
    );

    const currentScrollLeft = carousel.scrollLeft;

    setCanScrollLeft(currentScrollLeft > 8);
    setCanScrollRight(currentScrollLeft < maxScrollLeft - 8);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    updateScrollButtons();

    const resizeObserver = new ResizeObserver(() => {
      updateScrollButtons();
    });

    resizeObserver.observe(carousel);

    window.addEventListener("resize", updateScrollButtons);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [updateScrollButtons]);



  const scrollServices = (direction: "left" | "right") => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const card = carousel.querySelector<HTMLElement>("[data-service-card]");

    if (!card) return;

    const carouselStyles = window.getComputedStyle(carousel);
    const gap = parseFloat(carouselStyles.columnGap) || 0;
    const scrollAmount = card.offsetWidth + gap;

    carousel.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  
// Mobile-only automatic service carousel


  // Mobile-only automatic service carousel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const mobileQuery = window.matchMedia("(max-width: 639px)");

    let masterTimeline: gsap.core.Timeline | null = null;
    let resumeTimeout: ReturnType<typeof setTimeout> | undefined;
    let isInteracting = false;

    const clearResumeTimeout = () => {
      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
        resumeTimeout = undefined;
      }
    };

    const createSlider = () => {
      masterTimeline?.kill();
      masterTimeline = null;

      if (!mobileQuery.matches || isInteracting) return;

      const cards = gsap.utils.toArray<HTMLElement>(
        "[data-service-card]",
        carousel
      );

      if (!cards.length) return;

      const timeline = gsap.timeline({
        repeat: -1,
      });

      masterTimeline = timeline;

      cards.forEach((card) => {
        const nextCard = card.nextElementSibling as HTMLElement | null;

        if (!nextCard) return;

        timeline.to(carousel, {
          scrollLeft: nextCard.offsetLeft - cards[0].offsetLeft,
          duration: 2,
          ease: "power2.inOut",
        });
      });

      // Smoothly return to the first card
      timeline.to(carousel, {
        scrollLeft: 0,
        duration: 2,
        ease: "power2.inOut",
      });
    };

    // Pause when the user interacts
    const pauseSlider = () => {
      if (!mobileQuery.matches) return;

      isInteracting = true;
      clearResumeTimeout();
      masterTimeline?.pause();
    };

    // Resume 3 seconds after interaction ends
    const resumeSlider = () => {
      if (!mobileQuery.matches) return;

      clearResumeTimeout();

      resumeTimeout = setTimeout(() => {
        isInteracting = false;

        if (masterTimeline) {
          masterTimeline.resume();
        } else {
          createSlider();
        }
      }, 3000);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        masterTimeline?.pause();
      } else if (!isInteracting && mobileQuery.matches) {
        masterTimeline?.resume();
      }
    };

    // Touch interactions
    carousel.addEventListener("touchstart", pauseSlider, {
      passive: true,
    });

    carousel.addEventListener("touchend", resumeSlider);
    carousel.addEventListener("touchcancel", resumeSlider);

    // Pointer interactions: click, drag and hover
    carousel.addEventListener("pointerdown", pauseSlider);
    carousel.addEventListener("pointerup", resumeSlider);
    carousel.addEventListener("pointercancel", resumeSlider);
    carousel.addEventListener("pointerenter", pauseSlider);
    carousel.addEventListener("pointerleave", resumeSlider);

    document.addEventListener("visibilitychange", handleVisibilityChange);
    mobileQuery.addEventListener("change", createSlider);

    createSlider();

    return () => {
      masterTimeline?.kill();
      clearResumeTimeout();

      carousel.removeEventListener("touchstart", pauseSlider);
      carousel.removeEventListener("touchend", resumeSlider);
      carousel.removeEventListener("touchcancel", resumeSlider);

      carousel.removeEventListener("pointerdown", pauseSlider);
      carousel.removeEventListener("pointerup", resumeSlider);
      carousel.removeEventListener("pointercancel", resumeSlider);
      carousel.removeEventListener("pointerenter", pauseSlider);
      carousel.removeEventListener("pointerleave", resumeSlider);

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );

      mobileQuery.removeEventListener("change", createSlider);
    };
  }, []);




  useGSAP(
    () => {
      const elements = gsap.utils.toArray<HTMLElement>(".services-intro-item");

      gsap.set(elements, {
        opacity: 0,
        y: 24,
      });

      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        clearProps: "transform",
      });
    },
    {
      scope: introRef,
    },
  );

  useGSAP(
    () => {
      const wrappers = gsap.utils.toArray<HTMLElement>(
        ".service-image-wrapper",
      );

      wrappers.forEach((wrapper) => {
        const firstImage =
          wrapper.querySelector<HTMLElement>(".service-image-first");

        const secondImage =
          wrapper.querySelector<HTMLElement>(".service-image-second");

        if (!firstImage || !secondImage) return;

        // Initial positions
        gsap.set(firstImage, {
          xPercent: 0,
          zIndex: 1,
        });

        gsap.set(secondImage, {
          xPercent: 100,
          zIndex: 2,
        });

        // Automatically alternate images when the card enters view
        const timeline = gsap.timeline({
          repeat: -1,
          repeatDelay: 0.5,
          scrollTrigger: {
            trigger: wrapper,
            start: "top 85%",
            toggleActions: "play pause resume pause",
          },
        });

        // First image exits left; second enters from right
        timeline
          .to(
            firstImage,
            {
              xPercent: -100,
              duration: 1.8,
              ease: "power2.inOut",
            },
            0,
          )
          .to(
            secondImage,
            {
              xPercent: 0,
              duration: 1.8,
              ease: "power2.inOut",
            },
            0,
          )

          // Prepare the first image to enter again from the right
          .set(firstImage, {
            xPercent: 100,
            zIndex: 2,
          })
          .set(secondImage, {
            zIndex: 1,
          })

          // Second image exits left; first image enters from right
          .to(
            secondImage,
            {
              xPercent: -100,
              duration: 1.8,
              ease: "power2.inOut",
            },
            "+=0.5",
          )
          .to(
            firstImage,
            {
              xPercent: 0,
              duration: 1.8,
              ease: "power2.inOut",
            },
            "<",
          )

          // Reset for the next automatic cycle
          .set(secondImage, {
            xPercent: 100,
            zIndex: 2,
          })
          .set(firstImage, {
            zIndex: 1,
          });
      });
    },
    { scope: carouselRef },
  );

  
return (
  <section
    id="featured-services"
    aria-labelledby="featured-services-heading"
    className="w-full bg-transparent px-2 pb-2 sm:px-3 sm:pb-3 lg:px-4 lg:pb-4"
  >
    {/* 1320px Services Container */}
    <div className="mx-auto w-full max-w-[1320px] overflow-hidden bg-[#f6f3fa] px-5 py-10 font-sans text-[#25232c] sm:px-7 sm:py-14 lg:px-10 lg:py-16">

      {/* FEATURE HIGHLIGHTS */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-5 border-b border-[#ded7e9] pb-6 sm:grid-cols-4 sm:gap-5 sm:pb-7">
        {featureHighlights.map((item) => (
          <div
            key={item.title}
            className="flex min-w-0 items-start gap-2.5 sm:gap-3"
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#9675ba]/40 text-lg text-[#9675ba]"
            >
              {item.icon}
            </span>

            <div className="min-w-0">
              <h3 className="text-[9px] font-bold leading-4 tracking-[0.1em] text-[#25232c] sm:text-[10px]">
                {item.title}
              </h3>

              <p className="mt-0.5 text-[11px] leading-4 text-[#77737f] sm:text-xs">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* INTRODUCTION AND SERVICE CARDS */}
      <div className="grid gap-10 pt-9 sm:pt-10 lg:grid-cols-[0.78fr_2fr] lg:items-center lg:gap-10 lg:pt-10">

        {/* LEFT INTRODUCTION */}
        <div
          ref={introRef}
          className="flex min-w-0 flex-col items-start justify-center"
        >
        <p className="services-intro-item mb-4 ml-2 text-[10px] font-bold uppercase leading-6 tracking-[0.24em] text-[#9675ba] sm:text-xs">
  OUR SERVICES
</p>

   <h2
  id="featured-services-heading"
  className={`${interTight.className} services-intro-item max-w-sm text-[clamp(2.3rem,4.8vw,4.5rem)] font-bold leading-[1] tracking-[-0.02em] text-[#25232A]`}
>
  WEDDING MAKEUP &{" "}
  <span className="text-[#8D6CA3]">
    BEAUTY SERVICES.
  </span>
</h2>

         <p className="services-intro-item mt-5 max-w-sm text-sm leading-7 text-[#77737f] sm:text-[15px]">
  Discover professional bridal and groom makeovers, hair styling, and beauty services for men and women at Touch Bridal Makeover Studio &amp; Unisex Salon in Nagercoil.
</p>

          <Link
            href="/services"
            className="services-intro-item group mt-8 inline-flex items-center gap-3 bg-[#9675ba] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#795a9d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9675ba]"
          >
            View All Services
          </Link>
        </div>

        {/* SERVICE CAROUSEL */}
        <div className="relative min-w-0">
          <div className="relative">

            {/* LEFT ARROW */}
            <button
              type="button"
              onClick={() => scrollServices("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll to previous services"
              className={`absolute left-0 top-[40%] z-20 hidden sm:flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-[#dcd2e9] bg-white text-lg text-[#9675ba] shadow-md transition-all duration-300 hover:bg-[#9675ba] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9675ba] ${
                canScrollLeft
                  ? "pointer-events-auto scale-100 opacity-100"
                  : "pointer-events-none scale-90 opacity-0"
              }`}
            >
              <span aria-hidden="true">←</span>
            </button>

            {/* RIGHT ARROW */}
            <button
              type="button"
              onClick={() => scrollServices("right")}
              disabled={!canScrollRight}
              aria-label="Scroll to next services"
              className={`absolute right-0 top-[40%] z-20 hidden sm:flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center border border-[#dcd2e9] bg-white text-lg text-[#9675ba] shadow-md transition-all duration-300 hover:bg-[#9675ba] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9675ba] ${
                canScrollRight
                  ? "pointer-events-auto scale-100 opacity-100"
                  : "pointer-events-none scale-90 opacity-0"
              }`}
            >
              <span aria-hidden="true">→</span>
            </button>

            {/* SCROLLABLE SERVICE CARDS */}
            <div
              ref={carouselRef}
              onScroll={updateScrollButtons}
              className="flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {services.map((service, index) => (
                <motion.article
                  key={service.number}
                  data-service-card
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="group w-[82%] min-w-0 shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[31%]"
                >
                  <Link
                    href={`/?service=${encodeURIComponent(service.title)}#booking`}
                    aria-label={`Enquire about ${service.title}`}
                    className={`${interTight.className} flex h-full flex-col border border-[#e8e1ef] bg-white text-[#25232c] shadow-[0_10px_30px_rgba(56,39,76,0.07)] outline-offset-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(56,39,76,0.13)] focus-visible:outline-2 focus-visible:outline-[#9675ba]`}
                  >
                    {/* IMAGE AREA */}
                    <div className="service-image-wrapper relative aspect-[4/5] shrink-0 overflow-hidden bg-[#eee8f8]">

                      {/* First image */}
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        loading="lazy"
                        className="service-image-first absolute inset-0 z-0 h-full w-full object-cover"
                      />

                      {/* Second image */}
                      <img
                        src={service.image2}
                        alt={service.image2Alt}
                        loading="lazy"
                        className="service-image-second absolute inset-0 z-[1] h-full w-full object-cover"
                      />

                      {/* Image overlay */}
                      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[#25232c]/70 via-transparent to-transparent" />

                      {/* Category label */}
                      <span className="absolute left-4 top-4 z-10 bg-white px-3 py-2 text-[8px] font-bold uppercase tracking-[0.16em] text-[#795a9d] sm:text-[9px]">
                        {service.tag}
                      </span>

                      {/* Service number */}
                      <span className="absolute right-4 top-4 z-10 text-[11px] font-bold tracking-[0.14em] text-white drop-shadow">
                        {service.number} / 04
                      </span>

                      {/* Image CTA */}
                     <div className="absolute bottom-5 left-4 right-4 z-10 flex items-center justify-between">
  <button
    type="button"
    className="border border-white/80 bg-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#795a9d] transition-all duration-300 hover:bg-[#795a9d] hover:text-white"
  >
    Enquiry
  </button>
</div>
                    </div>

                    {/* CARD INFORMATION */}
                    <div className="flex flex-1 flex-col bg-white px-5 pb-5 pt-5">

                    <h3
  className={`${interTight.className} text-[24px] font-semibold leading-tight text-[#25232c] sm:text-[26px]`}
>
  {service.title}
</h3>

                      <p className="mt-2 text-[12px] leading-[1.8] text-[#77737f] sm:text-[13px]">
                        {service.description}
                      </p>

                    
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

}