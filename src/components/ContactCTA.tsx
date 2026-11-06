

"use client";

import type { FormEvent } from "react";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Inter_Tight } from "next/font/google";
import ServiceSelector from "@/components/ServiceSelector";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const whatsappNumber = "919789376174";
const phoneNumber = "+919789376174";
type ApiResponse = {
  success: boolean;
  message?: string;
  enquiryId?: string;
};

function ContactCTAContent() {
  const searchParams = useSearchParams();
  const serviceFromUrl = searchParams.get("service");

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (serviceFromUrl) {
        setSelectedServices([serviceFromUrl]);
      }

      if (window.location.hash === "#booking" || window.location.hash === "#booking-form" || serviceFromUrl) {
        const timer = setTimeout(() => {
          const isMobile = window.innerWidth < 768;
          const targetId = isMobile ? "booking-form" : "booking";
          const el = document.getElementById(targetId) || document.getElementById("booking") || document.getElementById("booking-form");

          if (el) {
            el.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 150);

        return () => clearTimeout(timer);
      }
    }
  }, [serviceFromUrl]);

 const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {

  event.preventDefault();
const formElement = event.currentTarget;

  if (selectedServices.length === 0) {
    alert("Please select at least one service.");
    return;
  }

  const formData = new FormData(event.currentTarget);

  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const service = selectedServices.join(", ");
  const eventDate = String(formData.get("eventDate") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !phone) {
    alert("Please enter your name and phone number.");
    return;
  }

  try {
    // Step 1: Save appointment enquiry to Firestore
    const response = await fetch("/api/enquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "appointment",
        name,
        phone,
        selectedServices,
        eventDate,
        message,
      }),
    });

 
const responseText = await response.text();

let result: ApiResponse;

try {
  result = JSON.parse(responseText) as ApiResponse;
} catch {
  console.error("Invalid API response:", responseText);
  alert("Server error. Please try again later.");
  return;
}

if (!response.ok || !result.success) {
  alert(result.message || "Unable to submit your appointment enquiry.");
  return;
}


    // Step 2: Open WhatsApp after successful save
    const enquiry = [
      "Hello Touch Bridal Makeover Studio & Unisex Salon!",
      "",
      "I would like to enquire about an appointment.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Event date: ${eventDate || "Not specified"}`,
      `Message: ${message || "Not provided"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquiry)}`,
      "_blank",
      "noopener,noreferrer"
    );

    // alert("Your appointment enquiry has been saved successfully!");

    // Step 3: Reset form
formElement.reset();
setSelectedServices([]);

  } catch (error) {
    console.error("Appointment enquiry error:", error);
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <section
      id="booking"
      className={`${interTight.className} scroll-mt-24 sm:scroll-mt-28 -mt-6 px-3 py-6 sm:-mt-8 sm:px-5 sm:py-8 lg:-mt-6 lg:px-8 lg:py-10`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="grid overflow-hidden border-0 bg-white md:grid-cols-2">
          {/* LEFT: BRIDAL IMAGE PANEL */}

          <div className="relative flex min-h-[430px] flex-col justify-between overflow-hidden bg-[#8D6CA3] p-6 sm:min-h-[500px] sm:p-9 lg:min-h-[580px] lg:p-12">
            <img
              src="/servicesimg/black2.jpg"
              alt="Bridal makeup at Touch Bridal Makeover Studio"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Lavender-toned image overlay */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40" />

            {/* Brand */}
            <div className="relative z-10">
              <span className="inline-flex rounded-full border border-white/40 bg-white/10 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                Touch Bridal
              </span>
            </div>

            {/* Main message */}
            <div className="relative z-10 mt-10 max-w-lg">

              <h2
  className={`${interTight.className} mt-4 text-[clamp(2.3rem,4.8vw,4.5rem)] font-bold uppercase leading-[1] tracking-[-0.02em] text-white`}
>
  Bridal & Groom
  <br />
  Makeovers in
  <br />
  <span className="text-[#E5D8EF]">
    Nagercoil.
  </span>
</h2>

              <p className="mt-5 max-w-sm text-xs leading-7 text-white/85 sm:text-sm">
                Tell us about your special occasion. Let's create a look that
                reflects your personality and makes you feel beautiful.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "Hello Touch Bridal Makeover Studio & Unisex Salon! I would like to book an appointment."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-white/50 px-5 py-3 text-[11px] font-semibold text-white transition-colors hover:bg-white/15"
                >
                  Book on WhatsApp
                </a>

                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center gap-2 border border-white/50 px-5 py-3 text-[11px] font-semibold text-white transition-colors hover:bg-white/15"
                >
                  Call Us
                </a>
              </div>
            </div>

            {/* Decorative bottom label */}
            <div className="relative z-10 mt-12 border-t border-white/25 pt-4">
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/75">
                Bridal Makeup · Beauty · Styling
              </p>
            </div>
          </div>

          {/* RIGHT: BOOKING FORM PANEL */}

          <div id="booking-form" className="scroll-mt-24 sm:scroll-mt-28 flex flex-col justify-center bg-white px-5 py-9 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div>
            <p
  className={`${interTight.className} services-intro-item mb-4 ml-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#9675ba] sm:text-xs`}
>
  LET'S TALK BEAUTY
</p>

              <h3
                className={`${interTight.className} uppercase mt-3 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1] tracking-[-0.02em] text-[#25232A]`}
              >
                Book Your Appointment
              </h3>

              <p className="mt-3 text-xs leading-6 text-[#6F6278] sm:text-sm">
                Share a few details and send your appointment enquiry directly
                to our team through WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              {/* Name and phone */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="cta-name"
                    className="mb-2 block text-[11px] font-medium text-[#51465B]"
                  >
                    Full name *
                  </label>

                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    className="w-full border-b border-[#DCCFE7] bg-transparent px-0 py-3 text-xs text-[#25232A] outline-none placeholder:text-[#A69AAF] focus:border-[#8D6CA3] sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cta-phone"
                    className="mb-2 block text-[11px] font-medium text-[#51465B]"
                  >
                    Phone number *
                  </label>

                  <input
                    id="cta-phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    autoComplete="tel"
                    required
                    className="w-full border-b border-[#DCCFE7] bg-transparent px-0 py-3 text-xs text-[#25232A] outline-none placeholder:text-[#A69AAF] focus:border-[#8D6CA3] sm:text-sm"
                  />
                </div>
              </div>

              {/* Service and date */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[11px] font-medium text-[#51465B]">
                    Service *
                  </label>

                  <ServiceSelector
                    selectedServices={selectedServices}
                    onChange={setSelectedServices}
                  />
                </div>

                <div>
                  <label
                    htmlFor="cta-event-date"
                    className="mb-2 block text-[11px] font-medium text-[#51465B]"
                  >
                    Event date
                  </label>

                  <input
                    id="cta-event-date"
                    name="eventDate"
                    type="date"
                    min={new Date().toLocaleDateString("en-CA")}
                    className="w-full border-b border-[#DCCFE7] bg-transparent px-0 py-3 text-xs text-[#6F6278] outline-none focus:border-[#8D6CA3] sm:text-sm"
                  />
                </div>
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="cta-message"
                  className="mb-2 block text-[11px] font-medium text-[#51465B]"
                >
                  Tell us about your occasion
                </label>

                <textarea
                  id="cta-message"
                  name="message"
                  rows={4}
                  placeholder="Your wedding date, preferred look, or other details..."
                  className="w-full resize-y rounded-[12px] border border-[#DCCFE7] bg-white/70 px-3 py-3 text-xs leading-6 text-[#25232A] outline-none placeholder:text-[#A69AAF] focus:border-[#8D6CA3] sm:text-sm"
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="group ml-50 flex w-fit items-center justify-center gap-3 bg-[#8D6CA3] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#76568D] sm:text-xs"
              >
                Send Enquiry
              </button>

              <p className="text-center text-[10px] leading-5 text-[#8A7B95]">
                Your details will be prepared in WhatsApp for you to send.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactCTA() {
  return (
    <Suspense fallback={<div className="min-h-[500px]" />}>
      <ContactCTAContent />
    </Suspense>
  );
}

