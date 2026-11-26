import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { navItems } from "../data/Content";

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-[#080808]/90 px-5 py-5 backdrop-blur-xl sm:px-8 lg:px-12 lg:py-6">

        {/* BRAND */}
        <a
          href="#top"
          className="relative z-50 flex shrink-0 items-center gap-3"
        >
          <span className="text-2xl font-bold tracking-tighter text-white sm:text-3xl">
            O<span className="text-[#c5a46d]">X</span>
          </span>

          <span className="text-sm font-semibold tracking-[0.16em] text-white sm:text-base">
            ONBOARD<span className="text-[#c5a46d]">XP</span>
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-9">
          {navItems.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className="group relative py-2 text-xs font-medium tracking-wider text-white/70 transition-colors duration-300 hover:text-white xl:text-sm"
            >
              {name}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#c5a46d] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-3 border border-white/20 px-5 py-3 text-xs font-medium tracking-wide text-white transition-all duration-300 hover:border-[#c5a46d] hover:bg-[#c5a46d] hover:text-black xl:flex"
        >
          Start a conversation
          <FiArrowUpRight className="text-base" />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="relative z-50 flex h-11 w-11 items-center justify-center border border-white/20 text-2xl text-white transition-colors hover:border-[#c5a46d] lg:hidden"
        >
          <FiMenu />
        </button>
      </header>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex min-h-screen flex-col bg-[#080808] px-6 pb-8 pt-6 sm:px-10"
            initial={{
              clipPath: "circle(0% at 94% 4%)",
            }}
            animate={{
              clipPath: "circle(150% at 94% 4%)",
            }}
            exit={{
              clipPath: "circle(0% at 94% 4%)",
            }}
            transition={{
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {/* MOBILE TOP */}
            <div className="flex items-center justify-between">
              <a
                href="#top"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <span className="text-2xl font-bold tracking-tighter text-white">
                  O<span className="text-[#c5a46d]">X</span>
                </span>

                <span className="text-sm font-semibold tracking-[0.16em] text-white">
                  ONBOARD<span className="text-[#c5a46d]">XP</span>
                </span>
              </a>

              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center border border-white/20 text-2xl text-white transition-colors hover:border-[#c5a46d] hover:text-[#c5a46d]"
              >
                <FiX />
              </button>
            </div>

            {/* MOBILE LINKS */}
            <nav className="my-auto flex flex-col justify-center gap-2 py-12">
              {navItems.map(([name, href], i) => (
                <motion.a
                  key={name}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 35 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18 + i * 0.08 }}
                  className="group flex items-center gap-4 border-b border-white/10 py-4 text-2xl font-medium text-white transition-colors duration-300 hover:text-[#c5a46d] sm:text-3xl"
                >
                  <span className="text-xs tracking-widest text-[#c5a46d]">
                    0{i + 1}
                  </span>

                  <span className="flex-1">{name}</span>

                  <FiArrowUpRight className="text-xl opacity-50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
                </motion.a>
              ))}
            </nav>

            {/* MOBILE BOTTOM */}
            <div className="flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[10px] tracking-[0.2em] text-white/50 sm:text-xs">
                LOS ANGELES · WORKING WORLDWIDE
              </span>

              <a
                href="mailto:contact@onboardxp.com"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-sm font-semibold tracking-widest text-[#c5a46d] transition-colors hover:text-white"
              >
                LET'S TALK
                <FiArrowUpRight />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
