import ClientListCard from 'components/ClientListCard';
import ClientListElement from 'components/ClientListElement';
import ListGridButton from 'components/ListGridButton';
import StudyCase from 'components/StudyCase';
import { useEffect, useState } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Config from 'config';
import ListGridContext from './ListGridContext';
import './style.scss';

const Works = () => {
  const title = 'Au fil des années, nous avons pu accompagner les meilleurs.';
  const description = 'Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.';
  const [displayMode, setDisplayMode] = useState(localStorage.getItem(Config.STORAGE_KEY_LISTGRID) || 'list');

  useEffect(() => {
    localStorage.setItem(Config.STORAGE_KEY_LISTGRID, displayMode);
  }, [displayMode]);

  return (
    <ListGridContext.Provider value={{
      displayMode,
      toggleMode: () => {
        if (displayMode === 'list') setDisplayMode('grid');
        if (displayMode === 'grid') setDisplayMode('list');
      },
    }}
    >
      <div className="Works">
        <div className="Works__header">
          <h3 className="Works__header__title">{title}</h3>
          <ListGridButton />
        </div>
        <p className="Works__description">{description}</p>
        {displayMode === 'list' && (
          <ClientListElement />
        )}
        {displayMode === 'grid' && (
          <ClientListCard />
        )}
        <Switch>
          <Route path="/works/:studyCaseSlug">
            <StudyCase />
          </Route>
        </Switch>
      </div>
    </ListGridContext.Provider>
  );
};

export default Works;
