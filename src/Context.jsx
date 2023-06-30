import React, { useContext, createContext, useState } from 'react';

const GlobalContext = createContext();

export const getContext = () => {
  return useContext(GlobalContext);
};

const Context = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [search, setSearch] = useState('Frankfurt');

  useState(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme');
  }, [isDark]);

  const toggleDark = () => {
    const theme = !isDark;
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', theme);
    setIsDark(theme);
  };

  const globalValues = {
    isDark,
    toggleDark,
    search,
    setSearch,
  };

  return (
    <GlobalContext.Provider value={globalValues}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
