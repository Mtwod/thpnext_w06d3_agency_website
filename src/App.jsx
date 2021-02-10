import 'assets/fonts/fonts.scss';
import './style.scss';
import Navbar from 'components/Navbar';
import { useEffect, useState } from 'react';
import Config from 'config';
import DayNightContext from './DayNightContext';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem(Config.STORAGE_KEY) || 'light');

  useEffect(() => {
    localStorage.setItem(Config.STORAGE_KEY, theme);
  }, [theme]);

  return (
    <DayNightContext.Provider value={{
      theme,
      toggleTheme: () => {
        if (theme === 'light') setTheme('dark');
        if (theme === 'dark') setTheme('light');
      },
    }}
    >
      <div className={`App ${theme}`}>
        <Navbar />
        <h1>Hello World</h1>
        <p>This is a starter for React app, place your components here!</p>
      </div>
    </DayNightContext.Provider>
  );
};

export default App;
