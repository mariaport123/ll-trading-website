export default function Experience() {
  return (
    <section
      id="about"
      className="border-t border-[#111111]/15 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mb-20 flex items-center justify-between font-inter text-[10px] uppercase tracking-[0.1em] md:text-xs">
        <span>01 / 06</span>
        <span>1997–Tänaseni</span>
      </div>

      <div className="grid items-center gap-16 md:grid-cols-[0.9fr_1.1fr] md:gap-24">
        <div className="relative pl-6 md:pl-12">
          <div className="absolute left-0 top-0 h-full w-px bg-[#B8B3AA]" />

          <span className="block font-clearface text-[clamp(9rem,16vw,15rem)] leading-[0.7] tracking-[-0.04em] text-[#D32F2F]">
            30
          </span>
        </div>

        <div>
          <h2 className="font-clearface text-[clamp(3.5rem,6vw,6.5rem)] font-normal leading-[0.92] tracking-[-0.02em]">
            AASTAT
            <br />
            KOGEMUST.
          </h2>

          <p className="mt-10 max-w-[470px] border-l border-[#B8B3AA] pl-6 font-inter text-sm leading-[1.6] text-[#5F5C57] md:ml-10 md:text-base">
            LL Trading on pakkunud raamatupidamisteenuseid Eesti ettevõtetele
            alates 1997. aastast. Meie klientide hulgas on nii väiksemaid kui
            ka suuremaid ettevõtteid ning teenindame kliente nii Pärnus kui
            ka üle Eesti.
          </p>
        </div>
      </div>
    </section>
  );
}