import axios from "axios";

const axiosCustom = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

export default axiosCustom;
