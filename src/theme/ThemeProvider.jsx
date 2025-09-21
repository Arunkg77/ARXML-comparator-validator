// src/theme/ThemeProvider.jsx
import { createContext, useContext, useState, useMemo } from "react";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";

// You can also import other tokens if you want to pass them through context
import { BORDER_RADIUS } from './tokens/borderRadius';
import { SPACING } from './tokens/spacing';
import { TYPOGRAPHY } from './tokens/typography';
import { SHADOWS } from './tokens/shadows';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  // useMemo prevents the theme object from being recreated on every render
  const currentTheme = useMemo(() => {
    const themeConfig = theme === "light" ? lightTheme : darkTheme;
    // Combine colors with other tokens into one theme object
    return {
      ...themeConfig,
      typography: TYPOGRAPHY,
      spacing: SPACING,
      borderRadius: BORDER_RADIUS,
      shadows: SHADOWS,
      // add more tokens here if needed
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);