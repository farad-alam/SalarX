import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import CoverflowCarousel from "@/components/product/CoverflowCarousel";
import LuxuriousAppealSection from "@/components/sections/LuxuriousAppealSection";
import PromotionalBanner from "@/components/sections/PromotionalBanner";
import PlusFleeceSection from "@/components/sections/PlusFleeceSection";
import MoodboardCollections from "@/components/sections/MoodboardCollections";
import styles from "./page.module.css";

export default function Home() {
  const trendingProducts = products.filter(p => p.isTrending);

  return (
    <>
      {/* 1. Hero Section (Light Bento Layout) */}
      <section className={styles.heroLayout}>
        {/* Left Column */}
        <div className={styles.heroLeft}>


          <h1 className={styles.heroTitle}>
            <div className={styles.titleLine1}>Fresh &</div>
            <div className={styles.titleLine2}>
              <span className={styles.inlinePillWrapper}>
                <span className={styles.inlinePill}>
                  <Image src="/stylish_pill.png" alt="Inline" fill style={{ objectFit: 'cover' }} />
                </span>
              </span>
              <span className={styles.titleGray}>Stylish</span>
            </div>
          </h1>

          <div className={styles.ctaRow}>
            <p className={styles.ctaText}>Your Gateway to Chic and<br />Contemporary Living</p>
            <div className={styles.btnGroup}>
              <Link href="/products" className={styles.btnExplore}>
                Explore Our Store
              </Link>
              <Link href="/products" className={styles.btnArrow}>
                ↗
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.heroRight}>
          <div className={styles.circleBg}></div>
          <Image
            src="/hero_model.png"
            alt="Stylish Model"
            fill
            priority
            className={styles.modelImage}
          />
          <div className={styles.scrollDown}>
            <span className={styles.scrollArrow}>&larr;</span> Scroll Down
          </div>
        </div>

        {/* Bottom Bento Cards */}
        <div className={styles.heroCards}>
          <Link href="/products?category=Mens" className={styles.card}>
            <div className={styles.cardImageContainer}>
              <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop" alt="Men's Collection" fill className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Men's<br /><span className={styles.cardTitleLight}>Collection</span></h3>
              <p className={styles.cardDesc}>The Essence of Modern<br />Sophistication</p>
            </div>
            <div className={styles.cardArrowLight}>↗</div>
          </Link>
          <Link href="/products?category=Girls" className={styles.card}>
            <div className={styles.cardImageContainer}>
              <Image src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=500&auto=format&fit=crop" alt="Girl's Collection" fill className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Girl's<br /><span className={styles.cardTitleLight}>Collection</span></h3>
              <p className={styles.cardDesc}>The Essence of Modern<br />Sophistication</p>
            </div>
            <div className={styles.cardArrowLight}>↗</div>
          </Link>
          <Link href="/products?category=Kids" className={styles.card}>
            <div className={styles.cardImageContainer}>
              <Image src="/kids_collection.png" alt="Kid's Collection" fill className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Kid's<br /><span className={styles.cardTitleLight}>Collection</span></h3>
              <p className={styles.cardDesc}>The Essence of Modern<br />Sophistication</p>
            </div>
            <div className={styles.cardArrowDark}>↗</div>
          </Link>
        </div>
      </section>


      {/* Featured Collection Coverflow Carousel */}
      <CoverflowCarousel />

      {/* Luxurious & Contemporary Appeal Section */}
      <LuxuriousAppealSection />

      {/* 3. Moodboard Collections */}
      <MoodboardCollections />

      {/* Promotional Banner */}
      <PromotionalBanner />

      {/* 4. Plus Fleece Section */}
      <PlusFleeceSection />

      {/* 5. Shop the Look / Social Proof */}
      <div className={styles.sectionWrapper}>
        <section className={styles.section}>
          <div className="container" style={{ textAlign: "center", marginBottom: "var(--spacing-8)" }}>
            <h2 className={styles.sectionTitle}>@SalarX_Official</h2>
            <p style={{ color: "var(--color-gray)", marginTop: "var(--spacing-2)" }}>Tag us to be featured.</p>
          </div>
          <div className={styles.socialGrid}>
            {[
              "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=600&auto=format&fit=crop"
            ].map((img, i) => (
              <div key={i} className={styles.socialItem}>
                <Image src={img} alt={`Social Post ${i}`} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                <div className={styles.socialOverlay}>Shop the look</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
