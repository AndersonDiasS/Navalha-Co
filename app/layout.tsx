import type { Metadata, Viewport } from "next";
import { Oswald, Manrope } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";
const display = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: "Anderson Dias" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: site.hero.photo.src,
        width: 1600,
        height: 1067,
        alt: site.hero.photo.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.hero.photo.src],
  },
};
export const viewport: Viewport = { themeColor: "#101010" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${body.variable}`}>
        <a href="#conteudo" className="skip-link">
          {site.labels.skip}
        </a>
        {children}
      </body>
    </html>
  );
}
