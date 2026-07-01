"use client";

import Image from "next/image";
import Link from "next/link";
import { CartItem as CartItemType } from "@/types";
import { BRAND } from "@/lib/constants";
import { useCart } from "@/hooks/useCart";
import styles from "./CartItem.module.css";

export default function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCart();
  const { product, variant, quantity } = item;

  return (
    <div className={styles.container}>
      <Link href={`/products/${product.slug}`} className={styles.imageContainer}>
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="100px"
          className={styles.image}
        />
      </Link>
      <div className={styles.details}>
        <div className={styles.header}>
          <div>
            <Link href={`/products/${product.slug}`}>
              <h3 className={styles.name}>{product.name}</h3>
            </Link>
            <p className={styles.variant}>Size: {variant.name}</p>
          </div>
          <span className={styles.price}>
            {BRAND.currency}{(product.price * quantity).toLocaleString('en-IN')}
          </span>
        </div>
        
        <div className={styles.actions}>
          <div className={styles.quantity}>
            <button 
              className={styles.quantityBtn} 
              onClick={() => updateQuantity(product.id, variant.id, quantity - 1)}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className={styles.quantityValue}>{quantity}</span>
            <button 
              className={styles.quantityBtn} 
              onClick={() => updateQuantity(product.id, variant.id, quantity + 1)}
              disabled={quantity >= variant.stock}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button 
            className={styles.removeBtn} 
            onClick={() => removeItem(product.id, variant.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
