"use client";

import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { PAYMENT_METHODS } from "@/lib/constants";
import { MessageCircle } from "lucide-react";
import styles from "./CheckoutForm.module.css";
import { useRouter } from "next/navigation";

export default function CheckoutForm() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    address: "",
    paymentMethod: "bKash",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const order = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      items,
      total,
      ...formData,
      status: "pending" as const,
      createdAt: new Date().toISOString(),
    };

    const link = buildWhatsAppUrl(order);
    window.open(link, "_blank");
    
    clearCart();
    router.push("/");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Shipping Details</h2>
        
        <div className={styles.field}>
          <label htmlFor="customerName" className={styles.label}>Full Name *</label>
          <input 
            type="text" 
            id="customerName" 
            name="customerName" 
            required 
            className={styles.input}
            value={formData.customerName}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="phone" className={styles.label}>Phone Number (WhatsApp) *</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required 
            className={styles.input}
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="address" className={styles.label}>Full Delivery Address *</label>
          <textarea 
            id="address" 
            name="address" 
            required 
            className={styles.textarea}
            value={formData.address}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Payment Method</h2>
        <div className={styles.paymentOptions}>
          {PAYMENT_METHODS.map((method) => (
            <label key={method.id} className={styles.radioLabel}>
              <input 
                type="radio" 
                name="paymentMethod" 
                value={method.name}
                checked={formData.paymentMethod === method.name}
                onChange={handleChange}
              />
              <span>{method.name}</span>
            </label>
          ))}
        </div>
        <p style={{ fontSize: "0.875rem", color: "var(--color-gray)", marginTop: "var(--spacing-2)" }}>
          You will receive payment instructions on WhatsApp after submitting your order.
        </p>
      </div>

      <button type="submit" className={styles.submitBtn}>
        <MessageCircle size={20} />
        Complete Order on WhatsApp
      </button>
    </form>
  );
}
