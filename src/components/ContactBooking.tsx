"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "919789376174";

// Replace this with your salon's exact address.
const SALON_LOCATION = "Touch Bridal Makeover Studio, Kerala";

export default function ContactBooking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (!formData.name.trim() || !formData.phone.trim()) {
    alert("Please enter your name and contact number.");
    return;
  }

  try {
    // Step 1: Save enquiry to Firestore through the API
    const response = await fetch("/api/enquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "contact",
        name: formData.name,
        phone: formData.phone,
        message:
          formData.message ||
          "I would like to know more about your services.",
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      alert(result.message || "Unable to submit your enquiry.");
      return;
    }

    // Step 2: Open WhatsApp after successful Firestore submission
    const message = `
Hello Touch Bridal!

I would like to enquire about your services.

Name: ${formData.name}
Contact Number: ${formData.phone}
Message: ${formData.message || "I would like to know more about your services."}
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Step 3: Reset form
    setFormData({
      name: "",
      phone: "",
      message: "",
    });

  } catch (error) {
    console.error("Contact enquiry error:", error);
    alert("Something went wrong. Please try again.");
  }
};

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    SALON_LOCATION
  )}`;

  const inputClass =
    "mt-2 h-11 w-full border border-[#8D6CA3]/25 bg-[#F1EDF7]/50 px-5 text-xs text-[#25232A] outline-none transition placeholder:text-[#817887]/70 focus:border-[#8D6CA3] focus:bg-white rounded-md";

  const contactItems = [
    {
      label: "WhatsApp",
      value: "+91 97893 76174",
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      external: true,
      icon: (
        <>
          <path d="M20 11.5a8.2 8.2 0 0 1-12.2 7.1L4 20l1.4-3.6A8.2 8.2 0 1 1 20 11.5Z" />
          <path d="M9 8.5c.3 2 2 3.8 4 4.5l1.2-1.2 2 1c-.2 1.2-1.1 2-2.3 2-3.5-.5-6.2-3.2-6.7-6.7 0-1.2.8-2.1 2-2.3l1 2L9 8.5Z" />
        </>
      ),
    },
    {
      label: "Direct Call",
      value: "+91 97893 76174",
      href: "tel:+919789376174",
      external: false,
      icon: (
        <path d="M5 3h4l2 5-2.5 1.5a15 15 0 0 0 6 6L16 13l5 2v4c0 1.1-.9 2-2 2C10 21 3 14 3 5c0-1.1.9-2 2-2Z" />
      ),
    },
    {
      label: "Salon Location",
      value: "View on Google Maps",
      href: mapsLink,
      external: true,
      icon: (
        <>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-6  bg-[#F1EDF7] p-5 sm:p-8 lg:grid-cols-2 lg:gap-8 lg:p-10">
          {/* LEFT: CONTACT INFORMATION + MAP */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#25232A] sm:text-4xl">
              Contact <span className="text-[#8D6CA3]">Us</span>
            </h2>

            <div className="mt-6 grid gap-3">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="rounded-lg group flex items-center gap-4 bg-white p-4 transition-shadow duration-300 hover:shadow-[0_12px_30px_-20px_rgba(141,108,163,0.7)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8D6CA3] text-white transition-colors duration-300 group-hover:bg-[#25232A]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-5 w-5"
                    >
                      {item.icon}
                    </svg>
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] uppercase tracking-[0.12em] text-[#817887]">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold text-[#25232A]">
                      {item.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            {/* MAP */}
            <div className="mt-3 min-h-[240px] flex-1 overflow-hidden rounded-xl bg-white">
              <iframe
                title="Touch Bridal Salon Location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  SALON_LOCATION
                )}&output=embed`}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[240px] border-0"
              />
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className=" bg-white p-6 sm:p-8 ">
            <form onSubmit={handleSubmit} className="space-y-4 ">
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-xs font-medium text-[#25232A] "
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={inputClass}
                  
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="text-xs font-medium text-[#25232A]"
                >
                  Contact Number *
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="text-xs font-medium text-[#25232A]"
                >
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your booking or enquiry..."
                  className="mt-2 w-full resize-none border border-[#8D6CA3]/25 bg-[#F1EDF7]/50 px-5 py-3 text-xs leading-6 text-[#25232A] outline-none transition placeholder:text-[#817887]/70 focus:border-[#8D6CA3] focus:bg-white"
                />
              </div>

             <button
  type="submit"
  className="flex min-h-12 w-fill items-center justify-center gap-3 bg-[#25232A] px-6 text-xs font-semibold text-white transition-colors duration-300 hover:bg-[#8D6CA3]"
>
  Send Enquiry
</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}