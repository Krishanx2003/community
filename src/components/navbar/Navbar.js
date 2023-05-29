import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <Link to="/">Webuildcomm</Link>
        </div>
        <div className="navbar-links-container">
          <Link to="/community">Community</Link>
          <Link to="/events">Events</Link>
          <Link to="/about">About</Link>
          {/* <Link to="/career">Career</Link> */}
        </div>
      </div>

      <div className="navbar-sign">
        <Link to="/">Sign in</Link>
        <Link to="/signup">
          <button type="button">Sign up</button>
        </Link>
      </div>

      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="navbar-menu-container scale-up-center">
            <div className="navbar-menu-container-links">
              <Link to="/community" onClick={() => setToggleMenu(false)}>
                Community
              </Link>
              <Link to="/events" onClick={() => setToggleMenu(false)}>
                Events
              </Link>
              <Link to="/about" onClick={() => setToggleMenu(false)}>
                About
              </Link>
              <Link to="/career" onClick={() => setToggleMenu(false)}>
                Career
              </Link>
            </div>
            <div className="navbar-menu-container-links-sign">
              <Link to="/signin">Sign in</Link>
              <Link to="/signup">
                <button type="button">Sign up</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
