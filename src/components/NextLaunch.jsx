import React, { useEffect, useState } from 'react';
import launchesServices from '../services/launchesServices';
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

  return (
    <section className="main-launches">
      <p>PRÓXIMO LANÇAMENTO</p>
      <p>
        Nome:
        {launch.name}
      </p>
      <p>
        Número do vôo:
        {launch.flight_number}
      </p>
    </section>
  );
}

export default NextLaunch;
