import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./components/Home";
import BrowseRecipes from "./components/BrowseRecipes";
import RecipeSingle from "./components/RecipeSingle";
import AddRecipes from "./components/AddRecipes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/browse_recipes" element={<BrowseRecipes />} />
          <Route path="/browse_recipes/:name" element={<RecipeSingle />} />
          <Route path="/add_recipes" element={<AddRecipes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
