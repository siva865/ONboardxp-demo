import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section className="intro section-pad" id="about">
      <div className="intro-left">
        <SectionLabel number="01">WHO WE ARE</SectionLabel>
        <p className="intro-kicker">
          More than a product partner.<br />
          <em>A partner in experience.</em>
        </p>
      </div>

      <div className="intro-right">
        <Reveal>
          <h2>
            Every journey is made of moments.
            <span> We make them matter.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="body-large">
            Onboard XP is a creative and strategic partner for premium travel
            experiences. We help airlines, hotels, lounges, rail operators,
            cruise lines and mobility brands create more thoughtful,
            memorable and human-centred journeys.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <a href="#approach" className="text-link">
            Get to know our approach ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}