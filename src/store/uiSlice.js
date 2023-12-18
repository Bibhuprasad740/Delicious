import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  showMenu: false,
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
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;