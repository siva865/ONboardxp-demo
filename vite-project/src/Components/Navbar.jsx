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
      <header className="site-header">
        <a href="#top" className="brand">
          <span className="brand-mark">
            O<span>X</span>
          </span>

          <span className="brand-name">
            ONBOARD<span>XP</span>
          </span>
        </a>

        <nav className="desktop-nav">
          {navItems.map(([name, href]) => (
            <a key={name} href={href}>
              {name}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Start a conversation <FiArrowUpRight />
        </a>

        <button
          className="menu-trigger"
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
        >
          <FiMenu />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-overlay"
            initial={{ clipPath: "circle(0% at 94% 4%)" }}
            animate={{ clipPath: "circle(150% at 94% 4%)" }}
            exit={{ clipPath: "circle(0% at 94% 4%)" }}
            transition={{
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <div className="mobile-menu-top">
              <a
                href="#top"
                className="brand"
                onClick={() => setOpen(false)}
              >
                <span className="brand-mark">
                  O<span>X</span>
                </span>

                <span className="brand-name">
                  ONBOARD<span>XP</span>
                </span>
              </a>

              <button
                className="close-menu"
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
              >
                <FiX />
              </button>
            </div>

            <nav className="mobile-links">
              {navItems.map(([name, href], i) => (
                <motion.a
                  key={name}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 35 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18 + i * 0.08 }}
                >
                  <span>0{i + 1}</span>
                  {name}
                  <FiArrowUpRight />
                </motion.a>
              ))}
            </nav>

            <div className="mobile-menu-bottom">
              <span>LOS ANGELES · WORKING WORLDWIDE</span>

              <a href="mailto:contact@onboardxp.com">
                LET'S TALK <FiArrowUpRight />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;