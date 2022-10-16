import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  // headers: {
  //   "Accept": "*/*",
  //   "Accept-Encoding": "gzip, deflate, br",
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //   'Access-Control-Allow-Credentials': 'true'
  // },
});
