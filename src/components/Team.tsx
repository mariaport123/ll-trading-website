"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const team = [
  {
    name: "Irene Port",
    role: "Juhataja / pearaamatupidaja",
    image: "/images/team/irene.jpg",
    position: "md:mt-0",
    imagePosition: "center 45%",
  },
  {
    name: "Ave Kartau",
    role: "Raamatupidaja",
    image: "/images/team/ave.jpg",
    position: "md:mt-20",
    imagePosition: "center 35%",
  },
  {
    name: "Leeni Tõll",
    role: "Raamatupidaja",
    image: "/images/team/leeni.jpg",
    position: "md:mt-0",
    imagePosition: "center 35%",
  },
];

export default function Team() {
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
          .from("[data-team='index']", {
            opacity: 0,
            y: 12,
            duration: 0.5,
          })
          .from(
            "[data-team='intro'] > *",
            {
              opacity: 0,
              y: 24,
              duration: 0.8,
              stagger: 0.12,
            },
            "-=0.2",
          )
          .from(
            "[data-team='person']",
            {
              opacity: 0,
              y: 32,
              duration: 0.85,
              stagger: 0.16,
            },
            "-=0.45",
          );

        gsap.utils
          .toArray<HTMLElement>("[data-team='portrait']")
          .forEach((portrait) => {
            const image = portrait.querySelector("img");

            if (!image) return;

            gsap.set(image, { scale: 1.04 });

            const handleMouseEnter = () => {
              gsap.to(image, {
                scale: 1.08,
                duration: 0.7,
                ease: "power2.out",
                overwrite: "auto",
              });
            };

            const handleMouseLeave = () => {
              gsap.to(image, {
                scale: 1.04,
                duration: 0.7,
                ease: "power2.out",
                overwrite: "auto",
              });
            };

            portrait.addEventListener("mouseenter", handleMouseEnter);
            portrait.addEventListener("mouseleave", handleMouseLeave);

            return () => {
              portrait.removeEventListener("mouseenter", handleMouseEnter);
              portrait.removeEventListener("mouseleave", handleMouseLeave);
            };
          });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="team"
      className="px-6 py-24 sm:px-8 md:px-12 md:py-32 lg:px-16"
    >
      <div
        data-team="index"
        className="mb-12 flex items-center gap-6 font-inter text-[10px] uppercase tracking-[0.1em] md:mb-10 md:text-xs"
      >
        <span>04 / 06</span>
        <span>Meie inimesed</span>
      </div>

      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:gap-20">
        <div data-team="intro" className="md:pt-8">
          <h2 className="font-clearface text-[clamp(3.2rem,5.5vw,6rem)] font-normal leading-[0.88] tracking-[-0.035em]">
            NUMBRITE
            <br />
            TAGA ON
            <br />
            INIMESED<span className="text-[#D32F2F]">.</span>
          </h2>

          <p className="mt-8 max-w-[360px] font-inter text-sm leading-[1.6] text-[#5F5C57] md:mt-10 md:text-base">
            Oleme väike meeskond, kuid meie kogemus ulatub aastakümnete taha.
            Meie kliendid suhtlevad otse inimestega, kes nende raamatupidamisega
            tegelevad.
          </p>
        </div>

        <div className="grid grid-cols-2 items-start gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-4 md:gap-5 lg:gap-6">
          {team.map((person) => (
            <article
              key={person.name}
              data-team="person"
              className={`min-w-0 ${person.position}`}
            >
              <div
                data-team="portrait"
                className="team-portrait relative mb-3 aspect-[0.8] w-full overflow-hidden bg-[#D9D4CC] sm:mb-4"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  style={{ objectPosition: person.imagePosition }}
                  className="team-portrait-image h-full w-full object-cover"
                />

                <div
                  aria-hidden="true"
                  className="team-portrait-grain pointer-events-none absolute inset-0"
                />
              </div>

              <h3 className="break-words font-clearface text-sm uppercase sm:text-base md:text-lg">
                {person.name}
              </h3>

              <p className="mt-1 font-inter text-[8px] uppercase leading-[1.5] tracking-[0.06em] text-[#5F5C57] sm:text-[9px] sm:tracking-[0.08em]">
                {person.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}