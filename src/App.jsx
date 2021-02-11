import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import 'assets/fonts/fonts.scss';
import './style.scss';
import Navbar from 'components/Navbar';
import { useEffect, useState } from 'react';
import Config from 'config';
import Home from 'pages/Home';
import Works from 'pages/Works';
import About from 'pages/About';
import DayNightContext from './DayNightContext';

const App = () => {
  const [theme, setTheme] = useState(() => {
    const isUserThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isUserThemeDark) {
      return (localStorage.getItem(Config.STORAGE_KEY_THEME) || 'dark');
    }
    return (localStorage.getItem(Config.STORAGE_KEY_THEME) || 'light');
  });

  useEffect(() => {
    localStorage.setItem(Config.STORAGE_KEY_THEME, theme);
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
        <Router>
          <Navbar />
          <main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/works">
                <Works />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route>
                Page introuvable
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    </DayNightContext.Provider>
  );
};

export default App;
