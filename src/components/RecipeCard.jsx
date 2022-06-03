import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ id, name, desc, img, country_code }) => {
  const [flag, setFlag] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/No_flag.svg/225px-No_flag.svg.png?20220314051100"
  );

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/name/" + country_code)
      .then((res) => setFlag(res.data[0].flags.svg));
  }, []);

  return (
    <div className="recipe-card">
      <img className="recipe-card-image" src={img} alt={name} />
      <img className="recipe-card-flag" src={flag} alt={flag} />
      <h3 className="recipe-card-title">{name}</h3>
      <p className="recipe-card-content">{desc}</p>
      <div className="recipe-card-link">
        <Link to={`/browse_recipes/${id}/${name}`}>See more &gt; &gt;</Link>
      </div>
    </div>
  );
};

export default RecipeCard;
