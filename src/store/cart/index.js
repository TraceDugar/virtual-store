import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => [...state, action.payload],
    removeItem: (state, action) => state.filter(product => product.name !== action.payload.name),
  }
})


export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
