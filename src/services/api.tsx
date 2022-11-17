import axios from "axios";
import { BASE_URL } from "../constants";

export const api = axios.create({
  baseURL: "https://api-economarket.herokuapp.com/",

});
