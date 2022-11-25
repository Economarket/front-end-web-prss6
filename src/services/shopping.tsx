import { api } from "./api";
import { SHOPPING, USER } from "../constants";
import { ProductList, ShoppingList } from "./models";

export const getShoppingList = async (user_id: number): Promise<ShoppingList[]> => {
  const { data } = await api.get(`${SHOPPING}${USER}/${user_id}`, {});
  return data;
};
  
export const createShoppingList = async (shopping_list: ShoppingList) => {
  return await api.post(`${SHOPPING}`, shopping_list);
};

export const updateShoppingList = async (shopping_list: ShoppingList) => {
  return await api.put(`${SHOPPING}`, shopping_list);
};

export const deleteShoppingList = async (shopping_id: number) => {
  return await api.delete(`${SHOPPING}/${shopping_id}`);
};

export const addProductToShoppingList = async (shopping_list: ShoppingList, product: ProductList, user_id: number) => {
  const product_list = shopping_list.productList;
  product_list.push(product);
  const sl: ShoppingList = {
    ...shopping_list, 
    productList: product_list,
    user: {
      id: user_id
    }
  };
  return updateShoppingList(sl);
};
export const deleteProductToShoppingList = async (shopping_list: ShoppingList, product: ProductList, user_id: number) => {
  const product_list = shopping_list.productList
  const index = product_list.indexOf(product)
  product_list.splice(index, 1)
  const sl: ShoppingList = {
    ...shopping_list, 
    productList: product_list,
    user: {
      id: user_id
    }
  };
  return updateShoppingList(sl);
};
