import { FiArrowUpRight } from "react-icons/fi";
import { IMG } from "../data/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const steps = [
  "Listen & understand",
  "Explore & define",
  "Design & develop",
  "Deliver & refine",
];

export default function Approach() {
  return (
    <section className="approach section-pad" id="approach">
      <div className="approach-image">
        <img src={IMG.studio} alt="Creative studio workspace" loading="lazy" />
        <span>IDEAS INTO EXPERIENCES</span>
      </div>

      <div className="approach-copy">
        <SectionLabel number="06">HOW WE WORK</SectionLabel>

        <Reveal>
          <h2>Good ideas deserve<br /><em>great execution.</em></h2>
        </Reveal>

        <p className="body-large">
          We bring strategy, design and delivery together — creating a clear
          path from an early conversation to a considered, tangible result.
        </p>

        <div className="process-list">
          {steps.map((step, index) => (
            <div key={step}>
              <span>0{index + 1}</span>
              {step}
              <FiArrowUpRight />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}