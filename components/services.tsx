import { site } from "@/content/site";
import { WhatsAppLink } from "./whatsapp-link";
export function Services() {
  return (
    <section
      id="servicos"
      className="section shell"
      aria-labelledby="services-title"
    >
      <div className="section-heading">
        <h2 id="services-title">{site.services.title}</h2>
        <p>{site.services.intro}</p>
      </div>
      <div>
        {site.services.items.map((service) => (
          <article
            className={`service-row ${service.featured ? "service-featured" : ""}`}
            key={service.name}
          >
            <div>
              <h3>{service.name}</h3>
              {service.featured && (
                <span className="service-tag">{site.labels.featured}</span>
              )}
            </div>
            <p>{service.description}</p>
            <div className="price">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0,
              }).format(service.price)}
              <small>
                {service.duration} {site.labels.minutes}
              </small>
            </div>
            <WhatsAppLink
              message={service.message}
              className="button button-outline"
              label={`${site.labels.reserve} ${service.name} pelo WhatsApp`}
            >
              {site.labels.reserve}
            </WhatsAppLink>
          </article>
        ))}
      </div>
      <p className="small-note mt-6">{site.services.note}</p>
    </section>
  );
}
