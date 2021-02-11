import studyCases from 'data/studyCases';
import { Link } from 'react-router-dom';
import './style.scss';

const ClientListElement = () => (
  <ul className="ClientListElement">
    { studyCases.map((studyCase) => (
      <li className="ClientListElement__element" key={studyCase.slug}>
        <Link to={`/works/${studyCase.slug}`} className="ClientListElement__element__link">{studyCase.title}</Link>
      </li>
    )) }
  </ul>
);

export default ClientListElement;
