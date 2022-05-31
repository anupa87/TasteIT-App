import React, { useState, useEffect } from "react";
import axios from "axios";

import RecipeCard from "./RecipeCard";

const BrowseRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const getRecipes = () => axios.get("http://localhost:3001/recipies");
  const getCountries = () => axios.get("https://restcountries.com/v2/all");

  useEffect(() => {
    setLoading(true);
    Promise.all([getRecipes(), getCountries()]).then(function (results) {
      const recipesData = results[0];
      const countriesData = results[1];

      setRecipes(recipesData);
      setCountries(countriesData);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="recipes-container">
      <h2>Recipes from around the world</h2>
      <div className="search-div">
        <input
          type="search"
          onChange={handleSearch}
          value={search}
          placeholder="Search recipe..."
        ></input>
      </div>
      <div className="recipes-grid">
        <ul>
          {recipes().map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              recipe={recipe}
              country={countries.find(
                (country) => country.alpha2Code === recipe.origin
              )}
              {...recipe}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BrowseRecipes;
