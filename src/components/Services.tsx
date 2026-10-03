const services = [
  {
    number: "01",
    title: "RAAMATUPIDAMINE",
    description:
      "Igapäevane arvestus, algdokumentide töötlemine, ostu- ja müügireskontro ning muu vajalik arvestus.",
  },
  {
    number: "02",
    title: "PALGAARVESTUS",
    description:
      "Palgaarvestus, puhkusetasud, lõpparvestused ja tööjõumaksud.",
  },
  {
    number: "03",
    title: "MAKSUD JA ARUANDLUS",
    description:
      "Maksudeklaratsioonid, statistika- ja muud aruanded ning majandusaasta aruanded.",
  },
  {
    number: "04",
    title: "LISATEENUSED",
    description:
      "Dokumentide koostamine, lähetusaruanded, varasemate perioodide korrastamine ja muud ettevõtte vajadustest lähtuvad teenused.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-[#111111]/15 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mb-16 flex items-center justify-between font-inter text-[10px] uppercase tracking-[0.1em] md:text-xs">
        <span>02 / 06</span>
        <span>Meie teenused</span>
      </div>

      <div>
        {services.map((service) => (
          <div
            key={service.number}
            className="grid grid-cols-[35px_1fr_auto] items-center gap-4 border-t border-[#111111]/20 py-7 md:grid-cols-[50px_1.1fr_1fr_55px] md:gap-10 md:py-9"
          >
            <span className="font-inter text-xs text-[#D32F2F]">
              {service.number}
            </span>

            <h3 className="font-clearface text-[clamp(2rem,3.6vw,4rem)] leading-none">
              {service.title}
            </h3>

            <p className="hidden max-w-[360px] font-inter text-xs leading-[1.5] text-[#5F5C57] md:block">
              {service.description}
            </p>

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B8B3AA] font-inter text-sm">
              →
            </span>
          </div>
        ))}
      </div>

      <a
        href="#pricing"
        className="mt-8 inline-block font-inter text-[10px] uppercase tracking-[0.1em] underline underline-offset-4"
      >
        Vaata kõiki teenuseid →
      </a>
    </section>
  );
}