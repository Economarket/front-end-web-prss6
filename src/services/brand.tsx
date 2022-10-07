import { api } from "./api";
import { BRAND, BY_ID, REGISTER } from "../constants";

export async function putBrand(id: string) {
    const { data } = await api.put(`${REGISTER}${BRAND}`, {
      id
    });
    return data;
  } 
  
  export async function postBrand(brand: string) {
    const { data } = await api.post(`${REGISTER}${BRAND}`, {
      brand
    });
    return data;
  } 
  
  export async function deleteBrandById(brand: string) {
    const { data } = await api.delete(`${REGISTER}${BRAND}/${brand}`, {});
    return data;
  } 

  export async function searchBrand() {
    const { data } = await api.get(`${REGISTER}${BRAND}`, {});
    return data;
  } 
  
  export async function searchBrandById(brand: string) {
    const { data } = await api.get(`${REGISTER}${BRAND}/${brand}`, {});
    return data;
  } 