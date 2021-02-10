import DayNightButton from './DayNightButton';
import './style.scss';

const Navbar = () => {
  const title = 'The Agency Website';
  return (
    <nav className="Navbar">
      <p className="Navbar__title">{title}</p>
      <span className="Navbar__link">Accueil</span>
      <span className="Navbar__link">L&apos;agence</span>
      <span className="Navbar__link">Projets</span>
      <DayNightButton />
    </nav>
  );
};

export default Navbar;
