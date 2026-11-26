import { FiArrowUpRight } from "react-icons/fi";
import { industries } from "../data/Content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Industries() {
  return (
    <section
      className="w-full bg-[#080808] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-16 lg:py-32"
      id="industries"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* SECTION HEADING */}
        <div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <SectionLabel number="02">
              WHERE WE WORK
            </SectionLabel>

            <Reveal>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Different journeys.
                <br />
                <em className="font-light text-[#c5a46d]">
                  One human focus.
                </em>
              </h2>
            </Reveal>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/55 sm:text-base sm:leading-8 md:pb-2">
            From the first welcome to the final detail, we help travel and
            hospitality brands create experiences that stay with people.
          </p>
        </div>

        {/* INDUSTRY GRID */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

          {industries.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.08}
              className={`group min-w-0 ${
                index === 0
                  ? "sm:row-span-2"
                  : ""
              }`}
            >
              {/* IMAGE CARD */}
              <a
                href="#contact"
                className={`relative block w-full overflow-hidden bg-[#151515] ${
                  index === 0
                    ? "aspect-[4/4.8] sm:aspect-auto sm:h-full sm:min-h-[500px] lg:min-h-[620px]"
                    : "aspect-[4/3]"
                }`}
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20 transition-all duration-500 group-hover:from-black/90" />

                {/* HOVER ZOOM */}
                <div className="absolute inset-0 bg-black/10 transition-transform duration-700 group-hover:scale-105" />

                {/* NUMBER */}
                <span className="absolute left-5 top-5 z-10 text-xs tracking-[0.2em] text-white/80 sm:left-7 sm:top-7">
                  {item.n}
                </span>

                {/* TAG */}
                <span className="absolute bottom-5 left-5 z-10 border border-white/30 px-3 py-2 text-[9px] font-medium tracking-[0.2em] text-white backdrop-blur-sm sm:bottom-7 sm:left-7">
                  {item.tag}
                </span>

                {/* ARROW */}
                <span className="absolute bottom-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-xl text-white transition-all duration-300 group-hover:border-[#c5a46d] group-hover:bg-[#c5a46d] group-hover:text-black sm:bottom-7 sm:right-7 sm:h-12 sm:w-12">
                  <FiArrowUpRight />
                </span>
              </a>

              {/* CONTENT */}
              <div className="pt-5 sm:pt-6">
                <h3 className="text-xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-[#c5a46d] sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-7 text-white/50">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}
