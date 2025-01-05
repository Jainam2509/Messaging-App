import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://event.matangievent.com/api",
  withCredentials: true,
});