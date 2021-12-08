import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import LaunchesCards from '../components/LaunchesCards';
import launchesServices from '../services/launchesServices';
import Footer from '../components/Footer';

function UpcomingLaunches() {
  const [api, setApi] = useState([]);

  const fetchApi = async () => {
    const data = await launchesServices.showLaunches('upcoming');
    setApi(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <Header />
      <LaunchesCards api={api} />
      <Footer />
    </>
  );
}

export default UpcomingLaunches;
