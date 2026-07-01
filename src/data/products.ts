import { Product } from "@/types";

export const categories = ["All", "Outerwear", "Premium Tees", "Bottoms", "Accessories"];

export const products: Product[] = [
  {
    id: "p1",
    slug: "onyx-heavyweight-hoodie",
    name: "Onyx Heavyweight Hoodie",
    description: "Crafted from 500gsm premium organic cotton, the Onyx Hoodie offers a relaxed, oversized fit for the ultimate streetwear silhouette. Features dropped shoulders and a hidden kangaroo pocket.",
    price: 3200,
    originalPrice: 4500,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Outerwear",
    variants: [
      { id: "p1-m", name: "Medium", sku: "ONYX-HD-M", stock: 15 },
      { id: "p1-l", name: "Large", sku: "ONYX-HD-L", stock: 10 },
      { id: "p1-xl", name: "X-Large", sku: "ONYX-HD-XL", stock: 5 },
    ],
    isTrending: true,
  },
  {
    id: "p2",
    slug: "slate-essential-tee",
    name: "Slate Essential Tee",
    description: "The perfect everyday tee. Cut from ultra-soft Pima cotton with a slight drop shoulder and a thick ribbed collar.",
    price: 1200,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Premium Tees",
    variants: [
      { id: "p2-s", name: "Small", sku: "SLT-TEE-S", stock: 20 },
      { id: "p2-m", name: "Medium", sku: "SLT-TEE-M", stock: 30 },
      { id: "p2-l", name: "Large", sku: "SLT-TEE-L", stock: 25 },
    ],
    isNew: true,
  },
  {
    id: "p3",
    slug: "urban-cargo-pants-black",
    name: "Urban Cargo Pants",
    description: "Technical cargo pants featuring water-resistant fabric, adjustable ankle drawstrings, and asymmetrical pocket placements for a tactical look.",
    price: 4500,
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Bottoms",
    variants: [
      { id: "p3-30", name: "30", sku: "URB-CRG-30", stock: 12 },
      { id: "p3-32", name: "32", sku: "URB-CRG-32", stock: 18 },
      { id: "p3-34", name: "34", sku: "URB-CRG-34", stock: 8 },
    ],
    isTrending: true,
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
