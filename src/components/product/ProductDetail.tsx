"use client";

import { useState } from "react";
import { Product, ProductVariant } from "@/types";
import { BRAND } from "@/lib/constants";
import { useCart } from "@/hooks/useCart";
import ImageGallery from "./ImageGallery";
import styles from "./ProductDetail.module.css";

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (!selectedVariant) {
      setError("Please select a size/variant");
      return;
    }
    setError("");

    addItem({
      product,
      variant: selectedVariant,
      quantity,
    });

    // Using a native alert for simplicity in this phase
    // Can be replaced with a toast notification later
    alert("Added to cart!");
  };

  const handleQuantityChange = (delta: number) => {
    const newQty = quantity + delta;
    if (newQty >= 1 && (!selectedVariant || newQty <= selectedVariant.stock)) {
      setQuantity(newQty);
    }
  };

  return (
    <div className={styles.container}>
      <ImageGallery images={product.images} alt={product.name} />

      <div className={styles.info}>
        <div className={styles.header}>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.price}>
            {BRAND.currency}{product.price.toLocaleString('en-IN')}
            {product.originalPrice && (
              <span className={styles.originalPrice}>
                {BRAND.currency}{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </p>
        </div>

        <p className={styles.description}>{product.description}</p>

        <div className={styles.selector}>
          <span className={styles.selectorLabel}>Select Size/Variant</span>
          <div className={styles.variants}>
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                className={`${styles.variantBtn} ${selectedVariant?.id === variant.id ? styles.active : ""}`}
                disabled={variant.stock === 0}
                onClick={() => {
                  setSelectedVariant(variant);
                  setError("");
                  if (quantity > variant.stock) setQuantity(variant.stock);
                }}
              >
                {variant.name} {variant.stock === 0 && "(Out of Stock)"}
              </button>
            ))}
          </div>
          {error && <span className={styles.error}>{error}</span>}
        </div>

        <div className={styles.selector}>
          <span className={styles.selectorLabel}>Quantity</span>
          <div className={styles.quantity}>
            <button className={styles.quantityBtn} onClick={() => handleQuantityChange(-1)}>-</button>
            <span className={styles.quantityValue}>{quantity}</span>
            <button className={styles.quantityBtn} onClick={() => handleQuantityChange(1)}>+</button>
          </div>
        </div>

        <button
          className={styles.addToCart}
          onClick={handleAddToCart}
          disabled={!selectedVariant || selectedVariant.stock === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
