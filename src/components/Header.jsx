import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <h1>TasteIT</h1>
      </div>
      <div className="navbar-links">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recipes">Browse recipes</Link>
            </li>
            <li>
              <Link to="/admin">Add recipes</Link>
            </li>
            <li>
              <Link to="/contact">Our stories</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navbar-login">
        <a href="login">Log in</a>
        <div />
        <div></div>
        <a href="sign-up">Sign-up</a>
      </div>
    </div>
  );
};
export default Header;
