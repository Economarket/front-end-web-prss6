import { api } from "./api";
import { CATEGORY, REGISTER, SEARCH } from "../constants";
import { Category } from "./models";

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


export async function searchCategoryById(categoryId: string) {
  const { data } = await api.get(`${SEARCH}${CATEGORY}/${categoryId}`, {});
  return data;
}

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await api.get(`${SEARCH}${CATEGORY}`, {});
  return data;
} 