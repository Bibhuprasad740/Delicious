import { createSlice } from "@reduxjs/toolkit";

const initialFoodsState = {
  foods: null,
};

const foodsSlice = createSlice({
  name: "foods",
  initialState: initialFoodsState,
  reducers: {
    setFoods(state, action) {
      state.foods = action.payload;
    },
  },
});

export const foodsActions = foodsSlice.actions;

export default foodsSlice;
