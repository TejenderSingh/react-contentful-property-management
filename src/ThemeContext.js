import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(getInitialMode());
  const [light] = useState({
    bg: "bg-white",
    bgSec: "bg-gray-100",
    sectionBg: "bg-white",
    fg: "text-gray-800",
    fgSec: "text-gray-900",
    hoverBg: "bg-gray-800",
    hoverText: "text-white",
    homeStatFg: "text-white",
    homeStatBg: "bg-gray-800",
    inputBg: "bg-white",
    inputFg: "text-gray-700",
    border: "border-gray-100",
    formBg: "bg-gray-300",
    tooltipBg: "bg-gray-100",
    tooltipFg: "text-gray-800",
    tooltipTitle: "text-indigo-700",
    tagBg: "bg-teal-200",
    tagFg: "text-teal-800"
  });
  const [dark] = useState({
    bg: "bg-gray-900",
    bgSec: "bg-gray-700",
    sectionBg: "bg-gray-700",
    fg: "text-gray-500",
    fgSec: "text-gray-100",
    hoverBg: "bg-gray-800",
    hoverText: "text-gray-400",
    homeStatBg: "bg-gray-900",
    homeStatFg: "text-gray-500",
    inputBg: "bg-gray-800",
    inputFg: "text-gray-500",
    border: "border-gray-900",
    formBg: "bg-gray-900",
    tooltipBg: "bg-gray-900",
    tooltipFg: "text-gray-500",
    tooltipTitle: "text-indigo-500",
    tagBg: "bg-gray-200",
    tagFg: "text-gray-800"
  });
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);
  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDarkMode = getPrefColorScheme();
    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDarkMode) {
      return true;
    } else {
      return false;
    }
  }
  function getPrefColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function toggleMode() {
    setDarkMode(prevMode => !prevMode);
  }
  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        light,
        dark,
        toggleMode: toggleMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
export { ThemeProvider };
