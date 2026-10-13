export default function Footer() {
  return (
    <footer className="border-t border-[#111111]/15 px-6 py-8 md:px-10 md:py-10">
      <div className="grid gap-8 font-inter text-[9px] uppercase tracking-[0.08em] md:grid-cols-[1fr_auto_1fr] md:items-end md:text-[10px]">
        {/* Company */}
        <div>
          <a
            href="/"
            className="font-clearface text-base tracking-[0.04em] transition-opacity hover:opacity-60"
          >
            <span className="text-[#D32F2F]">LL</span> TRADING OÜ
          </a>

          <p className="mt-2 text-[#6D6A65]">
            Raamatupidamisteenused alates 1997
          </p>
        </div>

        {/* Navigation */}
        <nav
          aria-label="Jaluse navigatsioon"
          className="flex flex-wrap gap-x-5 gap-y-3 md:-translate-y-3 md:justify-center"
        >
          <a href="/#services" className="transition-colors hover:text-[#D32F2F]">
            Teenused
          </a>

          <a href="/#news" className="transition-colors hover:text-[#D32F2F]">
            Uudised
          </a>

          <a href="/#team" className="transition-colors hover:text-[#D32F2F]">
            Meist
          </a>

          <a href="/hinnakiri" className="transition-colors hover:text-[#D32F2F]">
            Hinnakiri
          </a>

          <a href="/kontakt" className="transition-colors hover:text-[#D32F2F]">
            Kontakt
          </a>
        </nav>

        {/* Location and copyright */}
        <div className="md:text-right">
          <p>Pärnu, Eesti</p>

          <p className="mt-2 text-[#6D6A65]">
            © {new Date().getFullYear()} LL Trading OÜ
          </p>
        </div>
      </div>
    </footer>
  );
}