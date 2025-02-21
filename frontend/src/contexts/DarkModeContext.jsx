import React, { createContext, useState, useContext } from 'react';

// Create a context for dark mode
const DarkModeContext = createContext();

// Custom hook to use the dark mode context
export const useDarkMode = () => useContext(DarkModeContext);

// Dark Mode Provider component
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};