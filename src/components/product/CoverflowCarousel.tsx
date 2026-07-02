"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// High-quality vertical studio fashion portraits with centered faces and garments
const slidesData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=800&auto=format&fit=crop",
    category: "The Summer Collection",
    title: "Light Linen Shirt",
    slug: "cloud-linen-shirt-ivory",
    num: "01",
    objectPosition: "center 15%"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
    category: "The Slate Collection",
    title: "Beige Knit Polo",
    slug: "slate-essential-tee",
    num: "02",
    objectPosition: "center 18%"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
    category: "The Essential Collection",
    title: "Cream Knit Tee",
    slug: "slate-essential-tee",
    num: "03",
    objectPosition: "center 10%"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop",
    category: "The Linen Collection",
    title: "Oversized Linen Shirt",
    slug: "cloud-linen-shirt-ivory",
    num: "04",
    objectPosition: "center 10%"
  },
  {
    id: 5,
    // Replaced with a vertical model portrait where head/face is centered to avoid cutoff
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    category: "The Basic Collection",
    title: "Pima Cotton Tee",
    slug: "slate-essential-tee",
    num: "05",
    objectPosition: "center 15%"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800&auto=format&fit=crop",
    category: "The Tailored Collection",
    title: "Casual Dress Shirt",
    slug: "slate-essential-tee",
    num: "06",
    objectPosition: "center 25%"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=800&auto=format&fit=crop",
    category: "The Comfort Collection",
    title: "Weekend Knit Blazer",
    slug: "onyx-heavyweight-hoodie",
    num: "07",
    objectPosition: "center 15%"
  }
];

// Duplicate the slides data to double the size (14 slides), satisfying Swiper's loop minimum slide count threshold
const extendedSlides = [
  ...slidesData,
  ...slidesData.map((slide) => ({
    ...slide,
    id: slide.id + slidesData.length
  }))
];

export default function CoverflowCarousel() {
  const [activeIndex, setActiveIndex] = useState(3); // Start with slide 4 (index 3) active

  return (
    <section className="relative w-full py-12 md:py-20 bg-[#F8F8F6] overflow-hidden select-none">
      {/* Title Block - Confined to container for standard horizontal alignment */}
      <div className="container mx-auto px-4 text-center mb-8 md:mb-12">
        <h2
          className="text-2xl md:text-4xl font-light tracking-[0.25em] uppercase select-none text-[#0A0A0A]"
          style={{ fontFamily: "var(--font-serif), Cormorant Garamond, serif" }}
        >
          Featured Collection
        </h2>
      </div>

      {/* Swiper Container - Positioned outside container class to span full 100vw, ensuring exact left-right symmetry */}
      <div className="relative w-full overflow-visible">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          initialSlide={3}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex % slidesData.length)}
          coverflowEffect={{
            rotate: 15,
            stretch: -55,  // Pulled closer together to match the tight overlapping in reference design
            depth: 140,    // Creates the Z-axis 3D translation depth
            modifier: 1.1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
            renderBullet: function (index, className) {
              return `<span class="${className}"></span>`;
            },
          }}
          modules={[EffectCoverflow, Pagination]}
          className="coverflow-swiper w-full !overflow-visible py-8 h-[380px] md:h-[550px]"
        >
          {extendedSlides.map((slide, index) => {
            const isActive = (slide.id - 1) % slidesData.length === activeIndex;
            return (
              <SwiperSlide
                key={slide.id}
                className="relative !w-[210px] md:!w-[320px] aspect-[2/3] rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] bg-white transition-all duration-500 ease-out"
                style={{
                  transform: isActive ? "scale(1.05)" : "scale(0.95)",
                  zIndex: isActive ? 50 : 10,
                }}
              >
                {/* Full-length fashion image with customized objectPosition */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={isActive}
                  sizes="(max-width: 768px) 210px, 320px"
                  className={`object-cover transition-all duration-700 ease-in-out ${isActive ? "brightness-[0.98]" : "brightness-[0.8] contrast-[0.9]"}`}
                  style={{ objectPosition: slide.objectPosition }}
                />

                {/* Active Slide Text overlays (Mockup-accurate layout, direct on-image overlay) */}
                <div className={`absolute inset-0 transition-all duration-500 ease-out z-20 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
                  {/* Top-Left: Pill number badge */}
                  <div className="absolute top-5 left-5">
                    <span className="px-3.5 py-1.5 rounded-full text-[9px] md:text-[10px] font-bold bg-white/90 backdrop-blur-md tracking-wider text-black shadow-sm">
                      {slide.num} / {String(slidesData.length).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Vertically Centered Right Column: Rotary category and title text overlay */}
                  <div
                    className="absolute right-5 flex flex-col items-end gap-6 text-black select-none"
                    style={{
                      top: "50%",
                      transform: "translateY(-50%)",
                      transformOrigin: "right center"
                    }}
                  >
                    {/* Rotary Category Label */}
                    <span
                      className="text-[8px] md:text-[9px] font-bold tracking-[0.25em] uppercase text-black/50"
                      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                    >
                      {slide.category}
                    </span>

                    {/* Rotary Serif Title */}
                    <h3
                      className="text-base md:text-lg font-light tracking-wide text-black"
                      style={{
                        fontFamily: "var(--font-serif), Cormorant Garamond, serif",
                        writingMode: "vertical-rl",
                        textOrientation: "mixed"
                      }}
                    >
                      {slide.title}
                    </h3>
                  </div>

                  {/* Bottom-Right: shop Link (in a glassmorphic pill badge for perfect readability) */}
                  <div className="absolute bottom-5 right-5">
                    <Link
                      href={`/products/${slide.slug}`}
                      className="shop-pill !px-[24px] !py-[10px] rounded-full text-[9px] md:text-[10px] font-bold tracking-wider shadow-sm"
                    >
                      Shop from <span className="decoration-1 underline-offset-4 font-black">SALARX</span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Circular pagination element at the bottom center overlapping the slide bottom edge */}
        <div className="relative flex justify-center items-center mt-[-24px] md:mt-[-28px] z-30">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0A0A0A] shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300">
            {/* Inner ring and active dot */}
            <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>

            {/* Invisible custom swiper pagination mounted under the circle */}
            <div className="custom-swiper-pagination absolute inset-0 flex items-center justify-center pointer-events-none opacity-0" />
          </div>
        </div>
      </div>

      {/* Global overrides for Swiper styling to make coverflow and dots match mockup perfectly */}
      <style jsx global>{`
        .coverflow-swiper {
          overflow: visible !important;
        }
        
        .custom-bullet {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #d4d4d8;
          margin: 0 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .custom-bullet-active {
          background: #09090b;
          transform: scale(1.25);
        }

        .shop-pill {
          background-color: rgba(255, 255, 255, 0.9) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          color: #0A0A0A !important;
          border: 1px solid rgba(0, 0, 0, 0.05) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          display: inline-block;
        }

        .shop-pill:hover {
          background-color: #0A0A0A !important;
          color: #FFFFFF !important;
          border-color: #0A0A0A !important;
          transform: scale(1.03);
        }

        .shop-pill:hover span {
          color: #FFFFFF !important;
        }
      `}</style>
    </section>
  );
}
