"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );

    if (!mediaQuery.matches) return;

    document.body.classList.add("custom-cursor-active");

    gsap.set(dot, {
      xPercent: -50,
      yPercent: -50,
    });

    const moveCursor = (event: MouseEvent) => {
      gsap.to(dot, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.12,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.classList.remove("custom-cursor-active");
      gsap.killTweensOf(dot);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[120] hidden h-2 w-2 rounded-full bg-[#D32F2F] md:block"
    />
  );
}