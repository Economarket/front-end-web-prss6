import { api } from "./api";
import { CONTEXT_AUTH, SINGIN_ENDPOINT } from "../constants";

export async function signIn(email: string, password: string) {
  console.log("chegou");
  const { data } = await api.post(`auth/login `, {
    email,
    password,
  });

  return data;
}

// api-economarket.herokuapp.com/auth/login
// email: manager@manager.com
// password: @manage
