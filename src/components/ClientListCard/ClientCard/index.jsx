import './style.scss';

const ClientCard = ({ studyCaseData, key }) => {
  const { author, title } = studyCaseData;

  return (
    <li className="ClientCard" key={key}>
      <h3 className="ClientCard__author">{author}</h3>
      <p className="ClientCard__title">{title}</p>
    </li>
  );
};

export default ClientCard;
