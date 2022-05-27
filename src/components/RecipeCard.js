import React from "react";

import { Link } from "react-router-dom";

const RecipeCard = ({ name, description, img, data, country }) => {
  return (
    <div className="recipe-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={image} alt={name} />
      <img src={country.flag} alt={country.name} />
      <div>
        <Link to={name} state={{ data: data, country: country }}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
