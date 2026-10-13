"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GlobalGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) return;

    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );

    if (!mediaQuery.matches) return;

    const moveGlow = (event: MouseEvent) => {
      gsap.to(glow, {
        x: event.clientX,
        y: event.clientY,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const hideGlow = () => {
      gsap.to(glow, {
        opacity: 0,
        duration: 0.4,
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", moveGlow);
    document.addEventListener("mouseleave", hideGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
      document.removeEventListener("mouseleave", hideGlow);
      gsap.killTweensOf(glow);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[45] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D32F2F]/[0.07] opacity-0 blur-[65px]"
    />
  );
}