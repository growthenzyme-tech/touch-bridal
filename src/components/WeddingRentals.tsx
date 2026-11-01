
"use client";

import Image from "next/image";

const rentalCategories = [
  {
    id: "01",
    title: "Wedding Jewellery",
    description:
      "Elegant jewellery pieces to complete your bridal look.",
    image: "/rentals/jewellery.jpg",
    count: "Jewellery Collection",
  },
  {
    id: "02",
    title: "Wedding Bouquets",
    description:
      "Beautiful floral arrangements for your special moments.",
    image: "/rentals/bouquet.jpg",
    count: "Floral Collection",
  },
  {
    id: "03",
    title: "Wedding Hairnets",
    description:
      "Traditional and delicate details for bridal hairstyles.",
    image: "/rentals/hairnet.jpg",
    count: "Hair Accessories",
  },
  {
    id: "04",
    title: "Wedding Crowns",
    description:
      "Statement crowns that add a royal touch to your look.",
    image: "/rentals/crown.jpg",
    count: "Crown Collection",
  },
];

export default function WeddingRentals() {
  return (
    <section
      id="wedding-rentals"
      className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1320px]">

        {/* SECTION INTRO */}
        <div className="grid items-end gap-5 sm:grid-cols-2">

          <div>
            <span className="inline-flex rounded-full bg-[#F1EDF7] px-3 py-1 text-[9px] font-medium uppercase tracking-[0.15em] text-[#8D6CA3]">
              The Wedding Collection
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-[#25232A] sm:text-4xl lg:text-5xl">
              The Finishing
              <br />
              <span className="text-[#8D6CA3]">
                Touch of Elegance.
              </span>
            </h2>
          </div>

          <div className="max-w-[420px] sm:ml-auto">
            <p className="text-xs leading-6 text-[#817887] sm:text-sm">
              Discover our curated wedding rental collection.
              From timeless jewellery to delicate accessories,
              find the perfect finishing touches for your
              unforgettable bridal moments.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#8D6CA3]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8D6CA3]">
                Available for Rental
              </span>
            </div>
          </div>

        </div>

        {/* RENTAL COLLECTION */}
        <div className="mt-8 rounded-[28px] bg-[#F1EDF7] p-4 sm:mt-10 sm:p-6 lg:p-8">

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {rentalCategories.map((item) => (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-white p-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(37,35,42,0.25)]"
              >

                {/* IMAGE */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#E9E1F2]">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* COLLECTION NUMBER */}
                  <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/70 bg-white/85 text-[10px] font-semibold text-[#8D6CA3] backdrop-blur-md">
                    {item.id}
                  </span>

                  {/* IMAGE OVERLAY */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent p-4 pt-12">

                    <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/80">
                      {item.count}
                    </p>

                  </div>

                </div>

                {/* CARD CONTENT */}
                <div className="px-3 pb-3 pt-4">

                  <h3 className="text-sm font-semibold tracking-[-0.02em] text-[#25232A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 min-h-[40px] text-[11px] leading-5 text-[#817887]">
                    {item.description}
                  </p>

                  <a
                    href="#rental-enquiry"
                    className="mt-4 flex items-center justify-between border-t border-[#8D6CA3]/15 pt-3 text-[10px] font-semibold text-[#8D6CA3] transition-colors hover:text-[#25232A]"
                  >
                    Enquire for Rental

                    <span
                      aria-hidden="true"
                      className="text-base transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>

                </div>

              </article>
            ))}

          </div>

        </div>

        {/* RENTAL CTA */}
        <div className="mt-8 flex flex-col items-center text-center">

          <p className="max-w-[440px] text-xs leading-6 text-[#817887] sm:text-sm">
            Complete your wedding look with our carefully
            selected rental pieces.
          </p>

          <a
            href="#rental-enquiry"
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-[#25232A] px-6 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#8D6CA3]"
          >
            Explore Rental Collection
          </a>

        </div>

      </div>
    </section>
  );
}
