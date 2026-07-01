"use client";

import Link from "next/link";
import { ShoppingBag, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { BRAND } from "@/lib/constants";
import { useCart } from "@/hooks/useCart";
import MobileMenu from "./MobileMenu";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "Shop All", href: "/products" },
  { label: "Outerwear", href: "/products?category=Outerwear" },
  { label: "Tees", href: "/products?category=Premium Tees" },
];

export default function Header() {
  const { itemCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = `${styles.header} ${isHomePage && !isScrolled ? styles.transparent : styles.solid}`;

  return (
    <>
      <header className={headerClass}>
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.logo}>
            {BRAND.name}
          </Link>

          <nav className={styles.nav}>
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <Link href="/cart" className={styles.cartButton} aria-label="Cart">
              <ShoppingBag size={24} strokeWidth={1.5} />
              {itemCount > 0 && (
                <span className={styles.cartBadge}>{itemCount}</span>
              )}
            </Link>
            <button 
              className={styles.mobileMenuToggle}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        links={NAV_LINKS} 
      />
    </>
  );
}
