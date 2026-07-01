"use client";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { BRAND } from "@/lib/constants";
import styles from "./CartSummary.module.css";

export default function CartSummary() {
  const { total, itemCount } = useCart();

  if (itemCount === 0) return null;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Order Summary</h2>
      
      <div className={styles.row}>
        <span>Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
        <span>{BRAND.currency}{total.toLocaleString('en-IN')}</span>
      </div>
      
      <div className={styles.row}>
        <span>Shipping</span>
        <span>Calculated later</span>
      </div>
      
      <div className={styles.totalRow}>
        <span>Total</span>
        <span>{BRAND.currency}{total.toLocaleString('en-IN')}</span>
      </div>

      <Link href="/checkout" className={styles.checkoutBtn}>
        Proceed to Checkout
      </Link>
    </div>
  );
}
