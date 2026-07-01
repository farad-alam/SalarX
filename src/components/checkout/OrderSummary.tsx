"use client";

import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { BRAND } from "@/lib/constants";
import styles from "./OrderSummary.module.css";

export default function OrderSummary() {
  const { items, total, itemCount } = useCart();

  if (itemCount === 0) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Your order is empty</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Order Summary</h2>
      
      <div className={styles.itemList}>
        {items.map((item) => (
          <div key={`${item.product.id}-${item.variant.id}`} className={styles.item}>
            <div className={styles.image}>
              <Image 
                src={item.product.images[0]} 
                alt={item.product.name} 
                fill 
                sizes="60px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.itemInfo}>
              <span className={styles.itemName}>{item.product.name}</span>
              <span className={styles.itemMeta}>Size: {item.variant.name} &times; {item.quantity}</span>
              <span className={styles.itemName} style={{ marginTop: "auto" }}>
                {BRAND.currency}{(item.product.price * item.quantity).toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.row}>
        <span>Subtotal</span>
        <span>{BRAND.currency}{total.toLocaleString('en-IN')}</span>
      </div>
      
      <div className={styles.row}>
        <span>Shipping</span>
        <span>TBD on WhatsApp</span>
      </div>
      
      <div className={styles.totalRow}>
        <span>Total</span>
        <span>{BRAND.currency}{total.toLocaleString('en-IN')}</span>
      </div>
    </div>
  );
}
