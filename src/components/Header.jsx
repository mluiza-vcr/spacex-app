import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import '../styles/Header.css';
import SpaceXLogo from '../assets/images/SpaceX-Logo.png';

function Header() {
  const [width, setWidth] = useState(window.screen.width);

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setWidth(e.target.screen.width);
    });
  }, []);

  const renderNav = () => (
    <nav>
      <button type="button">
        <Link
          to="/"
          className="link"
        >
          Home
        </Link>
      </button>
      <button type="button">
        <Link
          to="/upcoming"
          className="link"
        >
          Próximos lançamentos
        </Link>
      </button>
      <button type="button">
        <Link
          to="/past"
          className="link"
        >
          Lançamentos passados
        </Link>
      </button>
    </nav>
  );

  const renderBurgerMenu = () => (
    <Menu right>
      {renderNav()}
    </Menu>
  );
  if (document.querySelector('.bm-item')) document.querySelector('.bm-item').style.display = 'flex';

  return (
    <div className="header-container">
      <header>
        <div className="logo">
          <img src={SpaceXLogo} alt="SpaceX Logo" width="350px" />
        </div>
        {width > 720 ? renderNav() : null}
      </header>
      {width <= 720 ? renderBurgerMenu() : null}
    </div>
  );
}

export default Header;
