import { api } from "./api";
import {
  CONTEXT_AUTH,
  LOGOUT_ENDPOINT,
  LOGIN_ENDPOINT,
  TOKEN_REFRESH,
} from "../constants";

export async function signIn(email: string, password: string) {
  const { data } = await api.post(`${CONTEXT_AUTH}${LOGIN_ENDPOINT}`, {
    email,
    password,
  });

  return data;
}

//verificar parametros
export async function signOut(token: string) {
  const { data } = await api.post(`${CONTEXT_AUTH}${LOGOUT_ENDPOINT}`, {
    token,
  });
  return data;
}

export async function refreshToken() {
  const { data } = await api.get(`${CONTEXT_AUTH}${TOKEN_REFRESH}`, {});
  return data;
}
