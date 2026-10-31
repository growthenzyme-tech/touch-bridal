
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Bridal Gallery", href: "/bridal-gallery" },
];

const whatsappLink =
  "https://wa.me/919789376174?text=" +
  encodeURIComponent("Hi Touch! I'd love to book an appointment.");

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        className={`mx-auto w-full max-w-[1500px] rounded-full border transition-all duration-500 ${
          scrolled
            ? "border-black/10 bg-white/75 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-2xl"
            : "border-white/20 bg-white/10 backdrop-blur-md"
        }`}
      >
        {/* NAVBAR MAIN */}
        <div className="flex items-center justify-between gap-3 px-4 py-1.5 sm:px-6 sm:py-2 lg:px-7 lg:py-2">
          {/* BRAND */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="group flex min-w-0 shrink items-center py-0.5 ml-3 sm:ml-5 md:ml-7 lg:ml-8 xl:ml-10"
            aria-label="S Touch Bridal Makeover Studio & Unisex Salon"
          >
            <img
              src="/images/logo.png"
              alt="S Touch Bridal Makeover Studio & Unisex Salon"
              className="h-9 sm:h-10 md:h-12 lg:h-[52px] xl:h-[56px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_4px_rgba(0,0,0,0.12)]"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative whitespace-nowrap rounded-full px-3 py-2 text-sm transition-colors duration-300 lg:px-4 lg:text-[14px] ${
                    active
                      ? "font-semibold text-[#D77D99]"
                      : "font-medium text-black/65 hover:text-[#D77D99]"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute inset-x-4 bottom-1 h-px origin-left bg-[#D77D99] transition-transform duration-500 ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* DESKTOP BOOKING BUTTON */}
        <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="group hidden shrink-0 items-center justify-center gap-2 rounded-full border border-black/20 bg-white px-5 py-2.5 text-xs font-semibold tracking-[0.04em] text-black transition-all duration-300 hover:border-[#D77D99] hover:bg-[#D77D99] hover:text-white lg:inline-flex"
>
  <span>Book an Appointment</span>
</a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-black/15 bg-white/30 transition-colors duration-300 hover:border-[#D77D99]/50 hover:bg-[#D77D99]/10 md:hidden"
          >
            <span
              className={`h-px w-5 bg-black transition-transform duration-300 ${
                menuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-px w-5 bg-black transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={`grid transition-all duration-500 ease-out md:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-black/10 px-6 pb-6 pt-5">
              {/* MOBILE LINKS */}
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-xl font-medium transition-colors duration-300 ${
                      isActive(link.href)
                        ? "text-[#D77D99]"
                        : "text-black/70 hover:text-[#D77D99]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* MOBILE BOOKING BUTTON */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="group mt-6 flex items-center justify-center gap-2 rounded-full border border-black bg-black px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#D77D99] hover:bg-[#D77D99]"
              >
                <span>Book an Appointment</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <p className="mt-4 text-center text-xs text-black/50">
                We usually reply within a few hours.
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
