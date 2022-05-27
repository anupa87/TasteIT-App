import React, { useEffect, useState } from "react";

import axios from "axios";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    country_code: "",
    img: "",
    ingredients: "",
    instruction: "",
  });

  const [ingredients, setIngredients] = useState([
    {
      id: 1,
      ingName: "",
      quantity: "",
    },
  ]);

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
    });
  }, []);
  const changeIngData = (e, i) => {
    const { name, value } = e.target;
    const ingList = [...ingredients];
    ingList[i][name] = value;
    setIngredients(ingList);
    setData({ ...data, ing: ingredients });
  };

  const changeCountry = (e) => {
    const correctCountry = countries.find((c) => c.name === e.target.value);
    setData({ ...data, country_code: correctCountry.alpha2Code });
  };

  const addMore = (e) => {
    e.preventDefault();
    const newIng = { id: ingredients.length + 1, ingName: "", quantity: "" };
    setIngredients([...ingredients, newIng]);
  };

  const submitData = (e) => {
    axios.post("http://localhost:3001/recipies", data);
  };

  return (
    <form onSubmit={submitData}>
      <div>
        <label htmlFor="name">Food name</label>
        <input
          type="text"
          name="foodName"
          id="food-name"
          onChange={changeData}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          name="description"
          id="description"
          onChange={changeData}
        />
      </div>
      <div>
        <label htmlFor="countryCode">Recipe from:</label>
        <select name="countryCode" id="country-code" onChange={changeCountry}>
          <option key={counrty.name}>{country.name}</option>
        </select>
      </div>
      <div>
        <label htmlFor="img">Image url</label>
        <imput type="url" name="img" id="img" onChange={changeData} required />
      </div>
      <p>Ingredients</p>
      {ingredients.map((_, i) => {
        return (
          <div key={i}>
            <div>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="text"
                name="quantity"
                id="quantity"
                onChange={(e) => changeIngData(e, i)}
              />
            </div>
            <div>
              <label htmlFor="ingName">Ingredient</label>
              <input
                type="text"
                name="ingName"
                id="ingName"
                onChange={(e) => changeIngData(e, i)}
              />
            </div>
          </div>
        );
      })}
      <button onClick={addMore}>Add more ingredients</button>
      <div>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          typeof="text"
          name="instructions"
          id="instructions"
          onChage={changeData}
        />
      </div>
      <input type="submit" value="Add recipe" />
    </form>
  );
};

export default Form;
