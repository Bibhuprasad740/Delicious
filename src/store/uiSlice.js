import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  showMenu: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggleMenu(state) {
      console.log(process.env.LINK);
      state.showMenu = !state.showMenu;
    },
    hideMenu(state) {
      state.showMenu = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
