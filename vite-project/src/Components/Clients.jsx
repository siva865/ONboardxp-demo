
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const clientNames = [
  "EgyptAir",
  "Air Serbia",
  "ETHIOPIAN",
  "Kenya Airways",
  "OMAN AIR",
  "MEA",
];

export default function Clients() {
  return (
    <section className="w-full overflow-hidden bg-[#080808] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-16 lg:py-32">

      <div className="mx-auto max-w-[1400px]">

        {/* SECTION LABEL */}
        <SectionLabel number="07">
          A GLOBAL PERSPECTIVE
        </SectionLabel>

        {/* HEADING */}
        <Reveal>
          <h2 className="mt-7 text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Built around people.
            <br />
            <em className="font-light text-[#c5a46d]">
              Made for the world.
            </em>
          </h2>
        </Reveal>

        {/* DESCRIPTION */}
        <p className="mt-7 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
          We work with travel and hospitality organisations across markets,
          bringing a thoughtful approach to every partnership.
        </p>

        {/* CLIENT LOGOS */}
        <div className="mt-14 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3 lg:mt-20 lg:grid-cols-6">

          {clientNames.map((name, index) => (
            <Reveal
              key={name}
              delay={index * 0.07}
              className="h-full"
            >
              <div className="group flex h-full min-h-[100px] items-center justify-center border-b border-r border-white/10 px-3 py-7 transition-colors duration-300 hover:bg-white/[0.03] sm:min-h-[120px] sm:px-5 lg:min-h-[140px]">

                <span className="text-center text-sm font-semibold tracking-wider text-white/40 transition-all duration-300 group-hover:text-[#c5a46d] sm:text-base lg:text-sm xl:text-base">
                  {name}
                </span>

              </div>
            </Reveal>
          ))}

        </div>

        {/* DISCLAIMER */}
        <small className="mt-7 block max-w-2xl text-[10px] leading-6 text-white/35 sm:text-xs">
          Selected names shown for demonstration. Confirm current client
          relationships and permissions before publishing.
        </small>

      </div>
    </section>
  );
}
