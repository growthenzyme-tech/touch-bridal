
import { Cormorant_Garamond, Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const salonAddress =
  "215 B Sargunaveethi, Pothys Backside, Ramavarmapuram, Nagercoil-1";

const phoneNumbers = [
  {
    display: "+91 97893 76174",
    link: "+919789376174",
  },
  {
    display: "+91 97896 76174",
    link: "+919789676174",
  },
];

const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${salonAddress}, Tamil Nadu, India`,
)}`;

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${salonAddress}, Tamil Nadu, India`,
)}`;

const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${salonAddress}, Tamil Nadu, India`,
)}&z=15&output=embed`;

export default function LocationContact() {
  return (
    <section
      id="location-contact"
      className={`${interTight.className} scroll-mt-28 -mt-4 px-3 py-6 sm:-mt-6 sm:px-5 sm:py-8 lg:-mt-16 lg:px-8 lg:py-10`}
    >
      <div className="mx-auto w-full max-w-[1320px] overflow-hidden border border-[#25232A]/10 bg-[#F1EDF7]">
        {/* CONTACT DETAILS */}
        <div className="grid grid-cols-1 gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16 lg:px-14 lg:py-14">
          {/* LEFT: SALON INFORMATION */}
          <div>
          <p className="services-intro-item mb-4 ml-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#9675ba] sm:text-xs">
  WE WOULD LOVE TO WELCOME YOU
</p>

        <h2
  className={`${interTight.className} mt-4 text-[clamp(2.3rem,4.8vw,4.5rem)] font-bold leading-[1] tracking-[-0.02em] text-[#25232A]`}
>
  Location &amp;{" "}
  <span className="text-[#8D6CA3]">Contact</span>
</h2>

            <p
              className={`${interTight.className} mt-5 max-w-lg text-sm font-normal leading-7 text-[#25232A] sm:text-base`}
            >
              Visit Touch Bridal Makeover Studio &amp; Unisex Salon for
              bridal makeovers, beauty services, and your special occasion
              needs.
            </p>

            {/* ADDRESS */}
            <div className="mt-8 border-t border-[#25232A]/15 pt-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#8D6CA3]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

             
<div className="min-w-0 flex-1">
  {/* SECTION LABEL */}
  <h3
    className={`${interTight.className} text-xs font-semibold uppercase tracking-[0.16em] text-[#8D6CA3]`}
  >
    Our Address
  </h3>

  {/* ADDRESS */}
  <p
    className={`${interTight.className} mt-2 text-sm font-medium leading-7 text-black/75 sm:text-base`}
  >
    {salonAddress}
  </p>

  {/* LOCATION LINK */}
  <a
    href={mapSearchUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={`${interTight.className} group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors duration-300 hover:text-[#D77D99]`}
  >
    <span className="border-b border-black/20 pb-0.5 transition-colors duration-300 group-hover:border-[#D77D99]">
      View location
    </span>

   
  </a>
</div>

              </div>
            </div>

            {/* PHONE NUMBERS */}
            <div className="mt-6 border-t border-[#25232A]/15 pt-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#8D6CA3]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2Z" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8D6CA3]">
                    Call Us
                  </h3>

                  <div className="mt-2 space-y-2">
                    {phoneNumbers.map((phone) => (
                      <a
                        key={phone.link}
                        href={`tel:${phone.link}`}
                        className="block w-fit text-base font-semibold text-[#25232A] transition-colors hover:text-[#8D6CA3] sm:text-lg"
                      >
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* PROPRIETOR */}
            <div className="mt-6 border-t border-[#25232A]/15 pt-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#8D6CA3]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8D6CA3]">
                    Proprietor
                  </h3>

                  <p
                    className={`${interTight.className} mt-2 text-base font-semibold text-[#25232A]`}
                  >
                    C. Stephy Sahayaraj
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: LOCATION & GOOGLE MAP */}
          <div className="flex min-h-[440px] flex-col rounded-[24px] border border-[#25232A]/10 bg-white p-5 shadow-[0_8px_30px_rgba(37,35,42,0.04)] sm:p-7 lg:min-h-[520px]">
            {/* SECTION LABEL */}
            <span className="services-intro-item mb-4 ml-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#9675ba] sm:text-xs">
  FIND US HERE
</span>

            {/* HEADING */}
            <h3
              className={`${interTight.className}  text-4xl font-semibold leading-tight text-[#25232A] sm:text-4xl`}
            >
              Visit Our Studio
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-2 text-sm leading-6 text-[#25232A]/60">
              Find Touch Bridal Makeover Studio &amp; Unisex Salon in
              Nagercoil.
            </p>

            {/* GOOGLE MAP PREVIEW */}
            <div className="mt-5 min-h-[260px] flex-1 overflow-hidden rounded-[18px] border border-[#25232A]/10 bg-white shadow-sm">
              <iframe
                title="Touch Bridal Makeover Studio location"
                src={mapEmbedUrl}
                className="h-full min-h-[260px] w-full lg:min-h-[300px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* DIRECTIONS BUTTON */}
            
          </div>
        </div>
      </div>
    </section>
  );
}
