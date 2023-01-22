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

// const cartReducer = (state = initialState, action) => {
//   const { type, payload } = action;
  
//   switch (type) {
//     case 'ADD':
//       return [...state, payload];
//     case 'REMOVE':
//       return state.filter(product => product.name !== payload.name);
//     default:
//       return state;
//   }
// };

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
