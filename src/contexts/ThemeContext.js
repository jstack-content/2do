import React, { createContext, useEffect, useState } from 'react';

const Context = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
      document.body.dataset.theme = 'dark';
    } else {
      document.body.dataset.theme = null;
    }
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => prevState === 'light' ? 'dark' : 'light');
  }

  return (
    <Context.Provider value={{ theme, toggleTheme: handleToggleTheme }}>
      {props.children}
    </Context.Provider>
  );
}

export { ThemeProvider, Context };
