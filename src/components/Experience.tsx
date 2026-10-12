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
              y: 30,
              duration: 0.8,
            },
            "-=0.65",
          )
          .from(
            "[data-experience='years']",
            {
              opacity: 0,
              x: 15,
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
          .from(
            "[data-experience='accent'] path",
            {
              opacity: 0,
              drawSVG: "0%",
              duration: 1,
              ease: "power2.out",
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
      className="w-full px-6 py-16 md:px-12 lg:px-20 md:py-24"
    >
      <div className="w-full">
        {/* section index */}
        <div
          data-experience="index"
          className="mb-12 flex items-center gap-6 font-inter text-[10px] uppercase tracking-[0.1em] text-[#111111] md:mb-16 md:text-xs"
        >
          <span>01 / 06</span>
          <span>MEIE KOGEMUS</span>
        </div>

        {/* main content */}
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-6 lg:gap-8">
          {/* number */}
          <div className="relative flex min-h-[220px] flex-col justify-between pl-6 md:col-span-5 md:min-h-[300px] md:translate-x-[130px] md:pl-10 lg:translate-x-[160px]">
            <div className="absolute left-0 top-0 h-full w-px bg-[#B8B3AA]/60" />

            <div className="mt-8 md:mt-auto">
              <span
                data-experience="number"
                className="inline-block font-clearface text-[clamp(9rem,18vw,16rem)] font-normal leading-[0.72] tracking-[-0.05em] text-[#D32F2F]"
              >
                30
              </span>
            </div>
          </div>

          {/* right column content */}
          <div className="flex flex-col justify-between pt-2 md:col-span-7 md:pt-0">
            <div>
              {/* heading and years */}
              <div className="flex items-start justify-between gap-4 lg:gap-6">
                <h2
                  data-experience="heading"
                  className="font-clearface text-[clamp(3rem,6vw,5.5rem)] font-normal leading-[0.88] tracking-[-0.035em] text-[#111111]"
                >
                  AASTAT
                  <br />
                  KOGEMUST.
                </h2>

                {/* years */}
                <div
                  data-experience="years"
                  className="relative right-4 top-12 flex shrink-0 items-center gap-5 pt-2 font-inter text-xs font-normal uppercase leading-[1.6] tracking-[0.04em] md:right-6 md:top-20 md:gap-8"
                >
                  <span className="h-[150px] w-px bg-[#B8B3AA]/80 md:h-[220px]" />

                  <div className="flex flex-col items-center gap-y-4">
                    <span className="text-[#D32F2F]">1997</span>
                    <span className="text-[#5F5C57]">TÄNASENI</span>
                  </div>
                </div>
              </div>

              {/* description */}
              <p
                data-experience="description"
                className="mt-10 max-w-[560px] border-l border-[#B8B3AA]/70 pl-6 font-inter text-base leading-[1.75] text-[#5F5C57] md:mt-14 md:text-lg"
              >
                LL Trading on pakkunud raamatupidamisteenuseid Eesti ettevõtetele
                alates 1997. aastast. Meie klientide hulgas on nii väiksemaid kui
                ka suuremaid ettevõtteid ning teenindame kliente nii Pärnus kui
                ka üle Eesti.
              </p>
            </div>

            {/* wavy accent */}
            <div
              data-experience="accent"
              className="mt-12 pl-2 md:mt-16"
            >
              <svg
                width="130"
                height="55"
                viewBox="0 0 130 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#D32F2F]"
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