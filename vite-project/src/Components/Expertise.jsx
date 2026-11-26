import { FiArrowUpRight } from "react-icons/fi";
import { capabilities } from "../data/Content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Expertise() {
  return (
    <section className="expertise section-pad" id="expertise">
      <div className="section-heading expertise-head">
        <div>
          <SectionLabel number="04">WHAT WE BRING</SectionLabel>
          <Reveal>
            <h2>From first thought<br />to <em>final touch.</em></h2>
          </Reveal>
        </div>

        <p>
          A connected process, shaped around your ambition. We bring the
          thinking, creativity and delivery expertise to move an idea forward.
        </p>
      </div>

      <div className="capability-list">
        {capabilities.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.title} delay={index * 0.04}>
              <div className="capability-row">
                <span className="cap-number">0{index + 1}</span>
                <div className="cap-icon"><Icon /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <FiArrowUpRight className="cap-arrow" />
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}