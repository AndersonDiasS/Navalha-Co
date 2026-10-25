import Image from "next/image";
import { site } from "@/content/site";
export function Team() {
  return (
    <section
      id="barbeiros"
      className="section team-section"
      aria-labelledby="team-title"
    >
      <div className="shell team-layout">
        <div className="team-intro">
          <span aria-hidden="true" className="scissors">
            ✂
          </span>
          <h2 id="team-title">{site.team.title}</h2>
          <p>{site.team.intro}</p>
        </div>
        <div className="team-grid">
          {site.team.people.map((person) => (
            <article key={person.name}>
              <div className="portrait">
                <Image
                  src={person.photo.src}
                  alt={person.photo.alt}
                  fill
                  sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 28vw"
                  className="object-cover grayscale"
                />
              </div>
              <h3>{person.name}</h3>
              <p className="role">{person.role}</p>
              <p className="small-note">{person.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
