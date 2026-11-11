"use client";

import Link from "next/link";
import Image from "next/image";
import { Inter_Tight } from "next/font/google";
import BridalMakeoverGallery from "@/components/BridalMakeoverGallery";
import WeddingRentals from "@/components/WeddingRentals";
import RentalEnquiry from "@/components/RentalEnquiry";
import ContactBooking from "@/components/ContactBooking";
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

            {/* LEFT FLOATING BRIDAL VISUAL (Desktop only, untouched) */}
            <div className="pointer-events-none absolute left-[2%] top-1/2 hidden w-[220px] -translate-y-1/2 lg:block xl:left-[5%]">

              {/* Photo Card */}
              <div className="relative h-[150px] w-[125px] rotate-[-8deg] overflow-hidden border-[5px] border-white bg-[#E4D9ED] shadow-[0_15px_35px_-15px_rgba(37,35,42,0.25)]">

                <Image
                  src="/11.jpeg"
                  alt="Traditional Indian bridal makeup and wedding styling in Nagercoil"
                  fill
                  sizes="125px"
                  className="object-cover"
                />

              </div>

              {/* Floating Information Card */}
              <div className="absolute -right-5 top-5 w-[150px] rotate-[5deg] border border-[#8D6CA3]/10 bg-white/95 p-3 shadow-[0_15px_35px_-15px_rgba(37,35,42,0.25)]">

                <span className="text-[8px] uppercase tracking-[0.15em] text-[#8D6CA3]">
                  Bridal Collection
                </span>

                <p className={`${interTight.className} mt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-[#25232A] sm:text-xs`}>
                  Traditional Bridal
                </p>

                <p className={`${interTight.className} mt-1 text-[11px] leading-4 text-[#817887]`}>
                  Timeless beauty for your special day.
                </p>

                <div className="mt-2 h-px bg-[#F1EDF7]" />

                <p className="mt-2 text-[8px] font-medium text-[#8D6CA3]">
                  Explore the look 
                </p>

              </div>

            </div>

            {/* RIGHT FLOATING BRIDAL VISUAL (Desktop only, untouched) */}
            <div className="pointer-events-none absolute right-[2%] top-1/2 hidden w-[220px] -translate-y-1/2 lg:block xl:right-[5%]">

              {/* Photo Card */}
              <div className="relative ml-auto h-[150px] w-[125px] rotate-[7deg] overflow-hidden border-[5px] border-white bg-[#E4D9ED] shadow-[0_15px_35px_-15px_rgba(37,35,42,0.25)]">

                <Image
                  src="/22.jpeg"
                  alt="Traditional Indian bridal makeup and wedding styling in Nagercoil"
                  fill
                  sizes="125px"
                  className="object-cover"
                />

              </div>

              {/* Floating Information Card */}
              <div className="absolute -left-5 top-6 w-[150px] rotate-[-5deg] border border-[#8D6CA3]/10 bg-white/95 p-3 shadow-[0_15px_35px_-15px_rgba(37,35,42,0.25)]">

                <span className="text-[8px] uppercase tracking-[0.15em] text-[#8D6CA3]">
                  Featured Look
                </span>

               <p
  className={`${interTight.className} mt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-[#25232A] sm:text-xs`}
>
  Reception Glam
</p>

                <p
  className={`${interTight.className} mt-1 text-[11px] leading-4 text-[#817887]`}
>
  A beautiful look for unforgettable moments.
</p>

                <div className="mt-2 h-px bg-[#F1EDF7]" />

                <p className="mt-2 text-[8px] font-medium text-[#8D6CA3]">
                  Discover more 
                </p>

              </div>

            </div>

            {/* CENTER HERO CONTENT */}
            <div className="relative z-10 mx-auto flex max-w-[700px] flex-col items-center text-center">

              {/* Eyebrow */}
             <span
  className={`${interTight.className} services-intro-item mb-4 ml-2 flex items-center gap-3 bg-[#F1EDF7] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-[#9675ba] sm:text-xs`}
>
 BRIDAL MAKEUP IN NAGERCOIL
</span>
              {/* Heading */}
<h1
  className={`${interTight.className} mt-4 text-[clamp(2.3rem,4.8vw,4.5rem)] font-bold uppercase leading-[1] tracking-[-0.02em] text-[#25232A]`}
>
  Professional Bridal
  <span className="block text-[#8D6CA3]">
    Makeup & Styling
  </span>
</h1>

              {/* Description */}
              <p className="mt-3 max-w-[500px] text-xs leading-6 text-[#817887] sm:text-sm sm:leading-7">

    Discover professional bridal makeup in Nagercoil, featuring
  elegant wedding, reception and engagement looks. At Touch
  Bridal Makeover Studio, we create personalised bridal
  transformations to make your special day unforgettable.
              </p>

              {/* Buttons */}
              <div className="mt-5 flex flex-wrap justify-center gap-3">

            <a
  href="#booking"
  onClick={(e) => {
    e.preventDefault();

    document.getElementById("booking-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className="group relative isolate inline-flex min-h-12 items-center justify-center gap-2.5 overflow-hidden border border-[#8D6CA3]/30 bg-[#8D6CA3] px-7 text-xs font-semibold tracking-[0.04em] text-white shadow-[0_8px_24px_rgba(141,108,163,0.22)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#76558D] hover:shadow-[0_12px_30px_rgba(141,108,163,0.3)]"
>
  <span className="relative">Bridal Enquiry</span>
</a>

                <Link
                  href="#bridal-looks"
                  className="inline-flex min-h-10 items-center justify-center border border-[#8D6CA3]/20 bg-white px-6 text-[10px] font-semibold tracking-wide text-[#25232A] transition-all duration-300 hover:border-[#8D6CA3] hover:bg-[#F1EDF7] sm:text-xs"
                >
                  Explore Looks
                </Link>

              </div>

              {/* MOBILE HERO BRIDAL SHOWCASE (Visible on Mobile & Tablet, Hidden on Large Screens) */}
              <div className="mt-8 grid w-full max-w-[480px] grid-cols-2 gap-3.5 sm:gap-4 lg:hidden">
                {/* Traditional Bridal (11.jpeg) */}
                <div className="group relative overflow-hidden rounded-2xl border-2 border-white bg-white shadow-[0_14px_30px_-10px_rgba(37,35,42,0.22)]">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E4D9ED]">
                    <Image
                      src="/11.jpeg"
                      alt="Traditional Indian bridal makeup and wedding styling in Nagercoil"
                      fill
                      sizes="(max-width: 1023px) 50vw, 240px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#25232A]/75 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left text-white">
                      <span className="inline-block rounded-full bg-white/25 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wider backdrop-blur-md">
                        Traditional
                      </span>
                      <p className="mt-0.5 text-[11px] font-bold leading-tight drop-shadow sm:text-xs">
                        Bridal Makeover
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reception Glam (22.jpeg) */}
                <div className="group relative overflow-hidden rounded-2xl border-2 border-white bg-white shadow-[0_14px_30px_-10px_rgba(37,35,42,0.22)]">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E4D9ED]">
                    <Image
                      src="/22.jpeg"
                      alt="Reception glam makeup and styling in Nagercoil"
                      fill
                      sizes="(max-width: 1023px) 50vw, 240px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#25232A]/75 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left text-white">
                      <span className="inline-block rounded-full bg-white/25 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wider backdrop-blur-md">
                        Reception
                      </span>
                      <p className="mt-0.5 text-[11px] font-bold leading-tight drop-shadow sm:text-xs">
                        Glam Styling
                      </p>
                    </div>
                  </div>
                </div>
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
  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

    <div>
      <span className="mt-4 inline-flex rounded-full bg-white/70 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-[#8D6CA3]">
        Our Signature Looks
      </span>

      <h2 className="mt-2 max-w-[400px] text-xl font-semibold leading-tight tracking-[-0.03em] text-[#25232A] sm:text-2xl">
        Beautiful Bridal Looks,
        <br />
       Crafted With Care
      </h2>
    </div>

    <p
      className={`${interTight.className} mt-6 max-w-[400px] text-xs leading-5 text-[#716B76] sm:text-sm`}
    >
       From traditional Indian bridal makeup to contemporary wedding
  looks, our bridal makeup artists in Nagercoil create
  personalised styles that complement your features,
  outfit and wedding celebration.

    </p>

  </div>
</div>

          </div>

        </div>

      </section>

<BridalMakeoverGallery />
<WeddingRentals />
{/* <RentalEnquiry /> */}
<ContactBooking />
    </main>
  );
}

