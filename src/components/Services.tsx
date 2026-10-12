"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const services = [
  {
    number: "01",
    title: "RAAMATUPIDAMINE",
    description:
      "Igapäevane arvestus, algdokumentide töötlemine, ostu- ja müügireskontro ning muu vajalik arvestus.",
    details: [
      "Algdokumentide töötlemine ja raamatupidamiskannete tegemine",
      "Ostu- ja müügireskontro",
      "Igapäevase raamatupidamise korraldamine vastavalt kokkuleppele",
    ],
  },
  {
    number: "02",
    title: "PALGAARVESTUS",
    description:
      "Palgaarvestus, puhkusetasud, lõpparvestused ja tööjõumaksud.",
    details: [
      "Töötasude arvestamine",
      "Puhkusetasude ja lõpparvestuste arvutamine",
      "Tööjõumaksude arvestamine",
    ],
  },
  {
    number: "03",
    title: "MAKSUD JA ARUANDLUS",
    description:
      "Maksudeklaratsioonid, statistika- ja muud aruanded ning majandusaasta aruanded.",
    details: [
      "Maksudeklaratsioonide koostamine",
      "Statistika- ja muude aruannete esitamine",
      "Majandusaasta aruande koostamine",
    ],
  },
  {
    number: "04",
    title: "LISATEENUSED",
    description:
      "Dokumentide koostamine, lähetusaruanded, varasemate perioodide korrastamine ja muud ettevõtte vajadustest lähtuvad teenused.",
    details: [
      "Dokumentide koostamine",
      "Lähetusaruannete koostamine",
      "Varasemate perioodide raamatupidamise korrastamine",
    ],
  },
];

export default function Services() {
  const [openService, setOpenService] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const rows = gsap.utils.toArray<HTMLElement>(
          "[data-service-row]",
        );

        rows.forEach((row, index) => {
          gsap.fromTo(
            row,
            {
              opacity: 0,
              y: 24,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.06,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 90%",
                once: true,
              },
            },
          );
        });

        gsap.fromTo(
          "[data-services-index]",
          {
            opacity: 0,
            y: 12,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-services-index]",
              start: "top 90%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          "[data-services-link]",
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-services-link]",
              start: "top 95%",
              once: true,
            },
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
      id="services"
      className="px-6 pb-16 pt-10 md:px-12 md:pb-24 md:pt-12 lg:px-20"
    >
      <div
        data-services-index
        className="mb-12 flex items-center gap-6 font-inter text-[10px] uppercase tracking-[0.1em] text-[#111111] md:mb-16 md:text-xs"
      >
        <span>02 / 06</span>
        <span>Meie teenused</span>
      </div>

      <div>
        {services.map((service, index) => {
          const isOpen = openService === service.number;

          return (
            <div
              key={service.number}
              data-service-row
              className="border-t border-[#B8B3AA]/80"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() =>
                  setOpenService(isOpen ? null : service.number)
                }
                className="group grid w-full grid-cols-[30px_minmax(0,1fr)_36px] items-center gap-x-2 py-7 text-left sm:grid-cols-[36px_minmax(0,1fr)_40px] sm:gap-x-3 md:grid-cols-[70px_minmax(0,1.55fr)_minmax(220px,0.9fr)_68px] md:gap-x-7 md:py-9 lg:gap-x-8 lg:py-10"
              >
                {/* Number */}
                <span
                  className={`font-clearface text-[1.5rem] leading-none transition-colors duration-300 md:text-[2rem] ${index === 0 || isOpen
                      ? "text-[#D32F2F]"
                      : "text-[#111111] group-hover:text-[#D32F2F]"
                    }`}
                >
                  {service.number}
                </span>

                {/* Service title */}
                <span
                  className={`min-w-0 font-clearface text-[clamp(1.35rem,5.5vw,2.1rem)] leading-[1.05] tracking-[-0.035em] transition-[color,transform] duration-500 ease-out sm:text-[clamp(1.8rem,3.5vw,3.8rem)] md:text-[clamp(1.8rem,3.5vw,3.8rem)] ${isOpen
                      ? "translate-x-1 text-[#D32F2F]"
                      : "text-[#111111] group-hover:translate-x-1 group-hover:text-[#D32F2F] md:group-hover:translate-x-2"
                    }`}
                >
                  {service.title}
                </span>

                {/* Description: desktop only */}
                <span className="hidden max-w-[360px] font-inter text-sm leading-[1.55] text-[#5F5C57] md:block lg:text-base">
                  {service.description}
                </span>

                {/* Plus button */}
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center justify-self-end rounded-full border font-inter text-xl font-light transition-[transform,color,background-color,border-color] duration-500 ease-out md:h-[68px] md:w-[68px] md:text-2xl ${isOpen
                      ? "rotate-45 border-[#D32F2F] bg-[#D32F2F] text-[#F8F5EF]"
                      : "border-[#B8B3AA] text-[#111111] group-hover:border-[#D32F2F] group-hover:text-[#D32F2F]"
                    }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              {/* Expandable details */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                  }`}
                aria-hidden={!isOpen}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 gap-6 pb-8 pl-[49px] sm:pl-[52px] md:grid-cols-[70px_minmax(0,1.55fr)_minmax(220px,0.9fr)_68px] md:gap-x-7 md:pb-10 md:pl-0 lg:gap-x-8">
                    <div className="hidden md:block" />

                    <div className="md:col-start-2">
                      <p className="mb-5 font-inter text-sm leading-relaxed text-[#5F5C57] md:hidden">
                        {service.description}
                      </p>

                      <ul className="space-y-3">
                        {service.details.map((detail, detailIndex) => (
                          <li
                            key={detail}
                            className={`flex gap-3 font-inter text-sm leading-relaxed text-[#5F5C57] transition-[opacity,transform] duration-500 ease-out ${isOpen
                                ? "translate-y-0 opacity-100"
                                : "translate-y-2 opacity-0"
                              }`}
                            style={{
                              transitionDelay: isOpen
                                ? `${detailIndex * 70}ms`
                                : "0ms",
                            }}
                          >
                            <span className="text-[#D32F2F]">—</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <a
        href="/hinnakiri"
        data-services-link
        className="group mt-8 inline-flex items-center gap-2 font-inter text-[10px] uppercase tracking-[0.1em] text-[#111111] transition-colors duration-300 hover:text-[#D32F2F] md:mt-10"
      >
        <span>Vaata hinnakirja</span>
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>
    </section>
  );
}
