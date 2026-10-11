const contacts = [
  {
    name: "Irene Port",
    phone: "+372 51 37 420",
    email: "irene@lltrading.ee",
  },
  {
    name: "Ave Kartau",
    phone: "+372 51 86 998",
    email: "ave@lltrading.ee",
  },
  {
    name: "Leeni Tõll",
    phone: null,
    email: "leeni@lltrading.ee",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24 sm:px-8 md:px-12 md:py-32 lg:px-16"
    >
      <div className="mb-16 flex items-center justify-start gap-8 font-inter text-[10px] uppercase tracking-[0.1em] md:mb-20 md:text-xs">
        <span>06 / 06</span>
        <span>Kontakt</span>
      </div>

      <div className="grid gap-16 md:grid-cols-[1.2fr_0.8fr] md:gap-24">
        <div>
          <h2 className="font-clearface text-[clamp(3rem,5.2vw,5.5rem)] font-normal leading-[1.05] tracking-[-0.025em]">
            RÄÄGIME
            <br />
            TEIE
            <br />
            ETTEVÕTTE
            <br />
            VAJADUSTEST<span className="text-[#D32F2F]">.</span>
          </h2>

          <div className="mt-10 max-w-[380px]">
            <p className="font-inter text-sm leading-[1.6] text-[#5F5C57]">
              Otsid oma ettevõttele raamatupidajat? Võta meiega ühendust ja
              räägime läbi, milline lahendus sobib sinu ettevõttele kõige
              paremini.
            </p>

            <a
              href="mailto:irene@lltrading.ee"
              className="group mt-7 inline-flex items-center gap-2 font-inter text-xs font-semibold uppercase tracking-[0.04em] transition-colors hover:text-[#D32F2F]"
            >
              Võta ühendust
              <span className="text-[#D32F2F] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="space-y-10">
            {contacts.map((contact) => (
              <div key={contact.name}>
                <p className="font-clearface text-lg uppercase md:text-xl">
                  {contact.name}
                </p>

                {contact.phone && (
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="mt-2 block w-fit font-inter text-sm text-[#5F5C57] transition-colors hover:text-[#D32F2F]"
                  >
                    {contact.phone}
                  </a>
                )}

                <a
                  href={`mailto:${contact.email}`}
                  className="mt-1 block w-fit font-inter text-sm text-[#5F5C57] transition-colors hover:text-[#D32F2F]"
                >
                  {contact.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}