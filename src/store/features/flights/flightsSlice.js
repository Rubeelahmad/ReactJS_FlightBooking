import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../utils/api";
const filghtsConstant = {
  filghts: "filghts",
  availabelFlights: "availabelFlights",
};

export const getAvailableFightsAsync = createAsyncThunk(
  filghtsConstant.availabelFlights,
  async (params) => {
    const response = await api.fetchFlights(params);
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
