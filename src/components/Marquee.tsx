"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tracks = marqueeRef.current?.querySelectorAll<HTMLElement>(
        "[data-marquee-track]",
      );

      if (!tracks?.length) return;

      const states = Array.from(tracks).map((track, index) => ({
        track,
        distance: track.scrollWidth / 4,
        x: 0,
        direction: index === 0 ? 1 : -1,
        render: gsap.quickSetter(track, "x", "px"),
      }));

      let previousScrollY = window.scrollY;

      const updateDistance = () => {
        states.forEach((state) => {
          state.distance = state.track.scrollWidth / 4;
        });
      };

      const onScroll = () => {
        const scrollY = window.scrollY;
        const delta = scrollY - previousScrollY;

        states.forEach((state) => {
          state.x += delta * 0.5 * state.direction;
        });

        previousScrollY = scrollY;
      };

      const ticker = () => {
        states.forEach((state) => {
          state.render(
            gsap.utils.wrap(-state.distance, 0, state.x),
          );
        });
      };

      window.addEventListener("scroll", onScroll, {
        passive: true,
      });
      window.addEventListener("resize", updateDistance);
      gsap.ticker.add(ticker);

      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", updateDistance);
        gsap.ticker.remove(ticker);
      };
    },
    { scope: marqueeRef },
  );

  const rows = [
    "RAAMATUPIDAMINE ALATES ’97",
    "USALDUSVÄÄRNE PARTNER",
  ];

  return (
    <div
      ref={marqueeRef}
      aria-label="Raamatupidamine alates 1997. aastast. Usaldusväärne partner."
      className="w-full overflow-hidden py-5 sm:py-6 md:py-8"
    >
      <div className="flex flex-col gap-0">
        {rows.map((phrase) => (
          <div
            key={phrase}
            className="w-full overflow-hidden py-[2px]"
          >
            <div
              data-marquee-track
              className="flex w-max whitespace-nowrap will-change-transform"
            >
              {Array.from({ length: 4 }, (_, item) => (
                <span
                  key={item}
                  aria-hidden={item !== 0}
                  className="pr-6 font-clearface text-[clamp(2rem,5.5vw,5.5rem)] leading-[1.08] tracking-[-0.035em] text-[#111111] sm:pr-10"
                >
                  {phrase}{" — "}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}