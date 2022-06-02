import React from "react";

import { Link } from "react-router-dom";

const RecipeCard = ({ name, desc, img, data, country }) => {
  return (
    <div className="recipe-card">
      <img className="recipe-card-image" src={img} alt={name} />
      <h3 className="recipe-card-title">{name}</h3>
      <p className="recipe-card-content">{desc}</p>
      <img className="recipe-card-flag" src={country.flag} alt={country.name} />
      <div className="recipe-card-link">
        <Link to={name} state={{ data: data, country: country }}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
