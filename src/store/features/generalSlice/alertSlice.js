import { createSlice } from "@reduxjs/toolkit";
const alterConstant = {
  alert: "alert",
};

const alertSlice = createSlice({
  name: alterConstant.alert,
  initialState: {
    alertMsg: { open: false },
    loading: false,
  },
  reducers: {
    showAlertMessage: (state, action) => {
      state.alertMsg = {
        open: action.payload?.open,
        message: action.payload?.message,
        severity: action.payload?.severity,
      };
    },
    setLoading: (state, action) => {
      state.loading = Boolean(action.payload);
    },
  },
});

export const { showAlertMessage, setLoading } = alertSlice.actions;

export default alertSlice.reducer;
