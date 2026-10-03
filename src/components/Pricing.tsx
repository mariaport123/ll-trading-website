export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-[#111111]/15 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mb-16 flex items-center justify-between font-inter text-[10px] uppercase tracking-[0.1em] md:text-xs">
        <span>05 / 06</span>
        <span>Hinnakiri</span>
      </div>

      <div className="grid gap-16 md:grid-cols-[1fr_1fr] md:gap-24">
        <div>
          <h2 className="font-clearface text-[clamp(3.5rem,6vw,6.5rem)] font-normal leading-[0.88] tracking-[-0.02em]">
            ÜKS HIND
            <br />
            EI SOBI
            <br />
            KÕIGILE.
          </h2>

          <a
            href="#contact"
            className="mt-10 inline-block font-inter text-[10px] uppercase tracking-[0.1em] underline underline-offset-4"
          >
            Vaata hinnakirja →
          </a>
        </div>

        <div className="border-l border-[#B8B3AA] pl-8 md:pl-12">
          <p className="max-w-[400px] font-inter text-sm leading-[1.6] text-[#5F5C57] md:text-base">
            Raamatupidamisteenuse hind kujuneb vastavalt algdokumentide
            mahule ja tellitud lisateenustele.
          </p>

          <div className="mt-12">
            <p className="mb-5 font-inter text-[10px] uppercase tracking-[0.1em] text-[#5F5C57]">
              Näide
            </p>

            <div className="flex items-end gap-4">
              <span className="font-clearface text-[clamp(3.5rem,5vw,5.5rem)] leading-none">
                32,00 €
              </span>

              <span className="pb-2 font-inter text-xs text-[#5F5C57]">
                / kuu
              </span>
            </div>

            <p className="mt-6 max-w-[360px] font-inter text-[10px] leading-[1.5] text-[#5F5C57]">
              0–25 dokumenti
              <br />
              Hindadele lisandub käibemaks 24%.
              <br />
              Hinnakiri ei ole lõplik. Küsi kindlasti pakkumist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}