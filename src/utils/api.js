import axios from "axios";
import qs from "qs";
const apiUrl = process.env.REACT_APP_API_URL;

console.log("REACT_APP_API_URL", apiUrl);
const loginInUserAPI = async (params) => {
  const response = await axios.post(apiUrl + "api/login", params);
  console.log("API Response:", response.data);
  return response.data;
};
const otpCodeValidateUserAPI = async (params) => {
  const response = await axios.post(apiUrl + "api/loginOtp", params);
  console.log("API Response:", response.data);
  return response.data;
};
const registerUser = async (params) => {
  const response = await axios.post(apiUrl + "api/register", params);
  console.log("API Response:", response.data);
  return response.data;
};

const fetchFlights = async (data) => {
  const path = "api/flights_search";
  const params = {
    journeyType: "OneWay",
    adults: 2,
    childs: 1,
    infants: 0,
    class: "Economy",
    "OriginDestinationInfo[0][airportOriginCode]": "LHE",
    "OriginDestinationInfo[0][airportDestinationCode]": "DWC",
    "OriginDestinationInfo[0][departureDate]": "2023-08-31",
  };
  try {
    const queryString = qs.stringify(params, { indices: false });
    const urlWithParams = `${apiUrl + path}?${queryString}`;

    const response = await axios.post(urlWithParams);
    console.log("API Response:", response.data);
    // Handle the API response here
  } catch (error) {
    console.error("API Error:", error);
    // Handle errors here
  }
};

export default {
  loginInUserAPI,
  registerUser,
  otpCodeValidateUserAPI,
  fetchFlights,
};
