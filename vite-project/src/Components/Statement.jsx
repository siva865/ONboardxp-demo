import { IMG } from "../data/Content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Statement() {
  return (
    <section className="statement">
      <div
        className="statement-bg"
        style={{ backgroundImage: `url(${IMG.material})` }}
      />
      <div className="statement-overlay" />

      <div className="statement-content">
        <SectionLabel number="03">OUR BELIEF</SectionLabel>

        <Reveal>
          <h2>
            Premium is not<br />
            what you add.<br />
            <em>
              It’s what you<br />
              never compromise.
            </em>
          </h2>
        </Reveal>

        <p>
          In the materials. In the function. In the feeling.
          <br />
          Every detail says something about the brand behind it.
        </p>
      </div>

      <span className="statement-index">
        THE ONBOARD XP POINT OF VIEW
      </span>
    </section>
  );
}