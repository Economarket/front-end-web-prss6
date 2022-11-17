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
import { Location, User } from "../services/models";
import { getUserById } from "../services/user";

type Token = {
  user_id: string;
  roles: string[];
  exp: string;
};

export type SessionContextType = {
  signin: (email: string, password: string) => Promise<void>;
  logout: () => void;
  user?: User | null;
  location?: Location | null;
};

export const SessionContext = createContext<SessionContextType | null>(null);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>();
  const [location, setLocation] = useState<Location | null>();
  const navigate = useNavigate();

  async function signin(email: string, password: string) {
    console.log(email, password);
    try {
      await signIn(email, password)
        .then((response) => {
          localStorage.setItem("token", response.access_token);

          api.defaults.headers.common["Authorization"] =
            "Bearer " + response.access_token;

          getUser(response.access_token);

          navigate("/");

          const decode = jwt(response.access_token);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  }

  function logout() {
    localStorage.removeItem("token");

    delete api.defaults.headers.common["Authorization"];

    setUser(null);
    setLocation(null);

    setTimeout(() => {
      navigate("/login");
    }, 50);
  }

  const getPosition = () => {
    if (!("geolocation" in navigator)) {
      console.log("Not Available");
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    }
  };

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
                  getPosition();
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
      api.defaults.headers.common["Authorization"] = "Bearer " + token;

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

// import {
//   createContext,
//   ReactNode,
//   useCallback,
//   useContext,
//   useEffect,
//   useLayoutEffect,
//   useState,
// } from "react";
// import { useNavigate } from "react-router-dom";
// import jwt from "jwt-decode";

// import { api } from "../services/api";
// import { refreshToken, signIn } from "../services/auth";
// import { Location, User, Token } from "../services/models";
// import { getUserById } from "../services/user";

// type TokenJWT = {
//   user_id: string;
//   roles: string[];
//   exp: string;
// };

// export type SessionContextType = {
//   signin: (email: string, password: string) => Promise<void>;
//   logout: () => void;
//   user?: User | null;
//   location?: Location | null;
// };

// export const SessionContext = createContext<SessionContextType | null>(null);

// export function SessionProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<User | null>();
//   const [location, setLocation] = useState<Location | null>();
//   const [refreshAccessToken, setRefreshAccessToken] = useState<Token>();
//   const navigate = useNavigate();

//   async function signin(email: string, password: string) {
//     console.log(email, password);
//     try {
//       await signIn(email, password)
//         .then((response) => {
//           localStorage.setItem("token", response.access_token);

//           api.defaults.headers.common["Authorization"] =
//             "Bearer " + response.access_token;

//           getUser(response.access_token);

//           navigate("/");
//         })
//         .catch((error) => console.error(error));
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   function logout() {
//     localStorage.removeItem("token");

//     delete api.defaults.headers.common["Authorization"];

//     setUser(null);
//     setLocation(null);

//     setTimeout(() => {
//       navigate("/login");
//     }, 50);
//   }

//   const getPosition = () => {
//     if (!("geolocation" in navigator)) {
//       console.log("Not Available");
//     } else {
//       navigator.geolocation.getCurrentPosition(function (position) {
//         console.log("Latitude is :", position.coords.latitude);
//         console.log("Longitude is :", position.coords.longitude);
//       });
//     }
//   };

//   async function refreshtoken() {
//     try {
//       await refreshToken()
//         .then((response) => {
//           setRefreshAccessToken(response.access_token);
//         })
//         .catch((error) => console.error(error));
//       console.log(refreshAccessToken);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   const getUser = useCallback(
//     async (token: string) => {
//       if (!token) {
//         setTimeout(() => {
//           navigate("/login");
//         }, 50);
//         return;
//       } else {
//         const decode: TokenJWT = jwt(token);

//         if (decode.user_id) {
//           try {
//             if (decode.user_id) {
//               try {
//                 const data = await getUserById(decode.user_id);
//                 if (data) {
//                   setUser(data);
//                   getPosition();
//                 }
//               } catch (error) {
//                 console.error(error);
//               }
//             }
//           } catch (error) {
//             console.error(error);
//           }
//         }
//       }
//     },
//     [navigate]
//   );

//   useLayoutEffect(() => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       api.defaults.headers.common["Authorization"] = "Bearer " + token;

//       getUser(token);
//     }
//   }, [getUser]);

//   useEffect(() => {
//     refreshtoken();

//     api.interceptors.response.use(
//       (response) => response,

//       (error) => {
//         if (error.response.status === 401) {
//           localStorage.removeItem("token");

//           delete api.defaults.headers.common["Authorization"];

//           navigate("/");

//           return Promise.reject(error);
//         }
//         return Promise.reject(error);
//       }
//     );
//   }, [navigate]);

//   return (
//     <SessionContext.Provider value={{ signin, logout, user }}>
//       {children}
//     </SessionContext.Provider>
//   );
// }

// export function useSession() {
//   const data = useContext(SessionContext);

//   if (!data) {
//     throw new Error("Contexto de sessão não encontrado!");
//   }

//   return data;
// }
