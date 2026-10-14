
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type MenuOverlayProps = {
    open: boolean;
    onClose: () => void;
};


const menuItems = [
  { number: "01", label: "Meist", href: "/#about" },
  { number: "02", label: "Teenused", href: "/#services" },
  { number: "03", label: "Uudised", href: "/#news" },
  { number: "04", label: "Meie inimesed", href: "/#team" },
  { number: "05", label: "Hinnakiri", href: "/hinnakiri" },
  { number: "06", label: "Kontakt", href: "/kontakt" },
];


export default function MenuOverlay({
    open,
    onClose,
}: MenuOverlayProps) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useGSAP(
        () => {
            if (!open || !mounted || !overlayRef.current) return;

            const overlay = overlayRef.current;

            const backdrop = overlay.querySelector<HTMLElement>(
                "[data-menu='backdrop']",
            );
            const panel = overlay.querySelector<HTMLElement>(
                "[data-menu='panel']",
            );
            const items = overlay.querySelectorAll<HTMLElement>(
                "[data-menu='item']",
            );
            const decoration = overlay.querySelector<HTMLElement>(
                "[data-menu='decoration']",
            );

            if (!backdrop || !panel || !decoration) return;

            const timeline = gsap.timeline({
                defaults: { ease: "power3.out" },
            });

            timeline
                .fromTo(
                    backdrop,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.35 },
                )
                .fromTo(
                    panel,
                    { x: "4%", opacity: 0 },
                    { x: "0%", opacity: 1, duration: 0.55 },
                    "-=0.2",
                )
                .fromTo(
                    items,
                    { y: 18, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.45,
                        stagger: 0.07,
                    },
                    "-=0.25",
                )
                .fromTo(
                    decoration,
                    { scale: 0.88, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.8 },
                    "-=0.5",
                );

            return () => {
                timeline.kill();
            };
        },
        {
            scope: overlayRef,
            dependencies: [open, mounted],
            revertOnUpdate: true,
        },
    );

    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, onClose]);

    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [open]);

    if (!open || !mounted) return null;

    return createPortal(
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[100] h-dvh w-screen"
        >
            {/* Background */}
            <button
                type="button"
                aria-label="Sulge menüü"
                onClick={onClose}
                data-menu="backdrop"
                className="absolute inset-0 bg-[#111111]/20 backdrop-blur-[4px]"
            />

            {/* Menu panel */}
            <div
                data-menu="panel"
                className="absolute inset-y-0 right-0 flex h-dvh w-full flex-col overflow-hidden bg-[#1C1C1C] text-[#F8F5EF] md:w-[43%] lg:w-[40%]"
            >
                {/* Decorative circle */}
                <div
                    data-menu="decoration"
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-36 top-14 h-[340px] w-[340px] rounded-full border border-[#D32F2F]/35"
                />

                {/* Close button */}
                <div className="relative z-10 flex justify-end px-7 py-7 md:px-10 md:py-8">
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Sulge menüü"
                        className="relative flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-60"
                    >
                        <span className="absolute h-px w-8 rotate-45 bg-[#F8F5EF]" />
                        <span className="absolute h-px w-8 -rotate-45 bg-[#F8F5EF]" />
                    </button>
                </div>

                {/* Navigation */}
                <nav
                    aria-label="Peamenüü"
                    className="relative z-10 flex flex-1 flex-col justify-center px-7 md:px-10"
                >

                    {menuItems.map((item) => (
                        <a
                            key={item.number}
                            data-menu="item"
                            href={item.href}
                            onClick={onClose}
                            className={`group relative flex items-center border-t border-[#F8F5EF]/15 py-4 transition-colors duration-300 hover:border-[#F8F5EF]/40 md:py-5 ${Number(item.number) % 2 === 1
                                    ? "flex-row-reverse text-right"
                                    : "flex-row text-left"
                                }`}
                        >
                            <span className="mx-5 w-7 shrink-0 text-center font-inter text-[9px] text-[#F8F5EF]/45 transition-colors duration-300 group-hover:text-[#F8F5EF]/75 md:mx-6 md:w-8 md:text-[10px]">
                                ({item.number})
                            </span>

                            <span className="font-clearface text-[clamp(1.7rem,2.8vw,3.2rem)] uppercase leading-[0.95] tracking-[-0.02em] transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-white">
                                {item.label}
                            </span>
                        </a>
                    ))}


                    <div className="border-t border-[#F8F5EF]/15" />
                </nav>

                {/* Footer */}
                <div className="relative z-10 flex items-center justify-between gap-2 px-7 pb-7 font-inter text-[8px] uppercase tracking-[0.08em] text-[#F8F5EF]/45 md:px-10 md:pb-8 md:text-[9px]">
                    <span>© 2026</span>
                    <span>Pärnu, Eesti</span>
                    <span>All Rights Reserved</span>
                </div>
            </div>
        </div>,
        document.body,
    );
}
