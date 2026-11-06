
"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter_Tight } from "next/font/google";
import { useEffect, useState } from "react";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
const secondStaticImage = {
  src: "/mens/about206.jpg",
  alt: "The S Touch Traditional Groom Styling",
};

const aboutImages = [
  {
    src: "/mens/about208.jpg",
    alt: "The S Touch Signature Bridal Look",
  },
  {
    src: "/mens/about205.jpg",
    alt: "The S Touch Traditional Bridal Makeup",
  },
  {
    src: "/mens/about202.jpg",
    alt: "The S Touch Royal Bridal Styling",
  },
  {
    src: "/mens/about203.jpg",
    alt: "The S Touch Elegant Hair and Makeup",
  },
  {
    src: "/bridal/bridem01.webp",
    alt: "The S Touch Reception Look",
  },
  {
    src: "/bridal/bridem02.webp",
    alt: "The S Touch Classic Bridal Radiance",
  },
];

export default function AboutUs() {
  const [active, setActive] = useState(0);

  // Automatic main image slideshow
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % aboutImages.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="about-us"
      className={`${interTight.className} relative -mt-4 mx-auto w-full max-w-[1320px] overflow-hidden bg-white px-5 pb-2 text-[#22212a] sm:px-8 sm:pb-3 lg:px-12 lg:pb-4`}
    >
      <div className="relative w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">

          {/* LEFT — EDITORIAL IMAGE COLLAGE */}
          <div className="relative order-1 mx-auto h-[420px] w-full max-w-[570px] sm:h-[520px] lg:h-[570px]">

            {/* Main animated image slideshow */}
            <div className="absolute left-[8%] top-[25%] z-[2] h-[59%] w-[43%] overflow-hidden rounded-[5px] bg-[#eee8f8] shadow-[0_12px_35px_rgba(30,20,45,0.10)]">

              {aboutImages.map((image, index) => (
                <div
                  key={image.src}
                  aria-hidden={index !== active}
                  className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                    active === index
                      ? "z-10 opacity-100"
                      : "pointer-events-none z-0 opacity-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 43vw, 245px"
                    priority={index === 0}
                    draggable={false}
                    className="object-cover object-top"
                  />
                </div>
              ))}

            </div>

            {/* Floating information panel */}
            <div className="absolute right-[3%] -top-[5%] z-[3] w-[47%] max-w-[235px] bg-white p-4 shadow-[0_8px_35px_rgba(30,20,45,0.10)] sm:p-5">

              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8870ad]">
                  THE S TOUCH
                </span>

                <span className="text-lg text-[#9b7bc4]">
                  ✳
                </span>
              </div>

              <h3 className="mt-4 text-lg font-bold leading-tight text-[#282530] sm:text-xl">
                Bridal Beauty
                <br />
                With A Signature
                <br />
                Touch.
              </h3>

              <div className="mt-4 h-px w-full bg-[#e9e4ef]" />

              <div className="mt-3 flex items-center justify-between gap-2">
                <span className="text-[8px] uppercase tracking-[0.12em] text-[#8f8999]">
                  Bridal · Beauty · Styling
                </span>
              </div>

            </div>

            {/* Second static image */}
            <div className="absolute bottom-[5%] right-[5%] z-[2] h-[53%] w-[43%] overflow-hidden rounded-[5px] bg-[#eee8f8] shadow-[0_12px_35px_rgba(30,20,45,0.12)]">

             <Image
  src={secondStaticImage.src}
  alt={secondStaticImage.alt}
  fill
  unoptimized
  sizes="(max-width: 640px) 43vw, 245px"
  draggable={false}
  className="object-cover object-top"
/>

            </div>

            {/* Small floating bottom label */}
            <div className="absolute bottom-[1%] left-[5%] z-[4] bg-white px-4 py-3 shadow-[0_6px_24px_rgba(30,20,45,0.08)]">

              <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-[#726a7d]">
                Crafted with care
              </p>

              <div className="mt-1 flex items-center gap-1 text-sm text-[#9b7bc4]">
                <span>✦</span>
                <span>✦</span>
                <span>✦</span>
                <span>✦</span>
                <span>✦</span>
              </div>

            </div>

            {/* Slideshow indicators */}
            <div className="absolute bottom-[0%] right-[4%] z-[5] flex items-center gap-1.5 sm:bottom-[-2%]">

              {aboutImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show bridal image ${index + 1}`}
                  aria-current={active === index ? "true" : undefined}
                  className={`h-[3px] transition-all duration-500 ${
                    active === index
                      ? "w-7 bg-[#8f70b5]"
                      : "w-3 bg-[#d9d1e4] hover:bg-[#a58bc5]"
                  }`}
                />
              ))}

            </div>

          </div>

          {/* RIGHT — ABOUT US TYPOGRAPHY */}
          <div className="order-2 flex flex-col items-start lg:pl-2">

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <p className="ml-2 text-[10px] font-bold uppercase tracking-[0.32em] text-[#9677bb]">
                A BIT ABOUT US
              </p>
            </div>

            {/* Main heading */}
            <h2
              className={`${interTight.className} text-[clamp(2.3rem,4.8vw,4.5rem)] font-bold uppercase leading-[1] tracking-[-0.02em] text-[#25232A]`}
            >
              ABOUT{" "}
              <span className="text-[#8D6CA3]">
                US
              </span>
            </h2>

            {/* Heading underline */}
            <div className="mt-5 h-[3px] w-14 bg-[#9b7bc4]" />

            {/* Main description */}
            <div className="mt-7 max-w-lg space-y-5 text-[13px] leading-[1.95] text-[#77737f] sm:text-[14px] sm:leading-8">

              <p>
                Welcome to The S Touch Bridal Makeover, where timeless
                elegance meets modern beauty. We are dedicated to making
                every bride feel beautiful, confident, and extraordinary
                on her most special day.
              </p>

              <p>
                Every brushstroke is crafted with love, every hairstyle
                is styled with precision, and every transformation is
                designed to make you shine with confidence.
              </p>

              <p>
                We don't just create beautiful looks. We create
                unforgettable bridal moments, cherished memories,
                and the confidence to embrace your beauty.
              </p>

            </div>

            {/* Minimal signature line */}
            <p className="mt-7 text-[12px] font-semibold tracking-wide text-[#35313e]">
              Your dream look. Your timeless elegance.
            </p>

            {/* CTA */}
            <Link
              href="#booking"
              className="group relative mt-9 inline-flex items-center gap-3 overflow-hidden bg-[#9675ba] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.13em] text-white shadow-[0_8px_20px_rgba(150,117,186,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#795a9d] hover:shadow-[0_12px_25px_rgba(150,117,186,0.30)]"
            >
              <span>EXPLORE MORE</span>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
