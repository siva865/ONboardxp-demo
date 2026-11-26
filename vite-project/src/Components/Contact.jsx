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
    <section className="contact" id="contact">
      <div className="contact-top section-pad">
        <SectionLabel number="08">LET'S MAKE IT MATTER</SectionLabel>

        <Reveal>
          <h2>
            Have a journey<br />
            in mind? <em>Let's talk.</em>
          </h2>
        </Reveal>

        <p>
          Tell us what you're looking to create. We'd love to hear about it.
        </p>
      </div>

      <div className="contact-bottom section-pad">
        <div className="contact-details">
          <a href="mailto:contact@onboardxp.com">
            <FiMail /> contact@onboardxp.com
          </a>

          <a href="tel:+13109067396">
            <FiPhone /> +1 (310) 906-7396
          </a>

          <span>
            <FiMapPin /> Los Angeles, California, USA
          </span>

          <a
            href="https://www.linkedin.com/company/onboard-xp/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin /> LinkedIn <FiArrowUpRight />
          </a>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <div className="form-row">
            <label>
              Your name
              <input
                required
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder="Name"
              />
            </label>

            <label>
              Email address
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={updateField}
                placeholder="you@company.com"
              />
            </label>
          </div>

          <label>
            Company
            <input
              name="company"
              value={form.company}
              onChange={updateField}
              placeholder="Company name"
            />
          </label>

          <label>
            Tell us a little about your project
            <textarea
              required
              rows="3"
              name="message"
              value={form.message}
              onChange={updateField}
              placeholder="What are you looking to create?"
            />
          </label>

          <button className="submit-btn" type="submit">
            Send an enquiry <FiArrowUpRight />
          </button>

          {sent && (
            <small>
              Your email app should open with the enquiry details.
            </small>
          )}
        </form>
      </div>
    </section>
  );
}