import 'assets/fonts/fonts.scss';
import './style.scss';
import Navbar from 'components/Navbar';
import { useState } from 'react';
import DayNightContext from './DayNightContext';

const App = () => {
  const [theme, setTheme] = useState('light');

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
