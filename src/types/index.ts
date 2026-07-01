export interface ProductVariant {
  id: string;
  name: string; // e.g. "M", "L", "Black", etc.
  sku: string;
  stock: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  variants: ProductVariant[];
  isNew?: boolean;
  isTrending?: boolean;
}

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface Order {
  customerName: string;
  phone: string;
  address: string;
  items: CartItem[];
  paymentMethod: string;
  total: number;
}
