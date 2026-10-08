import { site } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp"
      href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Bonjour, je souhaite un renseignement.")}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Écrire sur WhatsApp
    </a>
  );
}
