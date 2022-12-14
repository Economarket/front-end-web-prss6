import { api } from "./api";
import { ProductPost } from "./models";
import {
  CATEGORY,
  DISTANCE,
  MARKET,
  NAME,
  PRODUCT,
  REGISTER,
  SEARCH,
} from "../constants";

export async function putProduct(productId: string) {
  const { data } = await api.put(`${REGISTER}${PRODUCT}`, { productId });
  return data;
}

export async function postProduct(product: ProductPost) {
  const { data } = await api.post(`${REGISTER}${PRODUCT}`, product);
  return data;
}

export async function updateProduct(product: ProductPost) {
  const { data } = await api.put(`${REGISTER}${PRODUCT}`, product);
  return data;
}

export async function deleteProductById(productId: string) {
  const { data } = await api.delete(`${REGISTER}${PRODUCT}/${productId}`, {});
  return data;
}

export async function searchProduct() {
  const { data } = await api.get(`${REGISTER}${PRODUCT}`, {});
  return data;
}

export async function searchProductById(productId: string) {
  const { data } = await api.get(`${REGISTER}${PRODUCT}/${productId}`, {});
  return data;
}

export async function searchProductByMarket(
  market_id: number,
  name: string | undefined,
  page: number
) {
  const { data } = await api.get(
    `${SEARCH}${PRODUCT}${MARKET}/${market_id}?page=${page}${
      name ? `&name=${name}` : ""
    }`,
    {}
  );
  return data;
}

export const searchProductByName = async (
  name: string | undefined,
  page: number
) => {
  const { data } = await api.get(
    `${SEARCH}${PRODUCT}${NAME}?name=${name}&page=${page}`,
    {}
  );
  return data;
};

export const searchProductByDistance = async (distance: number, locateX: number, locateY: number, name: string | undefined, page: number) => {
  const { data } = await api.get(`${SEARCH}${PRODUCT}${DISTANCE}?page=${page}&distance=${distance}&locateX=${locateX}&locateY=${locateY}${
    name ? `&name=${name}` : ""
  }`);
  return data;
}

export const searchProductByCategory = async (
  category_id: number,
  name: string | undefined,
  page: number
) => {
  const { data } = await api.get(
    `${SEARCH}${PRODUCT}${CATEGORY}/${category_id}?page=${page}${
      name ? `&name=${name}` : ""
    }`,
    {}
  );
  return data;
}