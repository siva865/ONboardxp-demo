import { FiArrowUpRight } from "react-icons/fi";
import { productCards } from "../data/Content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Products() {
  return (
    <section className="products section-pad">
      <div className="section-heading">
        <div>
          <SectionLabel number="05">THOUGHTFUL BY DESIGN</SectionLabel>
          <Reveal>
            <h2>Details that shape<br /><em>the journey.</em></h2>
          </Reveal>
        </div>

        <p>
          Objects and touchpoints are never just objects. They are an
          opportunity to express care, identity and intention.
        </p>
      </div>

      <div className="product-grid">
        {productCards.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.07}
            className="product-card"
          >
            <a href="#contact" className="product-image">
              <img src={item.img} alt={item.title} loading="lazy" />
              <span>{item.num}</span>
              <i><FiArrowUpRight /></i>
            </a>

            <div className="product-info">
              <h3>{item.title}</h3>
              <p>{item.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}