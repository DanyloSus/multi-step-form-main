import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
  plan: number | null;
  isYear: boolean | null;
  addonF: boolean | null;
  addonS: boolean | null;
  addonT: boolean | null;
}

export interface Info {
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
}

export interface Plan {
  plan: number | null;
  isYear: boolean | null;
}

export interface Addons {
  addonF: boolean | null;
  addonS: boolean | null;
  addonT: boolean | null;
}

const initialState: User = {
  name: localStorage.getItem("name") ? localStorage.getItem("name") : "",
  email: localStorage.getItem("email") ? localStorage.getItem("email") : "",
  phoneNumber: localStorage.getItem("phoneNumber")
    ? localStorage.getItem("phoneNumber")
    : "",
  plan: localStorage.getItem("plan") ? Number(localStorage.getItem("plan")) : 1,
  isYear: localStorage.getItem("isYear")
    ? Boolean(localStorage.getItem("isYear"))
    : false,
  addonF: localStorage.getItem("addonF")
    ? Boolean(localStorage.getItem("addonF"))
    : false,
  addonS: localStorage.getItem("addonS")
    ? Boolean(localStorage.getItem("addonS"))
    : false,
  addonT: localStorage.getItem("addonT")
    ? Boolean(localStorage.getItem("addonT"))
    : false,
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
    setPlan(state, action: PayloadAction<Plan>) {
      state.plan = action.payload.plan;
      state.isYear = action.payload.isYear;
      localStorage.setItem("plan", String(action.payload.plan));
      localStorage.setItem("isYear", String(action.payload.isYear));
    },
    setAddons(state, action: PayloadAction<Addons>) {
      state.addonF = action.payload.addonF;
      state.addonS = action.payload.addonS;
      state.addonT = action.payload.addonT;
      localStorage.setItem("addonF", String(action.payload.addonF));
      localStorage.setItem("addonS", String(action.payload.addonS));
      localStorage.setItem("addonT", String(action.payload.addonT));
    },
  },
});

export const { setInfo, setPlan, setAddons } = userSlice.actions;

export default userSlice.reducer;
