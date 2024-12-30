import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://messaging-app-j3o4.onrender.com/api",
  withCredentials: true,
});