import { api } from "./api";
import { MARKET, NAME, PRODUCT, REGISTER } from "../constants";

export async function putProduct(product: string) {
    const { data } = await api.put(`${REGISTER}${PRODUCT}`, { product });
    return data;
}

export async function postProduct(product: string) {
    const { data } = await api.post(`${REGISTER}${PRODUCT}`, { product });
    return data;
}

export async function deleteProductById(product: string) {
    const { data } = await api.delete(`${REGISTER}${PRODUCT}/${product}`, {});
    return data;
}


export async function searchProduct() {
    const { data } = await api.get(`${REGISTER}${PRODUCT}`, {});
    return data;
}

export async function searchProductById(product: string) {
    const { data } = await api.get(`${REGISTER}${PRODUCT}/${product}`, {});
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