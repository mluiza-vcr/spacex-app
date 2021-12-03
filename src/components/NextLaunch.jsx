import React, { useEffect, useState } from 'react';
import launchesServices from '../services/launchesServices';

function NextLaunch() {
  const [launch, setLaunch] = useState([]);

  const fetchAPI = async () => {
    const response = await launchesServices.showNextLaunch();
    setLaunch(response);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <section className="main-launches">
      <p>PRÓXIMO LANÇAMENTO</p>
      <p>{launch.name}</p>
      <p>{launch.flight_number}</p>
    </section>
  );
}

export default NextLaunch;
