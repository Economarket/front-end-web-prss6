import { api } from "./api";
import { BRAND, CATEGORY, REGISTER } from "../constants";

export async function putCategory(categoryId: string) {
    const { data } = await api.put(`${REGISTER}${CATEGORY}`, {
      categoryId
    });
    return data;
  } 
  
export async function postCategory(categoryId: string) {
  const { data } = await api.post(`${REGISTER}${CATEGORY}`, {
    categoryId
  });
  return data;
} 

export async function deleteCategoryById(categoryId: string) {
  const { data } = await api.delete(`${REGISTER}${CATEGORY}/${categoryId}`, {});
  return data;
} 

export async function searchCategory() {
  const { data } = await api.get(`${REGISTER}${CATEGORY}`, {});
  return data;
} 

export async function searchCategoryById(categoryId: string) {
  const { data } = await api.get(`${REGISTER}${CATEGORY}/${categoryId}`, {});
  return data;
} 