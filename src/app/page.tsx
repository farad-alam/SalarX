import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import styles from "./page.module.css";

export default function Home() {
  const trendingProducts = products.filter(p => p.isTrending);

  return (
    <>
      {/* 1. Hero Section (Light Bento Layout) */}
      <section className={styles.heroLayout}>
        {/* Left Column */}
        <div className={styles.heroLeft}>
          <div className={styles.topInfoRow}>
            <div className={styles.welcomeText}>
              Hello Brooklyn!<br/>welcome to SalarX
            </div>
            <div className={styles.miniPill}>
              <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" alt="Model" fill style={{ objectFit: 'cover' }}/>
            </div>
            <div className={styles.infoText}>
              Beautifully efficient apparel for<br/>the modern world
            </div>
          </div>

          <h1 className={styles.heroTitle}>
            Fresh & <br/>
            <span className={styles.inlinePill}>
              <Image src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=200&auto=format&fit=crop" alt="Inline" fill style={{ objectFit: 'cover' }}/>
            </span>
            <span className={styles.titleGray}>Stylish</span>
          </h1>

          <div className={styles.ctaRow}>
            <p className={styles.ctaText}>Your Gateway to Chic and<br/>Contemporary Living</p>
            <Link href="/products" className={styles.btnExplore}>
              Explore Our Store
              <span className={styles.btnIcon}>↗</span>
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.heroRight}>
          <div className={styles.circleBg}></div>
          <Image 
            src="https://images.unsplash.com/photo-1516826957135-700ede19c6ce?q=80&w=1200&auto=format&fit=crop" 
            alt="Stylish Model" 
            fill 
            priority
            className={styles.modelImage}
          />
        </div>
        
        {/* Bottom Bento Cards */}
        <div className={styles.heroCards}>
          <Link href="/products?category=Outerwear" className={styles.card}>
            <div className={styles.cardImageContainer}>
              <Image src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=500&auto=format&fit=crop" alt="Outerwear" fill className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Outerwear<br/><span className={styles.cardTitleLight}>Collection</span></h3>
              <p className={styles.cardDesc}>The Essence of Modern<br/>Sophistication</p>
            </div>
            <div className={styles.cardArrow}>↗</div>
          </Link>
          <Link href="/products?category=Premium Tees" className={styles.card}>
            <div className={styles.cardImageContainer}>
              <Image src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop" alt="Tees" fill className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Tees<br/><span className={styles.cardTitleLight}>Collection</span></h3>
              <p className={styles.cardDesc}>The Essence of Modern<br/>Sophistication</p>
            </div>
            <div className={styles.cardArrow}>↗</div>
          </Link>
          <Link href="/products?category=Accessories" className={styles.card}>
            <div className={styles.cardImageContainer}>
              <Image src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=500&auto=format&fit=crop" alt="Accessories" fill className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Accs.<br/><span className={styles.cardTitleLight}>Collection</span></h3>
              <p className={styles.cardDesc}>The Essence of Modern<br/>Sophistication</p>
            </div>
            <div className={styles.cardArrowDark}>↗</div>
          </Link>
        </div>
      </section>

      {/* 2. Trending Carousel */}
      <section className={styles.section}>
        <div className={`container ${styles.sectionHeader}`}>
          <h2 className={styles.sectionTitle}>Trending Now</h2>
          <Link href="/products" className={styles.linkViewAll}>View All</Link>
        </div>
        <div className={styles.carousel}>
          {trendingProducts.map(product => (
            <div key={product.id} className={styles.carouselItem}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* 3. Category Bento Grid */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle} style={{ marginBottom: "var(--spacing-8)" }}>
            Explore Collections
          </h2>
          <div className={styles.bento}>
            <Link href="/products?category=Outerwear" className={`${styles.bentoItem} ${styles.bentoTall}`}>
              <Image 
                src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=800&auto=format&fit=crop" 
                alt="Outerwear" fill className={styles.bentoImage} 
              />
              <h3 className={styles.bentoTitle}>Outerwear</h3>
            </Link>
            <Link href="/products?category=Premium Tees" className={`${styles.bentoItem} ${styles.bentoWide}`}>
              <Image 
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop" 
                alt="Premium Tees" fill className={styles.bentoImage} 
              />
              <h3 className={styles.bentoTitle}>Premium Tees</h3>
            </Link>
            <Link href="/products?category=Bottoms" className={styles.bentoItem}>
              <Image 
                src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop" 
                alt="Bottoms" fill className={styles.bentoImage} 
              />
              <h3 className={styles.bentoTitle}>Bottoms</h3>
            </Link>
            <Link href="/products?category=Accessories" className={styles.bentoItem}>
              <Image 
                src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop" 
                alt="Accessories" fill className={styles.bentoImage} 
              />
              <h3 className={styles.bentoTitle}>Accessories</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Brand Ethos */}
      <section className={styles.ethos}>
        <div className={styles.ethosImageContainer}>
          <Image 
            src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop" 
            alt="SalarX Craftsmanship" fill className={styles.heroImage} 
          />
        </div>
        <div className={styles.ethosContent}>
          <h2 className={styles.sectionTitle}>Uncompromising Quality.</h2>
          <p className={styles.ethosText}>
            At SalarX, we believe that premium fashion should be accessible without sacrificing craftsmanship. 
            Every piece is designed with meticulous attention to detail, using high-grade materials to ensure 
            you look and feel your best, every single day.
          </p>
        </div>
      </section>

      {/* 5. Shop the Look / Social Proof */}
      <section className={styles.section}>
        <div className="container" style={{ textAlign: "center", marginBottom: "var(--spacing-8)" }}>
          <h2 className={styles.sectionTitle}>@SalarX_Official</h2>
          <p style={{ color: "var(--color-gray)", marginTop: "var(--spacing-2)" }}>Tag us to be featured.</p>
        </div>
        <div className={styles.socialGrid}>
          {[
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=500&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1550246140-5119ae4790b8?q=80&w=500&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512413914421-46abef178342?q=80&w=500&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616150247604-032906b3bc4f?q=80&w=500&auto=format&fit=crop"
          ].map((img, i) => (
            <div key={i} className={styles.socialItem}>
              <Image src={img} alt={`Social Post ${i}`} fill style={{ objectFit: "cover" }} />
              <div className={styles.socialOverlay}>Shop the look</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
