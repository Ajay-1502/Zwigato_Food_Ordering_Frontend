import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    removeItem: (state) => {
      //Action parameter is not required as it's not used here
      state.items.pop();
    },

    clearCart: (state) => {
      //Action parameter is not required as it's not used here
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
