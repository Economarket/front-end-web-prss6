import { api } from "./api";
import { BRAND, BY_ID, CATEGORY, CONTEXT_AUTH, LOGOUT_ENDPOINT, MARKET, NAME, PEPRMISSION, PRODUCT, REGISTER, SHOPPING, SINGIN_ENDPOINT, TOKEN_REFRESH, USER } from "../constants";

export async function signIn(email: string, password: string) {
  const { data } = await api.post(`${CONTEXT_AUTH}${SINGIN_ENDPOINT}`, {
    email,
    password,
  });

  return data;
}

//verificar parametros
export async function signOut(token: string) {
  const { data } = await api.post(`${CONTEXT_AUTH}${LOGOUT_ENDPOINT}`, {
    token
  });
  return data;
}   

export async function refreshToken() {
  const { data } = await api.get(`${CONTEXT_AUTH}${TOKEN_REFRESH}`, {});
  return data;
}  

export async function getPermission() {
  const { data } = await api.get(`${PEPRMISSION}`, {});
  return data;
}  

export async function getPermissionById(id: string) {
  const { data } = await api.get(`${PEPRMISSION}${BY_ID}${id}`, {});
  return data;
}  

export async function putPermission(permission: string) {
  const { data } = await api.put(`${PEPRMISSION}`, {
    permission
  });
  return data;
}  

export async function postPermission(permission: string) {
  const { data } = await api.post(`${PEPRMISSION}`, {
    permission
  });
  return data;
}  

export async function deletePermissionById(id: string) {
  const { data } = await api.delete(`${PEPRMISSION}${BY_ID}${id}`, {});
  return data;
} 

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
  const { data } = await api.delete(`${REGISTER}${BRAND}${BY_ID}${brand}`, {});
  return data;
} 

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
  const { data } = await api.delete(`${REGISTER}${BRAND}${BY_ID}${category}`, {});
  return data;
} 

export async function putMarket(market: string) {
  const { data } = await api.put(`${REGISTER}${MARKET}`, {
    market
  });
  return data;
} 

export async function postMarket(market: string) {
  const { data } = await api.post(`${REGISTER}${BRAND}`, {
    market
  });
  return data;
} 

export async function deleteMarketById(market: string) {
  const { data } = await api.delete(`${REGISTER}${BRAND}${BY_ID}${market}`, {});
  return data;
} 

export async function putProduct(product: string) {
  const { data } = await api.put(`${REGISTER}${PRODUCT}`, {product});
  return data;
} 

export async function postProduct(product: string) {
  const { data } = await api.post(`${REGISTER}${PRODUCT}`, {product});
  return data;
} 

export async function deleteProductById(product: string) {
  const { data } = await api.delete(`${REGISTER}${PRODUCT}${BY_ID}${product}`, {});
  return data;
} 

export async function searchBrand() {
  const { data } = await api.get(`${REGISTER}${BRAND}`, {});
  return data;
} 

export async function searchBrandById(brand: string) {
  const { data } = await api.get(`${REGISTER}${BRAND}${BY_ID}${brand}`, {});
  return data;
} 

export async function searchCategory() {
  const { data } = await api.get(`${REGISTER}${CATEGORY}`, {});
  return data;
} 

export async function searchCategoryById(category: string) {
  const { data } = await api.get(`${REGISTER}${BRAND}${BY_ID}${category}`, {});
  return data;
} 

export async function searchMarket() {
  const { data } = await api.get(`${REGISTER}${MARKET}`, {});
  return data;
} 

export async function searchMarketById(market: string) {
  const { data } = await api.get(`${REGISTER}${MARKET}${BY_ID}${market}`, {});
  return data;
} 

export async function searchProduct() {
  const { data } = await api.get(`${REGISTER}${PRODUCT}`, {});
  return data;
} 

export async function searchProductById(product: string) {
  const { data } = await api.get(`${REGISTER}${PRODUCT}${BY_ID}${product}`, {});
  return data;
} 

export async function searchProductByMarket() {
  const { data } = await api.get(`${REGISTER}${PRODUCT}${MARKET}`, {});
  return data;
} 

export async function searchProductByName() {
  const { data } = await api.get(`${REGISTER}${PRODUCT}${NAME}`, {});
  return data;
} 

export async function putShopping(id: string) {
  const { data } = await api.put(`${SHOPPING}${BY_ID}${id}`, {});
  return data;
} 

export async function postShopping(id: string) {
  const { data } = await api.post(`${SHOPPING}${BY_ID}${id}`, {});
  return data;
} 

export async function deleteShopping(id: string) {
  const { data } = await api.delete(`${SHOPPING}${BY_ID}${id}`, {});
  return data;
} 

export async function getShoppingByUser(id: string) {
  const { data } = await api.get(`${SHOPPING}${USER}${BY_ID}${id}`, {});
  return data;
} 

export async function getShoppingById(id: string) {
  const { data } = await api.get(`${SHOPPING}${BY_ID}${id}`, {});
  return data;
} 

export async function getUser() {
  const { data } = await api.get(`${SHOPPING}`, {});
  return data;
} 

export async function getUserById(id: string) {
  const { data } = await api.get(`${USER}${BY_ID}${id}`, {});
  return data;
} 

export async function putUserById(id: string) {
  const { data } = await api.put(`${USER}`, {id});
  return data;
} 

export async function postUserById(id: string) {
  const { data } = await api.post(`${USER}`, {id});
  return data;
} 

export async function deleteUserById(id: string) {
  const { data } = await api.delete(`${USER}${BY_ID}${id}`, {});
  return data;
} 
