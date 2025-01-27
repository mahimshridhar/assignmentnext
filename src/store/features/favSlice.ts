import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    products: [] as IProduct[],
  },
  reducers: {
    setAddToFavorites: (state, action) => {
      const found = state.products.find((fav) => fav.id === action.payload.id);
      if (!found) {
        state.products.push(action.payload);
      }
    },
    removeFavorites: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      );
    },
  },
});

export const { setAddToFavorites, removeFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
