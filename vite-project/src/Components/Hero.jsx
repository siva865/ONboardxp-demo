import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { IMG } from "../data/content";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-image" style={{ backgroundImage: `url(${IMG.hero})` }} />
      <div className="hero-shade" />

      <div className="hero-content">
        <motion.div
          className="eyebrow light"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <span className="eyebrow-dot" />
          A CREATIVE PARTNER FOR PREMIUM TRAVEL
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          Beyond<br /><em>travel.</em>
        </motion.h1>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>
            We shape the details that turn journeys
            <br className="desktop-only" /> into experiences worth remembering.
          </p>

          <a href="#expertise" className="round-link">
            <span>Discover<br />what we do</span>
            <FiArrowUpRight />
          </a>
        </motion.div>
      </div>

      <div className="hero-meta">
        <span>LOS ANGELES · WORKING WORLDWIDE</span>
        <span>01 — 04 / EXPERIENCE</span>
      </div>

      <div className="hero-scroll"><span /> SCROLL TO EXPLORE</div>
    </section>
  );
}