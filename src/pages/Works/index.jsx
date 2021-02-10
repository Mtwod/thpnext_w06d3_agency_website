import StudyCase from 'components/StudyCase';
import studyCases from 'data/studyCases';
import {
  Link,
  Switch,
  Route,
} from 'react-router-dom';
import './style.scss';

const Works = () => {
  const title = 'Au fil des années, nous avons pu accompagner les meilleurs.';
  const description = 'Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.';

  return (
    <div className="Works">
      <h3 className="Works__title">{title}</h3>
      <p className="Works__description">{description}</p>
      <ul className="Works__list">
        { studyCases.map((studyCase) => (
          <li className="Works__list__element">
            <Link to={`/works/${studyCase.slug}`} key={studyCase.slug}>{studyCase.title}</Link>
          </li>
        )) }
      </ul>
      <Switch>
        <Route path="/works/:studyCaseSlug">
          <StudyCase />
        </Route>
      </Switch>
    </div>
  );
};

export default Works;
