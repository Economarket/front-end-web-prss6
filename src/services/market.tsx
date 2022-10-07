import { api } from "./api";
import { BRAND, MARKET, REGISTER } from "../constants";

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
    const { data } = await api.delete(`${REGISTER}${BRAND}/${market}`, {});
    return data;
}

export async function searchMarket() {
    const { data } = await api.get(`${REGISTER}${MARKET}`, {});
    return data;
}

export async function searchMarketById(market: string) {
    const { data } = await api.get(`${REGISTER}${MARKET}/${market}`, {});
    return data;
} 