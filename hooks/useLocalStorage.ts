export const useLocalStore = () => {
  const getLocalStorage = (name: string) => {
    return localStorage.getItem(name);
  };

  const setLocalStorage = (name: string, value: string) => {
    return localStorage.setItem(name, value);
  };

  return {
    getLocalStorage,
    setLocalStorage,
  };
};
