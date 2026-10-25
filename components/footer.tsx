import { site } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppLink } from "./whatsapp-link";
export function Footer() {
  return (
    <>
      <section className="closing shell">
        <div>
          <h2>{site.closing.title}</h2>
          <p>{site.closing.description}</p>
        </div>
        <WhatsAppLink />
      </section>
      <footer className="shell footer">
        <a href="#inicio" className="footer-brand">
          {site.name}
        </a>
        <p>{site.footer.note}</p>
        <a className="credit" href={whatsappUrl(site.whatsapp.authorMessage)}>
          {site.footer.credit}
        </a>
      </footer>
      <WhatsAppLink className="floating-whatsapp" label={site.labels.floating}>
        <span className="sr-only">{site.labels.floating}</span>
      </WhatsAppLink>
    </>
  );
}
