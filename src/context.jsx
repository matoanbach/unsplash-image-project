import { useContext, createContext, useState } from "react";

const MyAppContext = createContext();
const getInitialTheme = () => {
  const preferredTheme = window.matchMedia("prefers-color-scheme").matches;
  const localTheme = localStorage.getItem("darkTheme");
  return preferredTheme || localTheme;
};
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchTerm, setSearchTerm] = useState("cat");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);

    localStorage.setItem("darkTheme", newDarkTheme);
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  };
  return (
    <MyAppContext.Provider
      value={{ isDarkTheme, searchTerm, toggleDarkTheme, setSearchTerm }}
    >
      {children}
    </MyAppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(MyAppContext);
};
