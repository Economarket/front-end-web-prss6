import { api } from "./api";
import { MARKET, NAME, PRODUCT, REGISTER } from "../constants";

export async function putProduct(productId: string) {
    const { data } = await api.put(`${REGISTER}${PRODUCT}`, { productId });
    return data;
}

export async function postProduct(name: string, marca: string, unidade: string, valor: string, categoria: string, mercado: string) {
    const { data } = await api.post(`${PRODUCT}`, { name, marca, unidade, valor, categoria, mercado });
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

export async function searchProductByName() {
    const { data } = await api.get(`${REGISTER}${PRODUCT}${NAME}`, {});
    return data;
} 