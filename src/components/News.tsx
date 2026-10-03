import { news } from "@/data/news";

export default function News() {
  return (
    <section
      id="news"
      className="border-t border-[#111111]/15 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mb-16 flex items-center justify-between font-inter text-[10px] uppercase tracking-[0.1em] md:text-xs">
        <span>03 / 06</span>
        <span>Uudised</span>
      </div>

      <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
        <div>
          <h2 className="font-clearface text-[clamp(3.5rem,6vw,6.5rem)] font-normal leading-[0.9] tracking-[-0.02em]">
            OLULINE
            <br />
            TEADA.
          </h2>

          <p className="mt-8 max-w-[350px] font-inter text-sm leading-[1.6] text-[#5F5C57]">
            Jagame siin olulisi seadusemuudatusi, maksuteemalisi uudiseid
            ja muud infot, mis võiks ettevõtjale kasulik olla.
          </p>
        </div>

        <div>
          {news.map((item, index) => (
            <article
              key={`${item.date}-${item.title}`}
              className="border-t border-[#111111]/20 py-7 md:py-9"
            >
              <div className="grid gap-5 md:grid-cols-[70px_1fr_auto] md:items-start md:gap-8">
                <span className="font-inter text-xs text-[#D32F2F]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="mb-3 font-inter text-[10px] uppercase tracking-[0.1em] text-[#6D6A65]">
                    {item.date}
                  </p>

                  <h3 className="font-clearface text-[clamp(1.8rem,3vw,3.2rem)] leading-[0.95]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[500px] font-inter text-sm leading-[1.5] text-[#5F5C57]">
                    {item.excerpt}
                  </p>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B8B3AA] font-inter text-sm">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}