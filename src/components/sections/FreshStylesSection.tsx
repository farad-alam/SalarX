"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FreshStylesSection() {
  const colors = [
    { name: "Beige", hex: "#E5DDD3" },
    { name: "Brown", hex: "#8B5A2B" },
    { name: "Dark Brown", hex: "#3D2B1F" },
    { name: "Sand", hex: "#D2B48C" },
    { name: "Navy", hex: "#1D2D44" }
  ];

  return (
    <section className="relative w-full bg-[#FBFBFA] py-16 md:py-24 overflow-hidden select-none">
      {/* slanted brand logo marquee */}
      <div 
        className="absolute top-0 left-0 w-full bg-[#111] py-4 z-20 flex items-center overflow-hidden"
        style={{
          transform: "rotate(-1.5deg) scale(1.05)",
          transformOrigin: "center center",
          marginTop: "-15px"
        }}
      >
        <div className="flex whitespace-nowrap animate-marquee text-white/90 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
          <span className="mx-6">ZARA</span>
          <span className="text-[#C9A86C]">•</span>
          <span className="mx-6">MANGO</span>
          <span className="text-[#C9A86C]">•</span>
          <span className="mx-6 font-serif italic">H&M</span>
          <span className="text-[#C9A86C]">•</span>
          <span className="mx-6 lowercase font-light">asos</span>
          <span className="text-[#C9A86C]">•</span>
          <span className="mx-6">PULL&BEAR</span>
          <span className="text-[#C9A86C]">•</span>
          
          <span className="mx-6">ZARA</span>
          <span className="text-[#C9A86C]">•</span>
          <span className="mx-6">MANGO</span>
          <span className="text-[#C9A86C]">•</span>
          <span className="mx-6 font-serif italic">H&M</span>
          <span className="text-[#C9A86C]">•</span>
          <span className="mx-6 lowercase font-light">asos</span>
          <span className="text-[#C9A86C]">•</span>
          <span className="mx-6">PULL&BEAR</span>
          <span className="text-[#C9A86C]">•</span>

          <span className="mx-6">ZARA</span>
          <span className="text-[#C9A86C]">•</span>
          <span className="mx-6">MANGO</span>
          <span className="text-[#C9A86C]">•</span>
          <span className="mx-6 font-serif italic">H&M</span>
          <span className="text-[#C9A86C]">•</span>
          <span className="mx-6 lowercase font-light">asos</span>
          <span className="text-[#C9A86C]">•</span>
          <span className="mx-6">PULL&BEAR</span>
          <span className="text-[#C9A86C]">•</span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 mt-12 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & Circular stamp badge */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full py-4 min-h-[350px] lg:min-h-[480px]">
            <div>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#0A0A0A] uppercase">
                New Arrivals
              </span>
              
              <h2 
                className="text-4xl md:text-5xl lg:text-[3.2rem] font-light leading-[1.1] text-[#0A0A0A] mt-4 mb-6"
                style={{ fontFamily: "var(--font-serif), Cormorant Garamond, serif" }}
              >
                Fresh Styles<br />
                <span className="italic">For Every You</span>
              </h2>

              <p className="text-sm text-black/50 leading-relaxed max-w-sm mb-8">
                Discover the latest trends and timeless basics, all in one place. Crafted for modern urban living.
              </p>

              <Link 
                href="/products" 
                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#0A0A0A] hover:opacity-75 transition-opacity"
              >
                View all Collection <span>→</span>
              </Link>
            </div>

            {/* Circular badge */}
            <div className="mt-8 lg:mt-0 flex items-center justify-start">
              <div className="relative w-28 h-28 flex items-center justify-center">
                {/* SVG Circular Text Path */}
                <svg className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]" viewBox="0 0 100 100">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    />
                  </defs>
                  <text className="text-[8px] font-bold tracking-[0.1em] fill-black/60 uppercase">
                    <textPath href="#circlePath">
                      • QUALITY • STYLE • EXCELLENCE • LUXURY 
                    </textPath>
                  </text>
                </svg>
                {/* Center star icon */}
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0l2.5 8.5H23l-7 5.5 2.5 8.5-6.5-5.5-6.5 5.5 2.5-8.5-7-5.5h8.5z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Middle Column: Tall Model Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[3/4] lg:aspect-[2/3] rounded-3xl overflow-hidden shadow-sm bg-[#EFEFEF]">
              <Image 
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop" 
                alt="Featured model outfit"
                fill
                sizes="(max-width: 1024px) 360px, 400px"
                className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Overlay shopping bag button */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <button className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Product Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-[340px] rounded-3xl overflow-hidden bg-white shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-[#F0EFEA] flex flex-col">
              
              {/* Product top zoom image */}
              <div className="relative w-full aspect-[4/3] bg-[#E5DDD3] overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop" 
                  alt="Classic Polo details"
                  fill
                  sizes="340px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Product details description panel */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 
                  className="text-xl text-[#0A0A0A] font-light tracking-wide mb-1"
                  style={{ fontFamily: "var(--font-serif), Cormorant Garamond, serif" }}
                >
                  Classic Polo T-Shirt
                </h3>
                
                <span className="text-lg font-semibold text-[#0A0A0A] mb-4">
                  $49.99
                </span>
                
                <hr className="border-[#F0EFEB] mb-4" />

                <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest mb-3">
                  Available in 5 Colors
                </span>

                {/* Color swatches */}
                <div className="flex gap-2.5 mb-8">
                  {colors.map((color) => (
                    <button 
                      key={color.name}
                      className="w-5 h-5 rounded-full border border-black/10 shadow-sm focus:outline-none hover:scale-110 transition-transform cursor-pointer"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>

                {/* Shop Now CTA link */}
                <Link 
                  href="/products/slate-essential-tee" 
                  className="flex items-center justify-between mt-auto group"
                >
                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#0A0A0A]">
                    Shop Now
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                    <span className="text-sm font-semibold">→</span>
                  </div>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
