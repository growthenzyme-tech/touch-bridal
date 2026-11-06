"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});



gsap.registerPlugin(ScrollTrigger, useGSAP);



const galleryImages = [
  {
    src: "/images/bridal-gallery/bridal1.jpg",
    alt: "Touch Bridal Signature Makeover Look 1",
  },
  {
    src: "/images/bridal-gallery/bridal2.jpg",
    alt: "Touch Bridal Traditional Makeover Look 2",
  },
  {
    src: "/images/bridal-gallery/bridal3.jpg",
    alt: "Touch Bridal Wedding Hair Styling Look 3",
  },
  {
    src: "/images/bridal-gallery/bridal4.jpg",
    alt: "Touch Bridal Radiant Makeover Look 4",
  },
  {
    src: "/images/bridal-gallery/bridal5.jpg",
    alt: "Touch Bridal Royal Adornment Look 5",
  },
  {
    src: "/images/bridal-gallery/bridal6.jpg",
    alt: "Touch Bridal Classic Elegance Look 6",
  },
  {
    src: "/images/bridal-gallery/bridal7.jpg",
    alt: "Touch Bridal Bespoke Wedding Styling Look 7",
  },
  {
    src: "/images/bridal-gallery/bridal8.jpg",
    alt: "Touch Bridal Modern Wedding Look 8",
  },
];

export default function BridalGalleryPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Animate the text
      gsap.from(".bridal-gallery-text", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Animate all eight images individually
      gsap.fromTo(
        ".bridal-collage-image",
        {
          opacity: 0,
          scale: 1.08,
          y: 14,
          transformOrigin: "50% 50%",
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );
  const collageImageClass =
    "bridal-collage-image origin-center [transform-box:fill-box] transition-[filter] duration-300 hover:[filter:brightness(1.07)_saturate(1.05)] motion-reduce:transition-none";
  return (
    <section
      ref={sectionRef}
      className="relative -mt-4 bg-white px-4 pb-16 pt-0 sm:-mt-6 sm:px-6 sm:pb-20 sm:pt-0 lg:-mt-8 lg:px-0"
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div
          className={`overflow-hidden bg-white p-5 sm:p-8 lg:p-12 ${interTight.className}`}
        >
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">

            {/* LEFT CONTENT */}
            <div className="bridal-gallery-text">
              <span
                className={`${interTight.className} mb-4 ml-2 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#9675BA] sm:text-xs`}
              >
                OUR BRIDAL GALLERY
              </span>

              <h2
                className={`${interTight.className} max-w-[520px] text-[clamp(2.3rem,4.8vw,4.5rem)] font-bold uppercase leading-[1] tracking-[-0.02em] text-[#25232A]`}
              >
                <span className="block">
                  Every bride,
                </span>

                <span className="block text-[#8D6CA3]">
                  beautifully unique.
                </span>
              </h2>
              <p className="mt-5 max-w-[430px] text-sm leading-7 text-[#786354] sm:text-base">
                Explore our bridal makeup and styling looks, thoughtfully
                created to celebrate your most special moments.
              </p>

              <Link
                href="/bridal-gallery"
                className="mt-8 inline-flex items-center gap-3 bg-[#8D6CA3] px-6 py-3.5 text-xs font-semibold tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#2d1b13]"
              >
                EXPLORE BRIDAL GALLERY
              </Link>
            </div>

            {/* RIGHT SIDE: EIGHT-IMAGE EDITORIAL COLLAGE */}
            <div className="bridal-collage relative isolate aspect-[7/9] w-full min-w-0 overflow-hidden !rounded-none bg-white sm:aspect-[4/5] lg:aspect-[7/9]">
              <svg
                className="block h-full w-full"
                viewBox="0 0 700 900"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Eight-image bridal beauty gallery collage"
              >
                <defs>
                  <clipPath id="bridal-clip-top">
                    <path d="M 0 0 H 700 V 340 C 630 375 554 359 475 330 C 405 305 326 270 250 242 C 174 211 85 165 0 126 Z" />
                  </clipPath>

                  <clipPath id="bridal-clip-left">
                    <path d="M 0 126 C 85 165 174 211 250 242 L 250 565 C 225 562 199 559 175 555 C 114 548 55 539 0 530 Z" />
                  </clipPath>

                  <clipPath id="bridal-clip-center">
                    <path d="M 250 242 C 326 270 405 305 475 330 L 475 625 C 435 615 394 604 355 593 C 317 583 282 573 250 565 Z" />
                  </clipPath>

                  <clipPath id="bridal-clip-right">
                    <path d="M 475 330 C 554 359 630 375 700 340 V 690 C 643 674 585 658 530 642 C 511 637 493 631 475 625 Z" />
                  </clipPath>

                  <clipPath id="bridal-clip-bottom-one">
                    <path d="M 0 530 C 55 539 114 548 175 555 V 900 H 0 Z" />
                  </clipPath>

                  <clipPath id="bridal-clip-bottom-two">
                    <path d="M 175 555 C 199 559 225 562 250 565 C 282 573 317 583 355 593 V 900 H 175 Z" />
                  </clipPath>

                  <clipPath id="bridal-clip-bottom-three">
                    <path d="M 355 593 C 394 604 435 615 475 625 C 493 631 511 637 530 642 V 900 H 355 Z" />
                  </clipPath>

                  <clipPath id="bridal-clip-bottom-four">
                    <path d="M 530 642 C 585 658 643 674 700 690 V 900 H 530 Z" />
                  </clipPath>
                </defs>

                {/* IMAGE 5 */}
                <g clipPath="url(#bridal-clip-bottom-one)">
                  <image
                    className={collageImageClass}
                    href={galleryImages[4].src}
                    x="0"
                    y="520"
                    width="175"
                    height="380"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>

                {/* IMAGE 6 */}
                <g clipPath="url(#bridal-clip-bottom-two)">
                  <image
                    className={collageImageClass}
                    href={galleryImages[5].src}
                    x="175"
                    y="550"
                    width="180"
                    height="350"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>

                {/* IMAGE 7 */}
                <g clipPath="url(#bridal-clip-bottom-three)">
                  <image
                    className={collageImageClass}
                    href={galleryImages[6].src}
                    x="355"
                    y="590"
                    width="175"
                    height="310"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>

                {/* IMAGE 8 */}
                <g clipPath="url(#bridal-clip-bottom-four)">
                  <image
                    className={collageImageClass}
                    href={galleryImages[7].src}
                    x="530"
                    y="638"
                    width="170"
                    height="262"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>

                {/* IMAGE 2 */}
                <g clipPath="url(#bridal-clip-left)">
                  <image
                    className={collageImageClass}
                    href={galleryImages[1].src}
                    x="0"
                    y="120"
                    width="255"
                    height="455"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>

                {/* IMAGE 3 */}
                <g clipPath="url(#bridal-clip-center)">
                  <image
                    className={collageImageClass}
                    href={galleryImages[2].src}
                    x="245"
                    y="235"
                    width="240"
                    height="395"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>

                {/* IMAGE 4 */}
                <g clipPath="url(#bridal-clip-right)">
                  <image
                    className={collageImageClass}
                    href={galleryImages[3].src}
                    x="470"
                    y="325"
                    width="230"
                    height="390"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>

                {/* IMAGE 1 */}
                <g clipPath="url(#bridal-clip-top)">
                  <image
                    className={collageImageClass}
                    href={galleryImages[0].src}
                    x="0"
                    y="0"
                    width="700"
                    height="360"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>

                {/* DIVIDER LINES */}
                <g
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="4"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  pointerEvents="none"
                >
                  <path d="M 0 126 C 85 165 174 211 250 242 C 326 270 405 305 475 330 C 554 359 630 375 700 340" />
                  <path d="M 250 242 V 565" />
                  <path d="M 475 330 V 625" />
                  <path d="M 0 530 C 55 539 114 548 175 555 C 199 559 225 562 250 565 C 282 573 317 583 355 593 C 394 604 435 615 475 625 C 493 631 511 637 530 642 C 585 658 643 674 700 690" />
                  <path d="M 175 555 V 900" />
                  <path d="M 355 593 V 900" />
                  <path d="M 530 642 V 900" />
                </g>
              </svg>

              {/* CENTRAL EDITORIAL TITLE */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[52%] z-[5] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center whitespace-nowrap text-center text-[clamp(22px,6vw,32px)] font-semibold leading-[0.95] tracking-[0.08em] text-[#fffaf4] [text-shadow:0_2px_18px_rgba(0,0,0,0.4)] sm:text-[clamp(30px,6vw,46px)] sm:tracking-[0.1em] lg:text-[clamp(25px,3.7vw,46px)]"
              >
                <span>BRIDAL</span>
                <span className="font-normal tracking-[0.12em] sm:tracking-[0.18em]">
                  BEAUTY
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}