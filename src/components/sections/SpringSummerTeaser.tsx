"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SpringSummerTeaser() {
  return (
    <section className="relative w-full bg-[#FBFBFA] py-24 md:py-36 overflow-hidden select-none border-t border-[#F0EFEB]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Left Column: Collection text & CTA */}
          <div className="md:col-span-5 flex flex-col justify-center py-6">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#888] uppercase mb-4">
              Latest Collection
            </span>

            <h3 
              className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] text-[#0A0A0A] mb-6"
              style={{ fontFamily: "var(--font-serif), Cormorant Garamond, serif" }}
            >
              <span className="italic">Spring —</span><br />
              Summer<br />
              <span className="font-light tracking-wide text-black/90">2020</span>
            </h3>

            <p className="text-xs sm:text-sm text-black/50 leading-relaxed max-w-sm mb-8">
              Colourful suede jackets and reinvented trench coats are what characterises the spring collection for Men & Girls.
            </p>

            <div>
              <Link 
                href="/products" 
                className="inline-flex items-center justify-center bg-[#C68E65] text-white text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase px-9 py-4 rounded-none hover:bg-[#B37B53] transition-all duration-300 shadow-sm"
              >
                Lookbook <span className="ml-3 font-sans font-light">&gt;</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Overlapping Editorial Images */}
          <div className="md:col-span-7 flex justify-end">
            <div className="relative w-full max-w-[480px] aspect-[4/5] md:aspect-[3/4]">
              
              {/* Base background image (standing model on architectural concrete structure) */}
              <div className="absolute top-0 right-0 w-[80%] h-[90%] bg-[#EFEFEF] overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
                  alt="Spring Summer collection look"
                  fill
                  sizes="400px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Overlapping foreground image (detail hand/sleeve close-up) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[45%] h-[55%] bg-[#D5C9B7] overflow-hidden border-[12px] border-[#FBFBFA] shadow-lg z-10">
                <Image 
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop"
                  alt="Detail view"
                  fill
                  sizes="200px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
