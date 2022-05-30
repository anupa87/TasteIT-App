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
              <Link to="/browse_recipes">Browse recipes</Link>
            </li>
            <li>
              <Link to="/add_recipes">Add recipes</Link>
            </li>
            <li>
              <Link to="/our_stories">Our stories</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navbar-admin">
        <a href="register">Register</a>
        <div />
        <a href="login">Login</a>
      </div>
    </div>
  );
};
export default Header;
