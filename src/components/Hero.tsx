export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-92px)] overflow-hidden px-6 md:px-10">
      {/* Starting point */}
      <div className="absolute left-6 top-[21%] flex items-center gap-4 font-inter text-[11px] uppercase tracking-[0.08em] text-[#77736D] md:left-10 md:text-[11px]">
        <span>Alates 1997</span>
        <span className="h-px w-12 bg-[#B8B3AA]" />
      </div>

      {/* Small circle */}
      <div className="pointer-events-none absolute left-[57%] top-[15%] h-10 w-10 rounded-full border border-[#8F8A82] md:h-[52px] md:w-[52px]" />

      {/* Small horizontal line */}
      <div className="pointer-events-none absolute right-[10%] top-[3%] h-px w-13 bg-[#B8B3AA]" />

      {/* Main headline */}
      <div className="absolute left-1/2 top-[45%] z-10 w-full -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center font-clearface text-[clamp(4rem,6.1vw,6.4rem)] font-medium leading-[1.08] tracking-[-0.01em]">
          ALGDOKUMENTIDEST
          <br />
          AASTAARUANDENI.
        </h1>
      </div>

      {/* Large red circle */}
      <div className="pointer-events-none absolute right-[5%] top-[2%] z-0 h-[300px] w-[300px] rounded-full border-[1.75px] border-[#D32F2F]/90 md:h-[390px] md:w-[390px]" />
      {/* Description */}
      <div className="absolute bottom-[15%] left-6 max-w-[410px] font-inter text-base font-normal leading-[1.4] text-[#5F5C57] md:bottom-[15%] md:left-10 md:text-[17px]">
        Raamatupidamisteenus, mis hoiab su
        <br />
        ettevõtte numbritel silma peal.
      </div>

      {/* Location */}
      <div className="absolute bottom-[10%] right-7 flex items-center gap-4 font-inter text-[10px] uppercase tracking-[0.1em] text-[#5F5C57] md:bottom-[10%] md:right-10 md:text-xs">
        <span className="h-16 w-px bg-[#B8B3AA]" />

        <span className="text-center leading-[1.6]">
          Pärnus
          <br />
          &amp;
          <br />
          distantsilt üle Eesti
        </span>
      </div>

      {/* Bottom left line */}
      <div className="absolute bottom-[3%] left-6 h-px w-40 bg-[#B8B3AA] md:left-10" />
    </section>
  );
}