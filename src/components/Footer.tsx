export default function Footer() {
  return (
    <footer className="border-t border-[#111111]/15 px-6 py-8 md:px-10">
      <div className="grid gap-8 font-inter text-[9px] uppercase tracking-[0.08em] md:grid-cols-3 md:items-end md:text-[10px]">
        <div>
          <p>LL Trading OÜ</p>

          <p className="mt-2 text-[#6D6A65]">
            Raamatupidamisteenused alates 1997
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 md:justify-center">
          <a href="#services" className="hover:opacity-60">
            Teenused
          </a>

          <a href="#news" className="hover:opacity-60">
            Uudised
          </a>

          <a href="#team" className="hover:opacity-60">
            Meist
          </a>

          <a href="#pricing" className="hover:opacity-60">
            Hinnakiri
          </a>

          <a href="#contact" className="hover:opacity-60">
            Kontakt
          </a>
        </nav>

        <div className="md:text-right">
          <p>Pärnu, Eesti</p>

          <p className="mt-2 text-[#6D6A65]">
            © 2026 LL Trading OÜ
          </p>
        </div>
      </div>
    </footer>
  );
}