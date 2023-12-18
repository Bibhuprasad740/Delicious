import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userActivitySlice from "./userActivitySlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    userActivity: userActivitySlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
