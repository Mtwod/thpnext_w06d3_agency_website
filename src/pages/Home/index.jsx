const Home = () => {
  const title = 'Confiez vos rêves à des experts du Web';
  const description = 'Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.\nNotre agence web est capable de répondre à tous vos besoins et d’élaborer une véritable stratégie digitale.';

  return (
    <div className="Home">
      <h3 className="Home__title">{title}</h3>
      <p className="Home__description">{description}</p>
    </div>
  );
};

export default Home;
