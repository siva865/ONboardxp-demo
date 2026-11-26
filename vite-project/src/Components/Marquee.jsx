
import { motion } from "framer-motion";

export default function Marquee({ reverse = false }) {
  const words = [
    "Passenger experience",
    "Thoughtful design",
    "Human connection",
    "Beyond travel",
    "Passenger experience",
    "Thoughtful design",
    "Human connection",
    "Beyond travel",
  ];

  return (
    <div className="w-full overflow-hidden border-y border-white/10 bg-[#080808] py-5 sm:py-6 md:py-8">

      <motion.div
        className="flex w-max items-center"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...words, ...words].map((word, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center gap-5 px-5 sm:gap-8 sm:px-8 md:gap-12 md:px-12"
          >
            <span className="whitespace-nowrap text-sm font-medium tracking-wide text-white/70 sm:text-base md:text-lg lg:text-xl">
              {word}
            </span>

            <span className="text-lg text-[#c5a46d] sm:text-xl md:text-2xl">
              ✳
            </span>
          </div>
        ))}
      </motion.div>

    </div>
  );
}
