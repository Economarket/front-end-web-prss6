import { api } from "./api";
import { SHOPPING, USER } from "../constants";


export async function putShopping(id: string) {
    const { data } = await api.put(`${SHOPPING}/${id}`, {});
    return data;
  } 
  
  export async function postShopping(id: string) {
    const { data } = await api.post(`${SHOPPING}/${id}`, {});
    return data;
  } 
  
  export async function deleteShopping(id: string) {
    const { data } = await api.delete(`${SHOPPING}/${id}`, {});
    return data;
  } 
  
  export async function getShoppingByUser(id: string) {
    const { data } = await api.get(`${SHOPPING}${USER}/${id}`, {});
    return data;
  } 
  
  export async function getShoppingById(id: string) {
    const { data } = await api.get(`${SHOPPING}/${id}`, {});
    return data;
  } 
  