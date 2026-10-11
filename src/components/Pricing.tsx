export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden px-6 py-24 sm:px-8 md:px-12 md:py-32 lg:px-16"
    >
      <div className="mb-16 flex items-center justify-start gap-8 font-inter text-[10px] uppercase tracking-[0.1em] md:mb-20 md:text-xs">
        <span>05 / 06</span>
        <span>Hinnakiri</span>
      </div>

      <div className="relative grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:gap-16 lg:gap-24">
        {/* Left side */}
        <div className="relative z-10 flex flex-col items-start">
          <h2 className="whitespace-nowrap font-clearface text-[clamp(3rem,5.2vw,5.5rem)] font-normal leading-[1.12] tracking-[-0.025em]">
            ÜKS HIND EI SOBI
            <br />
            KÕIGILE.
          </h2>

          <p className="mt-8 max-w-[390px] font-inter text-sm leading-[1.6] text-[#5F5C57] md:mt-10 md:text-base">
            Raamatupidamisteenuse hind kujuneb vastavalt algdokumentide
            mahule ja tellitud lisateenustele.
          </p>

          <a
            href="/hinnakiri"
            className="group mt-10 inline-flex items-center gap-2 font-inter text-[10px] uppercase tracking-[0.1em] text-[#111111] transition-colors duration-300 hover:text-[#D32F2F] md:mt-16"
          >
            <span>Vaata hinnakirja</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Right side */}
        <div className="relative flex min-h-[340px] flex-col justify-center md:min-h-[400px] md:pl-8 lg:pl-12">
          <div className="relative z-10">
            <p className="font-inter text-sm uppercase tracking-[0.04em] text-[#5F5C57]">
              Näide
            </p>

            <p className="mt-10 font-inter text-base md:mt-12 md:text-xl">
              0–25 dokumenti
            </p>

            <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="font-clearface text-[clamp(4.5rem,8vw,7.5rem)] leading-[0.9] tracking-[-0.04em]">
                32,00 €
              </span>

              <span className="font-inter text-sm text-[#111111] md:text-base">
                / kuu
              </span>
            </div>

            <div className="mt-10 space-y-2 font-inter text-sm leading-[1.5] text-[#111111]/80">
              <p>Hindadele lisandub käibemaks 24%.</p>
              <p>Hinnakiri ei ole lõplik. Küsi kindlasti pakkumist.</p>
            </div>
          </div>

          {/* Decorative red circle */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[70%] top-1/2 aspect-square w-[min(60vw,420px)] -translate-y-1/2 rounded-full border border-[#D32F2F] md:left-[75%] md:w-[min(35vw,420px)]"
          />
        </div>
      </div>
    </section>
  );
}