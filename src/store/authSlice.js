import { createSlice } from "@reduxjs/toolkit";
import { fetchDataFromLocalStorage } from "../utilities/localStorageMethods";

const authInitialState = {
  user: fetchDataFromLocalStorage("user"),
  addresses: null,
  orders: null,
};

// TODO: add logic for updating other fields as well
const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },

    login(state, action) {
      state.user = action.payload;
    },

    logout(state, action) {
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
