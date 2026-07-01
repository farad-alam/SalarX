import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { BRAND } from '@/lib/constants';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className={styles.card}>
      <div className={styles.imageContainer}>
        {product.isNew && <span className={styles.badge}>New</span>}
        {product.isTrending && <span className={`${styles.badge} ${styles.trending}`}>Trending</span>}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>
          {BRAND.currency}{product.price.toLocaleString('en-IN')}
          {product.originalPrice && (
            <span className={styles.originalPrice}>
              {BRAND.currency}{product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </p>
      </div>
    </Link>
  );
}
