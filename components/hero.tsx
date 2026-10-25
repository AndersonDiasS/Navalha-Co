import Image from "next/image";
import { site } from "@/content/site";
import { WhatsAppLink } from "./whatsapp-link";
export function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="location">
          <span aria-hidden="true">✦</span> {site.hero.location}
        </p>
        <h1 id="hero-title">{site.hero.title}</h1>
        <p className="hero-description">{site.hero.description}</p>
        <div className="hero-actions">
          <WhatsAppLink />
          <a className="text-link" href="#servicos">
            {site.labels.services}
          </a>
        </div>
        <p className="small-note">{site.hero.note}</p>
      </div>
      <figure className="hero-photo">
        <Image
          src={site.hero.photo.src}
          alt={site.hero.photo.alt}
          fill
          sizes="(max-width: 767px) 100vw, 52vw"
          preload
          className="object-cover grayscale"
        />
        <figcaption>{site.hero.caption}</figcaption>
        <span aria-hidden="true" className="photo-seal">
          N<span>&</span>C
        </span>
      </figure>
    </section>
  );
}
