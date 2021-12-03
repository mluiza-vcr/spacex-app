import React from 'react';
import { Link } from 'react-router-dom';
import launchesServices from '../services/launchesServices';

function Header() {
  const fetchAPI = async (param) => {
    const response = await launchesServices.showLaunches(param);
    return response;
  };

  return (
    <header>
      SpaceX Launches
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <button
              onClick={async () => {
                localStorage.setItem('upcoming', JSON.stringify(await fetchAPI('upcoming')));
              }}
              type="button"
            >
              <Link to="/upcoming">Próximos lançamentos</Link>
            </button>
          </li>
          <li>
            <button
              onClick={async () => {
                localStorage.setItem('past', JSON.stringify(await fetchAPI('past')));
              }}
              type="button"
            >
              <Link to="/past">Lançamentos passados</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
