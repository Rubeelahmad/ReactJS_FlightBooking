// src/store.js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./features/authentication/authSlice";
import alertReducer from "./features/generalSlice/alertSlice";
import flightReducer from "./features/flights/flightsSlice";
import errorHandleMiddleWare from "./middleware/errorHandleMiddleware";

const store = configureStore({
  reducer: {
    auth: authReducer, // You can add more reducers here
    alert: alertReducer,
    flights: flightReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(errorHandleMiddleWare),
});

export default store;
