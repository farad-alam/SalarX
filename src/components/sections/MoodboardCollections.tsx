import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MoodboardCollections() {
  return (
    <section className="w-full bg-[var(--background)] px-4 sm:px-6 md:px-8 py-4 sm:py-8">
      <div className="bg-[#F8F8F6] rounded-[2rem] pt-8 pb-8 md:pt-12 md:pb-12 w-full max-w-[1920px] mx-auto">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl">
        <div className="flex justify-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#111] uppercase tracking-tighter text-center">
            Explore Collections
          </h2>
        </div>

        {/* Moodboard Container */}
        <div className="relative w-full aspect-square md:aspect-[1/1] bg-[#FDFBF7] border-x-[12px] md:border-x-[24px] border-[#F4EFE7] shadow-sm overflow-hidden">
          
          {/* Top Left Text */}
          <div className="absolute top-[10%] left-[8%] flex flex-col z-20 pointer-events-none">
            <span className="text-[10px] md:text-xs tracking-[0.3em] font-medium text-[#333] uppercase leading-relaxed">
              Inspired By<br />Nelly Dean
            </span>
          </div>

          {/* 1. Main Arch Image (Woman in dress) */}
          <Link href="/products?category=Outerwear" className="absolute top-[12%] left-[22%] w-[42%] h-[48%] z-10 group block cursor-pointer overflow-hidden shadow-md" style={{ borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px' }}>
            <Image
              src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1000&auto=format&fit=crop"
              alt="Outerwear Collection"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-black text-xs uppercase tracking-widest px-4 py-2 rounded-full font-bold shadow-md">
                Outerwear
              </span>
            </div>
          </Link>

          {/* 2. Top Right Circle (Jeans) */}
          <Link href="/products?category=Bottoms" className="absolute top-[8%] right-[12%] w-[22%] aspect-square z-20 group block cursor-pointer overflow-hidden rounded-full shadow-lg border-2 border-white/50">
            <Image
              src="https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=600&auto=format&fit=crop"
              alt="Bottoms Collection"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-black text-[10px] uppercase tracking-widest px-2 py-1 rounded-full font-bold shadow-md">
                Denim
              </span>
            </div>
          </Link>

          {/* 3. Center Right Square (B&W Portrait) */}
          <Link href="/products?category=Accessories" className="absolute top-[34%] right-[10%] w-[30%] aspect-square z-10 group block cursor-pointer overflow-hidden shadow-lg border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1492447105260-2e947425b5cc?q=80&w=600&auto=format&fit=crop"
              alt="Accessories Collection"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ filter: 'grayscale(100%) contrast(120%)' }}
            />
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-black text-[10px] uppercase tracking-widest px-2 py-1 rounded-full font-bold shadow-md">
                Accessories
              </span>
            </div>
          </Link>

          {/* 4. Bottom Right Wide Rectangle (Blue Texture) */}
          <Link href="/products?category=Premium%20Tees" className="absolute bottom-[25%] right-[15%] w-[45%] h-[24%] z-20 group block cursor-pointer overflow-hidden shadow-lg border-2 border-white">
            <Image
              src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop"
              alt="Premium Tees"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#144b61]/40 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-black text-[10px] uppercase tracking-widest px-2 py-1 rounded-full font-bold shadow-md">
                Tees
              </span>
            </div>
          </Link>

          {/* 5. Bottom Left Solid Square */}
          <div className="absolute bottom-[30%] left-[10%] w-[25%] aspect-square z-10 bg-[#2b3a41] shadow-lg pointer-events-none"></div>

          {/* White Squiggly Line SVG */}
          {/* We use an absolute container spanning the middle section to draw the line across the solid box, arch, and blue texture */}
          <svg className="absolute top-[48%] left-[8%] w-[65%] h-[30%] z-30 pointer-events-none" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,120 Q50,60 100,100 T150,80 T200,40 T220,180 Q250,200 300,100" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>

          {/* Bottom Text */}
          <div className="absolute bottom-[10%] w-full flex flex-col items-center justify-center z-20 pointer-events-none">
            <h3 className="text-[#a0522d] text-lg md:text-2xl tracking-[0.4em] uppercase font-serif mb-2">
              Fashion Trends
            </h3>
            <span 
              className="text-[#a0522d] text-2xl md:text-4xl" 
              style={{ fontFamily: "'Cedarville Cursive', 'Dancing Script', 'Brush Script MT', cursive" }}
            >
              new blog post
            </span>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}
