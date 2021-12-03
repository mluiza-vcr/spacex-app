import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NextLaunch from '../components/NextLaunch';
import LatestLaunch from '../components/LatestLaunch';

function Home() {
  return (
    <>
      <Header />
      <NextLaunch />
      <LatestLaunch />
      <Footer />
    </>
  );
}

export default Home;
