// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authentication/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer, // You can add more reducers here
  },
});

export default store;
