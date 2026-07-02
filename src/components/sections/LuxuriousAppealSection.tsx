"use client";

import React from "react";
import Image from "next/image";

export default function LuxuriousAppealSection() {
  const images = [
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
      alt: "Contemporary style 4",
      className: "w-[110px] md:w-[180px] h-[140px] md:h-[220px] self-center shadow-sm"
    },
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600&auto=format&fit=crop",
      alt: "Contemporary style 1",
      className: "w-[140px] md:w-[220px] h-[220px] md:h-[340px] self-end shadow-sm"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
      alt: "Contemporary style 2",
      className: "w-[180px] md:w-[280px] h-[280px] md:h-[460px] self-center shadow-md z-10"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800&auto=format&fit=crop",
      alt: "Contemporary style 3",
      className: "w-[150px] md:w-[240px] h-[240px] md:h-[380px] self-start shadow-sm"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
      alt: "Contemporary style 5",
      className: "w-[140px] md:w-[220px] h-[220px] md:h-[340px] self-end shadow-sm opacity-60"
    }
  ];

  return (
    <section className="relative w-full bg-[#FBFBFA] py-28 md:py-40 overflow-hidden select-none border-t border-[#F0EFEB]">
      {/* Editorial Title Block - Full Width with Explicit Centering */}
      <div className="flex flex-col items-center justify-center text-center w-full px-4 mb-16 md:mb-20">
        <h2 
          className="text-center w-full text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#0A0A0A] leading-[1.1]"
          style={{ 
            fontFamily: "var(--font-serif), Cormorant Garamond, serif",
            textAlign: "center"
          }}
        >
          LUXURIOUS <span className="italic font-light lowercase">and</span><br />
          CONTEMPORARY APPEAL<br />
          <span className="relative text-2xl sm:text-3xl md:text-4xl tracking-widest uppercase font-light text-black/80 mt-4 inline-block">
            <span className="absolute right-full mr-3 flex items-center gap-3 top-1/2 -translate-y-1/2 whitespace-nowrap">
              <span className="w-10 h-[1px] bg-black/30 inline-block" />
              <span className="italic lowercase font-serif font-light text-black/60 translate-y-[-2px]">for</span>
            </span>
            EVERY WOMAN
          </span>
        </h2>
      </div>

      {/* Staggered asymmetric image layout row - Centered on large screens */}
      <div className="w-full overflow-x-auto scrollbar-hide pb-4 px-6">
        <div className="w-full md:flex md:justify-center">
          <div className="flex items-center gap-4 md:gap-6 h-[300px] md:h-[480px]">
          {images.map((img) => (
            <div 
              key={img.id}
              className={`relative overflow-hidden flex-shrink-0 bg-white ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 180px, 300px"
                className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                priority={img.id <= 3}
              />
            </div>
          ))}
        </div>
      </div>
    </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
