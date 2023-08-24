// src/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../utils/api";
import { authInLocalStorage } from "../../../utils/helpers";
const AUTH_CONSTANT = {
  signInUser: "signInUser",
  registerUser: "registerUser",
  otpValidation: "otpValidation",
};

const initialState = {
  user: null,
  isLoggedIn: false,
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
export const otpValidateUserAsync = createAsyncThunk(
  AUTH_CONSTANT.otpValidation,
  async (otpCode, { getState }) => {
    const user = getState().auth.user;
    const params = {
      user_id: user.user_id,
      otp: parseInt(otpCode),
      app: "mobile",
      device_type: "ios",
    };
    const response = await api.otpCodeValidateUserAPI(params);
    console.log(response);
    if (response.data?.token) {
      authInLocalStorage.save(response.data?.token);
    }
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
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginInUserAsync.fulfilled, (state, action) => {
        state.user = action.payload.data;
      })
      .addCase(otpValidateUserAsync.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.status;
      });
  },
});

export const { login, logout, reset } = authSlice.actions;
export default authSlice.reducer;
