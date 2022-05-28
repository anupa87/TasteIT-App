import React from "react";

import { useLocation } from "react-router-dom";

const RecipeSingle = (props) => {
  const location = useLocation();
  const recipe = location.state.data;
  const country = location.state.country;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.img} alt={recipe.name} />
      <img src={recipe.img} alt={recipe.name} />
    </div>
  );
};

export default RecipeSingle;