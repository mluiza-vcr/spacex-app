import React, { useEffect, useState } from 'react';
import launchesServices from '../services/launchesServices';

function LatestLaunch() {
  const [launch, setLaunch] = useState([]);

  const fetchAPI = async () => {
    const response = await launchesServices.showLatestLaunch();
    setLaunch(response);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <section className="main-launches">
      <p>ÚLTIMO LANÇAMENTO</p>
      <p>{launch.name}</p>
      <p>{launch.flight_number}</p>
    </section>
  );
}

export default LatestLaunch;
