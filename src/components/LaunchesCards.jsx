import React from 'react';
import PropTypes from 'prop-types';
import noImage from '../assets/images/noImage.jpg';

function LaunchesCards(props) {
  const { api } = props;
  const showImage = (param, alt, className) => (
    <img src={param} alt={alt} className={className} />);

  const showArticle = (param, nome) => (<a href={param}>{`Artigo sobre ${nome}`}</a>);

  return (
    <section className="launches-container">
      {api.length === 0
        ? <div>Carregando...</div> : api.map(({ name, links, flight_number: flightNumber }) => (
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

LaunchesCards.propTypes = {
  api: PropTypes.string,
}.isRequired;

export default LaunchesCards;
