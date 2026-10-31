"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = [
  { key: "Bridal Makeup", label: "Bridal makeup photographs" },
  { key: "Reception", label: "Reception makeup looks" },
  { key: "Party Makeup", label: "Party makeup looks" },
  { key: "Transformations", label: "Bridal transformation gallery" },
];

const bridalLooks = [
  {
    id: 1,
    title: "Traditional Bridal",
    category: "Bridal Makeup",
    image: "/bridal/bridem01.webp",
  },
  {
    id: 2,
    title: "Reception Glam",
    category: "Reception",
    image: "/images/bridal-02.jpg",
  },
  {
    id: 3,
    title: "Soft Glam",
    category: "Party Makeup",
    image: "/partylook/party1.jpg",
  },
  {
    id: 4,
    title: "Bridal Transformation",
    category: "Transformations",
    image: "/images/bridal-04.jpg",
  },
  {
    id: 5,
    title: "Classic Bridal",
    category: "Bridal Makeup",
    image: "/bridal/bridem02.webp",
  },
  {
    id: 6,
    title: "Wedding Beauty",
    category: "Reception",
    image: "/images/bridal-06.jpg",
  },
  {
    id: 7,
    title: "Evening Glam",
    category: "Party Makeup",
    image: "/partylook/party02.jpg",
  },
  {
    id: 8,
    title: "Elegant Bridal Look",
    category: "Bridal Makeup",
    image: "/bridal/bridem03.webp",
  },
  {
    id: 9,
    title: "Wedding Reception Glam",
    category: "Reception",
    image: "/reception/Recep01.webp",
  },
  {
    id: 10,
    title: "Soft Party Makeup",
    category: "Party Makeup",
    image: "/partylook/party03.jpg",
  },
  {
    id: 11,
    title: "Bridal Transformation",
    category: "Transformations",
    image: "/images/bridal-11.jpg",
  },
  {
    id: 12,
    title: "Classic Bridal Beauty",
    category: "Bridal Makeup",
    image: "/bridal/bridem04.webp",
  },
  {
    id: 13,
    title: "Reception Elegance",
    category: "Reception",
    image: "/reception/Recep02.webp",
  },
  {
    id: 14,
    title: "Evening Party Glam",
    category: "Party Makeup",
    image: "/partylook/party04.jpg",
  },
  {
    id: 15,
    title: "Timeless Bridal Transformation",
    category: "Transformations",
    image: "/images/bridal-15.jpg",
  },
];

/* Neat overlapping layouts (no rotation). Values are % of the collage box. */
const layouts: Record<number, string[]> = {
  4: [
    "left-[8%] top-[8%] z-10 h-[50%] w-[24%]",
    "left-[28%] top-[42%] z-20 h-[50%] w-[24%]",
    "left-[48%] top-[6%] z-10 h-[50%] w-[24%]",
    "left-[68%] top-[40%] z-20 h-[50%] w-[24%]",
  ],
  3: [
    "left-[16%] top-[10%] z-10 h-[56%] w-[27%]",
    "left-[36%] top-[34%] z-30 h-[56%] w-[27%]",
    "left-[56%] top-[8%] z-20 h-[56%] w-[27%]",
  ],
};

/*
  BEFORE / AFTER pairs for the transformation tab.
  Replace these image paths with your real before and after photos.
*/
const transformations = [
  {
    id: 1,
    title: "Natural to Bridal Glam",
    before: "/before/bf1.jpg",
    after: "/after/af1.jpg",
  },
  {
    id: 2,
    title: "Day Look to Wedding Look",
    before:  "/before/bf2.jpg",
    after: "/after/af2.jpg",
  },
  {
    id: 3,
    title: "Bare Skin to Soft Glow",
    before:  "/before/bf3.jpg",
    after: "/after/af3.jpg",
  },
  {
    id: 4,
    title: "Simple to Statement Bride",
    before:  "/before/bf4.jpg",
    after: "/after/af4.jpg",
  },
];

function TransformationCard({
  item,
}: {
  item: (typeof transformations)[number];
}) {
  return (
    <article className="relative overflow-hidden bg-white p-4 shadow-[0_12px_30px_-20px_rgba(141,108,163,0.5)]">
      {/* soft lavender shapes */}
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#F1EDF7]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-[#F1EDF7]"
      />

      {/* faint watermark */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-3xl font-semibold italic tracking-[-0.03em] text-[#8D6CA3]/10 sm:text-4xl"
      >
        Before / After
      </p>

      <div className="relative flex h-[190px] items-center justify-center sm:h-[200px] lg:h-[215px]">
        {/* BEFORE */}
        <div className="relative -mr-3 -mt-10 h-[150px] w-[88px] sm:h-[160px] sm:w-[96px] lg:h-[195px] lg:w-[124px]">
          <div className="relative h-full w-full overflow-hidden rounded-t-full border-[3px] border-white bg-[#E4D9ED] shadow-[0_8px_20px_-10px_rgba(37,35,42,0.4)]">
            <Image
              src={item.before}
              alt={`${item.title} – before`}
              fill
              sizes="110px"
              className="object-cover grayscale"
            />
          </div>
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#817887]">
            Before
          </span>
        </div>

        {/* AFTER */}
        <div className="relative z-10 mt-12 h-[150px] w-[88px] sm:h-[160px] sm:w-[96px] lg:h-[195px] lg:w-[124px]">
          <div className="relative h-full w-full overflow-hidden rounded-b-full border-[3px] border-white bg-[#E4D9ED] shadow-[0_8px_20px_-10px_rgba(37,35,42,0.4)]">
            <Image
              src={item.after}
              alt={`${item.title} – after`}
              fill
              sizes="110px"
              className="object-cover"
            />
          </div>
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8D6CA3]">
            After
          </span>
        </div>
      </div>

      <p className="relative mt-4 text-center text-xs font-semibold text-[#25232A]">
        {item.title}
      </p>
    </article>
  );
}

export default function BridalMakeoverGallery() {
  const [activeKey, setActiveKey] = useState(tabs[0].key);

  const activeTab = tabs.find((t) => t.key === activeKey) ?? tabs[0];
  const looks = bridalLooks
    .filter((look) => look.category === activeKey)
    .slice(0, 4);
  const positions = layouts[looks.length >= 4 ? 4 : 3];
  const isTransform = activeKey === "Transformations";

  return (
    <section
      id="bridal-looks"
      className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1320px]">
        {/* LAVENDER PANEL */}
        <div className="grid gap-6 bg-[#F1EDF7] p-5 sm:p-8 lg:grid-cols-[0.8fr_1.4fr] lg:gap-8 lg:p-10">
          {/* LEFT: INTRO + FOUR BUTTONS */}
          <div className="flex flex-col justify-between gap-8">
            <div>
              <span className="inline-flex rounded-full bg-white px-3 py-1 text-[9px] font-medium uppercase tracking-[0.15em] text-[#8D6CA3]">
                The Bridal Collection
              </span>

              <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-[#25232A] sm:text-4xl">
                Bridal Makeover
                <span className="text-[#8D6CA3]"> Gallery</span>
              </h2>

              <p className="mt-4 max-w-[380px] text-xs leading-6 text-[#817887] sm:text-sm">
                A collection of beautiful bridal transformations, timeless
                elegance, and unforgettable moments captured through our
                artistry.
              </p>
            </div>

            <div className="flex flex-col gap-2.5" role="tablist">
              {tabs.map((tab, index) => {
                const isActive = tab.key === activeKey;
                const count =
                  tab.key === "Transformations"
                    ? transformations.length
                    : bridalLooks.filter((l) => l.category === tab.key).length;

                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveKey(tab.key)}
                    className={`group flex items-center gap-4 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 sm:px-5 ${
                      isActive
                        ? "border-white bg-white shadow-[0_12px_30px_-18px_rgba(141,108,163,0.6)]"
                        : "border-[#8D6CA3]/20 bg-transparent hover:bg-white/60"
                    }`}
                  >
                    <span
                      className={`text-xs font-semibold tabular-nums ${
                        isActive ? "text-[#8D6CA3]" : "text-[#817887]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-[#25232A]">
                        {tab.label}
                      </span>
                      <span className="mt-0.5 block text-[11px] text-[#817887]">
                        {count} {tab.key === "Transformations" ? "before & after" : "looks"}
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm transition-all duration-300 ${
                        isActive
                          ? "bg-[#25232A] text-white"
                          : "bg-white text-[#25232A] group-hover:bg-[#8D6CA3] group-hover:text-white"
                      }`}
                    >
                      
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: CONTENT INSIDE THE SAME LAVENDER PANEL */}
          <div
            role="tabpanel"
            className={`relative overflow-hidden bg-[#E9E1F2]/60 ${
              isTransform
                ? "p-4 sm:p-5 lg:min-h-[540px]"
                : "h-[380px] sm:h-[480px] lg:h-auto lg:min-h-[540px]"
            }`}
          >
            {isTransform ? (
              <div
                key={activeKey}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
              >
                {transformations.map((item) => (
                  <TransformationCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <>
                <div
                  key={activeKey}
                  className="absolute inset-y-0 left-1/2 w-[520px] -translate-x-1/2 sm:w-full"
                >
                  {looks.map((look, index) => (
                    <div
                      key={look.id}
                      className={`absolute ${positions[index]} transition-transform duration-500 hover:z-[60] hover:scale-[1.03]`}
                    >
                      <div className="relative h-full w-full overflow-hidden border-[3px] border-white bg-[#E4D9ED] shadow-[0_10px_28px_-14px_rgba(37,35,42,0.35)] sm:border-4">
                        <Image
                          src={look.image}
                          alt={look.title}
                          fill
                          sizes="(max-width: 640px) 30vw, 260px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* LABEL */}
                <div className="absolute bottom-4 left-4 z-[70] rounded-full border border-white/70 bg-white/85 px-4 py-2 backdrop-blur-md sm:bottom-5 sm:left-5">
                  <p className="text-[8px] font-medium uppercase tracking-[0.15em] text-[#8D6CA3]">
                    Touch Bridal
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-[#25232A] sm:text-sm">
                    {activeTab.label}
                  </p>
                </div>

                {/* CORNER ICON */}
                <div className="absolute right-4 top-4 z-[70] flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-[#25232A] backdrop-blur-md sm:right-5 sm:top-5 sm:h-12 sm:w-12">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  >
                    <path d="M7 3H3v4M3 3l7 7M17 21h4v-4m0 4-7-7" />
                  </svg>
                </div>
              </>
            )}
          </div>
        </div>

        {/* GALLERY CTA */}
        <div className="mt-8 flex flex-col items-center text-center">
          <p className="max-w-[420px] text-xs leading-6 text-[#817887] sm:text-sm">
            Every bride deserves a look that feels uniquely hers. Let&apos;s
            create your perfect bridal moment.
          </p>

          <a
            href="https://wa.me/919789376174"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-10 items-center justify-center rounded-full bg-[#25232A] px-6 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#8D6CA3]"
          >
            Enquire for Your Bridal Look
          </a>
        </div>
      </div>
    </section>
  );
}