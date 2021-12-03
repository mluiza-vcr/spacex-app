import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NextLaunch from '../components/NextLaunch';
import LatestLaunch from '../components/LatestLaunch';

function Home() {
  return (
    <div className="Home">
      <Header />
      ESSA É A HOME
      <NextLaunch />
      <LatestLaunch />
      <Footer />
    </div>
  );
}

export default Home;
