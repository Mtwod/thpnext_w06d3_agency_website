import studyCases from 'data/studyCases';
import { Link } from 'react-router-dom';
import ClientCard from './ClientCard';
import './style.scss';

const ClientListCard = () => (
  <ul className="ClientListCard">
    { studyCases.map((studyCase) => (
      <Link to={`/works/${studyCase.slug}`} key={studyCase.slug}><ClientCard studyCaseData={studyCase} /></Link>
    )) }
  </ul>
);

export default ClientListCard;
