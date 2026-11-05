"use client";

import { useState } from "react";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const rentalItems = [
  "Wedding Jewellery",
  "Wedding Bouquet",
  "Wedding Hairnet",
  "Wedding Crown",
];

type ApiResponse = {
  success: boolean;
  message?: string;
  enquiryId?: string;
};

export default function RentalEnquiry() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventDate: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleItemChange = (item: string) => {
    setSelectedItems((previous) =>
      previous.includes(item)
        ? previous.filter((selected) => selected !== item)
        : [...previous, item]
    );
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };



const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (selectedItems.length === 0) {
    setStatus("Please select at least one rental item.");
    return;
  }

  setStatus("");

  try {
    // Step 1: Save rental enquiry to Firestore
    const response = await fetch("/api/enquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "rental",
        name: formData.name,
        phone: formData.phone,
        selectedItems,
        eventDate: formData.eventDate,
        message: formData.message,
      }),
    });

    // Step 2: Read response safely
    const responseText = await response.text();

    let result: ApiResponse;

    try {
      result = JSON.parse(responseText) as ApiResponse;
    } catch {
      console.error("Invalid API response:", responseText);
      setStatus("Server error. Please try again later.");
      return;
    }

    if (!response.ok || !result.success) {
      setStatus(result.message || "Unable to submit your rental enquiry.");
      return;
    }

    // Step 3: Prepare WhatsApp enquiry
    const whatsappNumber = "919789376174";

    const enquiry = `
*Wedding Rental Enquiry*

*Name:* ${formData.name}
*Contact Number:* ${formData.phone}
*Event Date:* ${formData.eventDate}

*Selected Rental Items:*
${selectedItems.map((item) => `• ${item}`).join("\n")}

*Additional Details:*
${formData.message || "No additional details provided."}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      enquiry
    )}`;

    // Step 4: Open WhatsApp after successful save
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Step 5: Reset form
    setFormData({
      name: "",
      phone: "",
      eventDate: "",
      message: "",
    });

    setSelectedItems([]);
    setStatus("");

  } catch (error) {
    console.error("Rental enquiry error:", error);
    setStatus("Something went wrong. Please try again.");
  }
};



  return (
   <section
  id="rental-enquiry"
  className="bg-white px-4 py-14 -mt-16 sm:px-6 sm:py-16 sm:-mt-10 lg:px-8 lg:py-20 lg:-mt-12"
>
      <div className="mx-auto max-w-[1320px]">

        {/* FORM PANEL */}
        <div className="grid overflow-hidden rounded-[28px] bg-[#F1EDF7] lg:grid-cols-[0.75fr_1.25fr]">

          {/* LEFT CONTENT */}
          <div className="relative flex flex-col justify-between overflow-hidden p-6 sm:p-8 lg:p-10">

            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/50"
            />

            <div className="relative">

            <p className="services-intro-item mb-4 ml-2 text-[10px] font-bold uppercase leading-6 tracking-[0.24em] text-[#9675ba] sm:text-xs">
  Rental Enquiry
</p>

            <h2
  className={`${interTight.className} mt-4 text-[clamp(2.3rem,4.8vw,4.5rem)] font-bold uppercase leading-[1] tracking-[-0.02em] text-[#25232A]`}
>
  Your Perfect Wedding
  <br />
  <span className="text-[#8D6CA3]">
    Details Begin Here.
  </span>
</h2>

              <p className="mt-4 max-w-[360px] text-xs leading-6 text-[#817887] sm:text-sm">
                Tell us what you need for your special occasion.
                Select your preferred rental items and share
                your event details with us.
              </p>


            </div>

            <div className="relative mt-8 border-t border-[#8D6CA3]/20 pt-5">

              <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#8D6CA3]">
                Need assistance?
              </p>

              <p className="mt-2 text-sm font-semibold text-[#25232A]">
                We&apos;re happy to help you choose.
              </p>

              <a
                href="https://wa.me/919789376174"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#25232A] transition-colors hover:text-[#8D6CA3]"
              >
                Chat with us
            
              </a>

            </div>

          </div>

          {/* RIGHT: ENQUIRY FORM */}
          <div className="relative overflow-hidden bg-white p-5 sm:p-8 lg:p-10">

            {/* LONG LAVENDER TABS ON THE TOP AND BOTTOM BORDER (right side) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-4 w-[70%] rounded-b-[999px] bg-[#F1EDF7] sm:h-5 lg:h-6"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-2 w-[32%] rounded-b-[999px] bg-[#E4D9ED] sm:h-2.5 lg:h-3"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 h-4 w-[70%] rounded-t-[999px] bg-[#F1EDF7] sm:h-5 lg:h-6"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 h-2 w-[32%] rounded-t-[999px] bg-[#E4D9ED] sm:h-2.5 lg:h-3"
            />

            <form
              onSubmit={handleSubmit}
              className="relative z-10 space-y-6"
            >

              {/* RENTAL ITEM SELECTION */}
              <div>

                <label className="text-xs font-semibold text-[#25232A]">
                  Select Rental Items
                  <span className="ml-1 text-[#8D6CA3]">*</span>
                </label>

                <p className="mt-1 text-[10px] text-[#817887]">
                  Select one or more items.
                </p>

                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">

                  {rentalItems.map((item) => {
                    const isSelected =
                      selectedItems.includes(item);

                    return (
                      <label
                        key={item}
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-all duration-300 ${
                          isSelected
                            ? "border-[#8D6CA3] bg-[#F1EDF7]"
                            : "border-[#8D6CA3]/15 bg-white hover:bg-[#F1EDF7]/50"
                        }`}
                      >

                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() =>
                            handleItemChange(item)
                          }
                          className="h-4 w-4 accent-[#8D6CA3]"
                        />

                        <span className="text-xs font-medium text-[#25232A]">
                          {item}
                        </span>

                      </label>
                    );
                  })}

                </div>

              </div>

              {/* NAME + PHONE */}
              <div className="grid gap-4 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="rental-name"
                    className="text-xs font-semibold text-[#25232A]"
                  >
                    Your Name *
                  </label>

                  <input
                    id="rental-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="mt-2 h-11 w-full rounded-xl border border-[#8D6CA3]/20 bg-white px-3 text-xs text-[#25232A] outline-none transition focus:border-[#8D6CA3] focus:ring-2 focus:ring-[#8D6CA3]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="rental-phone"
                    className="text-xs font-semibold text-[#25232A]"
                  >
                    Contact Number *
                  </label>

                  <input
                    id="rental-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="mt-2 h-11 w-full rounded-xl border border-[#8D6CA3]/20 bg-white px-3 text-xs text-[#25232A] outline-none transition focus:border-[#8D6CA3] focus:ring-2 focus:ring-[#8D6CA3]/10"
                  />
                </div>

              </div>

              {/* EVENT DATE */}
              <div>

                <label
                  htmlFor="rental-date"
                  className="text-xs font-semibold text-[#25232A]"
                >
                  Event Date *
                </label>

                <input
                  id="rental-date"
                  name="eventDate"
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="mt-2 h-11 w-full rounded-xl border border-[#8D6CA3]/20 bg-white px-3 text-xs text-[#25232A] outline-none transition focus:border-[#8D6CA3] focus:ring-2 focus:ring-[#8D6CA3]/10"
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label
                  htmlFor="rental-message"
                  className="text-xs font-semibold text-[#25232A]"
                >
                  Additional Details
                </label>

                <textarea
                  id="rental-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event or rental requirements..."
                  className="mt-2 w-full resize-none rounded-xl border border-[#8D6CA3]/20 bg-white p-3 text-xs leading-6 text-[#25232A] outline-none transition focus:border-[#8D6CA3] focus:ring-2 focus:ring-[#8D6CA3]/10"
                />

              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className=" ml-80 flex min-h-12 w-fill items-center justify-center gap-3 bg-[#25232A] px-6 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#8D6CA3]"
              >
                Submit
              
              </button>

              {/* STATUS */}
              {status && (
                <p
                  role="status"
                  className="text-center text-xs text-[#817887]"
                >
                  {status}
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}