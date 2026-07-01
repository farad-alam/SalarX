import { products } from "@/data/products";
import ProductGrid from "@/components/product/ProductGrid";
import CategoryFilter from "@/components/product/CategoryFilter";

export const metadata = {
  title: "Shop All",
  description: "Browse our premium collection of streetwear, outerwear, tees, and bottoms.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params.category;
  
  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="container" style={{ padding: "var(--spacing-10) var(--spacing-4)" }}>
      <h1 style={{ marginBottom: "var(--spacing-8)", fontSize: "3rem" }}>
        {category || "Shop All"}
      </h1>
      
      <CategoryFilter />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
