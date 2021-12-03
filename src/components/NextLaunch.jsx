import React, { useEffect, useState } from 'react';
import launchesServices from '../services/launchesServices';
import noImage from '../assets/images/noImage.jpg';
import '../styles/LaunchesCards.css';

function NextLaunch() {
  const [launch, setLaunch] = useState([]);

  const fetchAPI = async () => {
    const response = await launchesServices.showLaunches('next');
    setLaunch(response);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const showImage = (param, alt) => (<img src={param} alt={alt} />);

  return (
    <section className="main-launches">
      <h1>PRÓXIMO LANÇAMENTO</h1>
      <h2>
        {launch.name}
      </h2>
      {launch.links && launch.links.patch.small
        ? showImage(launch.links.patch.small, 'Foguete')
        : showImage(noImage, 'Sem imagem')}
      <p>
        {launch.flight_number}
      </p>
    </section>
  );
}

export default NextLaunch;
