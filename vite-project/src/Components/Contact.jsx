
import { useState } from "react";
import {
  FiArrowUpRight,
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
} from "react-icons/fi";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const updateField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      "Project enquiry from " + form.name
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    );

    window.location.href =
      `mailto:contact@onboardxp.com?subject=${subject}&body=${body}`;

    setSent(true);
  };

  return (
    <section
      className="w-full overflow-hidden bg-[#080808] text-white"
      id="contact"
    >
      {/* TOP SECTION */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16">
        <SectionLabel number="08">
          LET'S MAKE IT MATTER
        </SectionLabel>

        <Reveal>
          <h2 className="mt-8 sm:mt-10 md:mt-12 max-w-5xl text-[clamp(2.8rem,8vw,7.5rem)] leading-[0.95] tracking-[-0.06em] font-medium">
            Have a journey
            <br />
            in mind?{" "}
            <em className="font-normal text-[#c5a46d]">
              Let's talk.
            </em>
          </h2>
        </Reveal>

        <p className="mt-6 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed text-white/50">
          Tell us what you're looking to create. We'd love to hear about it.
        </p>
      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 pb-20 sm:pb-24 md:pb-28 lg:pb-32">

        {/* CONTACT DETAILS */}
        <div className="flex flex-col gap-6 sm:gap-8">
          <a
            href="mailto:contact@onboardxp.com"
            className="group flex items-center gap-4 text-sm sm:text-base text-white/65 hover:text-[#c5a46d] transition-colors duration-300 break-all"
          >
            <FiMail className="shrink-0 text-[#c5a46d] text-lg" />
            <span>contact@onboardxp.com</span>
          </a>

          <a
            href="tel:+13109067396"
            className="group flex items-center gap-4 text-sm sm:text-base text-white/65 hover:text-[#c5a46d] transition-colors duration-300"
          >
            <FiPhone className="shrink-0 text-[#c5a46d] text-lg" />
            <span>+1 (310) 906-7396</span>
          </a>

          <span className="flex items-center gap-4 text-sm sm:text-base text-white/65">
            <FiMapPin className="shrink-0 text-[#c5a46d] text-lg" />
            <span>Los Angeles, California, USA</span>
          </span>

          <a
            href="https://www.linkedin.com/company/onboard-xp/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 text-sm sm:text-base text-white/65 hover:text-[#c5a46d] transition-colors duration-300"
          >
            <FiLinkedin className="shrink-0 text-[#c5a46d] text-lg" />
            <span>LinkedIn</span>
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* CONTACT FORM */}
        <form
          className="w-full flex flex-col gap-7 sm:gap-8"
          onSubmit={submit}
        >
          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-6">
            <label className="flex flex-col gap-3 text-xs sm:text-sm text-white/55">
              Your name

              <input
                required
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder="Name"
                className="w-full min-w-0 bg-transparent border-b border-white/20 py-4 text-sm sm:text-base text-white placeholder:text-white/25 outline-none focus:border-[#c5a46d] transition-colors duration-300"
              />
            </label>

            <label className="flex flex-col gap-3 text-xs sm:text-sm text-white/55">
              Email address

              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={updateField}
                placeholder="you@company.com"
                className="w-full min-w-0 bg-transparent border-b border-white/20 py-4 text-sm sm:text-base text-white placeholder:text-white/25 outline-none focus:border-[#c5a46d] transition-colors duration-300"
              />
            </label>
          </div>

          {/* COMPANY */}
          <label className="flex flex-col gap-3 text-xs sm:text-sm text-white/55">
            Company

            <input
              name="company"
              value={form.company}
              onChange={updateField}
              placeholder="Company name"
              className="w-full min-w-0 bg-transparent border-b border-white/20 py-4 text-sm sm:text-base text-white placeholder:text-white/25 outline-none focus:border-[#c5a46d] transition-colors duration-300"
            />
          </label>

          {/* MESSAGE */}
          <label className="flex flex-col gap-3 text-xs sm:text-sm text-white/55">
            Tell us a little about your project

            <textarea
              required
              rows="3"
              name="message"
              value={form.message}
              onChange={updateField}
              placeholder="What are you looking to create?"
              className="w-full min-w-0 resize-y bg-transparent border-b border-white/20 py-4 text-sm sm:text-base text-white placeholder:text-white/25 outline-none focus:border-[#c5a46d] transition-colors duration-300"
            />
          </label>

          {/* SUBMIT BUTTON */}
          <div className="flex flex-col items-start gap-4">
            <button
              className="group inline-flex items-center justify-center gap-5 bg-[#c5a46d] text-[#080808] px-7 sm:px-9 py-4 text-xs sm:text-sm font-semibold tracking-wide hover:bg-white transition-all duration-300"
              type="submit"
            >
              Send an enquiry

              <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            {sent && (
              <small className="text-xs sm:text-sm text-[#c5a46d]">
                Your email app should open with the enquiry details.
              </small>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
