import React from 'react';
import noImage from '../assets/images/noImage.jpg';

function LaunchesCards() {
  const pathName = window.location.pathname.replace('/', '');

  const launch = JSON.parse(localStorage.getItem(pathName));

  const showImage = (param, alt) => (<img src={param} alt={alt} />);

  const showArticle = (param, nome) => (<a href={param}>{`Artigo sobre ${nome}`}</a>);

  return (
    <section className="main-launches">
      {launch.map(({ name, links, flight_number: flightNumber }) => (
        <div key={flightNumber}>
          <p>
            {flightNumber}
          </p>
          <h2>
            {name}
          </h2>
          {links.patch.small
            ? showImage(links.patch.small, 'Foguete')
            : showImage(noImage, 'Sem imagem')}
          {links.article
            ? showArticle(links.article, name)
            : null}
        </div>
      ))}
    </section>
  );
}

export default LaunchesCards;
