import { Link } from 'react-router-dom';
import './style.scss';
import DayNightButton from './DayNightButton';

const Navbar = () => {
  const title = 'The Agency Website';
  return (
    <nav className="Navbar">
      <Link to="/" className="Navbar__title Navbar__link">{title}</Link>
      <Link to="/" className="Navbar__link">Accueil</Link>
      <Link to="/about" className="Navbar__link">L&apos;agence</Link>
      <Link to="/works" className="Navbar__link">Projets</Link>
      <DayNightButton />
    </nav>
  );
};

export default Navbar;
