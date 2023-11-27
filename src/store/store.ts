import { configureStore } from "@reduxjs/toolkit";
import stepSlice from "./features/stepSlice";
import userSlice from "./features/userSlice";

const store = configureStore({
  reducer: {
    step: stepSlice,
    user: userSlice,
  },
});

export default store;

export type Store = ReturnType<typeof store.getState>;
