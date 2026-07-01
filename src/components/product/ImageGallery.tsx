"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images, alt }: { images: string[]; alt: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.gallery}>
      <div className={styles.thumbnails}>
        {images.map((img, index) => (
          <button
            key={index}
            className={`${styles.thumbnailBtn} ${activeIndex === index ? styles.active : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={img}
              alt={`${alt} thumbnail ${index + 1}`}
              fill
              sizes="100px"
              className={styles.thumbnailImage}
            />
          </button>
        ))}
      </div>
      <div className={styles.mainImageContainer}>
        <Image
          src={images[activeIndex]}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.mainImage}
        />
      </div>
    </div>
  );
}
