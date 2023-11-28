import { createSlice } from "@reduxjs/toolkit";

const initialState: number | null = localStorage.getItem("step")
  ? Number(localStorage.getItem("step"))
  : 1;

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    nextStep(state) {
      localStorage.setItem("step", String(state + 1));
      return state + 1;
    },
    backStep(state) {
      localStorage.setItem("step", String(state - 1));
      return state - 1;
    },
  },
});

export const { nextStep, backStep } = stepSlice.actions;

export default stepSlice.reducer;
