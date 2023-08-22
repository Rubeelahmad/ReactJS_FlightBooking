import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
console.log("REACT_APP_API_URL", apiUrl);
const loginInUserAPI = async (params) => {
  const response = await axios.post(apiUrl + "api/login", params);
  console.log("API Response:", response.data);
};

export default { loginInUserAPI };
