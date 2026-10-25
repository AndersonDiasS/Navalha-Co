import { site } from "@/content/site";
export function Testimonials() {
  return (
    <section
      className="section testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="shell">
        <div className="section-heading">
          <h2 id="testimonials-title">{site.testimonials.title}</h2>
          <p>{site.testimonials.intro}</p>
        </div>
        <div className="quote-grid">
          {site.testimonials.items.map((item) => (
            <figure key={item.name}>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>{item.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
