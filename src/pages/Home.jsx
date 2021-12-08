import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NextLaunch from '../components/NextLaunch';
import LatestLaunch from '../components/LatestLaunch';
import '../styles/Header.css';
import '../styles/HomeCards.css';

function Home() {
  return (
    <>
      <Header />
      <div className="launch-container-home">
        <div>
          <NextLaunch />
          <LatestLaunch />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
