import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://www.matangievent.com",
  withCredentials: true,
});