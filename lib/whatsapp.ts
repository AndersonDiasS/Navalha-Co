import { site, WHATSAPP_NUMBER } from "@/content/site";
export function whatsappUrl(message = site.whatsapp.message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
