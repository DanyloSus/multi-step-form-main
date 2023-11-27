import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 1;

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    nextStep(state) {
      return state + 1;
    },
    backStep(state) {
      return state - 1;
    },
  },
});

export const { nextStep, backStep } = stepSlice.actions;

export default stepSlice.reducer;
