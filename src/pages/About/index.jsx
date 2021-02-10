const About = () => {
  const title = 'Websitic est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos projets digitaux.';

  return (
    <div className="About">
      <h3 className="About__title">{title}</h3>
      <p className="About__description">De l’étape d’avant projet web au lancement effectif du site, nous somme là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.</p>
      <p className="About__description">Laissez votre projet entre des mains dignes de confiance, ayant accompagné &quot;PLATON&quot;, &quot;TCar&quot;, &quot;Solane&quot; ou encore &quot;Sedal&quot; vers le sommet.</p>
    </div>
  );
};

export default About;
