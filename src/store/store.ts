import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import homeReducer from "./features/homeSice";
import searchReducer from "./features/searchSlice";
import favouritesReducer from "./features/favSlice";
import productDetailReducer from "./features/detailsSlice";
import cartReducer from "./features/cartSlice";
import ordersReducer from "./features/ordersSlice";
import checkoutReducer from "./features/checkoutSlice";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage";
import { isServer } from "../utils/environment";

const combinedReducer = combineReducers({
  home: homeReducer,
  search: searchReducer,
  favourites: favouritesReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
  orders: ordersReducer,
  checkout: checkoutReducer,
});

const makeStore = () => {
  const configuredStore = configureStore({
    reducer: combinedReducer,
    preloadedState: loadFromLocalStorage(),
    devTools: process.env.NODE_ENV !== "production",
  });

  if (!isServer()) {
    configuredStore.subscribe(() => {
      saveToLocalStorage(configuredStore.getState());
    });
  }
  return configuredStore;
};

export const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(makeStore, { debug: true });
