import { api } from "./api";
import { MARKET, REGISTER } from "../constants";

export async function putMarket(marketId: string) {
    const { data } = await api.put(`${REGISTER}${MARKET}`, {
        marketId
    });
    return data;
}

export async function postMarket(marketId: string) {
    const { data } = await api.post(`${REGISTER}${MARKET}`, {
        marketId
    });
    return data;
}

export async function deleteMarketById(marketId: string) {
    const { data } = await api.delete(`${REGISTER}${MARKET}/${marketId}`, {});
    return data;
}

export async function searchMarket() {
    const { data } = await api.get(`${REGISTER}${MARKET}`, {});
    return data;
}

export async function searchMarketById(marketId: string) {
    const { data } = await api.get(`${REGISTER}${MARKET}/${marketId}`, {});
    return data;
} 