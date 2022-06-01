import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const RecipeCard = ({ name, description, image, country, id }) => {
  const [flag, setFlag] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/No_flag.svg/225px-No_flag.svg.png?20220314051100"
  );

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/name/" + origin)
      .then((result) => setFlag(result.data[0].flags.svg));
  }, []);

  return (
    <div className="recipe-card">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <img src={country.flag} alt={country.name} />
      <p>{description}</p>
      <div>
        <Link to={`${id}`}>See more</Link>
      </div>
    </div>
  );
};

export default RecipeCard;
