import { site } from "@/content/site";
export function Header() {
  return (
    <header className="header">
      <div className="shell flex flex-wrap items-center justify-between gap-4 py-5">
        <a href="#inicio" className="brand">
          <span aria-hidden="true" className="brand-mark">
            N<span>&</span>C
          </span>
          <span>
            {site.name}
            <small>{site.tagline}</small>
          </span>
        </a>
        <nav
          aria-label={site.labels.navigation}
          className="flex flex-wrap gap-x-6 gap-y-2"
        >
          {site.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
