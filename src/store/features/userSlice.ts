import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  name: string;
  email: string;
  phoneNumber: string;
  plan: number;
  isYear: boolean;
  addons: number[];
}

export interface Info {
  name: string;
  email: string;
  phoneNumber: string;
}

const initialState: User = {
  name: "",
  email: "",
  phoneNumber: "",
  plan: 0,
  isYear: false,
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
    },
  },
});

export const { setInfo } = userSlice.actions;

export default userSlice.reducer;
