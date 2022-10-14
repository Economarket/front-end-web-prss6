import { api } from "./api";
import { PEPRMISSION} from "../constants";


export async function getPermission() {
  const { data } = await api.get(`${PEPRMISSION}`, {});
  return data;
}  

export async function getPermissionById(permissionId: string) {
  const { data } = await api.get(`${PEPRMISSION}/${permissionId}`, {});
  return data;
}  

export async function putPermission(permissionId: string) {
  const { data } = await api.put(`${PEPRMISSION}`, {
    permissionId
  });
  return data;
}  

export async function postPermission(permissionId: string) {
  const { data } = await api.post(`${PEPRMISSION}`, {
    permissionId
  });
  return data;
}  

export async function deletePermissionById(permissionId: string) {
  const { data } = await api.delete(`${PEPRMISSION}/${permissionId}`, {});
  return data;
} 