import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import studyCases from 'data/studyCases';
import './style.scss';

const StudyCase = () => {
  const { studyCaseSlug } = useParams();
  const [currentStudyCase, setCurrentStudyCase] = useState(undefined);

  useEffect(() => {
    const foundStudyCase = studyCases.find((studyCase) => studyCase.slug === studyCaseSlug);
    setCurrentStudyCase(foundStudyCase);
  }, [studyCaseSlug]);

  return (
    <div className="StudyCase">
      {!currentStudyCase && (
        <p className="StudyCase__error">Aucune étude de cas n’a été trouvé…</p>
      )}
      {currentStudyCase && (
        <>
          <h2 className="StudyCase__title">{currentStudyCase.title}</h2>
          <p className="StudyCase__description">{currentStudyCase.description}</p>
        </>
      )}
    </div>
  );
};

export default StudyCase;
