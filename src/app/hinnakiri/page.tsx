import Navbar from "@/components/Navbar";

const monthlyPrices = [
  ["0–25", "55,00 €"],
  ["25–50", "75,00 €"],
  ["50–75", "100,00 €"],
  ["75–100", "125,00 €"],
  ["100–125", "150,00 €"],
  ["125–150", "175,00 €"],
  ["150–175", "200,00 €"],
  ["175–200", "225,00 €"],
  ["200–250", "260,00 €"],
  ["250–300", "300,00 €"],
  ["300–350", "340,00 €"],
];

const additionalPrices = [
  ["Palgaarvestus", "inimene", "7,00 €"],
  ["Põhivara arvestus ja amortisatsioon", "ühik", "2,00 €"],
  ["Statistilise aruande koostamine ja esitamine", "aruanne", "20,00 €"],
  ["Eesti-sisene lähetusaruanne", "aruanne", "15,00 €"],
  ["Välislähetuse aruanne koos valuutaarvestusega", "aruanne", "25,00 €"],
  ["Jaekaubanduse arvestus", "müügikoht", "alates 100,00 €"],
  ["Varasemate perioodide korrastamine", "tund", "40,00 €"],
  ["Dokumentide koostamine", "dokument", "5,00 €"],
  ["Muud raamatupidamisaruanded", "aruanne", "15,00 €"],
  ["Kiirtööd ja vahearuanded", "tund", "45,00 €"],
  ["Sisekorraeeskirja koostamine", "ühekordne", "100,00 €"],
  ["VDP kvartaliaruanne", "aruanne", "20,00 €"],
  ["Majandusaasta aruande koostamine", "alates", "100,00 €"],
];

const occasionalPrices = [
  ["1–25", "75,00 €"],
  ["26–50", "100,00 €"],
  ["51–100", "140,00 €"],
  ["101–200", "190,00 €"],
  ["201–300", "240,00 €"],
  ["301–400", "290,00 €"],
  ["401–500", "340,00 €"],
  ["501–600", "390,00 €"],
  ["601–700", "440,00 €"],
  ["701–800", "490,00 €"],
  ["801–900", "540,00 €"],
  ["Üle 900", "Kokkuleppel"],
];

function PriceRows({ rows }: { rows: string[][] }) {
  return (
    <div>
      {rows.map((row) => (
        <div
          key={row.join("-")}
          className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-t border-[#111111]/15 py-4"
        >
          <span className="font-inter text-xs leading-relaxed text-[#111111]/80 md:text-sm">
            {row[0]}
          </span>
          <span className="whitespace-nowrap font-inter text-xs tabular-nums md:text-sm">
            {row[row.length - 1]}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function HinnakiriPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#111111]">
      <Navbar />

      {/* intro */}
      <section className="px-5 pb-12 pt-10 md:px-12 md:pb-16 md:pt-12 lg:px-16">
        <div className="mb-8 flex items-center gap-4 font-inter text-[9px] uppercase tracking-[0.12em] text-[#111111]/60 md:mb-10 md:text-[10px]">
          <span>04 / 05</span>
          <span className="h-px w-8 bg-[#111111]/25" />
          <span>Hinnakiri</span>
        </div>

        <div className="max-w-3xl">
          <h1 className="font-clearface text-[clamp(2.8rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.02em]">
            HINNAKIRI<span className="text-[#D32F2F]">.</span>
          </h1>

          <p className="mt-4 max-w-xl font-inter text-xs leading-relaxed text-[#111111]/70 md:mt-5 md:text-sm">
            Raamatupidamisteenuse hind sõltub algdokumentide mahust ja
            ettevõtte vajadustest. Leiame sinu ettevõttele sobiva lahenduse.
          </p>
        </div>
      </section>

      {/* monthly accounting */}
      <section className="px-5 pb-20 md:px-12 md:pb-28 lg:px-16">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="mb-4 font-inter text-[9px] uppercase tracking-[0.12em] text-[#D32F2F] md:text-[10px]">
              01 / Kuutasu
            </p>

            <h2 className="font-inter text-2xl leading-tight tracking-[-0.035em] md:text-3xl">
              Igakuine raamatupidamine.
            </h2>

            <p className="mt-4 max-w-xs font-inter text-xs leading-relaxed text-[#111111]/65 md:text-sm">
              Baashind sõltub igakuisest algdokumentide arvust. Baaspakett
              sisaldab raamatupidamise põhiteenuseid.
            </p>

            <div className="mt-6 border-l border-[#D32F2F] pl-4">
              <p className="font-inter text-[9px] uppercase tracking-[0.1em] text-[#111111]/55">
                Näide · 0–25 dokumenti
              </p>
              <p className="mt-2 font-clearface text-3xl tracking-[-0.035em] md:text-4xl">
                55,00 € <span className="font-inter text-xs">/ kuu</span>
              </p>
            </div>
          </div>

          <div>
            <div className="mb-3 grid grid-cols-[1fr_auto] gap-4 font-inter text-[9px] uppercase tracking-[0.1em] text-[#111111]/50 md:text-[10px]">
              <span>Algdokumente kuus</span>
              <span>Hind / kuu</span>
            </div>
            <PriceRows rows={monthlyPrices} />
          </div>
        </div>
      </section>

      {/* additional services */}
      <section className="px-5 pb-20 md:px-12 md:pb-28 lg:px-16">
        <div className="border-t border-[#111111]/25 pt-8 md:pt-10">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <p className="mb-4 font-inter text-[9px] uppercase tracking-[0.12em] text-[#D32F2F] md:text-[10px]">
                02 / Lisateenused
              </p>

              <h2 className="font-inter text-2xl leading-tight tracking-[-0.035em] md:text-3xl">
                Vastavalt vajadusele.
              </h2>

              <p className="mt-4 max-w-xs font-inter text-xs leading-relaxed text-[#111111]/65 md:text-sm">
                Lisateenused lepitakse kokku vastavalt ettevõtte vajadustele ja
                töömahule.
              </p>
            </div>

            <div>
              <div className="mb-3 grid grid-cols-[1fr_auto] gap-4 font-inter text-[9px] uppercase tracking-[0.1em] text-[#111111]/50 md:text-[10px]">
                <span>Teenus</span>
                <span>Hind</span>
              </div>

              {additionalPrices.map(([service, unit, price]) => (
                <div
                  key={service}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-t border-[#111111]/15 py-4"
                >
                  <div>
                    <p className="font-inter text-xs leading-relaxed text-[#111111]/80 md:text-sm">
                      {service}
                    </p>
                    <p className="mt-1 font-inter text-[10px] text-[#111111]/45">
                      {unit}
                    </p>
                  </div>
                  <span className="whitespace-nowrap font-inter text-xs tabular-nums md:text-sm">
                    {price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* accounting without monthly service */}
        <div className="mt-16 border-t border-[#111111]/25 pt-8 md:mt-20 md:pt-10">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <p className="mb-4 font-inter text-[9px] uppercase tracking-[0.12em] text-[#D32F2F] md:text-[10px]">
                Eraldi tellitav teenus
              </p>

              <h3 className="max-w-sm font-inter text-2xl leading-tight tracking-[-0.035em] md:text-3xl">
                Raamatupidamine ilma kuutasuta.
              </h3>

              <p className="mt-4 max-w-xs font-inter text-xs leading-relaxed text-[#111111]/65 md:text-sm">
                Ettevõtetele, kes ei kasuta igakuist raamatupidamisteenust.
              </p>
            </div>

            <div>
              <div className="mb-3 grid grid-cols-[1fr_auto] gap-4 font-inter text-[9px] uppercase tracking-[0.1em] text-[#111111]/50 md:text-[10px]">
                <span>Algdokumente</span>
                <span>Hind</span>
              </div>
              <PriceRows rows={occasionalPrices} />
            </div>
          </div>
        </div>
      </section>

      {/* pricing conditions */}
      <section className="px-5 pb-16 md:px-12 md:pb-24 lg:px-16">
        <div className="grid gap-5 border-t border-[#111111]/25 pt-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <p className="font-inter text-[10px] uppercase tracking-[0.1em] text-[#D32F2F]">
            Hinnastamise tingimused
          </p>

          <div className="space-y-4 font-inter text-xs leading-relaxed text-[#111111]/65 md:text-sm">
            <p>
              Hindadele lisandub käibemaks 24%. Hinnakiri ei ole lõplik ning
              konkreetne hind lepitakse kliendiga eraldi kokku.
            </p>

            <p>
              Ülekande tegemine LL Tradingu poolt maksab 0,90 € ülekande kohta.
              Arve koostamine maksab 0,90 € arve kohta.
            </p>

            <a
              href="/kontakt"
              className="group mt-3 inline-flex items-center gap-2 font-inter text-[10px] uppercase tracking-[0.1em] text-[#111111] transition-colors duration-300 hover:text-[#D32F2F]"
            >
              <span>Küsi pakkumist</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
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
            <a href="/hinnakiri" className="text-[#D32F2F]">
              Hinnakiri
            </a>
            <a href="/#contact" className="transition-colors hover:text-[#D32F2F]">
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