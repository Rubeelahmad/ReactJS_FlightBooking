import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../utils/api";
import { setLoading } from "../generalSlice/alertSlice";
const filghtsConstant = {
  flights: "flights",
  availabelFlights: "availabelFlights",
};

const initialState = {
  flights: [],
  selectedFlight: null,
};

export const getAvailableFightsAsync = createAsyncThunk(
  filghtsConstant.availabelFlights,
  async (params, { dispatch }) => {
    dispatch(setLoading(true));
    const response = await api.fetchFlights(params);
    console.log(response);
    dispatch(setLoading(false));
    return response;
  }
);
const filghtSlice = createSlice({
  name: filghtsConstant.flights,
  initialState,
  reducers: {
    selectedFlightData: (state, action) => {
      state.selectedFlight = action.payload;
    },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getAvailableFightsAsync.fulfilled, (state, action) => {
      state.flights = action.payload?.data?.flights || [];
    });
  },
});
export const { selectedFlightData, reset } = filghtSlice.actions;
export default filghtSlice.reducer;
