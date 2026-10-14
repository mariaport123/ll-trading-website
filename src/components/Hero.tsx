
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const gridLines = [80, 140, 200, 260, 320, 380, 440, 500];

export default function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set("[data-hero='graphic']", { opacity: 1 });
        gsap.set("[data-hero='orbit']", { opacity: 0.8 });
        gsap.set("[data-hero='grid']", { opacity: 0.35 });
        gsap.set("[data-hero='route']", { opacity: 0.7 });
        gsap.set("[data-hero='moving-dot']", { opacity: 1 });
        gsap.set("[data-hero='arrow']", { opacity: 1 });
        return;
      }

      const intro = gsap.timeline({
        defaults: { ease: "power2.out" },
      });

      intro
        .from("[data-hero='eyebrow']", {
          opacity: 0,
          y: 8,
          duration: 0.7,
        })
        .from(
          "[data-hero='title-line']",
          {
            opacity: 0,
            y: 18,
            duration: 1,
            stagger: 0.12,
          },
          "-=0.35"
        )
        .from(
          "[data-hero='description'], [data-hero='location']",
          {
            opacity: 0,
            y: 8,
            duration: 0.8,
            stagger: 0.12,
          },
          "-=0.45"
        );

      gsap.set("[data-hero='graphic']", { opacity: 0 });
      gsap.set("[data-hero='orbit']", {
        opacity: 0,
        strokeDasharray: 1200,
        strokeDashoffset: 1200,
      });
      gsap.set("[data-hero='grid']", { opacity: 0 });

      const route = container.current?.querySelector<SVGPathElement>(
        "[data-hero='route']"
      );
      const dot = container.current?.querySelector<SVGCircleElement>(
        "[data-hero='moving-dot']"
      );

      const routeLength = route?.getTotalLength() ?? 700;

      gsap.set("[data-hero='route']", {
        opacity: 0,
        strokeDasharray: routeLength,
        strokeDashoffset: routeLength,
      });
      gsap.set("[data-hero='moving-dot']", { opacity: 0 });
      gsap.set("[data-hero='arrow']", {
        opacity: 0,
        x: -8,
      });

      const graphicTimeline = gsap.timeline({
        delay: 0.35,
        defaults: { ease: "power2.out" },
      });

      graphicTimeline
        .to("[data-hero='graphic']", {
          opacity: 1,
          duration: 1.2,
        })
        .to(
          "[data-hero='grid']",
          {
            opacity: 0.3,
            duration: 1.5,
          },
          "-=0.7"
        )
        .to(
          "[data-hero='orbit']",
          {
            opacity: 0.8,
            strokeDashoffset: 0,
            duration: 2.1,
            ease: "power1.inOut",
          },
          "-=0.8"
        );

      if (route && dot) {
        const progress = { value: 0 };

        graphicTimeline
          .set(dot, { opacity: 1 })
          .to(
            "[data-hero='route']",
            {
              opacity: 0.72,
              strokeDashoffset: 0,
              duration: 2.8,
              ease: "power1.inOut",
            },
            "-=0.5"
          )
          .to(
            progress,
            {
              value: 1,
              duration: 2.8,
              ease: "power1.inOut",
              onUpdate: () => {
                const point = route.getPointAtLength(
                  routeLength * progress.value
                );

                dot.setAttribute("cx", String(point.x));
                dot.setAttribute("cy", String(point.y));
              },
            },
            "<"
          )
          .to(
            "[data-hero='arrow']",
            {
              opacity: 0.9,
              x: 0,
              duration: 0.55,
            },
            "-=0.15"
          );
      }

      graphicTimeline.to("[data-hero='graphic']", {
        opacity: 0.9,
        duration: 1.2,
      });

      // Kuma muutub aeglaselt ühe korra, ilma korduva animatsioonita.
      gsap.to("[data-hero='glow']", {
        opacity: 0.15,
        duration: 3.5,
        ease: "sine.inOut",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative isolate flex min-h-[calc(100svh-5rem)] w-full flex-col overflow-hidden bg-[#eee9e1] text-[#111111] sm:min-h-[calc(100svh-5rem)]"
    >
      {/* Dekoratiivne graafika pealkirja taga */}
      <div
        data-hero="graphic"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <svg
          viewBox="0 0 900 620"
          preserveAspectRatio="xMidYMid meet"
          className="
            absolute
            left-[50%] top-[39%]
            h-[min(100vw,440px)]
            w-[min(112vw,650px)]
            -translate-x-1/2 -translate-y-1/2
            overflow-visible
            sm:left-[66%] sm:top-[43%]
            sm:h-[min(65vw,690px)]
            sm:w-[min(82vw,900px)]
            md:left-[69%] md:top-[42%]
          "
        >
          <defs>
            <radialGradient id="hero-circle-glow">
              <stop offset="0%" stopColor="#d8322b" stopOpacity="0.055" />
              <stop offset="58%" stopColor="#d8322b" stopOpacity="0.018" />
              <stop offset="100%" stopColor="#d8322b" stopOpacity="0" />
            </radialGradient>

            <linearGradient
              id="hero-line-fade"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="#d8322b" stopOpacity="0.12" />
              <stop offset="48%" stopColor="#d8322b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#d8322b" stopOpacity="0.95" />
            </linearGradient>

            <filter
              id="hero-soft-glow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>

          {/* Pehmealt hajutatud punakas kuma */}
          <circle
            data-hero="glow"
            cx="510"
            cy="285"
            r="245"
            fill="url(#hero-circle-glow)"
            opacity="0.45"
          />

          {/* Õrn tehniline ruudustik */}
          <g
            data-hero="grid"
            stroke="#898177"
            strokeWidth="0.8"
            opacity="0"
          >
            {gridLines.map((position) => (
              <line
                key={`vertical-${position}`}
                x1={position + 130}
                y1="70"
                x2={position + 130}
                y2="500"
              />
            ))}

            {[90, 150, 210, 270, 330, 390, 450].map((position) => (
              <line
                key={`horizontal-${position}`}
                x1="190"
                y1={position}
                x2="790"
                y2={position}
              />
            ))}
          </g>

          {/* Õrn keskjoon */}
          <line
            x1="510"
            y1="18"
            x2="510"
            y2="560"
            stroke="#d8322b"
            strokeWidth="0.8"
            strokeDasharray="2 5"
            opacity="0.3"
          />

          {/* Suur, õhuke ring */}
          <circle
            data-hero="orbit"
            cx="510"
            cy="285"
            r="225"
            fill="none"
            stroke="#d8322b"
            strokeWidth="1.05"
            opacity="0"
          />

          {/* Väike ring vasakul */}
          <g opacity="0.58">
            <circle
              cx="165"
              cy="160"
              r="34"
              fill="none"
              stroke="#9c958a"
              strokeWidth="0.9"
            />
            <path
              d="M159 160 H171 M165 154 V166"
              stroke="#9c958a"
              strokeWidth="0.8"
            />
          </g>

          {/* Peen horisontaalne mõõtjoon */}
          <path
            d="M165 160 H825"
            fill="none"
            stroke="#9c958a"
            strokeWidth="0.7"
            strokeDasharray="1.5 4"
            opacity="0.5"
          />

          {/* Kaarejoon, mis joonistub ühe korra */}
          <path
            data-hero="route"
            d="M335 420
               C395 420 415 365 450 305
               C480 255 510 230 560 230
               C610 230 655 250 690 225
               C710 210 723 200 742 190
               H835"
            fill="none"
            stroke="url(#hero-line-fade)"
            strokeWidth="1.15"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0"
          />

          {/* Ringist väljuv nooleke */}
          <g data-hero="arrow" opacity="0">
            <path
              d="M826 185 L835 190 L826 195"
              fill="none"
              stroke="#d8322b"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Mööda joont liikuv punkt */}
          <circle
            data-hero="moving-dot"
            cx="335"
            cy="420"
            r="3"
            fill="#d8322b"
            opacity="0"
          />

          {/* Pehme välimine punktikuma */}
          <circle
            cx="335"
            cy="420"
            r="6"
            fill="#d8322b"
            opacity="0.12"
            filter="url(#hero-soft-glow)"
          />
        </svg>
      </div>

      {/* Ülemine väike märgis */}
      <div className="absolute left-[5.5%] top-[24%] z-10 flex items-center gap-4 sm:top-[30%]">
        <span
          data-hero="eyebrow"
          className="font-sans text-[10px] tracking-[0.12em] text-[#716b63] sm:text-xs"
        >
          ALATES 1997
        </span>
        <span className="h-px w-10 bg-[#b9b1a6]" />
      </div>

      {/* Pealkiri */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-[4%] pb-8 pt-16 sm:px-[3%] sm:pb-16 sm:pt-24">
        <h1 className="w-full max-w-full break-keep text-center font-clearface text-[clamp(1.65rem,7.1vw,2.6rem)] font-normal leading-[0.98] tracking-[-0.045em] sm:text-[clamp(2.4rem,6.5vw,7rem)] sm:leading-[1.02] sm:tracking-[-0.015em]">
          <span data-hero="title-line" className="block">
            ALGDOKUMENTIDEST
          </span>
          <span data-hero="title-line" className="block">
            AASTAARUANNETENI.
          </span>
        </h1>
      </div>

      {/* Alumine kirjeldus */}
      <div className="relative z-10 flex items-end justify-between gap-3 px-[5.5%] pb-6 sm:gap-6 sm:pb-[5%]">
        <p
          data-hero="description"
          className="max-w-[300px] font-sans text-xs leading-[1.5] text-[#5f5a54] sm:max-w-[360px] sm:text-base"
        >
          Raamatupidamisteenus, mis hoiab su
          <br />
          ettevõtte maksudel silma peal.
        </p>

        <div
          data-hero="location"
          className="flex w-[112px] shrink-0 items-center gap-2 border-l border-[#b9b1a6] pl-2 text-center font-sans text-[8px] leading-[1.7] tracking-[0.08em] text-[#625d56] sm:w-auto sm:gap-3 sm:pl-4 sm:text-[11px] sm:tracking-[0.12em]"
        >
          <p className="w-full text-center">
            PÄRNUS
            <br />
            &amp;
            <br />
            DISTANTSILT ÜLE EESTI
          </p>
        </div>
      </div>
    </section>
  );
}
