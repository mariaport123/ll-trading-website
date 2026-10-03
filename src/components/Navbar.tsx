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
            {/* Fixed navigation */}
            <nav className="fixed left-0 top-0 z-50 flex h-[76px] w-full items-center justify-between px-6 md:h-[92px] md:px-10">
                {/* Contact */}
                <a
                    href="#contact"
                    className="font-inter text-[10px] uppercase tracking-[0.08em] transition-opacity hover:opacity-50 md:text-[13px]"
                >
                    Võta ühendust{" "}
                    <span className="text-[#D32F2F]">→</span>
                </a>

                {/* Logo */}
                <a
                    href="/"
                    className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-clearface text-[21px] font-medium tracking-[0.01em] md:text-[25px]"
                >
                    <span className="text-[#D32F2F]">LL</span> TRADING
                </a>

                {/* Hamburger */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Ava menüü"
                    aria-expanded={menuOpen}
                    className="ml-auto flex h-8 w-8 items-center justify-center transition-opacity hover:opacity-50"
                >
                    <span className="flex w-6 flex-col gap-[5px]">
                        <span className="h-px w-full bg-[#111111]" />
                        <span className="h-px w-full bg-[#111111]" />
                        <span className="h-px w-full bg-[#111111]" />
                    </span>
                </button>
            </nav>

            {/* Spacer so the fixed navbar does not pull the page upward */}
            <div className="h-[76px] md:h-[92px]" />

            <MenuOverlay
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
            />
        </>
    );
}