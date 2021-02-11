import './style.scss';
import { useContext } from 'react';
import ListGridContext from 'pages/Works/ListGridContext';
import gridIcon from './grid-icon.png';
import listIcon from './list-icon.png';

const ListGridButton = () => {
  const listGridDisplayMode = useContext(ListGridContext);
  const { displayMode, toggleMode } = listGridDisplayMode;

  return (
    <button type="button" className="ListGridButton" onClick={toggleMode}>
      {displayMode === 'list' && (
        <img src={gridIcon} alt="Grid logo" className="ListGridButton__image" title="Mode d'affichage actuel : Liste" />
      )}
      {displayMode === 'grid' && (
        <img src={listIcon} alt="List logo" className="ListGridButton__image" title="Mode d'affichage actuel : Grille" />
      )}
    </button>
  );
};

export default ListGridButton;
