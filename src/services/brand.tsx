import { api } from "./api";
import { BRAND, REGISTER } from "../constants";

export async function putBrand(brandId: string) {
    const { data } = await api.put(`${REGISTER}${BRAND}`, {
      brandId
    });
    return data;
  } 
  
  export async function postBrand(brandId: string) {
    const { data } = await api.post(`${REGISTER}${BRAND}`, {
      brandId
    });
    return data;
  } 
  
  export async function deleteBrandById(brandId: string) {
    const { data } = await api.delete(`${REGISTER}${BRAND}/${brandId}`, {});
    return data;
  } 

  export async function searchBrand() {
    const { data } = await api.get(`${REGISTER}${BRAND}`, {});
    return data;
  } 
  
  export async function searchBrandById(brandId: string) {
    const { data } = await api.get(`${REGISTER}${BRAND}/${brandId}`, {});
    return data;
  } 