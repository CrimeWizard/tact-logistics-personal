import React from "react";

const WHATSAPP_URL = "https://wa.me/201278665661";

function WhatsAppIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2c-5.45 0-9.88 4.43-9.88 9.88 0 1.74.45 3.44 1.31 4.95L2 22l5.31-1.39a9.83 9.83 0 0 0 4.72 1.2h.01c5.45 0 9.88-4.43 9.88-9.88a9.8 9.8 0 0 0-2.87-7.02Zm-7.02 15.23h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.15.83.84-3.07-.2-.31a8.21 8.21 0 0 1-1.27-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.69 8.25-8.22 8.25Zm4.52-6.17c-.25-.12-1.47-.73-1.69-.82-.23-.08-.39-.12-.56.12-.16.25-.64.82-.78.99-.14.17-.28.19-.53.06-.25-.12-1.04-.38-1.98-1.22a7.33 7.33 0 0 1-1.37-1.69c-.14-.25-.02-.38.11-.51.11-.11.25-.28.37-.42.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.86-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31s-.85.83-.85 2.03.87 2.37.99 2.54c.12.17 1.72 2.63 4.16 3.69.58.25 1.04.4 1.4.51.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.17.21-.58.21-1.08.14-1.18-.06-.1-.22-.17-.47-.29Z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Tact Freight on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_-16px_rgba(37,211,102,0.9)] transition-transform duration-200 hover:scale-105 hover:bg-[#20ba59] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

export { WHATSAPP_URL, WhatsAppIcon };
