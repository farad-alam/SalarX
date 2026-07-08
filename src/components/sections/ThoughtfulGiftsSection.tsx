import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Box, Heart } from 'lucide-react'; // We can use lucide-react if available, or just SVGs. I'll use standard SVGs to be safe.

export default function ThoughtfulGiftsSection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-gradient-to-br from-[#1a1738] via-[#40203a] to-[#5f3531] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-orange-400"></div>
            <span className="text-xs md:text-sm font-medium tracking-widest text-gray-300 uppercase">
              Stories from the box
            </span>
            <div className="w-8 h-[1px] bg-orange-400"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-8">
            When thoughtful gifts<br />
            create <span className="font-light italic" style={{ fontFamily: "var(--font-serif), 'Cormorant Garamond', serif" }}>lasting impressions</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            From first unwrapping to everyday use, our merchandise does<br className="hidden md:block" />
            more than carry your logo, it carries your story.
          </p>
          
          <Link href="/projects" className="inline-flex items-center gap-3 bg-[#de7f40] hover:bg-[#c76a30] transition-colors text-white text-sm font-semibold py-3 px-6 rounded-full group">
            Lookout our projects
            <span className="bg-[#111] text-white p-1.5 rounded-full group-hover:translate-x-1 transition-transform">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 h-auto md:h-[650px]">
          
          {/* Card 1: 95% Reorder (col-span-1) */}
          <div className="md:col-span-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 p-6 md:p-8 flex flex-col justify-between h-[250px] md:h-full relative overflow-hidden backdrop-blur-sm">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">95%</h3>
              <p className="text-sm md:text-base text-gray-300 leading-snug pr-4">of clients reorder<br />within 6 months.</p>
            </div>
            <div className="mt-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs text-gray-200 border border-white/5">
                meaningful gifting
              </span>
            </div>
            {/* Subtle glow effect */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#de7f40]/20 to-transparent pointer-events-none"></div>
          </div>

          {/* Card 2: 100k+ Gifts (col-span-1) */}
          <div className="md:col-span-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 p-6 md:p-8 flex flex-col items-center justify-center h-[250px] md:h-full relative overflow-hidden backdrop-blur-sm text-center">
            <h3 className="text-3xl md:text-4xl font-bold self-end mb-auto">100k+</h3>
            
            {/* Box Illustration (SVG) */}
            <div className="flex-1 flex items-center justify-center relative w-full mt-4">
              <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M50 85L20 70V40L50 55L80 40V70L50 85Z" stroke="white" strokeWidth="4" strokeLinejoin="round"/>
                <path d="M20 40L50 25L80 40M50 55V85" stroke="white" strokeWidth="4" strokeLinejoin="round"/>
                {/* Heart */}
                <path d="M45 20C45 15 55 15 55 20C55 25 50 30 50 30C50 30 45 25 45 20Z" fill="#de7f40" stroke="white" strokeWidth="2"/>
                <path d="M30 15C30 10 40 10 40 15C40 20 35 25 35 25C35 25 30 20 30 15Z" fill="#de7f40" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            
            <p className="text-sm text-gray-300 self-end mt-auto text-right">gifts<br />delivered</p>
          </div>

          {/* Card 3: Woman unboxing (col-span-2) */}
          <div className="md:col-span-2 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 h-[300px] md:h-full relative overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1577702312572-5ba9328a8115?q=80&w=800&auto=format&fit=crop" 
              alt="Unboxing experience" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent md:from-black/60 md:to-transparent"></div>
            
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10 w-full md:w-2/3">
              <h3 className="text-xl md:text-2xl font-medium leading-snug">
                &quot;The unboxing felt like a celebration in itself&quot;
              </h3>
              
              <div className="mt-auto flex flex-col gap-4">
                <span className="text-sm text-gray-300">- Priya, Startup Founder</span>
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs text-white border border-white/20 w-max">
                  customer story
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: Man smiling (col-span-2) */}
          <div className="md:col-span-2 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 h-[300px] md:h-full relative overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop" 
              alt="Personal touch" 
              fill 
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent md:from-black/60 md:to-transparent"></div>
            
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10 w-full md:w-2/3">
              <h3 className="text-xl md:text-2xl font-medium leading-snug">
                &quot;The experience was beyond just a gift, it felt personal touched&quot;
              </h3>
              
              <div className="mt-auto">
                <span className="text-sm text-gray-300">- Ankit, HR Head</span>
              </div>
            </div>
          </div>

          {/* Card 5: 30+ Industries (col-span-1) */}
          <div className="md:col-span-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 p-6 md:p-8 flex flex-col justify-between h-[250px] md:h-full relative overflow-hidden backdrop-blur-sm">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">30+</h3>
              <p className="text-sm text-gray-300">industries served</p>
            </div>
            
            <div className="flex gap-2 my-6">
              {/* Fake logos */}
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] border border-white/5">Logo</div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] border border-white/5">Logo</div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] border border-white/5">Logo</div>
            </div>
            
            <p className="text-sm md:text-base text-gray-300 mt-auto">
              Startups to enterprises,<br />we scale with you.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#de7f40]/10 to-transparent pointer-events-none"></div>
          </div>

          {/* Card 6: Delivery team (col-span-1) */}
          <div className="md:col-span-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 p-6 md:p-8 h-[250px] md:h-full relative overflow-hidden group">
             <Image 
              src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800&auto=format&fit=crop" 
              alt="Delivery Team" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/60"></div>
            
            <div className="absolute inset-0 p-6 flex flex-col z-10">
              <h3 className="text-base md:text-lg font-medium leading-snug">
                Our team felt valued, not just remembered
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
