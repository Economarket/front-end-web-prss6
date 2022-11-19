import { api } from "./api";
import {
  CONTEXT_AUTH,
  LOGOUT_ENDPOINT,
  LOGIN_ENDPOINT,
  TOKEN_REFRESH,
} from "../constants";
import { RefreshToken, Token } from "./models";

export async function signIn(email: string, password: string): Promise<Token> {
  const { data } = await api.post<Token>(`${CONTEXT_AUTH}${LOGIN_ENDPOINT}`, {
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

export async function refreshToken(refresh_token: string): Promise<RefreshToken> {
  try{
    const { data } = await api.get(`${CONTEXT_AUTH}${TOKEN_REFRESH}`, {
      headers: {
        "Authorization": `Bearer ${refresh_token}`
      }
    });
    return data;
  } catch (err) {
    console.log(err);
    // localStorage.removeItem("token");
    // localStorage.removeItem("refresh_token");
    return {access_token: ""};
  }
}
