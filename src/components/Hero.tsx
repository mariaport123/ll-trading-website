"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        intro
          .from("[data-hero='meta']", {
            opacity: 0,
            y: 12,
            duration: 0.7,
          })
          .from(
            "[data-hero='circle-small']",
            {
              opacity: 0,
              scale: 0.7,
              duration: 0.8,
            },
            "-=0.5",
          )
          .from(
            "[data-hero='circle-red']",
            {
              opacity: 0,
              x: 45,
              scale: 0.96,
              duration: 1.2,
            },
            "-=0.65",
          )
          .from(
            "[data-hero='headline']",
            {
              opacity: 0,
              y: 65,
              duration: 1.5,
              ease: "power4.out",
            },
            "-=0.4",
          )
          .from(
            "[data-hero='description']",
            {
              opacity: 0,
              y: 18,
              duration: 0.8,
            },
            "-=0.45",
          )
          .from(
            "[data-hero='location']",
            {
              opacity: 0,
              y: 15,
              duration: 0.7,
            },
            "-=0.55",
          )
          .from(
            "[data-hero='bottom-line']",
            {
              scaleX: 0,
              transformOrigin: "left center",
              duration: 0.7,
            },
            "-=0.5",
          );
      });

      return () => mm.revert();
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="relative h-[620px] min-h-0 overflow-hidden px-6 sm:h-[680px] sm:px-8 md:h-auto md:min-h-[calc(100vh-92px)] md:px-12 lg:px-16"
    >
      {/* Starting point */}
      <div
        data-hero="meta"
        className="absolute left-6 top-[13%] flex items-center gap-3 font-inter text-[9px] uppercase tracking-[0.08em] text-[#77736D] sm:left-8 sm:top-[19%] sm:text-[14px] md:left-12 md:top-[21%] md:gap-4 md:text-[14px] lg:left-16"
      >
        <span>Alates 1997</span>
        <span className="h-px w-8 bg-[#B8B3AA] sm:w-10 md:w-12" />
      </div>

      {/* Small circle */}
      <div
        data-hero="circle-small"
        className="pointer-events-none absolute left-[68%] top-[12%] h-7 w-7 rounded-full border border-[#8F8A82] sm:left-[62%] sm:top-[16%] sm:h-9 sm:w-9 md:left-[57%] md:top-[15%] md:h-[52px] md:w-[52px]"
      />

      {/* Small horizontal line */}
      <div className="pointer-events-none absolute right-[9%] top-[8%] h-px w-8 bg-[#B8B3AA] sm:w-10 md:right-[10%] md:top-[2%] md:w-[52px]" />

      {/* Large red circle */}
      <div
        data-hero="circle-red"
        className="hero-red-circle pointer-events-none absolute -right-[100px] top-[5%] z-0 h-[190px] w-[190px] rounded-full border-[1.5px] border-[#D32F2F]/90 sm:-right-[55px] sm:h-[280px] sm:w-[280px] md:right-[3%] md:top-[5%] md:h-[clamp(420px,35vw,540px)] md:w-[clamp(420px,35vw,540px)] md:border-[2.5px]"
      />

      {/* Main headline */}
      <div className="absolute left-1/2 top-[38%] z-10 w-[calc(100%-48px)] min-w-0 -translate-x-1/2 -translate-y-1/2 sm:top-[44%] sm:w-full sm:px-4 md:top-[45%] md:w-full md:px-0">
        <h1
          data-hero="headline"
          className="w-full max-w-full break-keep text-center font-clearface text-[clamp(1.8rem,6.2vw,7.5rem)] font-normal leading-[0.98] tracking-[-0.035em] sm:text-[clamp(2.4rem,7vw,7.5rem)] sm:tracking-[-0.015em] sm:leading-[1.02]"
        >
          ALGDOKUMENTIDEST
          <br />
          AASTAARUANDENI.
        </h1>
      </div>

      {/* Description */}
      <div
        data-hero="description"
        className="absolute bottom-[19%] left-6 z-10 max-w-[240px] font-inter text-[12px] font-normal leading-[1.5] text-[#5F5C57] sm:bottom-[17%] sm:left-8 sm:max-w-[340px] sm:text-sm md:bottom-[10%] md:left-12 md:max-w-[440px] md:text-[20px] md:leading-[1.4] lg:left-16"
      >
        Raamatupidamisteenus, mis hoiab su
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        ettevõtte numbritel silma peal.
      </div>

      {/* Location */}
      <div
        data-hero="location"
        className="absolute bottom-[8%] right-6 z-10 flex items-center gap-2 font-inter text-[9px] uppercase tracking-[0.06em] text-[#5F5C57] sm:right-8 sm:gap-3 sm:text-[11px] md:bottom-[10%] md:right-12 md:gap-4 md:text-[13px] md:tracking-[0.1em] lg:right-16"
      >
        <span className="h-10 w-px bg-[#B8B3AA] sm:h-14 md:h-16" />
        <span className="text-center leading-[1.5]">
          Pärnus
          <br />
          &amp;
          <br />
          distantsilt üle Eesti
        </span>
      </div>

      {/* Bottom left line */}
      <div
        data-hero="bottom-line"
        className="absolute bottom-[5%] left-6 h-px w-24 bg-[#B8B3AA] sm:left-8 sm:w-32 md:bottom-[3%] md:left-12 md:w-40 lg:left-16"
      />
    </section>
  );
}