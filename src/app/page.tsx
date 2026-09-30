export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#111111]">

      {/* =========================================================
          NAVIGATION
      ========================================================= */}
      <nav className="relative flex items-center justify-between px-6 py-8 md:px-16 md:py-10">

        {/* Left */}
        <a
          href="#contact"
          className="font-clearface text-base uppercase tracking-[0.01em] transition-opacity hover:opacity-60 md:text-[19px]"
        >
          Võta ühendust{" "}
          <span className="text-[#D32F2F]">→</span>
        </a>

        {/* Center logo */}
        <a
          href="/"
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-clearface text-[26px] tracking-[0.01em] md:text-[36px]"
        >
          <span className="text-[#D32F2F]">LL</span> TRADING
        </a>

        {/* Right */}
        <div className="hidden items-center gap-8 font-clearface text-base uppercase md:flex md:text-[18px]">
          <a
            href="#services"
            className="transition-opacity hover:opacity-60"
          >
            Teenused
          </a>

          <a
            href="#team"
            className="transition-opacity hover:opacity-60"
          >
            Meist
          </a>

          <a
            href="#pricing"
            className="transition-opacity hover:opacity-60"
          >
            Hinnakiri
          </a>

          <a
            href="#contact"
            className="transition-opacity hover:opacity-60"
          >
            Kontakt
          </a>
        </div>

        {/* Mobile */}
        <button
          className="ml-auto font-inter text-xs uppercase tracking-[0.08em] md:hidden"
          aria-label="Ava menüü"
        >
          Menüü
        </button>
      </nav>


      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[calc(100vh-90px)] overflow-hidden px-6 md:px-10">

        {/* Alates 1997 */}
        <div className="absolute left-6 top-[28%] flex items-center gap-4 font-inter text-[11px] uppercase tracking-[0.08em] md:left-10 md:text-sm">
          <span>Alates 1997</span>
          <span className="h-px w-20 bg-[#B8B3AA]" />
        </div>

        {/* Small decorative circle */}
        <div className="pointer-events-none absolute left-[58%] top-[27%] h-14 w-14 rounded-full border border-[#B8B3AA] md:h-[68px] md:w-[68px]" />

        {/* Small decorative line */}
        <div className="pointer-events-none absolute right-[8%] top-[18%] h-px w-16 bg-[#B8B3AA]" />

        {/* Main headline */}
        <div className="absolute left-1/2 top-[48%] z-10 w-full -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-center font-clearface text-[clamp(4rem,7vw,7rem)] font-normal leading-[1.02] tracking-[-0.015em]">
            ALGDOKUMENTIDEST
            <br />
            AASTAARUANDENI.
          </h1>
        </div>

        {/* Large red circle */}
        <div className="pointer-events-none absolute right-[4%] top-[47%] z-0 h-[320px] w-[320px] -translate-y-1/2 rounded-full border border-[#D32F2F]/60 md:h-[490px] md:w-[490px]" />

        {/* Bottom description */}
        <div className="absolute bottom-10 left-6 max-w-[390px] font-inter text-sm leading-[1.4] text-[#5F5C57] md:bottom-12 md:left-10 md:text-base">
          Raamatupidamisteenus, mis hoiab su ettevõtte
          <br className="hidden md:block" />
          numbritel silma peal.
        </div>

        {/* Bottom location */}
        <div className="absolute bottom-10 right-6 flex items-center gap-4 font-inter text-[10px] uppercase tracking-[0.1em] text-[#5F5C57] md:bottom-12 md:right-10 md:text-xs">
          <span className="h-16 w-px bg-[#B8B3AA]" />

          <span className="text-center leading-[1.6]">
            Pärnus
            <br />
            &amp;
            <br />
            distantsilt üle Eesti
          </span>
        </div>
      </section>


      {/* =========================================================
          EXPERIENCE
      ========================================================= */}
      <section
        id="about"
        className="relative border-t border-[#111111]/15 px-6 py-24 md:px-10 md:py-28"
      >

        {/* Section meta */}
        <div className="mb-20 flex items-center justify-between font-inter text-[10px] uppercase tracking-[0.1em] md:text-xs">
          <span>01 / 05</span>
          <span>1997–Tänaseni</span>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">

          {/* 29 */}
          <div className="relative pl-6 md:pl-12">
            <div className="absolute left-0 top-0 h-full w-px bg-[#B8B3AA]" />

            <span className="block font-clearface text-[clamp(8rem,15vw,14rem)] leading-[0.7] tracking-[-0.03em] text-[#D32F2F]">
              29
            </span>
          </div>

          {/* Right content */}
          <div className="relative max-w-[700px]">

            <h2 className="font-clearface text-[clamp(3.5rem,6vw,6.5rem)] font-normal leading-[0.9] tracking-[-0.02em]">
              AASTAT
              <br />
              KOGEMUST.
            </h2>

            <div className="mt-10 max-w-[470px] border-l border-[#B8B3AA] pl-6 md:ml-10">
              <p className="font-inter text-sm leading-[1.5] text-[#5F5C57] md:text-base">
                LL Trading on pakkunud raamatupidamisteenuseid Eesti
                ettevõtetele alates 1997. aastast. Meie klientide hulgas on
                nii väiksemaid kui ka suuremaid ettevõtteid ning teenindame
                kliente nii Pärnus kui ka üle Eesti.
              </p>
            </div>

            {/* Small red decorative line */}
            <div className="mt-10 ml-20 h-5 w-16 border-b-2 border-[#D32F2F] [border-radius:50%]" />
          </div>
        </div>
      </section>


      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section
        id="services"
        className="border-t border-[#111111]/15 px-6 py-24 md:px-10 md:py-28"
      >

        {/* Section meta */}
        <div className="mb-14 flex items-center justify-between font-inter text-[10px] uppercase tracking-[0.1em] md:text-xs">
          <span>02 / 05</span>
          <span>Meie teenused</span>
        </div>

        <div>

          {/* Service 01 */}
          <div className="grid grid-cols-[35px_1fr_auto] items-center gap-4 border-t border-[#111111]/20 py-6 md:grid-cols-[50px_1.2fr_1fr_55px] md:gap-8 md:py-7">
            <span className="font-inter text-xs text-[#D32F2F]">
              01
            </span>

            <h3 className="font-clearface text-[clamp(2rem,3.5vw,4rem)] leading-none tracking-[-0.015em]">
              RAAMATUPIDAMINE
            </h3>

            <p className="hidden max-w-[350px] font-inter text-xs leading-[1.45] text-[#5F5C57] md:block">
              Igapäevane arvestus, algdokumentide töötlemine, ostu- ja
              müügireskontro ning muu vajalik arvestus.
            </p>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B8B3AA] font-inter text-sm">
              →
            </span>
          </div>

          {/* Service 02 */}
          <div className="grid grid-cols-[35px_1fr_auto] items-center gap-4 border-t border-[#111111]/20 py-6 md:grid-cols-[50px_1.2fr_1fr_55px] md:gap-8 md:py-7">
            <span className="font-inter text-xs text-[#D32F2F]">
              02
            </span>

            <h3 className="font-clearface text-[clamp(2rem,3.5vw,4rem)] leading-none tracking-[-0.015em]">
              PALGAARVESTUS
            </h3>

            <p className="hidden max-w-[350px] font-inter text-xs leading-[1.45] text-[#5F5C57] md:block">
              Palgaarvestus, puhkusetasud, lõpparvestused ja tööjõumaksud.
            </p>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B8B3AA] font-inter text-sm">
              →
            </span>
          </div>

          {/* Service 03 */}
          <div className="grid grid-cols-[35px_1fr_auto] items-center gap-4 border-t border-[#111111]/20 py-6 md:grid-cols-[50px_1.2fr_1fr_55px] md:gap-8 md:py-7">
            <span className="font-inter text-xs text-[#D32F2F]">
              03
            </span>

            <h3 className="font-clearface text-[clamp(2rem,3.5vw,4rem)] leading-none tracking-[-0.015em]">
              MAKSUD JA ARUANDLUS
            </h3>

            <p className="hidden max-w-[350px] font-inter text-xs leading-[1.45] text-[#5F5C57] md:block">
              Maksudeklaratsioonid, statistika- ja muud aruanded ning
              majandusaasta aruanded.
            </p>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B8B3AA] font-inter text-sm">
              →
            </span>
          </div>

          {/* Service 04 */}
          <div className="grid grid-cols-[35px_1fr_auto] items-center gap-4 border-t border-[#111111]/20 py-6 md:grid-cols-[50px_1.2fr_1fr_55px] md:gap-8 md:py-7">
            <span className="font-inter text-xs text-[#D32F2F]">
              04
            </span>

            <h3 className="font-clearface text-[clamp(2rem,3.5vw,4rem)] leading-none tracking-[-0.015em]">
              LISATEENUSED
            </h3>

            <p className="hidden max-w-[350px] font-inter text-xs leading-[1.45] text-[#5F5C57] md:block">
              Dokumentide koostamine, lähetusaruanded, varasemate perioodide
              korrastamine ja muud ettevõtte vajadustest lähtuvad teenused.
            </p>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B8B3AA] font-inter text-sm">
              →
            </span>
          </div>

        </div>

        <a
          href="#pricing"
          className="mt-8 inline-block font-inter text-[10px] uppercase tracking-[0.1em] underline underline-offset-4"
        >
          Vaata kõiki teenuseid →
        </a>
      </section>


      {/* =========================================================
          TEAM
      ========================================================= */}
      <section
        id="team"
        className="border-t border-[#111111]/15 px-6 py-24 md:px-10 md:py-28"
      >

        {/* Section meta */}
        <div className="mb-16 flex items-center justify-between font-inter text-[10px] uppercase tracking-[0.1em] md:text-xs">
          <span>03 / 05</span>
          <span>Meie inimesed</span>
        </div>

        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">

          {/* Heading */}
          <div>
            <h2 className="font-clearface text-[clamp(3.5rem,6vw,6.5rem)] font-normal leading-[0.88] tracking-[-0.02em]">
              NUMBRITE
              <br />
              TAGA ON
              <br />
              INIMESED.
            </h2>

            <p className="mt-8 max-w-[360px] font-inter text-sm leading-[1.5] text-[#5F5C57]">
              Oleme väike meeskond, kuid meie kogemus ulatub aastakümnete
              taha. Meie kliendid suhtlevad otse inimestega, kes nende
              raamatupidamisega tegelevad.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-block font-inter text-[10px] uppercase tracking-[0.1em] underline underline-offset-4"
            >
              Meie meeskond →
            </a>
          </div>

          {/* Team photos */}
          <div className="grid grid-cols-3 gap-4 md:gap-6">

            <div>
              <div className="mb-4 aspect-[0.8] bg-[#D9D4CC]" />

              <h3 className="font-clearface text-base uppercase md:text-lg">
                Irene Port
              </h3>

              <p className="mt-1 font-inter text-[9px] uppercase leading-[1.4] tracking-[0.08em] text-[#5F5C57]">
                Juhataja / pearaamatupidaja
              </p>
            </div>

            <div>
              <div className="mb-4 aspect-[0.8] bg-[#D9D4CC]" />

              <h3 className="font-clearface text-base uppercase md:text-lg">
                Ave Kartau
              </h3>

              <p className="mt-1 font-inter text-[9px] uppercase leading-[1.4] tracking-[0.08em] text-[#5F5C57]">
                Raamatupidaja
              </p>
            </div>

            <div>
              <div className="mb-4 aspect-[0.8] bg-[#D9D4CC]" />

              <h3 className="font-clearface text-base uppercase md:text-lg">
                Leeni Tõll
              </h3>

              <p className="mt-1 font-inter text-[9px] uppercase leading-[1.4] tracking-[0.08em] text-[#5F5C57]">
                Raamatupidaja
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          PRICING
      ========================================================= */}
      <section
        id="pricing"
        className="relative overflow-hidden border-t border-[#111111]/15 px-6 py-24 md:px-10 md:py-28"
      >

        {/* Section meta */}
        <div className="mb-16 flex items-center justify-between font-inter text-[10px] uppercase tracking-[0.1em] md:text-xs">
          <span>04 / 05</span>
          <span>Hinnakiri</span>
        </div>

        <div className="grid gap-16 md:grid-cols-[1fr_1fr] md:gap-24">

          {/* Left */}
          <div>
            <h2 className="font-clearface text-[clamp(3.5rem,6vw,6.5rem)] font-normal leading-[0.88] tracking-[-0.02em]">
              ÜKS HIND EI SOBI
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

          {/* Right */}
          <div className="relative border-l border-[#B8B3AA] pl-8 md:pl-12">

            <p className="max-w-[400px] font-inter text-sm leading-[1.5] text-[#5F5C57] md:text-base">
              Raamatupidamisteenuse hind kujuneb vastavalt algdokumentide
              mahule ja tellitud lisateenustele.
            </p>

            <div className="mt-12">

              <div className="mb-5 font-inter text-[10px] uppercase tracking-[0.1em] text-[#5F5C57]">
                Näide
              </div>

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

        {/* Decorative red ellipse */}
        <div className="pointer-events-none absolute -right-24 bottom-0 h-40 w-72 rounded-[50%] border border-[#D32F2F]/45 md:-right-20 md:h-56 md:w-[420px]" />
      </section>


      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section
        id="contact"
        className="border-t border-[#111111]/15 px-6 py-24 md:px-10 md:py-28"
      >

        {/* Section meta */}
        <div className="mb-16 flex items-center justify-between font-inter text-[10px] uppercase tracking-[0.1em] md:text-xs">
          <span>05 / 05</span>
          <span>Kontakt</span>
        </div>

        <div className="grid gap-16 md:grid-cols-[1.2fr_0.8fr] md:gap-24">

          {/* Left */}
          <div>
            <h2 className="font-clearface text-[clamp(3.5rem,6vw,6.5rem)] font-normal leading-[0.88] tracking-[-0.02em]">
              RÄÄGIME TEIE
              <br />
              ETTEVÕTTEST<span className="text-[#D32F2F]">.</span>
            </h2>

            <div className="mt-10 max-w-[380px]">
              <p className="font-inter text-sm leading-[1.5] text-[#5F5C57]">
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

          {/* Contacts */}
          <div className="border-l border-[#B8B3AA] pl-8 md:pl-12">

            <div className="space-y-8">

              <div>
                <p className="font-clearface text-base uppercase">
                  Irene Port
                </p>

                <a
                  href="tel:+3725137420"
                  className="mt-1 block font-inter text-xs text-[#5F5C57]"
                >
                  +372 51 37 420
                </a>

                <a
                  href="mailto:irene@lltrading.ee"
                  className="mt-1 block font-inter text-xs text-[#5F5C57]"
                >
                  irene@lltrading.ee
                </a>
              </div>

              <div>
                <p className="font-clearface text-base uppercase">
                  Ave Kartau
                </p>

                <a
                  href="tel:+3725186998"
                  className="mt-1 block font-inter text-xs text-[#5F5C57]"
                >
                  +372 51 86 998
                </a>

                <a
                  href="mailto:ave@lltrading.ee"
                  className="mt-1 block font-inter text-xs text-[#5F5C57]"
                >
                  ave@lltrading.ee
                </a>
              </div>

              <div>
                <p className="font-clearface text-base uppercase">
                  Leeni Tõll
                </p>

                <a
                  href="mailto:leeni@lltrading.ee"
                  className="mt-1 block font-inter text-xs text-[#5F5C57]"
                >
                  leeni@lltrading.ee
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-[#111111]/15 px-6 py-8 md:px-10">

        <div className="grid gap-8 font-inter text-[9px] uppercase tracking-[0.08em] md:grid-cols-3 md:items-end md:text-[10px]">

          <div>
            <p>LL Trading OÜ</p>

            <p className="mt-2 text-[#6D6A65]">
              Raamatupidamisteenused alates 1997
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 md:justify-center">
            <a href="#services" className="hover:opacity-60">
              Teenused
            </a>

            <a href="#team" className="hover:opacity-60">
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