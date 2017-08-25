import React from 'react';

const HeaderBar = () => {
  return (
      <div className="navbar">
        <nav className="green lighten-1">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Logo</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
            </ul>
          </div>
        </nav>
      </div>
  )
};

export default HeaderBar;