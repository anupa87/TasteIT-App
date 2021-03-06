import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const RecipeSingle = () => {
  const id = useParams().id;
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    axios
      .get(`http://localhost:3002/recipies/${id}`)
      .then((res) => {
        console.log(res.data);
        setRecipe(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log(id);
    fetchData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="recipe-container">
      <div className="recipe-intro">
        <h2>{recipe.name}</h2>
        <img src={recipe.img} alt={recipe.name} className="recipe-img" />
        <p className="recipe-desc">{recipe.desc}</p>
      </div>
      <div className="recipe-detail">
        <h3>Ingredients: </h3>
        <table className="ingredients-table"></table>
        {recipe.ingredients?.map((ingredient) => (
          <p key={ingredient.id}>
            {ingredient.ingName}----{ingredient.quantity}
          </p>
        ))}
        <h3>Instruction: </h3>
        <p>{recipe.instruction}</p>
      </div>
    </div>
  );
};

export default RecipeSingle;
