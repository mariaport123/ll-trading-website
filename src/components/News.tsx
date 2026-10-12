
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { news } from "@/data/news";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function News() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-news-intro]",
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-news-intro]",
              start: "top 85%",
              once: true,
            },
          },
        );

        const articles = gsap.utils.toArray<HTMLElement>(
          "[data-news-article]",
        );

        articles.forEach((article, index) => {
          gsap.fromTo(
            article,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.05,
              ease: "power3.out",
              scrollTrigger: {
                trigger: article,
                start: "top 90%",
                once: true,
              },
            },
          );
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="news"
      className="px-6 py-24 sm:px-8 md:px-12 md:py-32 lg:px-16"
    >
      <div
        data-news-intro
        className="mb-16 flex items-center gap-6 font-inter text-[10px] uppercase tracking-[0.1em] md:text-xs"
      >
        <span>03 / 06</span>
        <span>Uudised</span>
      </div>

      <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
        <div data-news-intro>
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
              data-news-article
              className="group border-t border-[#111111]/20 py-7 md:py-9"
            >
              <div className="grid gap-5 md:grid-cols-[70px_1fr_auto] md:items-start md:gap-8">
                <span className="font-inter text-xs text-[#D32F2F] transition-transform duration-300 group-hover:translate-x-1">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-inter text-[10px] uppercase tracking-[0.1em] text-[#6D6A65]">
                    <span>{item.date}</span>

                    {item.effectiveDate && (
                      <>
                        <span className="text-[#D32F2F]">/</span>
                        <span>{item.effectiveDate}</span>
                      </>
                    )}
                  </div>

                  <h3 className="font-inter text-[clamp(1.8rem,3vw,3.2rem)] leading-[0.95] transition-colors duration-300 group-hover:text-[#D32F2F]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[500px] font-inter text-sm leading-[1.5] text-[#5F5C57]">
                    {item.excerpt}
                  </p>
                </div>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Loe lähemalt: ${item.title}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B8B3AA] font-inter text-sm transition-[border-color,color,transform] duration-300 hover:-translate-y-1 hover:border-[#D32F2F] hover:text-[#D32F2F] md:mt-1"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
