import { api } from "./api";
import { BRAND, BY_ID, CATEGORY, REGISTER } from "../constants";

export async function putCategory(category: string) {
    const { data } = await api.put(`${REGISTER}${BRAND}`, {
      category
    });
    return data;
  } 
  
export async function postCategory(category: string) {
  const { data } = await api.post(`${REGISTER}${BRAND}`, {
    category
  });
  return data;
} 

export async function deleteCategoryById(category: string) {
  const { data } = await api.delete(`${REGISTER}${BRAND}/${category}`, {});
  return data;
} 

export async function searchCategory() {
  const { data } = await api.get(`${REGISTER}${CATEGORY}`, {});
  return data;
} 

export async function searchCategoryById(category: string) {
  const { data } = await api.get(`${REGISTER}${BRAND}/${category}`, {});
  return data;
} 