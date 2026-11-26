import { FiArrowUpRight } from "react-icons/fi";
import { industries } from "../data/Content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Industries() {
  return (
    <section className="industries section-pad" id="industries">
      <div className="section-heading">
        <div>
          <SectionLabel number="02">WHERE WE WORK</SectionLabel>
          <Reveal>
            <h2>Different journeys.<br /><em>One human focus.</em></h2>
          </Reveal>
        </div>

        <p>
          From the first welcome to the final detail, we help travel and
          hospitality brands create experiences that stay with people.
        </p>
      </div>

      <div className="industry-grid">
        {industries.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.08}
            className={`industry-card ${index === 0 ? "tall" : ""}`}
          >
            <a
              href="#contact"
              className="industry-image"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <span className="industry-number">{item.n}</span>
              <span className="industry-tag">{item.tag}</span>
              <span className="industry-arrow"><FiArrowUpRight /></span>
            </a>

            <div className="industry-copy">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}