// src/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../utils/api";
const AUTH_CONSTANT = {
  signInUser: "signInUser",
  registerUser: "registerUser",
};

const initialState = {
  user: null,
  isLoggedIn: false,
  message: "",
};

// Async thunk to Sign in
export const loginInUserAsync = createAsyncThunk(
  AUTH_CONSTANT.signInUser,
  async ({ email, password }) => {
    const response = await api.loginInUserAPI({ email, password });
    console.log(response);
    return response;
  }
);
export const registerUserAsync = createAsyncThunk(
  AUTH_CONSTANT.registerUser,
  async (params) => {
    const fullName = params.fullName.split(" ");
    const firstName = fullName[0];
    const lastName = fullName[1];
    const response = await api.registerUser({ ...params, firstName, lastName });
    console.log(response);
    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginInUserAsync.fulfilled, (state, action) => {
      state.isLoggedIn = action.payload.status;
      state.message = action.payload.message;
    });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
