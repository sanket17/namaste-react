import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

export const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
