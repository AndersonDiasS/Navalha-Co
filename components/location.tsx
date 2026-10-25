import { site } from "@/content/site";
export function Location() {
  return (
    <section
      id="visite"
      className="section shell"
      aria-labelledby="visit-title"
    >
      <div className="section-heading">
        <h2 id="visit-title">{site.visit.title}</h2>
        <p>{site.visit.intro}</p>
      </div>
      <div className="visit-layout">
        <div className="visit-info">
          <h3>{site.labels.address}</h3>
          <address>
            {site.visit.street}
            <br />
            {site.visit.neighborhood}, {site.visit.city} — {site.visit.region}
          </address>
          <h3>{site.labels.hours}</h3>
          <dl>
            {site.visit.hours.map((hours) => (
              <div key={hours.label}>
                <dt>{hours.label}</dt>
                <dd>{hours.value}</dd>
              </div>
            ))}
          </dl>
          <a
            className="text-link"
            href={site.visit.routesUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.labels.routes}
          </a>
          <p className="small-note">{site.visit.notice}</p>
        </div>
        <iframe
          src={site.visit.mapUrl}
          title={site.labels.map}
          className="map"
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
