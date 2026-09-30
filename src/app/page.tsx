export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#111111]">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-10">
        <a
          href="#contact"
          className="text-xs font-medium uppercase tracking-[0.08em] transition-opacity hover:opacity-60"
        >
          Võta ühendust →
        </a>

        <a
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-sm font-medium tracking-[0.08em]"
        >
          <span className="text-[#D32F2F]">LL</span> TRADING
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#services" className="text-xs uppercase tracking-[0.08em] hover:opacity-60">
            Teenused
          </a>
          <a href="#about" className="text-xs uppercase tracking-[0.08em] hover:opacity-60">
            Meist
          </a>
          <a href="#pricing" className="text-xs uppercase tracking-[0.08em] hover:opacity-60">
            Hinnakiri
          </a>
          <a href="#contact" className="text-xs uppercase tracking-[0.08em] hover:opacity-60">
            Kontakt
          </a>
        </div>

        <button
          className="md:hidden text-xs uppercase tracking-[0.08em]"
          aria-label="Ava menüü"
        >
          Menüü
        </button>
      </nav>

      {/* Hero */}
      <section className="px-6 pb-24 pt-32 md:px-10 md:pb-40 md:pt-44">
        <div className="mb-16 flex items-center gap-3 text-xs uppercase tracking-[0.12em]">
          <span className="h-2 w-2 rounded-full bg-[#D32F2F]" />
          <span>Alates 1997</span>
        </div>

        <h1 className="font-orpheus max-w-[1200px] text-[clamp(3.5rem,9vw,9rem)] leading-[0.88] tracking-[-0.045em]">
          Algdokumentidest
          <br />
          aastaaruandeni.
        </h1>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-end">
          <p className="max-w-md text-lg leading-relaxed text-[#6D6A65] md:text-xl">
            Raamatupidamisteenus, mis hoiab su ettevõtte numbritel silma peal.
          </p>

          <p className="text-xs uppercase tracking-[0.12em] md:text-right">
            Pärnus &amp; distantsilt üle Eesti
          </p>
        </div>
      </section>
      {/* Experience */}
      <section
        id="about"
        className="border-t border-[#111111]/15 px-6 py-24 md:px-10 md:py-36"
      >
        <div className="mb-16 flex items-center justify-between text-xs uppercase tracking-[0.12em]">
          <span>01 / 05</span>
          <span>1997–Tänaseni</span>
        </div>

        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <h2 className="font-orpheus text-[clamp(3rem,7vw,7rem)] font-normal leading-[0.9] tracking-[-0.04em]">
            29 aastat
            <br />
            kogemust.
          </h2>

          <div className="flex max-w-lg flex-col justify-end">
            <p className="text-lg leading-relaxed text-[#6D6A65] md:text-xl">
              LL Trading OÜ on pakkunud raamatupidamisteenuseid alates 1997.
              aastast. Korraldame ettevõtete raamatupidamist algdokumentidest
              aastaaruandeni — vastavalt ettevõtte vajadustele.
            </p>
          </div>
        </div>
      </section>
      {/* Services */}
      <section
        id="services"
        className="border-t border-[#111111]/15 px-6 py-24 md:px-10 md:py-36"
      >
        <div className="mb-20 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.12em]">
            02 / 05
          </span>

          <span className="text-xs uppercase tracking-[0.12em]">
            Meie teenused
          </span>
        </div>

        <div className="space-y-0">
          <div className="grid grid-cols-[40px_1fr_auto] items-center gap-6 border-t border-[#111111]/15 py-7 md:grid-cols-[60px_1fr_1fr_auto]">
            <span className="text-xs text-[#D32F2F]">01</span>

            <h3 className="font-orpheus text-2xl md:text-4xl">
              Raamatupidamine
            </h3>

            <p className="hidden max-w-md text-sm leading-relaxed text-[#6D6A65] md:block">
              Igapäevase raamatupidamise korraldamine vastavalt ettevõtte
              vajadustele.
            </p>

            <span className="text-xl">↗</span>
          </div>

          <div className="grid grid-cols-[40px_1fr_auto] items-center gap-6 border-t border-[#111111]/15 py-7 md:grid-cols-[60px_1fr_1fr_auto]">
            <span className="text-xs text-[#D32F2F]">02</span>

            <h3 className="font-orpheus text-2xl md:text-4xl">
              Palgaarvestus
            </h3>

            <p className="hidden max-w-md text-sm leading-relaxed text-[#6D6A65] md:block">
              Töötasude, puhkuste ja tööjõumaksudega seotud arvestus.
            </p>

            <span className="text-xl">↗</span>
          </div>

          <div className="grid grid-cols-[40px_1fr_auto] items-center gap-6 border-t border-[#111111]/15 py-7 md:grid-cols-[60px_1fr_1fr_auto]">
            <span className="text-xs text-[#D32F2F]">03</span>

            <h3 className="font-orpheus text-2xl md:text-4xl">
              Maksud ja aruandlus
            </h3>

            <p className="hidden max-w-md text-sm leading-relaxed text-[#6D6A65] md:block">
              Maksuarvestus ning vajalike aruannete koostamine ja esitamine.
            </p>

            <span className="text-xl">↗</span>
          </div>

          <div className="grid grid-cols-[40px_1fr_auto] items-center gap-6 border-y border-[#111111]/15 py-7 md:grid-cols-[60px_1fr_1fr_auto]">
            <span className="text-xs text-[#D32F2F]">04</span>

            <h3 className="font-orpheus text-2xl md:text-4xl">
              Lisateenused
            </h3>

            <p className="hidden max-w-md text-sm leading-relaxed text-[#6D6A65] md:block">
              Vajadusel aitame ka teiste raamatupidamisega seotud toimingutega.
            </p>

            <span className="text-xl">↗</span>
          </div>
        </div>
      </section>
      {/* Team */}
      <section
        id="team"
        className="border-t border-[#111111]/15 px-6 py-24 md:px-10 md:py-36"
      >
        <div className="mb-20 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.12em]">
            03 / 05
          </span>

          <span className="text-xs uppercase tracking-[0.12em]">
            Meie inimesed
          </span>
        </div>

        <div className="mb-24 grid gap-12 md:grid-cols-2 md:items-end">
          <h2 className="font-orpheus text-[clamp(3rem,7vw,7rem)] font-normal leading-[0.9] tracking-[-0.04em]">
            Numbrite taga
            <br />
            on inimesed.
          </h2>

          <p className="max-w-lg text-lg leading-relaxed text-[#6D6A65] md:text-xl">
            Meie töö keskmes on inimesed — nii ettevõtjad, kellega koos
            töötame, kui ka meie oma meeskond. Hoolikas ja personaalne
            lähenemine aitab hoida ettevõtte raamatupidamise korras.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="border-t border-[#111111]/15 pt-5">
            <div className="mb-6 aspect-[4/5] bg-[#D9D4CC]" />

            <h3 className="font-orpheus text-2xl">Irene Port</h3>
            <p className="mt-2 text-xs uppercase tracking-[0.1em] text-[#6D6A65]">
              Juhataja / Pearaamatupidaja
            </p>
          </div>

          <div className="border-t border-[#111111]/15 pt-5">
            <div className="mb-6 aspect-[4/5] bg-[#D9D4CC]" />

            <h3 className="font-orpheus text-2xl">Ave Kartau</h3>
            <p className="mt-2 text-xs uppercase tracking-[0.1em] text-[#6D6A65]">
              Raamatupidaja
            </p>
          </div>

          <div className="border-t border-[#111111]/15 pt-5">
            <div className="mb-6 aspect-[4/5] bg-[#D9D4CC]" />

            <h3 className="font-orpheus text-2xl">Leeni Tõll</h3>
            <p className="mt-2 text-xs uppercase tracking-[0.1em] text-[#6D6A65]">
              Raamatupidaja
            </p>
          </div>
        </div>
      </section>
            {/* Pricing */}
      <section
        id="pricing"
        className="border-t border-[#111111]/15 px-6 py-24 md:px-10 md:py-36"
      >
        <div className="mb-20 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.12em]">
            04 / 05
          </span>

          <span className="text-xs uppercase tracking-[0.12em]">
            Hinnakiri
          </span>
        </div>

        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <h2 className="font-orpheus text-[clamp(3rem,7vw,7rem)] font-normal leading-[0.9] tracking-[-0.04em]">
              Üks hind
              <br />
              ei sobi
              <br />
              kõigile.
            </h2>

            <a
              href="#"
              className="mt-10 inline-block text-xs uppercase tracking-[0.1em] underline underline-offset-4"
            >
              Vaata hinnakirja →
            </a>
          </div>

          <div className="flex flex-col justify-end">
            <p className="mb-16 max-w-lg text-lg leading-relaxed text-[#6D6A65] md:text-xl">
              Raamatupidamisteenuse hind kujuneb vastavalt algdokumentide
              mahule ja tellitud lisateenustele.
            </p>

            <div className="border-t border-[#111111]/15 pt-6">
              <div className="mb-4 flex justify-between text-xs uppercase tracking-[0.1em]">
                <span>Näide</span>
                <span>0–25 dokumenti</span>
              </div>

              <div className="flex items-end justify-between">
                <span className="font-orpheus text-5xl md:text-7xl">
                  32,00 €
                </span>

                <span className="pb-2 text-sm text-[#6D6A65]">
                  / kuu
                </span>
              </div>

              <div className="mt-6 border-t border-[#111111]/10 pt-4 text-xs leading-relaxed text-[#6D6A65]">
                Hindadele lisandub käibemaks 24%.
                <br />
                Hinnakiri ei ole lõplik. Küsi kindlasti pakkumist.
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Contact */}
      <section
        id="contact"
        className="border-t border-[#111111]/15 px-6 py-24 md:px-10 md:py-36"
      >
        <div className="mb-20 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.12em]">
            05 / 05
          </span>

          <span className="text-xs uppercase tracking-[0.12em]">
            Kontakt
          </span>
        </div>

        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <h2 className="font-orpheus text-[clamp(3rem,7vw,7rem)] font-normal leading-[0.9] tracking-[-0.04em]">
              Räägime teie
              <br />
              ettevõttest.
            </h2>

            <div className="mt-10">
              <a
                href="mailto:irene@lltrading.ee"
                className="text-xs uppercase tracking-[0.1em] underline underline-offset-4"
              >
                Võta ühendust →
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <p className="mb-16 max-w-lg text-lg leading-relaxed text-[#6D6A65] md:text-xl">
              Otsid oma ettevõttele raamatupidajat? Võta meiega ühendust ja
              räägime läbi, milline lahendus sobib sinu ettevõttele kõige
              paremini.
            </p>

            <div className="grid gap-8 border-t border-[#111111]/15 pt-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.08em]">
                  Irene Port
                </p>
                <a
                  href="tel:+3725137420"
                  className="mt-2 block text-sm text-[#6D6A65] hover:text-[#111111]"
                >
                  +372 51 37 420
                </a>
                <a
                  href="mailto:irene@lltrading.ee"
                  className="mt-1 block text-sm text-[#6D6A65] hover:text-[#111111]"
                >
                  irene@lltrading.ee
                </a>
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-[0.08em]">
                  Ave Kartau
                </p>
                <a
                  href="tel:+3725186998"
                  className="mt-2 block text-sm text-[#6D6A65] hover:text-[#111111]"
                >
                  +372 51 86 998
                </a>
                <a
                  href="mailto:ave@lltrading.ee"
                  className="mt-1 block text-sm text-[#6D6A65] hover:text-[#111111]"
                >
                  ave@lltrading.ee
                </a>
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-[0.08em]">
                  Leeni Tõll
                </p>
                <a
                  href="mailto:leeni@lltrading.ee"
                  className="mt-2 block text-sm text-[#6D6A65] hover:text-[#111111]"
                >
                  leeni@lltrading.ee
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Footer */}
      <footer className="border-t border-[#111111]/15 px-6 py-8 md:px-10">
        <div className="grid gap-8 text-xs uppercase tracking-[0.08em] md:grid-cols-3 md:items-end">
          <div>
            <p className="font-medium">LL Trading OÜ</p>
            <p className="mt-2 text-[#6D6A65]">
              Raamatupidamisteenused alates 1997
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            <a href="#services" className="hover:opacity-60">
              Teenused
            </a>
            <a href="#about" className="hover:opacity-60">
              Meist
            </a>
            <a href="#pricing" className="hover:opacity-60">
              Hinnakiri
            </a>
            <a href="#contact" className="hover:opacity-60">
              Kontakt
            </a>
          </nav>

          <div className="md:text-right">
            <p>Pärnu, Eesti</p>
            <p className="mt-2 text-[#6D6A65]">
              © 2026 LL Trading OÜ
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}