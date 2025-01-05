import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://message.matangievent.com/api",
  withCredentials: true,
});