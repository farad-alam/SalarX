"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import styles from "./CategoryFilter.module.css";
import { categories } from "@/data/products";

export default function CategoryFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "All";

  const handleSelect = (category: string) => {
    const params = new URLSearchParams(searchParams);
    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className={styles.container}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleSelect(cat)}
          className={`${styles.button} ${currentCategory === cat ? styles.active : ""}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
