import { api } from "./api";
import { CONTEXT_AUTH, LOGOUT_ENDPOINT, SINGIN_ENDPOINT, TOKEN_REFRESH } from "../constants";

export async function signIn(email: string, password: string) {
  console.log("chegou");
  const { data } = await api.post(`auth/login `, {
    email,
    password,
  });

  return data;
}

<<<<<<< HEAD
//verificar parametros
export async function signOut(token: string) {
  const { data } = await api.post(`${CONTEXT_AUTH}${LOGOUT_ENDPOINT}`, {
    token
  });
  return data;
}   

export async function refreshToken() {
  const { data } = await api.get(`${CONTEXT_AUTH}${TOKEN_REFRESH}`, {});
  return data;
}  

=======
// api-economarket.herokuapp.com/auth/login
// email: manager@manager.com
// password: @manage
>>>>>>> EMW-tela-de-login
