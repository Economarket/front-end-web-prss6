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
  const { data } = await api.get(`${CONTEXT_AUTH}${TOKEN_REFRESH}`, {
    headers: {
      "Authorization": `Bearer ${refresh_token}`
    }
  });
  return data;
};

export const newAccessToken = async () => {
  const refresh_token = localStorage.getItem("refresh_token");
  if(refresh_token){
    refreshToken(refresh_token).then((res) => {
      localStorage.setItem("token", res.access_token);
    }).catch(() => {
      const email = localStorage.getItem("email") || "";
      const password = localStorage.getItem("password") || "";
      signIn(email, password).then((res) => {
        localStorage.setItem("token", res.access_token);
        localStorage.setItem("refresh_token", res.refresh_token);
      }).catch(() => {
        logout();
      })
    }).finally(() => {
      window.location.reload();
    });
  }
};

export const logout = async () => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      await signOut(token);
    }
  } catch (error) {
    console.error(error);
  } finally {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    delete api.defaults.headers.common["Authorization"];

    setTimeout(() => {
      window.location.replace("/login");
    }, 50);
  }
};