
export default function Hero() {
  return (
    <section className="relative min-h-[680px] overflow-hidden px-6 sm:min-h-[720px] sm:px-8 md:min-h-[calc(100vh-92px)] md:px-12 lg:px-16">
      {/* Starting point */}
      <div className="absolute left-6 top-[17%] flex items-center gap-3 font-inter text-[9px] uppercase tracking-[0.08em] text-[#77736D] sm:left-8 sm:top-[19%] sm:text-[14px] md:left-12 md:top-[21%] md:gap-4 md:text-[14px] lg:left-16">
        <span>Alates 1997</span>
        <span className="h-px w-8 bg-[#B8B3AA] sm:w-10 md:w-12" />
      </div>

      {/* Small circle */}
      <div className="pointer-events-none absolute left-[68%] top-[16%] h-7 w-7 rounded-full border border-[#8F8A82] sm:left-[62%] sm:h-9 sm:w-9 md:left-[57%] md:top-[15%] md:h-[52px] md:w-[52px]" />

      {/* Small horizontal line */}
      <div className="pointer-events-none absolute right-[9%] top-[8%] h-px w-8 bg-[#B8B3AA] sm:w-10 md:right-[10%] md:top-[2%] md:w-[52px]" />

      {/* Large red circle */}
      <div className="hero-red-circle pointer-events-none absolute -right-[100px] top-[5%] z-0 h-[220px] w-[220px] rounded-full border-[1.5px] border-[#D32F2F]/90 sm:-right-[55px] sm:h-[280px] sm:w-[280px] md:right-[3%] md:top-[5%] md:h-[clamp(420px,35vw,540px)] md:w-[clamp(420px,35vw,540px)] md:border-[2.5px]" />

      {/* Main headline */}
      <div className="absolute left-1/2 top-[43%] z-10 w-[calc(100%-48px)] -translate-x-1/2 -translate-y-1/2 sm:top-[44%] sm:w-full sm:px-4 md:top-[45%] md:w-full md:px-0">
        <h1 className="text-center font-clearface text-[clamp(2.4rem,7vw,7.5rem)] font-normal leading-[0.98] tracking-[-0.015em] sm:leading-[1.02]">
          ALGDOKUMENTIDEST
          <br />
          AASTAARUANDENI.
        </h1>
      </div>

      {/* Description */}
      <div className="absolute bottom-[19%] left-6 z-10 max-w-[260px] font-inter text-[13px] font-normal leading-[1.5] text-[#5F5C57] sm:bottom-[17%] sm:left-8 sm:max-w-[340px] sm:text-sm md:bottom-[10%] md:left-12 md:max-w-[440px] md:text-[20px] md:leading-[1.4] lg:left-16">
        Raamatupidamisteenus, mis hoiab su
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        ettevõtte numbritel silma peal.
      </div>

      {/* Location */}
      <div className="absolute bottom-[7%] right-6 z-10 flex items-center gap-3 font-inter text-[10px] uppercase tracking-[0.08em] text-[#5F5C57] sm:right-8 sm:text-[11px] md:bottom-[10%] md:right-12 md:gap-4 md:text-[13px] md:tracking-[0.1em] lg:right-16">
        <span className="h-12 w-px bg-[#B8B3AA] sm:h-14 md:h-16" />
        <span className="text-center leading-[1.6]">
          Pärnus
          <br />
          &amp;
          <br />
          distantsilt üle Eesti
        </span>
      </div>

      {/* Bottom left line */}
      <div className="absolute bottom-[3%] left-6 h-px w-24 bg-[#B8B3AA] sm:left-8 sm:w-32 md:left-12 md:w-40 lg:left-16" />
    </section>
  );
}
