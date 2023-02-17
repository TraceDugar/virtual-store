import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// The products slice reducer is where the app get the products state from the API.

// The initial state of the App.
const initialState = [];

// The slice is created here with the setProducts and getProducts functions for the API.
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => action.payload,
    updateProduct: (state, action) => state.map(product => (product._id !== action.payload._id ? product : action.payload)),
  }
})

//  These are the slice actions for setProducts and updateProducts.
const { setProducts, updateProduct } = productsSlice.actions;

// This is where the getProducts function call is made to the API.
export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  dispatch(setProducts(response.data.results));
};

//  The is where the inventory adjustment is made to the API.
export const adjustInventory = (product) => async (dispatch, getState) => {
  let updatedProduct = { ...product, inStock: product.inStock - 1 }
  let response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, updatedProduct);
  dispatch(updateProduct(response.data));
};

export default productsSlice.reducer;
