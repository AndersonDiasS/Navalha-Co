import Image from "next/image";
import { site } from "@/content/site";
export function Gallery() {
  return (
    <section
      id="galeria"
      className="section shell"
      aria-labelledby="gallery-title"
    >
      <div className="section-heading">
        <h2 id="gallery-title">{site.gallery.title}</h2>
        <p>{site.gallery.intro}</p>
      </div>
      <div className="gallery-grid">
        {site.gallery.photos.map((photo, index) => (
          <figure
            key={photo.caption}
            className={index === 0 ? "gallery-main" : ""}
          >
            <div className="gallery-image">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 40vw"
                className="object-cover grayscale"
              />
            </div>
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
