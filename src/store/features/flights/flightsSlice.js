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
  tripType: "OneWay",
  flightType: "",
  departureDate: "",
  returnDate: "",
  airportOriginCode: "",
  airportDestinationCode: "",
  adults: 1,
  children: 0,
  infants: 0,
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
    setTripType: (state, action) => {
      state.tripType = action.payload;
    },
    setFlightType: (state, action) => {
      state.flightType = action.payload;
    },
    setDepartureDate: (state, action) => {
      state.departureDate = action.payload;
    },
    setReturnDate: (state, action) => {
      state.returnDate = action.payload;
    },
    setAirportOriginCode: (state, action) => {
      state.airportOriginCode = action.payload;
    },
    setAirportDestinationCode: (state, action) => {
      state.airportDestinationCode = action.payload;
    },
    setAdults: (state, action) => {
      state.adults = action.payload;
    },
    setChildren: (state, action) => {
      state.children = action.payload;
    },
    setInfants: (state, action) => {
      state.infants = action.payload;
    },

    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getAvailableFightsAsync.fulfilled, (state, action) => {
      state.flights = action.payload?.data?.flights || [];
    });
  },
});
export const {
  selectedFlightData,
  reset,
  setTripType,
  setFlightType,
  setDepartureDate,
  setReturnDate,
  setAirportOriginCode,
  setAirportDestinationCode,
  setAdults,
  setChildren,
  setInfants,
} = filghtSlice.actions;
export default filghtSlice.reducer;
