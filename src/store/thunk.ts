import { Dispatch } from "redux";
import { clearCart } from "./features/cartSlice";
import { setOrders } from "./features/ordersSlice";
import { AppState } from "./store";
import { setCheckout } from "./features/checkoutSlice";

export const moveCartToOrders =
  () => (dispatch: Dispatch, getState: () => AppState) => {
    const { cart } = getState();
    const { products } = cart;

    dispatch(setCheckout(products));
  };
