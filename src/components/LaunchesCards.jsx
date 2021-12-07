import React from 'react';
import noImage from '../assets/images/noImage.jpg';

function LaunchesCards() {
  const pathName = window.location.pathname.replace('/', '');

  const launch = JSON.parse(localStorage.getItem(pathName));

  const showImage = (param, alt, className) => (
    <img src={param} alt={alt} className={className} />);

  const showArticle = (param, nome) => (<a href={param}>{`Artigo sobre ${nome}`}</a>);

  return (
    <section className="launches-container">
      {launch.length === 0
        ? <div>Carregando...</div> : launch.map(({ name, links, flight_number: flightNumber }) => (
          <div className="main-launches" key={flightNumber}>
            <h2 className="cards-title">
              {name}
            </h2>
            {links.patch.small
              ? showImage(links.patch.small, 'Foguete')
              : showImage(noImage, 'Sem imagem', 'no-image')}
            {links.article
              ? showArticle(links.article, name)
              : null}
          </div>
        ))}
    </section>
  );
}

export default LaunchesCards;
