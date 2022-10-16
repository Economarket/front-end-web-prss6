import { api } from "./api";
import { SHOPPING, USER } from "../constants";


export async function putShopping(shoppingId: string) {
    const { data } = await api.put(`${SHOPPING}/${shoppingId}`, {});
    return data;
  } 
  
  export async function postShopping(shoppingId: string) {
    const { data } = await api.post(`${SHOPPING}/${shoppingId}`, {});
    return data;
  } 
  
  export async function deleteShopping(shoppingId: string) {
    const { data } = await api.delete(`${SHOPPING}/${shoppingId}`, {});
    return data;
  } 
  
  export async function getShoppingByUser(shoppingId: string) {
    const { data } = await api.get(`${SHOPPING}${USER}/${shoppingId}`, {});
    return data;
  } 
  
  export async function getShoppingById(shoppingId: string) {
    const { data } = await api.get(`${SHOPPING}/${shoppingId}`, {});
    return data;
  } 
  