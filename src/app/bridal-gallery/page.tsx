
"use client";

import Link from "next/link";
import Image from "next/image";
import { Inter_Tight } from "next/font/google";
import BridalMakeoverGallery from "@/components/BridalMakeoverGallery";
import WeddingRentals from "@/components/WeddingRentals";
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function BridalGalleryPage() {
  const whatsappLink =
    "https://wa.me/919789376174?text=" +
    encodeURIComponent(
      "Hi, I would like to enquire about bridal makeup and wedding styling.",
    );

  return (
    <main
      className={`${interTight.className} min-h-screen bg-white text-[#25232A]`}
    >
      {/* SECTION 01 — BRIDAL GALLERY HERO */}
      <section className="px-4 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">

        <div className="mx-auto max-w-[1320px]">

          {/* HERO INTRO */}
          <div className="relative overflow-hidden bg-white px-5 pb-12 pt-8 sm:px-10 sm:pb-14 sm:pt-10">

            {/* Background Glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(241,237,247,0.85),transparent_75%)]"
            />

            {/* LEFT FLOATING BRIDAL VISUAL */}
            <div className="pointer-events-none absolute left-[2%] top-1/2 hidden w-[220px] -translate-y-1/2 lg:block xl:left-[5%]">

              {/* Photo Card */}
              <div className="relative h-[150px] w-[125px] rotate-[-8deg] overflow-hidden rounded-xl border-[5px] border-white bg-[#E4D9ED] shadow-[0_15px_35px_-15px_rgba(37,35,42,0.25)]">

                <Image
                  src="/images/bridal-01.jpg"
                  alt="Traditional bridal makeup"
                  fill
                  sizes="125px"
                  className="object-cover"
                />

              </div>

              {/* Floating Information Card */}
              <div className="absolute -right-5 top-5 w-[150px] rotate-[5deg] rounded-xl border border-[#8D6CA3]/10 bg-white/95 p-3 shadow-[0_15px_35px_-15px_rgba(37,35,42,0.25)]">

                <span className="text-[8px] uppercase tracking-[0.15em] text-[#8D6CA3]">
                  Bridal Collection
                </span>

                <p className="mt-1 text-xs font-semibold text-[#25232A]">
                  Traditional Bridal
                </p>

                <p className="mt-1 text-[9px] leading-4 text-[#817887]">
                  Timeless beauty for your special day.
                </p>

                <div className="mt-2 h-px bg-[#F1EDF7]" />

                <p className="mt-2 text-[8px] font-medium text-[#8D6CA3]">
                  Explore the look ↗
                </p>

              </div>

            </div>

            {/* RIGHT FLOATING BRIDAL VISUAL */}
            <div className="pointer-events-none absolute right-[2%] top-1/2 hidden w-[220px] -translate-y-1/2 lg:block xl:right-[5%]">

              {/* Photo Card */}
              <div className="relative ml-auto h-[150px] w-[125px] rotate-[7deg] overflow-hidden rounded-xl border-[5px] border-white bg-[#E4D9ED] shadow-[0_15px_35px_-15px_rgba(37,35,42,0.25)]">

                <Image
                  src="/images/bridal-02.jpg"
                  alt="Elegant bridal reception makeup"
                  fill
                  sizes="125px"
                  className="object-cover"
                />

              </div>

              {/* Floating Information Card */}
              <div className="absolute -left-5 top-6 w-[150px] rotate-[-5deg] rounded-xl border border-[#8D6CA3]/10 bg-white/95 p-3 shadow-[0_15px_35px_-15px_rgba(37,35,42,0.25)]">

                <span className="text-[8px] uppercase tracking-[0.15em] text-[#8D6CA3]">
                  Featured Look
                </span>

                <p className="mt-1 text-xs font-semibold text-[#25232A]">
                  Reception Glam
                </p>

                <p className="mt-1 text-[9px] leading-4 text-[#817887]">
                  A beautiful look for unforgettable moments.
                </p>

                <div className="mt-2 h-px bg-[#F1EDF7]" />

                <p className="mt-2 text-[8px] font-medium text-[#8D6CA3]">
                  Discover more ↗
                </p>

              </div>

            </div>

            {/* CENTER HERO CONTENT */}
            <div className="relative z-10 mx-auto flex max-w-[600px] flex-col items-center text-center">

              {/* Eyebrow */}
              <span className="rounded-full bg-[#F1EDF7] px-3 py-1 text-[9px] font-medium uppercase tracking-[0.15em] text-[#8D6CA3]">
                The Bridal Collection
              </span>

              {/* Heading */}
              <h1 className="mt-4 text-[clamp(1.8rem,3.5vw,3rem)] font-semibold leading-tight tracking-[-0.035em] text-[#25232A]">

                Bridal Looks That

                <span className="block text-[#8D6CA3]">
                  Celebrate You
                </span>

              </h1>

              {/* Description */}
              <p className="mt-3 max-w-[500px] text-xs leading-6 text-[#817887] sm:text-sm sm:leading-7">

                Discover beautiful bridal makeovers, elegant reception
                looks, and timeless transformations created for your
                most special moments.

              </p>

              {/* Buttons */}
              <div className="mt-5 flex flex-wrap justify-center gap-3">

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#25232A] px-6 text-[10px] font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8D6CA3] sm:text-xs"
                >
                  Bridal Enquiry
                </a>

                <Link
                  href="#bridal-looks"
                  className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#8D6CA3]/20 bg-white px-6 text-[10px] font-semibold tracking-wide text-[#25232A] transition-all duration-300 hover:border-[#8D6CA3] hover:bg-[#F1EDF7] sm:text-xs"
                >
                  Explore Looks
                </Link>

              </div>

            </div>

          </div>

          {/* CURVED LAVENDER SECTION */}
         <div className="relative overflow-hidden bg-[#F1EDF7] px-5 pb-10 pt-8 sm:px-10 sm:pb-12 sm:pt-10">

            {/* Top Curved Edge */}
            <div
              aria-hidden="true"
              className="absolute -top-10 left-[-5%] h-20 w-[110%] rounded-[50%] bg-white"
            />

            <div className="relative z-10 mx-auto max-w-[1100px]">

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <span className="inline-flex rounded-full bg-white/70 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-[#8D6CA3]">
                    Our Signature Looks
                  </span>

                  <h2 className="mt-3 max-w-[400px] text-xl font-semibold leading-tight tracking-[-0.03em] text-[#25232A] sm:text-2xl">
                    Your Beauty,
                    <br />
                    Our Commitment
                  </h2>
                </div>

                <p className="max-w-[400px] text-xs leading-6 text-[#716B76] sm:text-sm">
                  Every bridal look is thoughtfully designed to
                  complement your personality, celebrate your beauty,
                  and make your wedding memories unforgettable.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

<BridalMakeoverGallery />
<WeddingRentals />
    </main>
  );
}
