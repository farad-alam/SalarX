import { Syne, Inter, Cormorant_Garamond } from "next/font/google";
import "@/styles/globals.css";
import { BRAND } from "@/lib/constants";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: `%s | ${BRAND.name}`,
    default: `${BRAND.name} — Premium Men's Streetwear`,
  },
  description: BRAND.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable} ${cormorant.variable}`}>
        <CartProvider>
          <div className="w-full overflow-x-hidden flex flex-col min-h-screen">
            <Header />
            <main className="w-full flex-1 flex flex-col items-center">
              <div className="w-full flex flex-col">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
