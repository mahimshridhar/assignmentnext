import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { IProduct } from "../../types";

interface homeState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  products: Array<IProduct>;
}

const initialState: homeState = {
  status: "idle",
  error: null,
  products: [],
};

// Define the async thunk
export const fetchAllProducts = createAsyncThunk(
  "home/fetchAllProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  },
);

export const cartSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setAllProductsData: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action: any) => {
        return {
          ...state,
          ...action.payload.home,
        };
      })
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { setAllProductsData } = cartSlice.actions;

export default cartSlice.reducer;
