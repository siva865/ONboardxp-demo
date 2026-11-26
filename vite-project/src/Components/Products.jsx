
import { FiArrowUpRight } from "react-icons/fi";
import { productCards } from "../data/Content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Products() {
  return (
    <section className="w-full bg-[#080808] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-16 lg:py-32">

      <div className="mx-auto max-w-[1400px]">

        {/* SECTION HEADING */}
        <div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <SectionLabel number="05">
              THOUGHTFUL BY DESIGN
            </SectionLabel>

            <Reveal>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Details that shape
                <br />
                <em className="font-light text-[#c5a46d]">
                  the journey.
                </em>
              </h2>
            </Reveal>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/55 sm:text-base sm:leading-8 md:pb-2">
            Objects and touchpoints are never just objects. They are an
            opportunity to express care, identity and intention.
          </p>

        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-8 lg:gap-y-14">

          {productCards.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.07}
              className="group min-w-0"
            >

              {/* PRODUCT IMAGE */}
              <a
                href="#contact"
                className="relative block aspect-[4/4.5] overflow-hidden bg-[#151515]"
              >

                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

                {/* NUMBER */}
                <span className="absolute left-5 top-5 text-xs tracking-[0.2em] text-white/80 sm:left-6 sm:top-6">
                  {item.num}
                </span>

                {/* ARROW */}
                <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-xl text-white transition-all duration-300 group-hover:border-[#c5a46d] group-hover:bg-[#c5a46d] group-hover:text-black sm:bottom-6 sm:right-6 sm:h-12 sm:w-12">
                  <FiArrowUpRight />
                </span>

              </a>

              {/* PRODUCT INFO */}
              <div className="pt-5 sm:pt-6">

                <h3 className="text-lg font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-[#c5a46d] sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-6 tracking-wide text-white/45 sm:text-sm">
                  {item.label}
                </p>

              </div>

            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}
