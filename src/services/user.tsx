
import { api } from "./api";
import { SHOPPING, USER } from "../constants";

export async function getUser() {
    const { data } = await api.get(`${SHOPPING}`, {});
    return data;
}

export async function getUserById(id: string) {
    const { data } = await api.get(`${USER}/${id}`, {});
    return data;
}

export async function putUserById(id: string) {
    const { data } = await api.put(`${USER}`, { id });
    return data;
}

export async function postUserById(id: string) {
    const { data } = await api.post(`${USER}`, { id });
    return data;
}

export async function deleteUserById(id: string) {
    const { data } = await api.delete(`${USER}/${id}`, {});
    return data;
} 