import { api } from "./api";
import { USER } from "../constants";

export async function getUser() {
  const { data } = await api.get(`${USER}`, {});
  return data;
}

export async function getUserById(userId: string) {
  const { data } = await api.get(`${USER}/${userId}`, {});
  return data;
}

export async function putUserById(userId: string) {
  const { data } = await api.put(`${USER}`, { userId });
  return data;
}

export async function postUser(name: string, password: string, email: string) {
  const { data } = await api.post(`${USER}`, { name, password, email });
  return data;
}

export async function deleteUserById(userId: string) {
  const { data } = await api.delete(`${USER}/${userId}`, {});
  return data;
}
