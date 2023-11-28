import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
  plan: number | null;
  isYear: boolean | null;
  addons: number[] | null;
}

export interface Info {
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
}

const initialState: User = {
  name: localStorage.getItem("name") ? localStorage.getItem("name") : "",
  email: localStorage.getItem("email") ? localStorage.getItem("email") : "",
  phoneNumber: localStorage.getItem("phoneNumber")
    ? localStorage.getItem("phoneNumber")
    : "",
  plan: localStorage.getItem("plan") ? Number(localStorage.getItem("plan")) : 0,
  isYear: localStorage.getItem("isYear")
    ? Boolean(localStorage.getItem("isYear"))
    : false,
  addons: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setInfo(state, action: PayloadAction<Info>) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      localStorage.setItem("name", String(action.payload.name));
      localStorage.setItem("email", String(action.payload.email));
      localStorage.setItem("phoneNumber", String(action.payload.phoneNumber));
    },
    setPlan(state, action: PayloadAction<number>) {
      state.plan = action.payload;
      localStorage.setItem("plan", String(action.payload));
    },
  },
});

export const { setInfo, setPlan } = userSlice.actions;

export default userSlice.reducer;
