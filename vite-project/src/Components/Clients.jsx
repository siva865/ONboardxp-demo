import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const clientNames = [
  "EgyptAir",
  "Air Serbia",
  "ETHIOPIAN",
  "Kenya Airways",
  "OMAN AIR",
  "MEA",
];

export default function Clients() {
  return (
    <section className="client-band section-pad">
      <SectionLabel number="07">A GLOBAL PERSPECTIVE</SectionLabel>

      <Reveal>
        <h2>Built around people.<br /><em>Made for the world.</em></h2>
      </Reveal>

      <p>
        We work with travel and hospitality organisations across markets,
        bringing a thoughtful approach to every partnership.
      </p>

      <div className="client-logos">
        {clientNames.map((name) => (
          <span key={name}>{name}</span>
        ))}
      </div>

      <small>
        Selected names shown for demonstration. Confirm current client
        relationships and permissions before publishing.
      </small>
    </section>
  );
}