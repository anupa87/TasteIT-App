import { React, useEffect, useState } from "react";
import axios from "axios";

const AddRecipes = () => {
  const [data, setData] = useState({
    name: "",
    author: "",
    desc: "",
    img: "",
  });
  const [ingredients, setIngredients] = useState([
    { id: 1, ingName: "", quantity: "" },
  ]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      // console.log(res.data);
      setCountries(res.data);
    });
  }, []);
  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const changeIngredientData = (e, i) => {
    const { name, value } = e.target;
    const ingredientList = [...ingredients];
    ingredientList[i][name] = value;
    setIngredients(ingredientList);
    setData({ ...data, ingredients });
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
    e.preventDefault();
    axios
      .post("http://localhost:3002/recipies", data)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <main className="main-container">
      <form onSubmit={submitData} className="form">
        <h2>Add your recipe</h2>
        <div>
          <label htmlFor="name">Food name:</label>
          <input type="text" name="name" id="name" onChange={changeData} />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" name="author" id="author" onChange={changeData} />
        </div>
        <div>
          <label htmlFor="desc">About Food:</label>
          <textarea type="text" name="desc" id="desc" onChange={changeData} />
        </div>
        <div>
          <label htmlFor="countryCode">Recipe is from:</label>
          <select name="country_code" id="countryCode" onChange={changeCountry}>
            {countries.map((c) => (
              <option key={c.name}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="img">Image url:</label>
          <input type="url" name="img" id="img" onChange={changeData} />
        </div>
        <p>Ingredients</p>
        {ingredients.map((_, i) => {
          return (
            <div key={i}>
              <div>
                <label htmlFor="ingName">Name:</label>
                <input
                  type="text"
                  name="ingName"
                  id="ingName"
                  onChange={(e) => changeIngredientData(e, i)}
                />
              </div>
              <div>
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  onChange={(e) => changeIngredientData(e, i)}
                />
              </div>
            </div>
          );
        })}
        <button onClick={addMore}>Add more ingredients</button>
        <div>
          <label htmlFor="instruction">Instructions:</label>
          <textarea
            type="text"
            name="instruction"
            id="instruction"
            onChange={changeData}
          />
        </div>
        <button type="submit" value="send">
          Add recipe
        </button>
      </form>
    </main>
  );
};

export default AddRecipes;
