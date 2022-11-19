import axios from "axios";
import { BASE_URL } from "../constants";
import { refreshToken } from "./auth";

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use((req) => {
  const access_token: string = localStorage.getItem("token") || "";
  if(req.headers && !req.headers.Authorization){
    req.headers.Authorization = `Bearer ${access_token}`;
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

const newAccessToken = async () => {
  return new Promise((resolve, reject) => {
    try {
      const refresh_token = localStorage.getItem("refresh_token");
      if(refresh_token){
        refreshToken(refresh_token).then((res) => {
          localStorage.setItem("token", res.access_token);
          window.location.reload();
        });
      }
    } catch (err) {
      return reject(err);
    }
  });
};