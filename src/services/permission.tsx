import { api } from "./api";
import { PEPRMISSION} from "../constants";


export async function getPermission() {
  const { data } = await api.get(`${PEPRMISSION}`, {});
  return data;
}  

export async function getPermissionById(id: string) {
  const { data } = await api.get(`${PEPRMISSION}/${id}`, {});
  return data;
}  

export async function putPermission(permission: string) {
  const { data } = await api.put(`${PEPRMISSION}`, {
    permission
  });
  return data;
}  

export async function postPermission(permission: string) {
  const { data } = await api.post(`${PEPRMISSION}`, {
    permission
  });
  return data;
}  

export async function deletePermissionById(id: string) {
  const { data } = await api.delete(`${PEPRMISSION}/${id}`, {});
  return data;
} 