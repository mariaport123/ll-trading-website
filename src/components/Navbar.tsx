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
            {/* Fixed header pinned strictly to viewport bounds */}

            <nav className="fixed inset-x-0 top-0 z-50 flex h-[76px] w-full max-w-full items-center justify-between px-6 sm:px-8 md:h-[92px] md:px-12 lg:px-16">

                {/* Contact CTA link */}
                <a
                    href="/kontakt"
                    className="font-clearface text-[16px] uppercase tracking-[0.08em] transition-opacity hover:opacity-50 md:text-[16px]"
                >
                    VÕTA ÜHENDUST{" "}
                    <span className="text-[#D32F2F]">→</span>
                </a>

                {/* Centered logo */}
                <a
                    href="/"
                    className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-clearface text-[19px] font-medium tracking-[0.01em] sm:text-[21px] md:text-[25px]"
                >
                    <span className="text-[#D32F2F]">LL</span> TRADING
                </a>

                {/* Hamburger menu trigger button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Ava menüü"
                    aria-expanded={menuOpen}
                    className="flex h-8 w-8 items-center justify-center transition-opacity hover:opacity-50"
                >
                    <span className="flex w-6 flex-col gap-[5px]">
                        <span className="h-px w-full bg-[#111111]" />
                        <span className="h-px w-full bg-[#111111]" />
                        <span className="h-px w-full bg-[#111111]" />
                    </span>
                </button>
            </nav>

            {/* Layout spacer for fixed header */}
            <div className="h-[76px] md:h-[92px]" />

            <MenuOverlay
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
            />
        </>
    );
}