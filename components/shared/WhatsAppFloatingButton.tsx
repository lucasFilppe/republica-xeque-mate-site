"use client";

import Image from "next/image";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/5531971527535"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar comigo no WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-green-500
        flex items-center justify-center
        shadow-lg
        hover:bg-green-600
        transition-colors
      "
    >
      <Image src="/whatsapp.svg" alt="WhatsApp" width={28} height={28} />
    </a>
  );
}