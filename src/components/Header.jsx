import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      SpaceX Launches
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/upcoming">Próximos lançamentos</Link>
          </li>
          <li>
            <Link to="/past">Lançamentos passados</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
