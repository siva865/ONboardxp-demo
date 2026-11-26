
import { FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-[#080808] text-white border-t border-white/10 px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-10 sm:py-12">

      {/* TOP FOOTER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-7">

        {/* BRAND */}
        <a
          href="#top"
          className="group flex items-center gap-3 w-fit"
        >
          <span className="flex items-center justify-center w-10 h-10 border border-[#c5a46d] text-xl font-semibold text-white tracking-tight">
            O<span className="text-[#c5a46d]">X</span>
          </span>

          <span className="text-lg sm:text-xl font-semibold tracking-[0.12em] text-white">
            ONBOARD<span className="text-[#c5a46d]">XP</span>
          </span>
        </a>

        {/* TAGLINE */}
        <p className="text-sm sm:text-base text-white/45 tracking-wide">
          Beyond travel. Beyond the expected.
        </p>

        {/* SOCIAL LINKS */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/company/onboard-xp/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-white/60 hover:text-[#080808] hover:bg-[#c5a46d] hover:border-[#c5a46d] transition-all duration-300"
          >
            <FiLinkedin className="text-lg" />
          </a>

          <a
            href="mailto:contact@onboardxp.com"
            aria-label="Email"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-white/60 hover:text-[#080808] hover:bg-[#c5a46d] hover:border-[#c5a46d] transition-all duration-300"
          >
            <FiMail className="text-lg" />
          </a>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="mt-10 sm:mt-12 pt-6 border-t border-white/10">
        <small className="block text-xs sm:text-sm leading-relaxed text-white/35">
          © {new Date().getFullYear()} Onboard XP LLC.
          Concept website for demonstration purposes.
        </small>
      </div>

    </footer>
  );
}
