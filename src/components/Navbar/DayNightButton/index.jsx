import { useContext } from 'react';
import DayNightContext from 'DayNightContext';
import './style.scss';
import dayLogo from './day-logo.png';
import moonLogo from './moon-logo.png';

const DayNightButton = () => {
  const displayMode = useContext(DayNightContext);
  const { theme, toggleTheme } = displayMode;
  return (
    <button className="DayNightButton" type="button" onClick={toggleTheme}>
      {theme === 'light' && (
        <img src={moonLogo} alt="Crescent moon logo" className="DayNightButton__image" />
      )}
      {theme === 'dark' && (
        <img src={dayLogo} alt="Yellow sun logo" className="DayNightButton__image" />
      )}
    </button>
  );
};

export default DayNightButton;
