import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  showMenu: false,
  alertStatus: "danger",
  alertMessage: null,
  isLoading: false,
  currentSelectedCategory: "chicken",
  cartShowState: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggleMenu(state) {
      state.showMenu = !state.showMenu;
    },
    hideMenu(state) {
      state.showMenu = false;
    },
    setAlertMessage(state, action) {
      state.alertMessage = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setCurrentSelectedCategory(state, action) {
      state.currentSelectedCategory = action.payload;
    },
    showCart(state) {
      state.cartShowState = true;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
