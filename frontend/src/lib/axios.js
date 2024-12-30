import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "www.matangievent.com/api",
  withCredentials: true,
});