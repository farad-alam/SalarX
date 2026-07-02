"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Target: 210 days from now
const TARGET_DATE = new Date(Date.now() + 210 * 24 * 60 * 60 * 1000);

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const pad = (n: number) => String(n).padStart(2, "0");

const marqueeItems = [
  {
    type: "pill",
    label: "Occasion",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop&crop=face",
  },
  { type: "text", label: "Crafted For The Modern Man" },
  {
    type: "pill",
    label: "Style",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop&crop=face",
  },
  { type: "text", label: "Timeless Elegance" },
  {
    type: "pill",
    label: "Fashion",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=200&auto=format&fit=crop&crop=face",
  },
  { type: "text", label: "Wear The Difference" },
  {
    type: "pill",
    label: "Premium",
    image: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=200&auto=format&fit=crop&crop=face",
  },
  { type: "text", label: "SalarX Exclusive" },
];

const loopItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

export default function FlashSaleBanner() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);

  return (
    <section className="w-full overflow-hidden bg-[#F5F5F3] select-none border-t border-[#E5E5E3]">
      {/* Light Split Layout */}
      <div className="relative w-full flex flex-col md:flex-row min-h-[420px] md:min-h-[480px]">
        
        {/* Left column: Text content and countdown boxes */}
        <div className="relative z-10 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 py-12 flex-1">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] text-[#0A0A0A] mb-4 tracking-tight"
          >
            Act Fast! Incredible<br />
            Offers Expire Soon
          </h2>

          <p className="text-black/45 text-xs sm:text-sm leading-relaxed mb-8 max-w-md">
            Lorem ipsum dolor sit amet, co sectetur ad pis cing elit. Donec efficitur convallis fringilla ipsum viverra placerat.
          </p>

          {/* Countdown timer with bordered boxes */}
          <div className="flex gap-2 sm:gap-3 mb-6">
            {[
              { value: days, label: "Days" },
              { value: hours, label: "Hrs" },
              { value: minutes, label: "Mins" },
              { value: seconds, label: "Secs" },
            ].map(({ value, label }) => (
              <div 
                key={label}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-white border border-black/5 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center"
              >
                <span className="text-2xl sm:text-3xl font-bold text-[#0A0A0A] leading-none tabular-nums">
                  {pad(value)}
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold text-black/35 tracking-wider uppercase mt-1">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-black/35 text-[9px] sm:text-[10px] tracking-wide mb-8">
            Limited time offer. The deal will expire on December 18, 2026. <span className="font-bold underline text-black cursor-pointer">HURRY UP!</span>
          </p>

          {/* VIEW COLLECTION dark pill button */}
          <div>
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-black text-white text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase px-8 py-3.5 rounded-full hover:bg-black/85 transition-all duration-300 shadow-md"
            >
              View Collection
            </Link>
          </div>
        </div>

        {/* Right column: Full-bleed model image with background multiply blend */}
        <div className="relative md:w-[45%] lg:w-[40%] min-h-[300px] md:min-h-0 flex-shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop"
            alt="Flash sale model"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover object-top"
            style={{ mixBlendMode: "multiply" }}
            priority
          />
          {/* Subtle vignette blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F3] via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>

      </div>

      {/* Bottom ticker bar (Dark Background with white text) */}
      <div className="w-full bg-black py-4 border-t border-white/5 overflow-hidden select-none">
        <div className="flash-marquee flex items-center whitespace-nowrap w-max">
          {loopItems.map((item, i) => (
            <span key={i} className="inline-flex items-center flex-shrink-0">
              {item.type === "pill" ? (
                <span className="inline-flex items-center gap-2 bg-[#1C1C1E] rounded-full pl-1 pr-4 py-1 mx-3 border border-white/10 shadow-sm">
                  <span className="relative w-7 h-7 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-white/15">
                    <Image
                      src={item.image!}
                      alt={item.label}
                      fill
                      sizes="28px"
                      className="object-cover object-top"
                    />
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-wide">
                    {item.label}
                  </span>
                </span>
              ) : (
                <span className="text-[10px] sm:text-[11px] font-semibold text-white/55 tracking-[0.25em] uppercase mx-5">
                  {item.label}
                </span>
              )}
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86C] mx-3 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .flash-marquee {
          animation: flash-scroll-light 35s linear infinite;
        }
        @keyframes flash-scroll-light {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        .flash-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
