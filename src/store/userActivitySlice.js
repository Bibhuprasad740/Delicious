import { createSlice } from "@reduxjs/toolkit";

const userActivityInitialState = {
  cart: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  recentlyViewedProducts: [],
};

const userActivitySlice = createSlice({
  name: "userActivity",
  initialState: userActivityInitialState,
  reducers: {
    replaceCart(state, action) {
      state.cart.items = action.payload.items;
      state.cart.totalQuantity = action.payload.totalQuantity;
    },
  },
});

// TODO: add logic for updating other fields as well

export const userActivityActions = userActivitySlice.actions;
export default userActivitySlice;
