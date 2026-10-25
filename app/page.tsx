import { site, WHATSAPP_NUMBER } from "@/content/site";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Team } from "@/components/team";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { Location } from "@/components/location";
import { Footer } from "@/components/footer";
export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: `+${WHATSAPP_NUMBER}`,
    image: site.hero.photo.src,
    priceRange: `R$ ${Math.min(...site.services.items.map((s) => s.price))}–${Math.max(...site.services.items.map((s) => s.price))}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.visit.street,
      addressLocality: site.visit.city,
      addressRegion: site.visit.region,
      postalCode: site.visit.postalCode,
      addressCountry: site.visit.country,
    },
    areaServed: site.visit.neighborhood,
    openingHoursSpecification: site.visit.hours
      .filter((h) => h.opens)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.days,
        opens: h.opens,
        closes: h.closes,
      })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: site.services.title,
      itemListElement: site.services.items.map((s) => ({
        "@type": "Offer",
        price: s.price,
        priceCurrency: "BRL",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
        },
      })),
    },
  };
  return (
    <div id="inicio">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main id="conteudo">
        <Hero />
        <Services />
        <Team />
        <Gallery />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
