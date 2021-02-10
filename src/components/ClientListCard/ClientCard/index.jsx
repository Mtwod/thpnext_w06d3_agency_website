import './style.scss';

const ClientCard = ({ studyCaseData }) => {
  const { author, title } = studyCaseData;

  return (
    <li className="ClientCard">
      <h3 className="ClientCard__author">{author}</h3>
      <p className="ClientCard__title">{title}</p>
    </li>
  );
};

export default ClientCard;
