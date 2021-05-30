import { configureStore } from "@reduxjs/toolkit";

// Slices List
import phone from "./slices/phone";

// READ: https://redux.js.org/recipes/configuring-your-store
const reducer = {
  phone: phone,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
