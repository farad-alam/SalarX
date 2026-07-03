import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AutumnCollectionBanner() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 my-8 md:my-16">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row w-full bg-[#e8e4db] min-h-[300px] md:min-h-[450px]">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-10 sm:p-14 md:p-16 lg:p-24 relative">
          <h2 
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#3b3a36] leading-[1.2] tracking-wide mb-6 md:mb-10 drop-shadow-sm"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            Autumn Collection –<br />
            Up to 30% OFF
          </h2>
          
          <Link 
            href="/collection/autumn" 
            className="px-6 py-3.5 md:px-8 md:py-4 bg-[#a4917d] text-white text-[10px] md:text-xs font-bold tracking-widest uppercase hover:bg-[#8e7c69] transition-colors rounded-sm shadow-sm"
          >
            Shop Collection
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 relative h-[350px] md:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1200&auto=format&fit=crop"
            alt="Autumn Collection Menswear"
            fill
            className="object-cover object-top md:object-center"
          />
        </div>

      </div>
    </section>
  );
}
