import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import CoverflowCarousel from "@/components/product/CoverflowCarousel";
import LuxuriousAppealSection from "@/components/sections/LuxuriousAppealSection";
import PromotionalBanner from "@/components/sections/PromotionalBanner";
import PlusFleeceSection from "@/components/sections/PlusFleeceSection";
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
              Hello Brooklyn!<br />Welcome to Stripe
            </div>
            <div className={styles.miniPillWrapper}>
              <div className={styles.miniPill}>
                <Image src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=200&auto=format&fit=crop" alt="Model" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className={styles.infoText}>
              Beautifully efficient apparel for<br />the modern world
            </div>
            <div className={styles.socialProof}>
              <div className={styles.emojiRow}>
                <span className={styles.emojiBox}>🔥</span>
                <span className={styles.emojiBox}>👍🏻</span>
                <span className={styles.emojiBox}>💙</span>
                <span className={styles.emojiBox}>💧</span>
                <span className={styles.emojiBox}>🌴</span>
              </div>
              <div className={styles.lovedText}>Loved From 500k Users</div>
            </div>
          </div>

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

      {/* 3. Category Bento Grid */}
      <section className="py-24 md:py-36 bg-[#fbfbfa]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="flex justify-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-[#111] uppercase tracking-tighter text-center">
              Explore Collections
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[650px]">
            {/* Left Large (Outerwear) */}
            <Link href="/products?category=Outerwear" className="md:col-span-2 md:row-span-2 relative rounded-2xl md:rounded-[32px] overflow-hidden group h-[400px] md:h-full bg-gray-100 block">
              <Image
                src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1000&auto=format&fit=crop"
                alt="Outerwear" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute top-5 right-5 md:top-8 md:right-8 bg-white px-5 py-2 rounded-full text-xs md:text-sm font-bold text-gray-900 shadow-sm z-10 tracking-wide">
                Outerwear
              </div>
            </Link>

            {/* Right Top Left (Premium Tees) */}
            <Link href="/products?category=Premium Tees" className="md:col-span-1 md:row-span-1 relative rounded-2xl md:rounded-[32px] overflow-hidden group h-[200px] md:h-full bg-gray-100 block">
              <Image
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop"
                alt="Premium Tees" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute top-4 right-4 bg-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold text-gray-900 shadow-sm z-10 tracking-wide">
                Premium Tees
              </div>
            </Link>

            {/* Right Top Right (Bottoms) */}
            <Link href="/products?category=Bottoms" className="md:col-span-1 md:row-span-1 relative rounded-2xl md:rounded-[32px] overflow-hidden group h-[200px] md:h-full bg-gray-100 block">
              <Image
                src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop"
                alt="Bottoms" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute top-4 right-4 bg-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold text-gray-900 shadow-sm z-10 tracking-wide">
                Bottoms
              </div>
            </Link>

            {/* Right Bottom (Accessories) */}
            <Link href="/products?category=Accessories" className="md:col-span-2 md:row-span-1 relative rounded-2xl md:rounded-[32px] overflow-hidden group h-[250px] md:h-full bg-gray-100 block">
              <Image
                src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1000&auto=format&fit=crop"
                alt="Accessories" fill className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute top-5 right-5 bg-white px-5 py-2 rounded-full text-xs md:text-sm font-bold text-gray-900 shadow-sm z-10 tracking-wide">
                Accessories
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <PromotionalBanner />

      {/* 4. Plus Fleece Section */}
      <PlusFleeceSection />

      {/* 5. Shop the Look / Social Proof */}
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
    </>
  );
}
