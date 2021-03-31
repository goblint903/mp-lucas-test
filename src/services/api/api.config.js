import axios from "axios";

const API_URL = "https://vpic.nhtsa.dot.gov/api";

let instance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export default instance;
