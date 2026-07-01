"use client";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import styles from "./page.module.css";

export default function CartPage() {
  const { items, itemCount } = useCart();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Cart</h1>

      {itemCount === 0 ? (
        <div className={styles.empty}>
          <h2 className={styles.emptyTitle}>Your cart is empty</h2>
          <p className={styles.emptyText}>Looks like you haven&apos;t added anything to your cart yet.</p>
          <Link href="/products" className={styles.continueBtn}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className={styles.grid}>
          <div>
            {items.map((item) => (
              <CartItem 
                key={`${item.product.id}-${item.variant.id}`} 
                item={item} 
              />
            ))}
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
}
