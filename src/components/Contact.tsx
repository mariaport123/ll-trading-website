const contacts = [
  {
    name: "Irene Port",
    phone: "+372 51 37 420",
    email: "irene@lltrading.ee",
  },
  {
    name: "Ave Kartau",
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
      className="border-t border-[#111111]/15 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mb-16 flex items-center justify-between font-inter text-[10px] uppercase tracking-[0.1em] md:text-xs">
        <span>06 / 06</span>
        <span>Kontakt</span>
      </div>

      <div className="grid gap-16 md:grid-cols-[1.2fr_0.8fr] md:gap-24">
        <div>
          <h2 className="font-clearface text-[clamp(3.5rem,6vw,6.5rem)] font-normal leading-[0.88] tracking-[-0.02em]">
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
              className="mt-7 inline-block font-inter text-[10px] uppercase tracking-[0.1em] underline underline-offset-4"
            >
              Võta ühendust →
            </a>
          </div>
        </div>

        <div className="border-l border-[#B8B3AA] pl-8 md:pl-12">
          <div className="space-y-8">
            {contacts.map((contact) => (
              <div key={contact.name}>
                <p className="font-clearface text-base uppercase">
                  {contact.name}
                </p>

                {contact.phone && (
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="mt-1 block font-inter text-xs text-[#5F5C57]"
                  >
                    {contact.phone}
                  </a>
                )}

                <a
                  href={`mailto:${contact.email}`}
                  className="mt-1 block font-inter text-xs text-[#5F5C57]"
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