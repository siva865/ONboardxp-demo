import { FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer section-pad">
      <a href="#top" className="brand">
        <span className="brand-mark">
          O<span>X</span>
        </span>

        <span className="brand-name">
          ONBOARD<span>XP</span>
        </span>
      </a>

      <p>Beyond travel. Beyond the expected.</p>

      <div>
        <a
          href="https://www.linkedin.com/company/onboard-xp/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FiLinkedin />
        </a>

        <a href="mailto:contact@onboardxp.com" aria-label="Email">
          <FiMail />
        </a>
      </div>

      <small>
        © {new Date().getFullYear()} Onboard XP LLC.
        Concept website for demonstration purposes.
      </small>
    </footer>
  );
}