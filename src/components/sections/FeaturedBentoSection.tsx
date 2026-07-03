import React from 'react';
import Image from 'next/image';

export default function FeaturedBentoSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 h-auto md:h-[650px]">
          
          {/* Left Large (Span 2 cols, Span 2 rows) */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-2xl md:rounded-[32px] overflow-hidden group h-[400px] md:h-full bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop"
              alt="Hoodie Full"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* Pill */}
            <div className="absolute top-5 right-5 md:top-8 md:right-8 bg-white px-5 py-2 rounded-full text-xs md:text-sm font-bold text-gray-900 shadow-sm z-10 tracking-wide">
              Hoodie
            </div>
          </div>

          {/* Right Top Left (Span 1 col, Span 1 row) */}
          <div className="md:col-span-1 md:row-span-1 relative rounded-2xl md:rounded-[32px] overflow-hidden group h-[200px] md:h-full bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=600&auto=format&fit=crop"
              alt="Hoodie Angle 1"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>

          {/* Right Top Right (Span 1 col, Span 1 row) */}
          <div className="md:col-span-1 md:row-span-1 relative rounded-2xl md:rounded-[32px] overflow-hidden group h-[200px] md:h-full bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1572495532056-8583af1cbf11?q=80&w=600&auto=format&fit=crop"
              alt="Hoodie Angle 2"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>

          {/* Right Bottom (Span 2 cols, Span 1 row) */}
          <div className="md:col-span-2 md:row-span-1 relative rounded-2xl md:rounded-[32px] overflow-hidden group h-[250px] md:h-full bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop"
              alt="Hoodie Close Up"
              fill
              className="object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
