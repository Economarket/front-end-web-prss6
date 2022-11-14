import axios from "axios";
import { BASE_URL } from "../constants";

export const api = axios.create({
  baseURL: "https://api-economarket.herokuapp.com/",
  // headers: {
  //   "Accept": "*/*",
  //   "Accept-Encoding": "gzip, deflate, br",
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //   'Access-Control-Allow-Credentials': 'true'
  // },
});
