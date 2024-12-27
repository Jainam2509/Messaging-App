import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://messaging-app-backend-nu.vercel.app/api",
  withCredentials: true,
});