import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cart-slice";
import UIslice from "./ui-slice";

const store = configureStore({
  reducer: { ui: UIslice.reducer, cart: cartslice.reducer },
});

export default store;
