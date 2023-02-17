import { createSlice } from '@reduxjs/toolkit';


//  Initial State of the Cart.
let initialState = [];


// Cart functionality Slice.
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    // Add Item functionality.
    addItem: (state, action) => {
      const { name, price } = action.payload;
      const itemIndex = state.findIndex((product) => product.name === name);
      if (itemIndex === -1) {
        // If Item doesn't exist in cart, add a new item object to the cart.
        state.push({ name, price, count: 1 });
      } else {
        // Else Item already exists in cart, update the count of that item.
        state[itemIndex].count += 1;
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.findIndex((product) => product.name === action.payload.name);
      if (itemIndex !== -1) {
        if (state[itemIndex].count > 1) {
          // If the item count is greater than 1, decrement the count.
          state[itemIndex].count -= 1;
        } else {
          // If the item count is 1, remove the entire item.
          state.splice(itemIndex, 1);
        }
      }
    },
  }
});

// Export functionality.
export const { addItem, removeItem, incrementCount, decrementCount, resetCount } = cartSlice.actions;
export default cartSlice.reducer;