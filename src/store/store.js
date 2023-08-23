// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authentication/authSlice";
import alertReducer from "./features/generalSlice/alertSlice";

const store = configureStore({
  reducer: {
    auth: authReducer, // You can add more reducers here
    alert: alertReducer,
  },
});

export default store;
