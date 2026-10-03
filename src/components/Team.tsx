const team = [
  {
    name: "Irene Port",
    role: "Juhataja / pearaamatupidaja",
  },
  {
    name: "Ave Kartau",
    role: "Raamatupidaja",
  },
  {
    name: "Leeni Tõll",
    role: "Raamatupidaja",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="border-t border-[#111111]/15 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mb-16 flex items-center justify-between font-inter text-[10px] uppercase tracking-[0.1em] md:text-xs">
        <span>04 / 06</span>
        <span>Meie inimesed</span>
      </div>

      <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <div>
          <h2 className="font-clearface text-[clamp(3.5rem,6vw,6.5rem)] font-normal leading-[0.88] tracking-[-0.02em]">
            NUMBRITE
            <br />
            TAGA ON
            <br />
            INIMESED.
          </h2>

          <p className="mt-8 max-w-[360px] font-inter text-sm leading-[1.6] text-[#5F5C57]">
            Oleme väike meeskond, kuid meie kogemus ulatub aastakümnete
            taha. Meie kliendid suhtlevad otse inimestega, kes nende
            raamatupidamisega tegelevad.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {team.map((person) => (
            <div key={person.name}>
              <div className="mb-4 aspect-[0.8] bg-[#D9D4CC]" />

              <h3 className="font-clearface text-base uppercase md:text-lg">
                {person.name}
              </h3>

              <p className="mt-1 font-inter text-[9px] uppercase leading-[1.4] tracking-[0.08em] text-[#5F5C57]">
                {person.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}