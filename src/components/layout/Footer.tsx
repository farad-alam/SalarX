import Link from "next/link";
import { BRAND, PAYMENT_METHODS } from "@/lib/constants";
import { MessageCircle } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container`}>
        <div className={styles.grid}>
          <div className={styles.brandInfo}>
            <Link href="/" className={styles.logo}>{BRAND.name}</Link>
            <p className={styles.description}>{BRAND.description}</p>
            <a 
              href={`https://wa.me/${BRAND.whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.whatsappCta}
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>Shop</h3>
            <ul className={styles.links}>
              <li><Link href="/products" className={styles.link}>All Products</Link></li>
              <li><Link href="/products?category=Outerwear" className={styles.link}>Outerwear</Link></li>
              <li><Link href="/products?category=Premium Tees" className={styles.link}>Tees</Link></li>
              <li><Link href="/products?category=Bottoms" className={styles.link}>Bottoms</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>Contact & Location</h3>
            <ul className={styles.links}>
              <li className={styles.link}>{BRAND.address}</li>
              <li className={styles.link}>{BRAND.phone}</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} {BRAND.name}. All rights reserved.</p>
          <div className={styles.payments}>
            {PAYMENT_METHODS.map(method => (
              <span key={method.id}>{method.name}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
