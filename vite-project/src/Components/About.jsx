
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section
      className="w-full bg-[#080808] text-white px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-20 sm:py-24 md:py-28 lg:py-36 overflow-hidden"
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 sm:gap-14 lg:gap-20">

        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start">
          <SectionLabel number="01">
            WHO WE ARE
          </SectionLabel>

          <p className="mt-8 sm:mt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug tracking-tight text-white/60">
            More than a product partner.
            <br />
            <em className="text-[#c5a46d] font-normal">
              A partner in experience.
            </em>
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full max-w-3xl">
          <Reveal>
            <h2 className="text-[clamp(2.2rem,5.5vw,5rem)] leading-[1.05] tracking-[-0.055em] font-medium">
              Every journey is made of moments.
              <span className="text-[#c5a46d]">
                {" "}We make them matter.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 sm:mt-9 text-sm sm:text-base md:text-lg leading-[1.8] text-white/50 max-w-2xl">
              Onboard XP is a creative and strategic partner for premium travel
              experiences. We help airlines, hotels, lounges, rail operators,
              cruise lines and mobility brands create more thoughtful,
              memorable and human-centred journeys.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href="#approach"
              className="group inline-flex items-center gap-3 mt-8 sm:mt-10 pb-2 border-b border-[#c5a46d]/50 text-sm sm:text-base text-white hover:text-[#c5a46d] transition-colors duration-300"
            >
              Get to know our approach

              <span className="text-[#c5a46d] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
