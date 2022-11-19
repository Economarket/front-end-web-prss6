import { api } from "./api";
import { FIELDUTILS, UNITY } from "../constants";

export async function getFieldsUnity() {
  const { data } = await api.get(`${FIELDUTILS}${UNITY}`, {});
  return data;
}
