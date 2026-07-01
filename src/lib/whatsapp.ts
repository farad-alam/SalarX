import { Order } from "@/types";
import { BRAND } from "./constants";

export function buildWhatsAppUrl(order: Order): string {
  let message = `🛍️ *New Order — ${BRAND.name}*\n\n`;
  message += `*Customer:* ${order.customerName}\n`;
  message += `*Phone:* ${order.phone}\n`;
  message += `*Address:* ${order.address}\n\n`;
  message += `*Items:*\n`;

  order.items.forEach((item) => {
    message += `• ${item.product.name} (${item.variant.name}) × ${item.quantity} — ${BRAND.currency}${(item.product.price * item.quantity).toLocaleString('en-IN')}\n`;
  });

  message += `\n*Total: ${BRAND.currency}${order.total.toLocaleString('en-IN')}*\n\n`;
  message += `*Payment Method:* ${order.paymentMethod}\n\n`;
  message += `Thank you! 🙏`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodedMessage}`;
}
