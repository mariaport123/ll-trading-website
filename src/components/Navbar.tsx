"use client";

import { useEffect, useState } from "react";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="absolute inset-x-0 top-0 z-50 flex h-[76px] w-full items-center justify-between bg-transparent px-6 sm:px-8 md:h-[92px] md:px-12 lg:px-16">
        {/* Contact link: desktop only */}
        <a
          href="/kontakt"
          className="hidden items-center gap-1 font-clearface text-[16px] uppercase tracking-[0.04em] transition-opacity hover:opacity-50 md:inline-flex"
        >
          VÕTA ÜHENDUST
          <span className="text-[#D32F2F]">→</span>
        </a>

        {/* Logo */}
        <a
          href="/"
          aria-label="LL Trading – avaleht"
          className="relative whitespace-nowrap font-clearface text-[21px] font-medium tracking-[0.01em] md:absolute md:left-1/2 md:-translate-x-1/2 md:text-[25px]"
        >
          <span className="text-[#D32F2F]">LL</span> TRADING
        </a>
      </nav>

      {/* Fixed hamburger button */}
      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Sulge menüü" : "Ava menüü"}
        aria-expanded={menuOpen}
        className="fixed right-6 top-[18px] z-[110] flex h-10 w-10 shrink-0 items-center justify-center transition-opacity hover:opacity-50 sm:right-8 md:right-12 md:top-[26px] lg:right-16"
      >
        <span className="flex w-6 flex-col gap-[6px]">
          <span
            className={`h-px w-full bg-[#111111] transition-transform duration-300 ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
          />
          <span
            className={`h-px w-full bg-[#111111] transition-all duration-300 ${menuOpen ? "scale-x-0 opacity-0" : ""
              }`}
          />
          <span
            className={`h-px w-full bg-[#111111] transition-transform duration-300 ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
          />
        </span>
      </button>

      {/* Space reserved for navbar */}
      <div className="h-[76px] md:h-[92px]" />

      <MenuOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}