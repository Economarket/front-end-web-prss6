import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";

import { useSession } from "../contexts/session";
import ToastHelper from "../components/Toast/toast";

export type LocalizationContextType = {
  locateX?: number | null;
  locateY?: number | null;
  getPosition: () => void;
  distance: number;
  setDistance: Dispatch<SetStateAction<number>>;
};

export const LocalizationContext =
  createContext<LocalizationContextType | null>(null);

export function LocalizationProvider({ children }: { children: ReactNode }) {
  const [locateX, setLocateX] = useState<number>();
  const [locateY, setLocateY] = useState<number>();
  const [distance, setDistance] = useState<number>(3);
  const { logout } = useSession();

  const getPosition = useCallback(() => {
    console.log("entrou");
    console.log(!("geolocation" in navigator));
    console.log(locateX);
    console.log(distance);

    if (!("geolocation" in navigator)) {
      ToastHelper(
        "Problema ao tentar acessar o permissionamento de localização. A aplicação necessita acessar a localização.",
        "error"
      );

      setTimeout(() => {
        logout();
      }, 5000);
    } else {
      try {
        navigator.geolocation.getCurrentPosition(function (position) {
          setLocateX(position.coords.latitude);
          setLocateY(position.coords.longitude);
        });
      } catch (error) {
        console.error(error);
      }
    }
  }, [distance, locateX, logout]);

  return (
    <LocalizationContext.Provider
      value={{ locateX, locateY, getPosition, distance, setDistance }}
    >
      {children}
    </LocalizationContext.Provider>
  );
}

export function useLocalization() {
  const data = useContext(LocalizationContext);

  if (!data) {
    throw new Error("Contexto de localização não encontrado!");
  }

  return data;
}
