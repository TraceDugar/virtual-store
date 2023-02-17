import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";
import categoryReducer from "./categories";
import cartReducer from "./cart";

// Reducers are combined here in the Store.

const store = configureStore({
  reducer: {
    products: productsReducer,
    category: categoryReducer,
    cart: cartReducer,
  }
});

export default store;
