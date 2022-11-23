import axios from "axios";
import { BASE_URL } from "../constants";
import { newAccessToken } from "./auth";

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use((req) => {
  const token: string = localStorage.getItem("token") || "";
  if(req.headers && !req.headers.Authorization){
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

api.interceptors.response.use((res) => {
  return res;
}, async (error) => {
  const access_token = localStorage.getItem("token");
  if ((error.response.status === 401 || error.response.status === 403) && access_token) {
    newAccessToken();
  }
  return Promise.reject(error);
});