import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import LaunchesCards from '../components/LaunchesCards';
import launchesServices from '../services/launchesServices';
import Footer from '../components/Footer';

function PastLaunches() {
  const [api, setApi] = useState([]);

  const fetchApi = async () => {
    const data = await launchesServices.showLaunches('past');
    setApi(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  console.log(api);

  return (
    <div>
      <Header />
      <LaunchesCards api={api} />
      <Footer />
    </div>
  );
}

export default PastLaunches;
