import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";

const CartStore = configureStore({
  reducer: CartSlice.reducer,
});

export default CartStore;
