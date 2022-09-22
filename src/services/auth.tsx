import { api } from "./api";
import { CONTEXT_AUTH, SINGIN_ENDPOINT } from "../constants";

export async function signIn(email: string, password: string) {
  const { data } = await api.post(`${CONTEXT_AUTH}${SINGIN_ENDPOINT}`, {
    email,
    password,
  });

  return data;
}
