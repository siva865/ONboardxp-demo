
import { FiArrowUpRight } from "react-icons/fi";
import { IMG } from "../data/Content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const steps = [
  "Listen & understand",
  "Explore & define",
  "Design & develop",
  "Deliver & refine",
];

export default function Approach() {
  return (
    <section
      className="w-full overflow-hidden bg-[#080808] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-16 lg:py-32"
      id="approach"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* LEFT IMAGE */}
        <Reveal className="relative w-full">
          <div className="group relative aspect-[4/4.5] w-full overflow-hidden bg-[#151515] sm:aspect-[5/4] lg:aspect-[4/5]">

            <img
              src={IMG.studio}
              alt="Creative studio workspace"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

            <span className="absolute bottom-6 left-6 text-[9px] font-medium tracking-[0.25em] text-white sm:bottom-8 sm:left-8 sm:text-xs">
              IDEAS INTO EXPERIENCES
            </span>
          </div>

          {/* IMAGE DECORATION */}
          <div className="absolute -bottom-3 -right-3 -z-0 h-24 w-24 border-b border-r border-[#c5a46d]/60 sm:-bottom-5 sm:-right-5 sm:h-36 sm:w-36" />
        </Reveal>

        {/* RIGHT CONTENT */}
        <div className="flex min-w-0 flex-col">

          <SectionLabel number="06">
            HOW WE WORK
          </SectionLabel>

          <Reveal>
            <h2 className="mt-7 text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              Good ideas deserve
              <br />
              <em className="font-light text-[#c5a46d]">
                great execution.
              </em>
            </h2>
          </Reveal>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            We bring strategy, design and delivery together — creating a clear
            path from an early conversation to a considered, tangible result.
          </p>

          {/* PROCESS LIST */}
          <div className="mt-9 flex flex-col border-t border-white/10 sm:mt-12">

            {steps.map((step, index) => (
              <div
                key={step}
                className="group flex min-w-0 items-center gap-4 border-b border-white/10 py-5 transition-colors duration-300 hover:border-[#c5a46d]/50 sm:gap-6 sm:py-6"
              >
                <span className="shrink-0 text-xs tracking-widest text-[#c5a46d]">
                  0{index + 1}
                </span>

                <span className="min-w-0 flex-1 text-base font-medium text-white/80 transition-colors duration-300 group-hover:text-white sm:text-lg">
                  {step}
                </span>

                <FiArrowUpRight className="shrink-0 text-lg text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c5a46d] sm:text-xl" />
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
