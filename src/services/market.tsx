import { api } from "./api";
import { DISTANCE, MARKET, REGISTER, SEARCH } from "../constants";

export async function putMarket(marketId: string) {
  const { data } = await api.put(`${REGISTER}${MARKET}`, {
    marketId,
  });
  return data;
}

export async function postMarket(marketId: string) {
  const { data } = await api.post(`${REGISTER}${MARKET}`, {
    marketId,
  });
  return data;
}

export async function deleteMarketById(marketId: string) {
  const { data } = await api.delete(`${REGISTER}${MARKET}/${marketId}`, {});
  return data;
}

export async function searchMarket() {
  const { data } = await api.get(`${SEARCH}${MARKET}`, {});
  return data;
}

export async function getMarketByDistance(
  distance: number,
  locateX: number,
  locateY: number
) {
  const { data } = await api.get(
    `${SEARCH}${MARKET}${DISTANCE}?distance=${distance}&locateX=${locateX}&locateY=${locateY}`,
    {}
  );
  return data;
}

export async function searchMarket100() {
  const { data } = await api.get(`${SEARCH}${MARKET}?size=100`, {});
  return data;
}

export async function searchMarketById(marketId: string) {
  const { data } = await api.get(`${SEARCH}${MARKET}/${marketId}`, {});
  return data;
}
