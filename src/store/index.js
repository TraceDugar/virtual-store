import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productsReducer from "./products";
import categoryReducer from "./categories";
import cartReducer from "./cart";

let reducers = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  cart: cartReducer,
});

const store = () =>  createStore(reducers, composeWithDevTools());

export default store();
  