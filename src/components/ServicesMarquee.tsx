"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function ServicesMarquee() {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const track = marqueeRef.current?.querySelector<SVGTextElement>(
                "[data-services-marquee-text]",
            );

            if (!track) return;

            const animation = gsap.to(track, {
                attr: { startOffset: "100%" },
                duration: 120,
                ease: "none",
                repeat: -1,
            });

            return () => animation.kill();
        },
        { scope: marqueeRef },
    );

    return (
        <div
            ref={marqueeRef}
            aria-label="Raamatupidamine, maksud, palgaarvestus ja finantsaruandlus"
            className="w-full overflow-hidden py-12 sm:py-16 md:py-20"
        >
            <svg
                viewBox="0 0 1200 180"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-hidden="true"
                className="block h-auto w-full"
            >
                <defs>
                    <path
                        id="services-wave-path"
                        d="M-600 90 C-400 10 -200 10 0 90 S400 170 600 90 S1000 10 1200 90 S1600 170 1800 90"
                    />
                </defs>

                <text
                    className="services-marquee-text fill-[#111111] font-clearface uppercase"
                    fontSize="18"
                    letterSpacing="-1"
                >
                    <textPath
                        data-services-marquee-text
                        href="#services-wave-path"
                        startOffset="0%"
                    >
                        RAAMATUPIDAMINE · MAKSUD · PALGAARVESTUS · FINANTSARUANDLUS · ETTEVÕTTE TUGI · RAAMATUPIDAMINE · MAKSUD · PALGAARVESTUS · FINANTSARUANDLUS · ETTEVÕTTE TUGI · RAAMATUPIDAMINE · MAKSUD · PALGAARVESTUS · FINANTSARUANDLUS · ETTEVÕTTE TUGI ·
                    </textPath>
                </text>
            </svg>
        </div>
    );
}