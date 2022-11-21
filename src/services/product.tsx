import { api } from "./api";
import { ProductPost } from "./models";
import {
  CATEGORY,
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

export async function searchProductByMarket() {
  const { data } = await api.get(`${REGISTER}${PRODUCT}${MARKET}`, {});
  return data;
}

export const searchProductByName = async (name: string | undefined) => {
  const { data } = await api.get(`${SEARCH}${PRODUCT}${NAME}?name=${name}`, {});
  return data;
}

export const searchProductByCategory = async (
  category_id: number,
  name: string | undefined
) => {
  const { data } = await api.get(
    `${SEARCH}${PRODUCT}${CATEGORY}/${category_id}${
      name ? `?name=${name}` : ""
    }`,
    {}
  );
  return data;
};
