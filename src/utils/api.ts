import axios from "axios";
import APP_ENV from "./app-env";

const API = axios.create({
  baseURL: APP_ENV.APIBaseURL,
  headers: {
    "Content-Type": "application/json",
    api_key: APP_ENV.APIKey,
    access_token: APP_ENV.accessToken,
  },
});

export default API;
