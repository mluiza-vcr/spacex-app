import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PastLaunches from './pages/PastLaunches';
import UpcomingLaunches from './pages/UpcomingLaunches';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/past" element={<PastLaunches />} />
        <Route path="/upcoming" element={<UpcomingLaunches />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
