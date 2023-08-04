import React, { createContext, useContext, useEffect, useState } from 'react'
import { THEMES } from '../Constants';

export const ThemeContext = createContext(null);
export const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || THEMES.LIGHT);

  const toggleTheme = () => {
    setTheme((prevState) => prevState === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)

    // localStorage.setItem('theme', theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)
  }

  // localStorage.setItem('theme', theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)
  
  // OR
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      { children }
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;