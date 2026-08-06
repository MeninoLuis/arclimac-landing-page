// Centraliza o número de WhatsApp da Arclimac e a montagem de links.
// Troque WHATSAPP_NUMBER pelo número real (formato internacional, só dígitos).
export const WHATSAPP_NUMBER = "5519999999999";

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Arclimac e quero solicitar um orçamento de ar-condicionado.";
