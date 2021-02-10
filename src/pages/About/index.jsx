const About = () => {
  const title = 'Websitic est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos projets digitaux.';
  const description = 'De l’étape d’avant projet web au lancement effectif du site, nous somme là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectif.\nLaissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.';

  return (
    <div className="About">
      <h3 className="About__title">{title}</h3>
      <p className="About__description">{description}</p>
    </div>
  );
};

export default About;
