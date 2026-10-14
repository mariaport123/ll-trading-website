import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

const contacts = [
  {
    name: "Irene Port",
    role: "Juhataja / pearaamatupidaja",
    phone: "+372 51 37 420",
    email: "irene@lltrading.ee",
  },
  {
    name: "Ave Kartau",
    role: "Raamatupidaja",
    phone: null,
    email: "ave@lltrading.ee",
  },
  {
    name: "Leeni Tõll",
    role: "Raamatupidaja",
    phone: null,
    email: "leeni@lltrading.ee",
  },
];

export default function KontaktPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#F8F5EF] text-[#111111]">
      <Navbar />

      {/* Intro */}
      <section className="px-5 pb-10 pt-8 sm:px-8 sm:pb-12 sm:pt-10 md:px-12 md:pb-16 md:pt-12 lg:px-16">
        <div className="mb-8 flex items-center gap-3 font-inter text-[9px] uppercase tracking-[0.12em] text-[#111111]/60 sm:mb-10 sm:gap-4 md:text-[10px]">
          <span>05 / 05</span>
          <span className="h-px w-6 bg-[#111111]/25 sm:w-8" />
          <span>Kontakt</span>
        </div>

        <div className="max-w-3xl">
          <h1 className="max-w-full break-words font-clearface text-[clamp(2.5rem,9vw,4.5rem)] leading-[0.92] tracking-[-0.035em] sm:text-[clamp(3rem,7vw,4.5rem)]">
            VÕTA ÜHENDUST<span className="text-[#D32F2F]">.</span>
          </h1>

          <p className="mt-5 max-w-xl font-inter text-[13px] leading-[1.7] text-[#111111]/70 sm:mt-6 sm:text-sm">
            Otsid oma ettevõttele raamatupidajat või soovid teenuste kohta
            rohkem teada? Kirjuta meile ja leiame sobiva lahenduse.
          </p>
        </div>
      </section>

      {/* Contact details and form */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 md:px-12 md:pb-28 lg:px-16">
        <div className="grid min-w-0 gap-12 border-t border-[#111111]/25 pt-7 sm:gap-14 sm:pt-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:pt-10 lg:gap-24">
          {/* Contact details */}
          <div className="min-w-0">
            <div className="space-y-0">
              {contacts.map((contact, index) => (
                <div
                  key={contact.email}
                  className="border-b border-[#111111]/15 py-6 first:pt-0 sm:py-7"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h2 className="font-clearface text-xl leading-tight tracking-[-0.02em] sm:text-2xl">
                        {contact.name}
                      </h2>

                      <p className="mt-1.5 font-inter text-xs leading-relaxed text-[#111111]/60 sm:text-[13px]">
                        {contact.role}
                      </p>
                    </div>

                    <span className="shrink-0 pt-1 font-inter text-[9px] tracking-[0.08em] text-[#111111]/40">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 font-inter text-[13px] leading-relaxed sm:text-sm">
                    {contact.phone && (
                      <p>
                        <a
                          href={`tel:${contact.phone.replace(/\s/g, "")}`}
                          className="break-words transition-colors hover:text-[#D32F2F]"
                        >
                          {contact.phone}
                        </a>
                      </p>
                    )}

                    <p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="break-all transition-colors hover:text-[#D32F2F]"
                      >
                        {contact.email}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 font-inter text-[11px] leading-[1.7] text-[#111111]/55 sm:text-xs">
              LL Trading OÜ · Pärnu, Eesti
              <br />
              Teenindame ettevõtteid üle Eesti.
            </p>
          </div>

          {/* Contact form */}
          <div className="min-w-0">
            <p className="mb-6 font-inter text-[10px] uppercase tracking-[0.1em] text-[#D32F2F] sm:mb-8">
              Saada meile sõnum
            </p>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#111111]/15 px-5 py-7 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-16">
        <div className="grid min-w-0 gap-7 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
          <div>
            <a
              href="/"
              className="font-clearface text-base tracking-[0.04em] transition-opacity hover:opacity-60"
            >
              <span className="text-[#D32F2F]">LL</span> TRADING OÜ
            </a>

            <p className="mt-2 font-inter text-[10px] leading-relaxed text-[#111111]/55">
              Raamatupidamisteenused alates 1997
            </p>
          </div>

          <nav
            aria-label="Jaluse navigatsioon"
            className="flex flex-wrap gap-x-5 gap-y-3 font-inter text-[10px] uppercase tracking-[0.08em]"
          >
            <a href="/#services" className="transition-colors hover:text-[#D32F2F]">
              Teenused
            </a>
            <a href="/#news" className="transition-colors hover:text-[#D32F2F]">
              Uudised
            </a>
            <a href="/#experience" className="transition-colors hover:text-[#D32F2F]">
              Meist
            </a>
            <a href="/hinnakiri" className="transition-colors hover:text-[#D32F2F]">
              Hinnakiri
            </a>
            <a href="/kontakt" className="text-[#D32F2F]">
              Kontakt
            </a>
          </nav>

          <p className="font-inter text-[10px] leading-[1.7] text-[#111111]/55 md:text-right">
            Pärnu, Eesti
            <br />
            © {new Date().getFullYear()} LL Trading OÜ
          </p>
        </div>
      </footer>
    </main>
  );
}