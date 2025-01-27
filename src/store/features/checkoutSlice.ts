import { createSlice } from "@reduxjs/toolkit";
import { IBillingAddress, IProduct } from "../../types";

export const CheckoutSlice = createSlice({
  name: "orders",
  initialState: {
    products: [] as IProduct[],
    billingDetails: {
      name: "",
      address: "",
      pincode: "",
      city: "",
      email: "",
    } as IBillingAddress,
  },
  reducers: {
    setCheckout: (state, action) => {
      state.products = action.payload;
    },
    clearCheckout: (state) => {
      state.products = [];
      state.billingDetails = {
        name: "",
        address: "",
        pincode: "",
        city: "",
        email: "",
      };
    },
    setBillingDetails: (state, action) => {
      state.billingDetails = action.payload;
    },
  },
});

export const { setCheckout, clearCheckout, setBillingDetails } =
  CheckoutSlice.actions;

export default CheckoutSlice.reducer;
