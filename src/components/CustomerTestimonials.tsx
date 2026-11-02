"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Inter_Tight, Cormorant_Garamond } from "next/font/google";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const reviewsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "Touch Bridal Makeover Studio, 215 B Sargunaveethi, Nagercoil, Tamil Nadu, India",
  );

const reviews = [
  {
    id: "01",
    name: "Ananya R.",
    initial: "A",
    service: "Bridal Makeup",
    quote:
      "My bridal makeup was absolutely beautiful. The team understood exactly what I wanted and made my day extra special.",
  },
  {
    id: "02",
    name: "Meera S.",
    initial: "M",
    service: "Wedding Look",
    quote:
      "Wonderful experience from beginning to end. The makeup was elegant, comfortable, and lasted throughout my wedding.",
  },
  {
    id: "03",
    name: "Priya K.",
    initial: "P",
    service: "Hair & Makeup",
    quote:
      "Loved every detail of my makeover. The team was welcoming, professional, and incredibly talented.",
  },
  {
    id: "04",
    name: "Aaradhya N.",
    initial: "A",
    service: "Wedding Styling",
    quote:
      "The hairstyle and makeup were exactly what I imagined. I felt confident and beautiful all day.",
  },
 
];

function Stars({ className = "" }: { className?: string }) {
  return (
    <div
      className={`text-[15px] leading-none tracking-[3px] text-[#f5a623] ${className}`}
      role="img"
      aria-label="5 out of 5 stars"
    >
      ★★★★★
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="flex h-full flex-col border border-[#E6DEF0] bg-[#F1EDF7] p-5 transition-shadow duration-300 hover:shadow-[0_16px_36px_-20px_rgba(141,108,163,0.55)] sm:p-6">
      <div className="flex items-center justify-between">
        <Stars />

        <span
          className={`${cormorant.className} text-5xl leading-none text-[#8D6CA3]/40`}
          aria-hidden="true"
        >
          &rdquo;
        </span>
      </div>

      <p className="mt-3 flex-1 text-[15px] leading-[1.7] text-[#25232A]">
        {review.quote}
      </p>

      <div className="mt-5 flex items-center gap-3 border-t border-[#8D6CA3]/15 pt-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8D6CA3] text-xs font-semibold text-white">
          {review.initial}
        </div>

        <div className="min-w-0">
          <p className="text-[13px] font-semibold leading-tight text-[#25232A]">
            {review.name}
          </p>

          <p className="mt-0.5 text-[11px] font-medium text-[#8D6CA3]">
            {review.service}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function CustomerTestimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          section.querySelectorAll(".testimonial-reveal"),
          {
            y: 22,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  const lastIndex = reviews.length - 1;

  return (
    <section
      ref={sectionRef}
      className={`${interTight.className} -mt-6 bg-transparent px-3 py-5 sm:-mt-10 sm:px-5 sm:py-8 lg:-mt-14 lg:px-8 lg:py-10`}
    >
      {/* SECTION WIDTH: 1320px */}
      <div className="mx-auto w-full max-w-[1320px]">
        {/* WHITE SECTION BACKGROUND */}
        <div className="overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
          <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[0.78fr_1.6fr] lg:gap-6">
            {/* LEFT: PURPLE INTRO PANEL (fills the height of the reviews) */}
           <div className="testimonial-reveal relative flex min-h-[440px] flex-col justify-between gap-6 overflow-hidden bg-[#8D6CA3] p-6 text-white sm:min-h-[480px] sm:gap-8 sm:p-7 lg:min-h-[520px] lg:p-8">
              {/* Decorative quote mark */}
              <span
                aria-hidden="true"
                className={`${cormorant.className} pointer-events-none absolute -right-2 -top-6 text-[180px] leading-none text-white/10`}
              >
                &ldquo;
              </span>

              {/* TOP: HEADING */}
              <div className="relative">
               <p className="services-intro-item mb-4 ml-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/80 sm:text-xs">
  Testimonials
</p>

                <h2
  className={`${interTight.className} mt-4 text-[clamp(2.3rem,4.8vw,4.5rem)] font-bold leading-[1] tracking-[-0.02em]`}
>
  What our clients say{" "}
  <span className="text-[#E6DAF2]">about us</span>
</h2>

                <p className="mt-5 max-w-[340px] text-sm leading-7 text-white/85">
                  Heartfelt words from our brides and clients, shared in their
                  own voice.
                </p>
              </div>

              {/* MIDDLE: SERVICES OUR CLIENTS LOVED (same labels as the review cards) */}
             

              {/* BOTTOM: REVIEWERS AND BUTTON */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="flex">
                    {reviews.map((review) => (
                      <span
                        key={review.id}
                        className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#8D6CA3] bg-white text-xs font-semibold text-[#8D6CA3] first:ml-0"
                      >
                        {review.initial}
                      </span>
                    ))}
                  </div>

                  <div>
                    <Stars className="!text-[#FFD27A]" />
                    <p className="mt-1.5 text-[12px] text-white/85">
                      Loved by our brides
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: REVIEWS (two per row, the last one centred) */}
            {/* RIGHT: REVIEWS — 2 × 2 GRID */}
<div className="grid grid-cols-1 content-start gap-5 sm:grid-cols-2">
  {reviews.slice(0, 4).map((review) => (
    <div
      key={review.id}
      className="testimonial-reveal h-full"
    >
      <ReviewCard review={review} />
    </div>
  ))}
</div>
          </div>
        </div>
      </div>
    </section>
  );
}