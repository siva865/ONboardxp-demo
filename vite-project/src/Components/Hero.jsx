
import { motion } from "framer-motion";
import { FiArrowUpRight, FiPlay } from "react-icons/fi";

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#080808] px-5 pb-16 pt-32 text-white sm:px-8 sm:pt-36 lg:px-16 lg:pt-32"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[350px] w-[350px] rounded-full bg-[#c5a46d]/10 blur-[120px] sm:h-[500px] sm:w-[500px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-12">

        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#c5a46d]" />
            <span className="text-[10px] font-medium tracking-[0.3em] text-[#c5a46d] sm:text-xs">
              CREATIVE DIGITAL EXPERIENCES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl"
          >
            Transforming
            <br />

            <span className="font-light italic text-[#c5a46d]">
              Ideas
            </span>{" "}
            Into
            <br />

            Digital Impact.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-7 max-w-lg text-sm leading-7 text-white/55 sm:text-base sm:leading-8"
          >
            We build meaningful digital experiences that connect brands
            with people, turn ambitious ideas into reality, and create
            lasting impact in a constantly evolving world.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-9 flex w-full flex-col gap-4 min-[400px]:flex-row sm:w-auto"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-4 bg-[#c5a46d] px-7 py-4 text-xs font-semibold tracking-wider text-black transition-all duration-300 hover:bg-white"
            >
              START A PROJECT
              <FiArrowUpRight className="text-lg" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-3 border border-white/20 px-7 py-4 text-xs font-semibold tracking-wider text-white transition-all duration-300 hover:border-[#c5a46d] hover:text-[#c5a46d]"
            >
              EXPLORE MORE
              <FiPlay />
            </a>
          </motion.div>

          {/* BOTTOM INFO */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white">01</h3>
              <p className="mt-1 text-[9px] tracking-[0.2em] text-white/40">
                CREATIVE THINKING
              </p>
            </div>

            <div className="h-9 w-px bg-white/10" />

            <div>
              <h3 className="text-2xl font-semibold text-white">02</h3>
              <p className="mt-1 text-[9px] tracking-[0.2em] text-white/40">
                DIGITAL STRATEGY
              </p>
            </div>

            <div className="h-9 w-px bg-white/10" />

            <div>
              <h3 className="text-2xl font-semibold text-white">03</h3>
              <p className="mt-1 text-[9px] tracking-[0.2em] text-white/40">
                BRAND EXPERIENCE
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto w-full max-w-[600px] lg:ml-auto"
        >
          <div className="relative aspect-[4/4.5] overflow-hidden border border-white/10 bg-[#121212] sm:aspect-[5/4] lg:aspect-[4/5]">

            {/* Replace with your own image */}
            <img
              src="/images/hero-image.jpg"
              alt="Creative digital experience"
              className="h-full w-full object-cover opacity-80 transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-9 sm:left-9 sm:right-9">
              <p className="text-[10px] tracking-[0.25em] text-[#c5a46d]">
                BEYOND EXPECTATIONS
              </p>

              <h2 className="mt-3 text-2xl font-medium leading-tight sm:text-3xl">
                Design the future.
                <br />
                Build what matters.
              </h2>
            </div>
          </div>

          {/* FLOATING LABEL */}
          <div className="absolute -left-3 top-8 border border-white/10 bg-[#151515] px-4 py-3 shadow-2xl sm:-left-7 sm:px-6 sm:py-4">
            <p className="text-[9px] tracking-[0.2em] text-white/40">
              OUR APPROACH
            </p>
            <p className="mt-1 text-xs font-medium text-[#c5a46d] sm:text-sm">
              THINK · CREATE · IMPACT
            </p>
          </div>
        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 sm:flex">
        <span className="h-8 w-px bg-[#c5a46d]" />
        <span className="text-[9px] tracking-[0.25em] text-white/40">
          SCROLL TO EXPLORE
        </span>
      </div>
    </section>
  );
}

export default Hero;
