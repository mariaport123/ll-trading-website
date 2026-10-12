
"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const accentPath = sectionRef.current?.querySelector(
        "[data-experience='accent'] path",
      ) as SVGPathElement | null;

      if (accentPath) {
        const pathLength = accentPath.getTotalLength();

        gsap.set(accentPath, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
          opacity: 1,
        });
      }

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
          defaults: {
            ease: "power3.out",
          },
        });

        timeline
          .from("[data-experience='index']", {
            opacity: 0,
            y: 12,
            duration: 0.6,
          })
          .from(
            "[data-experience='number']",
            {
              opacity: 0,
              y: 45,
              duration: 1,
              ease: "power4.out",
            },
            "-=0.2",
          )
          .from(
            "[data-experience='heading']",
            {
              opacity: 0,
              y: 25,
              duration: 0.8,
            },
            "-=0.65",
          )
          .from(
            "[data-experience='years']",
            {
              opacity: 0,
              x: 12,
              duration: 0.7,
            },
            "-=0.4",
          )
          .from(
            "[data-experience='description']",
            {
              opacity: 0,
              y: 20,
              duration: 0.8,
            },
            "-=0.3",
          )
          .to(
            "[data-experience='accent'] path",
            {
              strokeDashoffset: 0,
              duration: 1.6,
              ease: "power2.inOut",
            },
            "-=0.3",
          );
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full overflow-hidden px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-24 lg:px-20"
    >
      <div className="w-full">
        {/* Section index */}
        <div
          data-experience="index"
          className="mb-8 flex items-center gap-4 font-inter text-[9px] uppercase tracking-[0.1em] text-[#111111] sm:mb-10 sm:gap-6 sm:text-[10px] md:mb-16 md:text-xs"
        >
          <span>01 / 06</span>
          <span>MEIE KOGEMUS</span>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 items-start gap-5 sm:gap-7 md:grid-cols-12 md:gap-6 lg:gap-8">
          {/* Number */}
          <div className="relative min-w-0 pl-4 sm:pl-6 md:col-span-5 md:min-h-[300px] md:translate-x-[clamp(40px,9vw,130px)] md:pl-10 lg:translate-x-[160px]">
            <div className="absolute bottom-0 left-0 top-0 w-px bg-[#B8B3AA]/60" />

            <div className="py-2 sm:py-4 md:mt-auto md:py-0">
              <span
                data-experience="number"
                className="inline-block font-clearface text-[clamp(7rem,28vw,12rem)] font-normal leading-[0.8] tracking-[-0.06em] text-[#D32F2F] sm:text-[clamp(9rem,23vw,14rem)] md:text-[clamp(9rem,18vw,16rem)]"
              >
                30
              </span>
            </div>
          </div>

          {/* Right column content */}
          <div className="min-w-0 pt-0 md:col-span-7 md:pt-0">
            {/* Heading and years */}
            <div className="flex min-w-0 items-start justify-between gap-3 sm:gap-5 md:gap-4 lg:gap-6">
              <h2
                data-experience="heading"
                className="min-w-0 flex-1 font-clearface text-[clamp(2.7rem,10.5vw,5.5rem)] font-normal leading-[0.9] tracking-[-0.045em] text-[#111111] sm:text-[clamp(3.5rem,8vw,5.5rem)] md:flex-none md:text-[clamp(3rem,6vw,5.5rem)] md:leading-[0.88] md:tracking-[-0.035em]"
              >
                AASTAT
                <br />
                KOGEMUST.
              </h2>

              {/* Years */}
              <div
                data-experience="years"
                className="relative mt-2 flex shrink-0 items-start gap-2 pt-1 font-inter text-[8px] font-normal uppercase leading-[1.5] tracking-[0.02em] sm:mt-4 sm:gap-3 sm:text-[10px] sm:tracking-[0.04em] md:mt-10 md:gap-5 md:pt-2 md:text-xs lg:gap-8"
              >
                <span className="h-[88px] w-px bg-[#B8B3AA]/80 sm:h-[120px] md:h-[220px]" />

                <div className="flex flex-col items-center gap-y-3 whitespace-nowrap sm:gap-y-4">
                  <span className="text-[#D32F2F]">1997</span>
                  <span className="text-[#5F5C57]">TÄNASENI</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div
              data-experience="description"
              className="mt-3 max-w-[520px] border-l border-[#B8B3AA]/80 pl-4 sm:mt-4 sm:pl-6 md:mt-0"
            >
              <p className="font-inter text-sm leading-[1.65] text-[#5F5C57] sm:text-base sm:leading-[1.75] md:text-lg">
                LL Trading on pakkunud raamatupidamisteenuseid Eesti ettevõtetele
                alates 1997. aastast. Meie klientide hulgas on nii väiksemaid kui
                ka suuremaid ettevõtteid ning teenindame kliente nii Pärnus kui
                ka üle Eesti.
              </p>
            </div>

            {/* Wavy accent */}
            <div
              data-experience="accent"
              className="mt-5 pl-1 sm:mt-6 md:mt-10 md:pl-2"
            >
              <svg
                width="130"
                height="55"
                viewBox="0 0 130 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto w-[100px] text-[#D32F2F] sm:w-[130px]"
              >
                <path
                  d="M2 52 C2 28 5 12 18 14 C32 16 42 39 54 30 C66 21 66 3 80 8 C94 13 100 30 111 20 C120 12 123 5 126 1"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
