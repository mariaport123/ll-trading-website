"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const contacts = [
  {
    name: "Irene Port",
    phone: "+372 51 37 420",
    email: "irene@lltrading.ee",
  },
  {
    name: "Ave Kartau",
    phone: "+372 51 86 998",
    email: "ave@lltrading.ee",
  },
  {
    name: "Leeni Tõll",
    phone: null,
    email: "leeni@lltrading.ee",
  },
];

export default function Contact() {
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
          .from("[data-contact='index']", {
            opacity: 0,
            y: 12,
            duration: 0.5,
          })
          .from(
            "[data-contact='intro'] > *",
            {
              opacity: 0,
              y: 24,
              duration: 0.8,
              stagger: 0.12,
            },
            "-=0.15",
          )
          .from(
            "[data-contact='person']",
            {
              opacity: 0,
              y: 22,
              duration: 0.7,
              stagger: 0.14,
            },
            "-=0.4",
          );
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="px-6 py-24 sm:px-8 md:px-12 md:py-32 lg:px-16"
    >
      <div
        data-contact="index"
        className="mb-16 flex items-center justify-start gap-8 font-inter text-[10px] uppercase tracking-[0.1em] md:mb-20 md:text-xs"
      >
        <span>06 / 06</span>
        <span>Kontakt</span>
      </div>

      <div className="grid gap-16 md:grid-cols-[1.2fr_0.8fr] md:gap-16 lg:gap-24">
        {/* Left side */}
        <div data-contact="intro" className="flex flex-col items-start">
          <h2 className="font-clearface text-[clamp(2.8rem,5.2vw,5.5rem)] font-normal leading-[0.98] tracking-[-0.035em]">
            RÄÄGIME
            <br />
            TEIE
            <br />
            ETTEVÕTTE
            <br />
            VAJADUSTEST<span className="text-[#D32F2F]">.</span>
          </h2>

          <div className="mt-8 max-w-[380px] md:mt-10">
            <p className="font-inter text-sm leading-[1.7] text-[#5F5C57] md:text-base">
              Otsid oma ettevõttele raamatupidajat? Võta meiega ühendust ja
              räägime läbi, milline lahendus sobib sinu ettevõttele kõige
              paremini.
            </p>

            <a
              href="/kontakt"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#B8B3AA] pb-2 font-inter text-[10px] uppercase tracking-[0.1em] transition-colors duration-300 hover:border-[#D32F2F] hover:text-[#D32F2F]"
            >
              <span>Võta ühendust</span>
              <span className="text-[#D32F2F] transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col justify-center md:pt-4">
          <p className="mb-6 font-inter text-[10px] uppercase tracking-[0.1em] text-[#5F5C57] md:text-xs">
            Meie kontaktid
          </p>

          <div className="border-t border-[#D8D3CA]">
            {contacts.map((contact, index) => (
              <div
                key={contact.name}
                data-contact="person"
                className="border-b border-[#D8D3CA] py-6 sm:py-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-clearface text-xl uppercase tracking-[-0.015em] sm:text-2xl">
                      {contact.name}
                    </h3>

                    <div className="mt-3 space-y-1.5 font-inter text-sm leading-[1.6] text-[#5F5C57]">
                      {contact.phone && (
                        <a
                          href={`tel:${contact.phone.replace(/\s/g, "")}`}
                          className="block w-fit transition-colors duration-300 hover:text-[#D32F2F]"
                        >
                          {contact.phone}
                        </a>
                      )}

                      <a
                        href={`mailto:${contact.email}`}
                        className="block w-fit break-all transition-colors duration-300 hover:text-[#D32F2F]"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  <span className="shrink-0 pt-1 font-inter text-[10px] tracking-[0.08em] text-[#8A857D]">
                    0{index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}