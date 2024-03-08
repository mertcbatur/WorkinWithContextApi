import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [themeName, setThemeName] = useState("light");
  function handleTheme() {
    setThemeName((prev) => {
      const themeChanger = themeName === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-bs-theme", themeChanger);

      localStorage.setItem("theme", themeChanger);
      return themeChanger;
    });
  }

  useEffect(() => {
    const storedTheme =
      localStorage.getItem("theme") ??
      window.matchMedia("(prefers-color-scheme:dark)").matches
        ? "dark"
        : "light";
    setThemeName(storedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeName, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export { ThemeContextProvider, ThemeContext };
