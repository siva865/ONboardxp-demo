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
    <div className="marquee">
      <motion.div
        className="marquee-track"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {words.map((word, index) => (
          <span key={index}>
            {word}<i>✳</i>
          </span>
        ))}
      </motion.div>
    </div>
  );
}