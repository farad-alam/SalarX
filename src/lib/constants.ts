export const BRAND = {
  name: "SalarX",
  description: "Premium Men's Streetwear & Fashion. Elevate your everyday.",
  phone: "+8801700000000",
  whatsappNumber: "8801700000000",
  address: "New Market, Chapainawabgonj, Rajshahi, Bangladesh",
  currency: "৳",
  domain: "https://salarx.vercel.app", // Placeholder for actual domain
} as const;

export const SOCIAL_LINKS = {
  facebook: "#",
  instagram: "#",
  twitter: "#",
} as const;

export const PAYMENT_METHODS = [
  { id: "bkash", name: "bKash" },
  { id: "nagad", name: "Nagad" },
  { id: "rocket", name: "Rocket" },
] as const;
