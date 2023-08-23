import { createSlice } from "@reduxjs/toolkit";
const alterConstant = {
  alert: "alert",
};

const alertSlice = createSlice({
  name: alterConstant.alert,
  initialState: {
    alertMsg: { open: false },
  },
  reducers: {
    showAlertMessage: (state, action) => {
      state.alertMsg = {
        open: action.payload?.open,
        message: action.payload?.message,
        severity: action.payload?.severity,
      };
    },
  },
});

export const { showAlertMessage } = alertSlice.actions;

export default alertSlice.reducer;
