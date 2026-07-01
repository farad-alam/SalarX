import Link from "next/link";
import { X } from "lucide-react";
import { BRAND } from "@/lib/constants";
import styles from "./MobileMenu.module.css";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div 
        className={`${styles.overlay} ${isOpen ? styles.open : ""}`} 
        onClick={onClose}
      />
      <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          <span className={styles.logo}>{BRAND.name}</span>
          <button onClick={onClose} aria-label="Close menu">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        <nav className={styles.nav}>
          {links.map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              className={styles.navLink}
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
