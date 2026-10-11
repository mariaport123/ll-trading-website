export default function Experience() {
  return (
    <section
      id="about"
      className="w-full px-6 py-16 md:px-12 lg:px-20 md:py-24"
    >
      <div className="w-full">
        {/* Section index */}
        <div className="mb-12 flex items-center gap-6 font-inter text-[10px] uppercase tracking-[0.1em] text-[#111111] md:mb-16 md:text-xs">
          <span>01 / 06</span>
          <span>MEIE KOGEMUS</span>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-6 lg:gap-8">
          {/* Shift both the line and number right */}
          <div className="relative flex min-h-[220px] flex-col justify-between pl-6 md:col-span-5 md:min-h-[300px] md:translate-x-[130px] md:pl-10 lg:translate-x-[160px]">
            <div className="absolute left-0 top-0 h-full w-px bg-[#B8B3AA]/60" />

            <div className="mt-8 md:mt-auto">
              <span className="font-clearface text-[clamp(9rem,18vw,16rem)] font-normal leading-[0.72] tracking-[-0.05em] text-[#D32F2F]">
                30
              </span>
            </div>
          </div>

          {/* Right column content */}
          <div className="flex flex-col justify-between pt-2 md:col-span-7 md:pt-0">
            <div>
              {/* Heading and years */}
              <div className="flex items-start justify-between gap-4 lg:gap-6">
                <h2 className="font-clearface text-[clamp(3rem,6vw,5.5rem)] font-normal leading-[0.88] tracking-[-0.035em] text-[#111111]">
                  AASTAT
                  <br />
                  KOGEMUST.
                </h2>

                {/* Years */}
                <div className="relative right-4 top-12 flex shrink-0 items-center gap-5 pt-2 font-inter text-xs font-normal uppercase leading-[1.6] tracking-[0.04em] md:right-6 md:top-20 md:gap-8">
                  <span className="h-[150px] w-px bg-[#B8B3AA]/80 md:h-[220px]" />

                  <div className="flex flex-col items-center gap-y-4">
                    <span className="text-[#D32F2F]">1997</span>
                    <span className="text-[#5F5C57]">TÄNASENI</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mt-10 max-w-[560px] border-l border-[#B8B3AA]/70 pl-6 font-inter text-base leading-[1.75] text-[#5F5C57] md:mt-14 md:text-lg">
                LL Trading on pakkunud raamatupidamisteenuseid Eesti ettevõtetele
                alates 1997. aastast. Meie klientide hulgas on nii väiksemaid kui
                ka suuremaid ettevõtteid ning teenindame kliente nii Pärnus kui
                ka üle Eesti.
              </p>
            </div>

            {/* Wavy accent */}
            <div className="mt-12 pl-2 md:mt-16">
              <svg
                width="130"
                height="55"
                viewBox="0 0 130 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#D32F2F]"
              >
                <path
                  d="M2 52 C2 28 5 12 18 14 C32 16 42 39 54 30 C66 21 66 3 80 8 C94 13 100 30 111 20 C120 12 123 5 126 1"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}