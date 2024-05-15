import { useRouter } from "next/navigation";
import { useLocalStore } from "./useLocalStorage";

export const useAuth = () => {
  const { getLocalStorage, setLocalStorage } = useLocalStore();
  const router = useRouter();

  const login = () => {
    setLocalStorage("token_auth", "token_aleatorio123");
  };

  const isLogged = () => {
    return getLocalStorage("token_auth") || false;
  };

  const logout = () => {
    localStorage.clear();
    router.push("/");
  };

  return {
    login,
    isLogged,
    logout,
  };
};
