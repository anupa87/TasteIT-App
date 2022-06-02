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
    console.log("Hi");
    Promise.all([getRecipes(), getCountries()])
      .then(function (results) {
        const recipesData = results[0].data;
        const countriesData = results[1].data;
        setRecipes(recipesData);
        setCountries(countriesData);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return ( 
    <div className="recipes-container">
      <div className="search-div">
        <input
          type="search"
          onChange={handleSearch}
          value={search}
          placeholder="Search recipe..."
        ></input>
      </div>
      <div>
        <ul>
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              data={recipe}
              country={countries.find(
                (country) => country.alpha2Code === recipe.country_code
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

