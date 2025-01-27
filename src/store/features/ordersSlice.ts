import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

export const cartSlice = createSlice({
  name: "orders",
  initialState: {
    products: [] as IProduct[],
  },
  reducers: {
    setOrders: (state, action) => {
      state.products = action.payload;
    },
    clearOrders: (state) => {
      state.products = [];
    },
  },
});

export const { setOrders, clearOrders } = cartSlice.actions;

export default cartSlice.reducer;
