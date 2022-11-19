import { api } from "./api";
import { SHOPPING, USER } from "../constants";
import { ShoppingList } from "./models";

export const getShoppingList = async (user_id: number): Promise<ShoppingList[]> => {
  const { data } = await api.get(`${SHOPPING}${USER}/${user_id}`, {});
  return data;
} 
  
  