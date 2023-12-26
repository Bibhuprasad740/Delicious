import { createSlice } from "@reduxjs/toolkit";
import {
  clearLocalStoreageForKey,
  fetchDataFromLocalStorage,
  setDataToLocalStorage,
} from "../utilities/localStorageMethods";

const userActivityInitialState = {
  cart: fetchDataFromLocalStorage("cart") ?? [],
  totalQuantity: 0,
  changed: false,
  totalPrice: 0,
  cartShowState: false,
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
    showCart(state) {
      state.cartShowState = true;
    },
    hideCart(state) {
      state.cartShowState = false;
    },
    setCart(state, action) {
      state.cart = action.payload;
      for (let i = 0; i < action.payload.length; i++) {
        state.totalQuantity += action.payload[i].quantity;
        state.totalPrice += action.payload[i].totalPrice;
      }
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.totalPrice += parseInt(newItem.price);
      state.totalQuantity++;
      state.changed = true;

      const existingItem = state.cart.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.cart.push({
          ...newItem,
          totalPrice: parseInt(newItem.price),
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += parseInt(newItem.price);
      }

      setDataToLocalStorage("cart", state.cart);
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      state.totalQuantity--;
      state.changed = true;

      let existingItem = null;
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === id) {
          existingItem = state.cart[i];
          break;
        }
      }
      // console.log(existingItem);
      state.totalPrice -= parseInt(existingItem.price);
      if (existingItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= parseInt(existingItem.price);
      }

      setDataToLocalStorage("cart", state.cart);
    },
    clearCart(state) {
      state.cart = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
      state.changed = true;
      clearLocalStoreageForKey("cart");
    },
  },
});

// TODO: add logic for updating other fields as well

export const userActivityActions = userActivitySlice.actions;
export default userActivitySlice;
