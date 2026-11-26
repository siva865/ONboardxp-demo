
import { FiArrowUpRight } from "react-icons/fi";
import { capabilities } from "../data/Content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Expertise() {
  return (
    <section
      className="w-full bg-[#080808] text-white px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden"
      id="expertise"
    >
      {/* SECTION HEADING */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16 mb-14 sm:mb-16 md:mb-20">
        <div className="max-w-3xl">
          <SectionLabel number="04">
            WHAT WE BRING
          </SectionLabel>

          <Reveal>
            <h2 className="mt-8 sm:mt-10 text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.98] tracking-[-0.06em] font-medium">
              From first thought
              <br />
              to{" "}
              <em className="font-normal text-[#c5a46d]">
                final touch.
              </em>
            </h2>
          </Reveal>
        </div>

        <p className="max-w-md text-sm sm:text-base md:text-lg leading-relaxed text-white/50 lg:pb-3">
          A connected process, shaped around your ambition. We bring the
          thinking, creativity and delivery expertise to move an idea forward.
        </p>
      </div>

      {/* CAPABILITY LIST */}
      <div className="w-full border-t border-white/15">
        {capabilities.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.title} delay={index * 0.04}>
              <div
                className="
                  group relative w-full
                  grid grid-cols-[36px_42px_1fr_24px]
                  sm:grid-cols-[45px_50px_1fr_28px]
                  lg:grid-cols-[55px_60px_minmax(180px,0.9fr)_minmax(220px,1.2fr)_30px]
                  items-center gap-x-3 sm:gap-x-5 lg:gap-x-7
                  gap-y-3
                  py-6 sm:py-7 lg:py-9
                  border-b border-white/15
                  transition-colors duration-300
                  hover:bg-white/[0.025]
                "
              >
                {/* NUMBER */}
                <span className="text-xs sm:text-sm tracking-wider text-[#c5a46d]">
                  0{index + 1}
                </span>

                {/* ICON */}
                <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-white/15 text-[#c5a46d] text-lg sm:text-xl group-hover:bg-[#c5a46d] group-hover:text-[#080808] group-hover:border-[#c5a46d] transition-all duration-300">
                  <Icon />
                </div>

                {/* TITLE */}
                <h3 className="min-w-0 text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-tight text-white group-hover:text-[#c5a46d] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="col-start-3 col-span-2 lg:col-start-4 lg:col-span-1 text-xs sm:text-sm leading-relaxed text-white/45 max-w-lg lg:justify-self-start">
                  {item.text}
                </p>

                {/* ARROW */}
                <FiArrowUpRight className="col-start-4 row-start-1 lg:col-start-5 lg:row-start-1 justify-self-end text-lg sm:text-xl text-white/40 group-hover:text-[#c5a46d] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
