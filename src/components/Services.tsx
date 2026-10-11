"use client";

import { useState } from "react";

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

  return (
    <section
      id="services"
      className="px-6 pb-16 pt-10 md:px-12 md:pb-24 md:pt-12 lg:px-20"
    >
      <div className="mb-12 flex items-center gap-6 font-inter text-[10px] uppercase tracking-[0.1em] text-[#111111] md:mb-16 md:text-xs">
        <span>02 / 06</span>
        <span>Meie teenused</span>
      </div>

      <div>
        {services.map((service, index) => {
          const isOpen = openService === service.number;

          return (
            <div
              key={service.number}
              className="border-t border-[#B8B3AA]/80"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() =>
                  setOpenService(isOpen ? null : service.number)
                }
                className="group grid w-full grid-cols-[36px_minmax(0,1fr)_42px] items-center gap-x-4 py-7 text-left md:grid-cols-[70px_minmax(0,1.55fr)_minmax(220px,0.9fr)_68px] md:gap-x-7 md:py-9 lg:gap-x-8 lg:py-10"
              >
                <span
                  className={`font-clearface text-[1.5rem] leading-none md:text-[2rem] ${index === 0
                    ? "text-[#D32F2F]"
                    : "text-[#111111]"
                    }`}
                >
                  {service.number}
                </span>

                <span className="font-clearface text-[clamp(1.8rem,3.5vw,3.8rem)] leading-[0.98] tracking-[-0.025em] text-[#111111]">
                  {service.title}
                </span>

                <span className="hidden max-w-[360px] font-inter text-sm leading-[1.55] text-[#5F5C57] md:block lg:text-base">
                  {service.description}
                </span>

                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-inter text-xl font-light transition-all duration-300 md:h-[68px] md:w-[68px] md:text-2xl ${isOpen
                    ? "rotate-45 border-[#D32F2F] bg-[#D32F2F] text-[#F8F5EF]"
                    : "border-[#B8B3AA] text-[#111111] group-hover:border-[#D32F2F] group-hover:text-[#D32F2F]"
                    }`}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 gap-6 pb-8 pl-[52px] md:grid-cols-[70px_minmax(0,1.55fr)_minmax(220px,0.9fr)_68px] md:gap-x-7 md:pb-10 lg:gap-x-8">
                    <div className="hidden md:block" />

                    <div className="md:col-start-2">
                      <p className="mb-5 font-inter text-sm leading-relaxed text-[#5F5C57] md:hidden">
                        {service.description}
                      </p>

                      <ul className="space-y-3">
                        {service.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex gap-3 font-inter text-sm leading-relaxed text-[#5F5C57]"
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
        href="hinnakiri"
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