import React from 'react';
import Image from 'next/image';

const Hotspot = ({ top, left, title, subtitle, pointsLeft }: { top: string, left: string, title: string, subtitle: string, pointsLeft?: boolean }) => {
  return (
    <div className="absolute z-30" style={{ top, left }}>
      {/* The Dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center border-2 border-[#eff0f2] shadow-sm cursor-pointer hover:scale-110 transition-transform">
        <div className="w-1 h-1 rounded-full bg-white"></div>
      </div>

      {/* The Line and Text */}
      {pointsLeft ? (
        <div className="absolute top-1/2 right-1/2 -translate-y-1/2 flex items-center flex-row-reverse">
          <div className="w-8 md:w-16 h-[1px] bg-gray-400"></div>
          <div className="flex flex-col text-right pr-2 min-w-[90px]">
            <span className="text-[10px] font-bold text-gray-800 leading-tight">{title}</span>
            <span className="text-[9px] text-gray-500 leading-tight mt-0.5">{subtitle}</span>
          </div>
        </div>
      ) : (
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 flex items-center">
          <div className="w-8 md:w-16 h-[1px] bg-gray-400"></div>
          <div className="flex flex-col text-left pl-2 min-w-[90px]">
            <span className="text-[10px] font-bold text-gray-800 leading-tight">{title}</span>
            <span className="text-[9px] text-gray-500 leading-tight mt-0.5">{subtitle}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default function PlusFleeceSection() {
  return (
    <section className="w-full bg-[#eff0f2] pb-12 mx-auto md:pb-24 relative overflow-hidden">

      {/* Top Header Line */}
      <div className="w-full flex justify-center z-10 relative pt-8">
        <div className="w-full max-w-7xl px-6 md:px-12">
          <div className="flex justify-between items-center text-[9px] font-medium text-gray-500 uppercase tracking-widest">
            <span>SalarX Active</span>
            <span>Winter 2026</span>
          </div>
          <div className="w-full border-t border-gray-300 mt-2 mb-8"></div>
        </div>
      </div>

      {/* Outer Wrapper for exact centering */}
      <div className="w-full flex justify-center relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 w-full max-w-7xl px-4 sm:px-8">
          
          {/* Left Model */}
          <div className="relative w-full lg:w-[320px] xl:w-[360px] aspect-[2/3] flex-shrink-0">
            <Image 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" 
              fill 
              className="object-cover object-top mix-blend-multiply" 
              alt="Women's Fleece Model" 
            />
            <Hotspot top="38%" left="15%" title="Plus Fleece" subtitle="Women's Hoodie" pointsLeft />
            <Hotspot top="72%" left="82%" title="Warm Pants" subtitle="Fleece Joggers" />
          </div>

          {/* Center Text */}
          <div className="text-center flex flex-col items-center justify-center order-first lg:order-none z-30 flex-1 mb-8 lg:mb-0">
            <h2 className="text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-black text-[#1a1a1a] tracking-tight mb-1 whitespace-nowrap">
              PLUS FLEECE,
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-[2.5rem] font-semibold text-[#1a1a1a] tracking-tight mb-8 md:mb-10">
              Light & Warm!
            </h3>
            
            <div className="bg-[#e4e7ea] py-8 px-6 md:px-10 rounded-sm max-w-[320px] md:max-w-md w-full shadow-sm">
              <p className="text-xs md:text-sm text-gray-900 font-bold leading-relaxed mb-3">
                Experience ultimate comfort this season.
              </p>
              <p className="text-[10px] md:text-[11px] text-gray-600 leading-loose font-medium">
                Our new Plus Fleece collection combines lightweight breathability with exceptional warmth. Perfect for layering or wearing on its own.
              </p>
            </div>
          </div>

          {/* Right Model */}
          <div className="relative w-full lg:w-[320px] xl:w-[360px] aspect-[2/3] flex-shrink-0">
            <Image 
              src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop" 
              fill 
              className="object-cover object-top mix-blend-multiply" 
              alt="Men's Fleece Model" 
            />
            <Hotspot top="35%" left="80%" title="Plus Fleece" subtitle="Half-Zip Top" />
            <Hotspot top="76%" left="85%" title="Warm Pants" subtitle="Fleece Sweatpants" />
          </div>

        </div>
      </div>
    </section>
  );
}
