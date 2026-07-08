import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PromotionalBannerProps {
  imageUrl?: string;
  altText?: string;
  linkUrl?: string;
}

export default function PromotionalBanner({
  imageUrl = "/featured-offer.jpg", // Renamed to bypass adblockers
  altText = "Promotional Offer",
  linkUrl = "/products"
}: PromotionalBannerProps) {
  return (
    <section className="w-full bg-[var(--background)] px-4 sm:px-6 md:px-8 py-4 sm:py-8 flex justify-center items-center">
      <div className="w-full bg-[#F8F8F6] rounded-[2rem] py-4 md:py-8 px-3 sm:px-5 md:px-8 max-w-[1920px] mx-auto flex justify-center items-center">
        
        {/* Banner Container */}
        <Link href={linkUrl} className="block relative w-full max-w-[1400px] rounded-3xl overflow-hidden shadow-sm bg-[#e6e9ea] group mx-auto">
          <Image
            src={imageUrl}
            alt={altText}
            width={1200}
            height={600}
            className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
            priority
          />
        </Link>

      </div>
    </section>
  );
}
