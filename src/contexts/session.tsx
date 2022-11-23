import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import jwt from "jwt-decode";

import { api } from "../services/api";
import { signIn } from "../services/auth";
import { User } from "../services/models";
import { getUserById } from "../services/user";
import { logout as api_logout } from "../services/auth";

type Token = {
  user_id: string;
  roles: string[];
  exp: string;
};

export type SessionContextType = {
  signin: (email: string, password: string) => Promise<void>;
  logout: () => void;
  user?: User | null;
};

export const SessionContext = createContext<SessionContextType | null>(null);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>();
  const navigate = useNavigate();

  async function signin(email: string, password: string) {
    await signIn(email, password)
      .then((response) => {
        localStorage.setItem("token", response.access_token);
        localStorage.setItem("refresh_token", response.refresh_token);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        getUser(response.access_token);

        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }

  async function logout() {
    api_logout();
  }

  const getUser = useCallback(
    async (token: string) => {
      if (!token) {
        setTimeout(() => {
          navigate("/login");
        }, 50);
        return;
      } else {
        const decode: Token = jwt(token);

        if (decode.user_id) {
          try {
            if (decode.user_id) {
              try {
                const data = await getUserById(decode.user_id);
                if (data) {
                  setUser(data);
                }
              } catch (error) {
                console.error(error);
              }
            }
          } catch (error) {
            console.error(error);
          }
        }
      }
    },
    [navigate]
  );

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUser(token);
    }
  }, [getUser]);

  useEffect(() => {
    api.interceptors.response.use(
      (response) => response,

      (error) => {
        if (error.response.status === 401) {
          localStorage.removeItem("token");

          delete api.defaults.headers.common["Authorization"];

          navigate("/");

          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
    );
  }, [navigate]);

  return (
    <SessionContext.Provider value={{ signin, logout, user }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const data = useContext(SessionContext);

  if (!data) {
    throw new Error("Contexto de sessão não encontrado!");
  }

  return data;
}
