"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
          defaults: {
            ease: "power3.out",
          },
        });

        timeline
          .from("[data-pricing='index']", {
            opacity: 0,
            y: 12,
            duration: 0.5,
          })
          .from(
            "[data-pricing='intro'] > *",
            {
              opacity: 0,
              y: 24,
              duration: 0.8,
              stagger: 0.12,
            },
            "-=0.15",
          )
          .from(
            "[data-pricing='example'] > *",
            {
              opacity: 0,
              y: 20,
              duration: 0.7,
              stagger: 0.12,
            },
            "-=0.4",
          )
          .from(
            "[data-pricing='price']",
            {
              opacity: 0,
              y: 16,
              duration: 0.9,
              ease: "power2.out",
            },
            "-=0.45",
          )
          .from(
            "[data-pricing='circle']",
            {
              opacity: 0,
              scale: 0.88,
              duration: 1.2,
              ease: "power2.out",
            },
            "-=0.8",
          );
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative overflow-hidden px-6 py-24 sm:px-8 md:px-12 md:py-32 lg:px-16"
    >
      <div
        data-pricing="index"
        className="mb-16 flex items-center justify-start gap-8 font-inter text-[10px] uppercase tracking-[0.1em] md:mb-20 md:text-xs"
      >
        <span>05 / 06</span>
        <span>Hinnakiri</span>
      </div>

      <div className="relative grid gap-16 md:grid-cols-[0.95fr_1.05fr] md:gap-12 lg:gap-24">
        {/* Left side */}
        <div
          data-pricing="intro"
          className="relative z-10 flex flex-col items-start"
        >
          <h2 className="font-clearface text-[clamp(3rem,5.2vw,5.5rem)] font-normal leading-[1.02] tracking-[-0.035em]">
            ÜKS HIND EI
            <br />
            SOBI KÕIGILE<span className="text-[#D32F2F]">.</span>
          </h2>

          <p className="mt-8 max-w-[390px] font-inter text-sm leading-[1.7] text-[#5F5C57] md:mt-10 md:text-base">
            Raamatupidamisteenuse hind kujuneb vastavalt algdokumentide
            mahule ja tellitud lisateenustele.
          </p>

          <a
            href="/hinnakiri"
            className="group mt-10 inline-flex items-center gap-3 border-b border-[#B8B3AA] pb-2 font-inter text-[10px] uppercase tracking-[0.1em] text-[#111111] transition-colors duration-300 hover:border-[#D32F2F] hover:text-[#D32F2F] md:mt-16"
          >
            <span>Vaata hinnakirja</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </a>
        </div>

        {/* Right side */}
        <div className="relative flex min-h-[320px] flex-col justify-center sm:min-h-[360px] md:min-h-[400px] md:pl-8 lg:pl-12">
          {/* Decorative circle */}
          <div
            data-pricing="circle"
            aria-hidden="true"
            className="pointer-events-none absolute left-[48%] top-1/2 aspect-square w-[min(78vw,360px)] -translate-y-1/2 rounded-full border border-[#D32F2F]/70 sm:left-[52%] sm:w-[min(60vw,400px)] md:left-[58%] md:w-[min(35vw,420px)]"
          />

          <div className="relative z-10">
            <p
              data-pricing="example"
              className="font-inter text-xs uppercase tracking-[0.1em] text-[#5F5C57] md:text-sm"
            >
              Näidishind
            </p>

            <p
              data-pricing="example"
              className="mt-10 font-inter text-base md:mt-12 md:text-xl"
            >
              0–25 dokumenti
            </p>

            <div
              data-pricing="price"
              className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1"
            >
              <span className="font-clearface text-[clamp(4rem,8vw,7.5rem)] leading-[0.9] tracking-[-0.045em]">
                55,00 €
              </span>

              <span className="font-inter text-sm text-[#111111] md:text-base">
                / kuu
              </span>
            </div>

            <div
              data-pricing="example"
              className="mt-10 max-w-[340px] space-y-2 font-inter text-xs leading-[1.7] text-[#5F5C57] sm:text-sm"
            >
              <p>Hindadele lisandub käibemaks 24%.</p>
              <p>Hinnakiri ei ole lõplik. Küsi kindlasti pakkumist.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}