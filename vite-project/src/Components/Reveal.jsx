
import { motion, useReducedMotion } from "framer-motion";

function Reveal({
  children,
  delay = 0,
  className = "",
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`w-full min-w-0 ${className}`}
      initial={
        reduce
          ? false
          : {
              opacity: 0,
              y: 26,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.16,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 0.8, 0.22, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
