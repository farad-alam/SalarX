"use client";

import React, { createContext, useReducer, useEffect, ReactNode } from "react";
import { CartItem } from "@/types";

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { productId: string; variantId: string } }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; variantId: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartState };

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

function calculateTotals(items: CartItem[]) {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return { total, itemCount };
}

function cartReducer(state: CartState, action: CartAction): CartState {
  let newItems: CartItem[];

  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.items.findIndex(
        (i) => i.product.id === action.payload.product.id && i.variant.id === action.payload.variant.id
      );

      if (existingItemIndex > -1) {
        newItems = [...state.items];
        newItems[existingItemIndex].quantity += action.payload.quantity;
      } else {
        newItems = [...state.items, action.payload];
      }
      break;
    case "REMOVE_ITEM":
      newItems = state.items.filter(
        (i) => !(i.product.id === action.payload.productId && i.variant.id === action.payload.variantId)
      );
      break;
    case "UPDATE_QUANTITY":
      newItems = state.items.map((i) => {
        if (i.product.id === action.payload.productId && i.variant.id === action.payload.variantId) {
          return { ...i, quantity: action.payload.quantity };
        }
        return i;
      });
      break;
    case "CLEAR_CART":
      newItems = [];
      break;
    case "LOAD_CART":
      return action.payload;
    default:
      return state;
  }

  const totals = calculateTotals(newItems);
  return { ...state, items: newItems, ...totals };
}

export const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("salarx_cart");
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        dispatch({ type: "LOAD_CART", payload: parsed });
      } catch (e) {
        console.error("Failed to parse cart from local storage");
      }
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    // Prevent overriding localStorage with initial state on first render before load
    if (state !== initialState || localStorage.getItem("salarx_cart")) {
        localStorage.setItem("salarx_cart", JSON.stringify(state));
    }
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
