"use client";

import Image from "next/image";
import Link from "next/link";

export default function DiscountBanner() {
  return (
    <section className="w-full bg-[#F5F3F0] overflow-hidden">
      <div className="relative w-full flex items-center justify-between min-h-[280px] md:min-h-[360px]">

        {/* LEFT model — bleeds from bottom, slightly offset left */}
        <div className="relative flex-shrink-0 w-[180px] sm:w-[220px] md:w-[280px] lg:w-[340px] h-[280px] md:h-[360px] self-end">
          <Image
            src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop&crop=top"
            alt="Model Left"
            fill
            sizes="(max-width: 768px) 220px, 340px"
            className="object-cover object-top"
            priority
          />
          {/* Right-side fade into background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, transparent 55%, #F5F3F0 100%)",
            }}
          />
          {/* Bottom-to-top subtle fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #F5F3F0 0%, transparent 20%)",
            }}
          />
        </div>

        {/* CENTER — headline + CTA */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 md:px-8 py-12">
          {/* Eyebrow */}
          <p className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#888] font-semibold mb-3">
            Exclusive Deal
          </p>

          {/* Main headline */}
          <h2 className="leading-[1.05] text-[#0A0A0A]">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Get up to
            </span>
            <span
              className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#0A0A0A] leading-none"
              style={{ letterSpacing: "-0.04em" }}
            >
              25
              <span
                className="text-4xl sm:text-5xl md:text-6xl align-super"
                style={{ fontFamily: "var(--font-serif), 'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                %
              </span>
            </span>
            <span
              className="block text-2xl sm:text-3xl md:text-4xl font-light italic mt-1"
              style={{ fontFamily: "var(--font-serif), 'Cormorant Garamond', serif" }}
            >
              discount <span className="not-italic font-extrabold text-[#0A0A0A]">on any</span>
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-0.5">
              product!!
            </span>
          </h2>

          {/* CTA */}
          <Link
            href="/products"
            className="mt-8 inline-flex items-center gap-2 bg-[#0A0A0A] text-white text-[11px] font-bold tracking-[0.25em] uppercase px-8 py-3.5 rounded-full hover:bg-[#333] transition-all duration-300 group"
          >
            Shop Now
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>

        {/* RIGHT model — bleeds from bottom */}
        <div className="relative flex-shrink-0 w-[180px] sm:w-[220px] md:w-[280px] lg:w-[340px] h-[280px] md:h-[360px] self-end">
          <Image
            src="https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=600&auto=format&fit=crop&crop=top"
            alt="Model Right"
            fill
            sizes="(max-width: 768px) 220px, 340px"
            className="object-cover object-top"
            priority
          />
          {/* Left-side fade into background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to left, transparent 55%, #F5F3F0 100%)",
            }}
          />
          {/* Bottom-to-top subtle fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #F5F3F0 0%, transparent 20%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
