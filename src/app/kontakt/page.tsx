
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
    <main className="min-h-screen bg-[#F8F5EF] text-[#111111]">
      <Navbar />

      {/* intro */}
      <section className="px-5 pb-12 pt-10 md:px-12 md:pb-16 md:pt-12 lg:px-16">
        <div className="mb-8 flex items-center gap-4 font-inter text-[9px] uppercase tracking-[0.12em] text-[#111111]/60 md:mb-10 md:text-[10px]">
          <span>05 / 05</span>
          <span className="h-px w-8 bg-[#111111]/25" />
          <span>KONTAKT</span>
        </div>

        <div className="max-w-3xl">
          <h1 className="font-clearface text-[clamp(2.8rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.02em]">
            VÕTA ÜHENDUST<span className="text-[#D32F2F]">.</span>
          </h1>
          <p className="mt-5 max-w-xl font-inter text-xs leading-relaxed text-[#111111]/70 md:text-sm">
            Otsid oma ettevõttele raamatupidajat või soovid teenuste kohta
            rohkem teada? Kirjuta meile ja leiame sobiva lahenduse.
          </p>
        </div>
      </section>

      {/* contact details and form */}
      <section className="px-5 pb-20 md:px-12 md:pb-28 lg:px-16">
        <div className="grid gap-14 border-t border-[#111111]/25 pt-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:pt-10 lg:gap-24">
          <div>

            <div className="space-y-8">
              {contacts.map((contact) => (
                <div
                  key={contact.email}
                  className="border-b border-[#111111]/15 pb-6"
                >
                  <h2 className="font-clearface text-xl tracking-[-0.02em] md:text-2xl">
                    {contact.name}
                  </h2>

                  <p className="mt-1 font-inter text-xs text-[#111111]/60">
                    {contact.role}
                  </p>

                  <div className="mt-4 space-y-2 font-inter text-xs">
                    {contact.phone && (
                      <p>
                        <a
                          href={`tel:${contact.phone.replace(/\s/g, "")}`}
                          className="transition-colors hover:text-[#D32F2F]"
                        >
                          {contact.phone}
                        </a>
                      </p>
                    )}

                    <p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="transition-colors hover:text-[#D32F2F]"
                      >
                        {contact.email}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 font-inter text-[10px] leading-relaxed text-[#111111]/55">
              LL Trading OÜ · Pärnu, Eesti
              <br />
              Teenindame ettevõtteid üle Eesti.
            </p>
          </div>

          <div>
            <p className="mb-8 font-inter text-[10px] uppercase tracking-[0.1em] text-[#D32F2F]">
              Saada meile sõnum
            </p>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-[#111111]/15 px-5 py-8 md:px-12 md:py-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div>
            <a
              href="/"
              className="font-clearface text-base tracking-[0.04em] transition-opacity hover:opacity-60"
            >
              <span className="text-[#D32F2F]">LL</span> TRADING OÜ
            </a>
            <p className="mt-2 font-inter text-[9px] text-[#111111]/55">
              Raamatupidamisteenused alates 1997
            </p>
          </div>

          <nav
            aria-label="Jaluse navigatsioon"
            className="flex flex-wrap gap-x-5 gap-y-3 font-inter text-[9px] uppercase tracking-[0.08em]"
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

          <p className="font-inter text-[9px] text-[#111111]/55 md:text-right">
            Pärnu, Eesti
            <br />
            © {new Date().getFullYear()} LL Trading OÜ
          </p>
        </div>
      </footer>
    </main>
  );
}
