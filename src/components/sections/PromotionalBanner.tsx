import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PromotionalBanner() {
  return (
    <section className="w-full bg-[#f6f2eb] p-3 sm:p-5 md:p-8">
      <div className="relative w-full aspect-[21/9] min-h-[350px] md:min-h-[450px] lg:min-h-[550px] overflow-hidden group">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop"
            alt="Limited Edition 50% Off Promo"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
            priority
          />
          {/* Moody Overlay for text contrast */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 md:px-8 text-center">
          <div className="flex flex-col items-center text-white">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold tracking-widest uppercase mb-1 md:mb-2 drop-shadow-md">
              Limited Edition
            </h3>

            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold leading-none tracking-tight mb-6 md:mb-10 drop-shadow-xl">
              50% OFF
            </h2>

            <Link
              href="/products"
              className="bg-transparent border-2 border-white text-white px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 rounded-full text-xs md:text-sm font-bold tracking-widest capitalize hover:bg-black hover:border-black hover:text-white transition-all duration-300 mt-6 shadow-md hover:scale-105"
            >
              See Whole Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
