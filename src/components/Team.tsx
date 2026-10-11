const team = [
  {
    name: "Irene Port",
    role: "Juhataja / pearaamatupidaja",
    image: "/images/team/irene.jpg",
    position: "md:mt-0",
    imagePosition: "center 45%",
  },
  {
    name: "Ave Kartau",
    role: "Raamatupidaja",
    image: "/images/team/ave.jpg",
    position: "md:mt-20",
    imagePosition: "center 35%",
  },
  {
    name: "Leeni Tõll",
    role: "Raamatupidaja",
    image: "/images/team/leeni.jpg",
    position: "md:mt-0",
    imagePosition: "center 35%",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="px-6 py-24 sm:px-8 md:px-12 md:py-32 lg:px-16"
    >
      <div className="mb-12 flex items-center gap-6 font-inter text-[10px] uppercase tracking-[0.1em] md:mb-10 md:text-xs">
        <span>04 / 06</span>
        <span>Meie inimesed</span>
      </div>

      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:gap-20">
        <div className="md:pt-8">
          <h2 className="font-clearface text-[clamp(3.2rem,5.5vw,6rem)] font-normal leading-[0.88] tracking-[-0.035em]">
            NUMBRITE
            <br />
            TAGA ON
            <br />
            INIMESED<span className="text-[#D32F2F]">.</span>
          </h2>

          <p className="mt-8 max-w-[360px] font-inter text-sm leading-[1.6] text-[#5F5C57] md:mt-10 md:text-base">
            Oleme väike meeskond, kuid meie kogemus ulatub aastakümnete
            taha. Meie kliendid suhtlevad otse inimestega, kes nende
            raamatupidamisega tegelevad.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4 md:gap-5 lg:gap-6">
          {team.map((person) => (
            <article
              key={person.name}
              className={person.position}
            >
              <div className="team-portrait relative mb-4 aspect-[0.8] overflow-hidden bg-[#D9D4CC]">
                <img
                  src={person.image}
                  alt={person.name}
                  style={{ objectPosition: person.imagePosition }}
                  className="team-portrait-image h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="team-portrait-grain pointer-events-none absolute inset-0"
                />
              </div>

              <h3 className="font-clearface text-base uppercase md:text-lg">
                {person.name}
              </h3>

              <p className="mt-1 font-inter text-[9px] uppercase leading-[1.5] tracking-[0.08em] text-[#5F5C57]">
                {person.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}