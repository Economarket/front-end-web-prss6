import { api } from "./api";
import { SHOPPING, USER } from "../constants";
import { ShoppingList } from "./models";

export const getShoppingList = async (user_id: number): Promise<ShoppingList[]> => {
  const { data } = await api.get(`${SHOPPING}${USER}/${user_id}`, {});
  return data;
};
  
export const createShoppingList = async (shopping_list: ShoppingList) => {
  return await api.post(`${SHOPPING}`, shopping_list);
};

export const deleteShoppingList = async (shopping_id: number) => {
  return await api.delete(`${SHOPPING}/${shopping_id}`);
};
