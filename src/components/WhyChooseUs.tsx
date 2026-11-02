"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Same colours as before (unchanged)
const SPINE = "#9675BA"; // Purple used for icons and accents
const TEXT = "#716B73"; // Muted descriptions

type ArtworkType =
  | "personalized"
  | "bridal"
  | "detail"
  | "grooming"
  | "experience";

type Feature = {
  number: string;
  title: string;
  description: string;
  artwork: ArtworkType;
  /** "purple" = solid purple note, "white" = white note */
  variant: "purple" | "white";
  /** Small tilt, in degrees, like a note pinned to a board */
  rotate: number;
  /** Position of the note in the collage (desktop) and on tablet/phone */
  place: string;
};

const features: Feature[] = [
  {
    number: "01",
    title: "PERSONALISED BEAUTY",
    description:
      "Every look begins with your style, preferences, and the occasion you are celebrating.",
    artwork: "personalized",
    variant: "purple",
    rotate: -4,
    place: "lg:col-start-1 lg:row-start-1",
  },
  {
    number: "02",
    title: "BRIDAL & OCCASION LOOKS",
    description:
      "Explore makeup and styling ideas for weddings, receptions, and other special moments.",
    artwork: "bridal",
    variant: "white",
    rotate: 3,
    place: "lg:col-start-3 lg:row-start-1",
  },
  {
    number: "03",
    title: "ATTENTION TO DETAIL",
    description:
      "Thoughtful finishing touches help bring your chosen beauty look together.",
    artwork: "detail",
    variant: "white",
    rotate: -2,
    place: "lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center",
  },
  {
    number: "04",
    title: "BEAUTY & GROOMING",
    description:
      "Discover hair, skincare, facials, and grooming services to suit your needs.",
    artwork: "grooming",
    variant: "white",
    rotate: -3,
    place: "lg:col-start-1 lg:row-start-2",
  },
  {
    number: "05",
    title: "A LOOK THAT FEELS LIKE YOU",
    description:
      "Share your ideas with us and explore a look that reflects your personality and occasion.",
    artwork: "experience",
    variant: "purple",
    rotate: 4,
    place:
      "sm:col-span-2 sm:w-[calc(50%-1rem)] sm:justify-self-center lg:col-span-1 lg:col-start-3 lg:row-start-2 lg:w-auto lg:justify-self-stretch",
  },
];

/* Line icon (no background circle, it sits directly on the note) */
function FeatureArtwork({
  type,
  tone,
}: {
  type: ArtworkType;
  tone: "light" | "dark";
}) {
  // light = icon on a white note, dark = icon on a purple note
  const line = tone === "dark" ? "#FFFFFF" : SPINE;
  const paper = tone === "dark" ? "rgba(255,255,255,0.16)" : "#FFFFFF";
  const blush = tone === "dark" ? "rgba(255,255,255,0.55)" : "#8D6CA3";
  const accent = tone === "dark" ? "#FFFFFF" : "#8D6CA3";

  return (
    <div className="why-icon w-[64px] shrink-0 md:w-[76px]" aria-hidden="true">
      <svg
        viewBox="28 28 110 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-auto w-full overflow-visible"
      >
        {type === "personalized" && (
          <g stroke={line} strokeWidth="2.5" strokeLinecap="round">
            <path
              d="M58 63C58 48 68 40 80 40C92 40 102 48 102 63V76C102 91 93 101 80 101C67 101 58 91 58 76V63Z"
              fill={paper}
            />
            <path d="M69 66H70M90 66H91" strokeWidth="4" />
            <path d="M72 81C76 85 84 85 88 81" />
            <path d="M43 39L47 47L55 51L47 55L43 63L39 55L31 51L39 47Z" />
            <path d="M116 83L119 89L125 92L119 95L116 101L113 95L107 92L113 89Z" />
          </g>
        )}

        {type === "bridal" && (
          <g
            stroke={line}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M48 76L42 49L63 63L80 35L97 63L118 49L112 76Z"
              fill={paper}
            />
            <path d="M48 76H112V84H48Z" fill={blush} />
            <circle cx="80" cy="35" r="4" fill={accent} />
            <circle cx="42" cy="49" r="3" fill={accent} />
            <circle cx="118" cy="49" r="3" fill={accent} />
            <path d="M59 94H101M65 101H95" />
            <path d="M122 87L125 93L131 96L125 99L122 105L119 99L113 96L119 93Z" />
          </g>
        )}

        {type === "detail" && (
          <g
            stroke={line}
            strokeWidth="2.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M51 100L92 47C96 42 103 46 100 52L62 107Z"
              fill={paper}
            />
            <path d="M51 100L62 107L55 115L44 108Z" fill={blush} />
            <path d="M94 50L101 55" />
            <path d="M42 55L45 62L52 65L45 68L42 75L39 68L32 65L39 62Z" />
            <path d="M111 82L114 88L120 91L114 94L111 100L108 94L102 91L108 88Z" />
            <path d="M83 112H112" />
          </g>
        )}

        {type === "grooming" && (
          <g
            stroke={line}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M51 45L99 93" />
            <path d="M99 45L51 93" />
            <circle cx="45" cy="39" r="10" fill={paper} />
            <circle cx="105" cy="39" r="10" fill={paper} />
            <path d="M58 100L108 50" />
            <path d="M61 97L69 105M67 91L75 99M73 85L81 93M79 79L87 87" />
            <path d="M109 105L112 111L118 114L112 117L109 123L106 117L100 114L106 111Z" />
          </g>
        )}

        {type === "experience" && (
          <g
            stroke={line}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M80 99C72 92 49 76 49 61C49 43 71 39 80 56C89 39 111 43 111 61C111 76 88 92 80 99Z"
              fill={paper}
            />
            <path d="M67 71L76 80L94 60" />
            <path d="M40 84L43 90L49 93L43 96L40 102L37 96L31 93L37 90Z" />
            <path d="M118 36L121 42L127 45L121 48L118 54L115 48L109 45L115 42Z" />
          </g>
        )}
      </svg>
    </div>
  );
}

/* Round push pin, like the ones in the reference */
function Pin({ variant }: { variant: "purple" | "white" }) {
  const background =
    variant === "purple"
      ? "radial-gradient(circle at 35% 30%, #F1EDF7 0%, #B9A2D3 55%, #6E5190 100%)"
      : "radial-gradient(circle at 35% 30%, #C7B2E0 0%, #8D6CA3 55%, #5E4480 100%)";

  return (
    <span
      aria-hidden="true"
      className="why-pin pointer-events-none absolute -top-4 left-1/2 z-10 -translate-x-1/2"
    >
      <span
        className="block h-7 w-7 rounded-full shadow-[0_6px_10px_-2px_rgba(37,35,42,0.45)]"
        style={{ background }}
      />
    </span>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const isPurple = feature.variant === "purple";

  return (
    <div className={`why-card ${feature.place}`}>
      <div
        className={`relative flex h-full min-h-[210px] flex-col items-center justify-center rounded-[6px] px-6 py-8 text-center shadow-[0_22px_34px_-18px_rgba(37,35,42,0.4)] lg:min-h-[235px] ${
          isPurple ? "bg-[#8D6CA3]" : "bg-white"
        }`}
        style={{ transform: `rotate(${feature.rotate}deg)` }}
      >
        <Pin variant={feature.variant} />

        <FeatureArtwork
          type={feature.artwork}
          tone={isPurple ? "dark" : "light"}
        />

        <h3
          className={`${interTight.className} mt-4 text-[18px] font-bold leading-[1.1] tracking-[0.01em] md:text-[20px] ${
            isPurple ? "text-white" : "text-[#25232A]"
          }`}
        >
          {feature.title}
        </h3>

        <p
          className={`mt-2 max-w-[250px] text-[12px] font-light leading-[1.65] md:text-[13px] ${
            isPurple ? "text-white/85" : ""
          }`}
          style={isPurple ? undefined : { color: TEXT }}
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const section = sectionRef.current;

        if (!section) return;

        const heading = section.querySelector(".why-section-heading");
        const board = section.querySelector(".why-board");

        // Heading fades and moves upward into view.
        if (heading) {
          gsap.fromTo(
            heading,
            {
              opacity: 0,
              y: 24,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 88%",
                end: "bottom 12%",
                toggleActions: "play reverse play reverse",
              },
            },
          );
        }

        if (!board) return;

        const scrollTrigger = {
          trigger: board,
          start: "top 85%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse" as const,
        };

        // Notes drop onto the board one after another.
        gsap.fromTo(
          section.querySelectorAll(".why-card"),
          {
            opacity: 0,
            y: 50,
            scale: 0.92,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.13,
            ease: "power3.out",
            scrollTrigger,
          },
        );

        // Pins pop in just after their notes.
        gsap.fromTo(
          section.querySelectorAll(".why-pin"),
          {
            opacity: 0,
            y: -18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.25,
            stagger: 0.13,
            ease: "back.out(1.8)",
            scrollTrigger,
          },
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className={`${interTight.className} relative -mt-4 bg-transparent px-2 pb-6 pt-2 sm:-mt-19 sm:px-3 sm:pb-8 sm:pt-3 lg:px-4`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="overflow-hidden border border-[#DDD5DF] bg-[#F1EDF7] p-4 sm:p-6 lg:p-8">
          {/* SECTION INTRO */}
          <div className="why-section-heading mx-auto mb-12 w-full max-w-[1000px] text-center md:mb-16">
<span className="mx-auto mb-4 flex w-fit items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#9675ba] sm:text-xs">
  WHY CHOOSE TOUCH
</span>

           <h2
  className={`${interTight.className} mt-4 text-center text-[clamp(2.3rem,4.8vw,4.5rem)] font-bold uppercase leading-[1] tracking-[-0.02em] text-[#25232A]`}
>
  <span className="block">Beauty deserves a</span>
  <span className="block text-[#8D6CA3]">Personal Touch</span>
</h2>
            <p className="mt-4 text-sm font-normal leading-7 text-[#77717B]">
              Every detail matters when it comes to feeling your best.
            </p>
          </div>

          {/* PINNED NOTES BOARD */}
          <div className="why-board mx-auto grid max-w-[1000px] grid-cols-1 gap-x-8 gap-y-12 px-2 pb-6 pt-2 sm:grid-cols-2 sm:px-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-12 lg:gap-y-14 lg:px-6">
            {features.map((feature) => (
              <FeatureCard key={feature.number} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}