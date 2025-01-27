import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [] as IProduct[],
  },
  reducers: {
    setAddToCart: (state, action) => {
      const found = state.products.find(
        (item) => item.id === action.payload.id,
      );
      if (!found) {
        state.products.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      );
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const { setAddToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
