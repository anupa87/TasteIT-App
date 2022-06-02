import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="logo">TasteIT</h1>
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
        </ul>
      </nav>
    </div>
  );
};
export default Header;