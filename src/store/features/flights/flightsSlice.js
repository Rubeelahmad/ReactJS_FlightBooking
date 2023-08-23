import { createSlice } from "@reduxjs/toolkit";
const filghtsConstant = {
  filghts: "filghts",
  availabelFlights: "availabelFlights",
};

export const getAvailableFightsAsync = createAsyncThunk(
  filghtsConstant.availabelFlights,
  async ({ email, password }) => {
    const response = await api.loginInUserAPI({ email, password });
    console.log(response);
    return response;
  }
);
const filghtSlice = createSlice({
  name: filghtsConstant.filghts,
  initialState: {
    filghts: null,
  },
  reducers: {},
});

export const { showAlertMessage } = filghtSlice.actions;

export default filghtSlice.reducer;
