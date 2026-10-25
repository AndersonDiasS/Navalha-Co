import { site } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";
export function ChatIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="21"
      height="21"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.8 7.3L3 20l1.2-4.6A8.5 8.5 0 1 1 20.5 11.5Z" />
      <path d="M8 7.5c.4 4 2.5 6.1 6.5 7l1.5-2-2.5-1-1 1c-1.5-.6-2.5-1.6-3-3l1-1L9 6.5Z" />
    </svg>
  );
}
export function WhatsAppLink({
  message,
  children,
  className = "button",
  label,
}: {
  message?: string;
  children?: React.ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <a className={className} href={whatsappUrl(message)} aria-label={label}>
      <ChatIcon />
      {children ?? site.labels.book}
    </a>
  );
}
