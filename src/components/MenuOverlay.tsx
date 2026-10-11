"use client";

type MenuOverlayProps = {
    open: boolean;
    onClose: () => void;
};

const menuItems = [
    {
        number: "01",
        label: "Teenused",
        href: "/#services",
        position: "...",
    },
    {
        number: "02",
        label: "Uudised",
        href: "/#news",
        position: "...",
    },
    {
        number: "03",
        label: "Meist",
        href: "/#experience",
        position: "...",
    },
    {
        number: "04",
        label: "Kontakt",
        href: "/#contact",
        position: "...",
    },
    {
        number: "05",
        label: "Hinnakiri",
        href: "/hinnakiri",
        position: "...",
    },
];

export default function MenuOverlay({
    open,
    onClose,
}: MenuOverlayProps) {
    if (!open) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-[100] h-dvh w-screen">
            {/* Background */}
            <button
                type="button"
                aria-label="Sulge menüü"
                onClick={onClose}
                className="absolute inset-0 bg-[#111111]/20 backdrop-blur-[4px] transition-opacity duration-500"
            />

            {/* Menu panel */}
            <div className="absolute right-0 top-0 flex h-dvh w-full flex-col overflow-hidden bg-[#1C1C1C] text-[#F8F5EF] md:w-[43%] lg:w-[40%]">
                {/* Decorative circle */}
                <div className="pointer-events-none absolute -right-36 top-14 h-[340px] w-[340px] rounded-full border border-[#D32F2F]/35" />

                {/* Close */}
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
                <nav className="relative z-10 flex flex-1 flex-col justify-center px-7 md:px-10">
                    {menuItems.map((item) => (
                        <a
                            key={item.number}
                            href={item.href}
                            onClick={onClose}
                            className={`group relative flex items-center border-t border-[#F8F5EF]/15 py-4 transition-opacity duration-300 hover:opacity-50 md:py-5 ${item.position}`}
                        >
                            {/* Number */}
                            <span className="mr-5 w-7 shrink-0 text-center font-inter text-[9px] text-[#F8F5EF]/45 md:mr-6 md:w-8 md:text-[10px]">
                                ({item.number})
                            </span>

                            {/* Title */}
                            <span className="font-clearface text-[clamp(2rem,3.3vw,4rem)] uppercase leading-[0.9] tracking-[-0.02em]">
                                {item.label}
                            </span>

                            {/* Hover arrow */}
                            <span className="ml-2 font-inter text-xs text-[#D32F2F] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                ↗
                            </span>
                        </a>
                    ))}
                </nav>

                {/* Minimal footer */}
                <div className="relative z-10 flex items-center justify-between px-7 pb-7 font-inter text-[8px] uppercase tracking-[0.08em] text-[#F8F5EF]/45 md:px-10 md:pb-8 md:text-[9px]">
                    <span>©2026</span>
                    <span>Pärnu, Eesti</span>
                    <span>All Rights Reserved</span>
                </div>
            </div>
        </div>
    );
}