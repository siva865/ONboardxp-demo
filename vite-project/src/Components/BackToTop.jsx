
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          aria-label="Back to top"
          className="
            fixed bottom-5 right-5 z-[100]
            sm:bottom-7 sm:right-7
            md:bottom-8 md:right-8
            w-11 h-11
            sm:w-12 sm:h-12
            flex items-center justify-center
            rounded-full
            bg-[#c5a46d] text-[#080808]
            shadow-lg shadow-black/30
            hover:bg-white
            hover:-translate-y-1
            active:scale-95
            transition-all duration-300
            focus:outline-none focus-visible:ring-2
            focus-visible:ring-[#c5a46d]
            focus-visible:ring-offset-2
            focus-visible:ring-offset-[#080808]
          "
        >
          <FiArrowUp className="text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
