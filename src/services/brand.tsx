import { api } from "./api";
import { BRAND, FIELDUTILS, REGISTER, SEARCH } from "../constants";

export async function putBrand(brandId: string) {
  const { data } = await api.put(`${REGISTER}${BRAND}`, {
    brandId,
  });
  return data;
}

export async function postBrand(brandId: string) {
  const { data } = await api.post(`${REGISTER}${BRAND}`, {
    brandId,
  });
  return data;
}

export async function deleteBrandById(brandId: string) {
  const { data } = await api.delete(`${REGISTER}${BRAND}/${brandId}`, {});
  return data;
}

export async function searchBrand() {
  const { data } = await api.get(`${SEARCH}${BRAND}`, {});
  return data;
}

export async function getBrand() {
  const { data } = await api.get(`${FIELDUTILS}${BRAND}?size=100`, {});
  return data;
}

export async function searchBrandById(brandId: string) {
  const { data } = await api.get(`${SEARCH}${BRAND}/${brandId}`, {});
  return data;
}
