import React from 'react';
import { Link } from 'react-router-dom';
import launchesServices from '../services/launchesServices';
import '../styles/Header.css';
import SpaceXLogo from '../assets/images/SpaceX-Logo.png';

function Header() {
  const fetchAPI = async (param) => {
    const response = await launchesServices.showLaunches(param);
    return response;
  };

  return (
    <div className="header-container">
      <header>
        <div className="logo">
          <img src={SpaceXLogo} alt="SpaceX Logo" width="350px" />
        </div>
        <nav>
          <button type="button">
            <Link
              to="/"
              className="link"
            >
              Home
            </Link>
          </button>
          <button
            onClick={async () => {
              localStorage.setItem('upcoming', JSON.stringify(await fetchAPI('upcoming')));
            }}
            type="button"
          >
            <Link
              to="/upcoming"
              className="link"
            >
              Próximos lançamentos
            </Link>
          </button>
          <button
            onClick={async () => {
              localStorage.setItem('past', JSON.stringify(await fetchAPI('past')));
            }}
            type="button"
          >
            <Link
              to="/past"
              className="link"
            >
              Lançamentos passados
            </Link>
          </button>
        </nav>
      </header>
    </div>
  );
}

export default Header;
