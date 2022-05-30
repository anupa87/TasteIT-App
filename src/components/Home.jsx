import React from "react";
import { Link } from "react-router-dom";

import bgVideo from "../assets/bgVideo.mp4";
import Trending from "./Trending";

const Home = () => {
  return (
    <main className="main-container">
      <div className="video-container">
        <video loop autoPlay muted className="intro-video">
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      <div className="app-description">
        <p>
          TasteIT is a recipe app made with React where user can get recipies
          from around the world and tell the stories behind the food. Registered
          user can also add their recipes to the recipe bank
        </p>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="image-container">
            <img src="" alt="" />
          </div>
          <div className="card-title">
            <h3>Browse recipes</h3>
          </div>
          <div className="card-body">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="btn see-more-btn">
            <button>
              <a href="/Recipes.jsx">See more</a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="image-container">
            <img src="" alt="" />
          </div>
          <div className="card-title">
            <h3>Add recipes</h3>
          </div>
          <div className="card-body">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="btn see-more-btn">
            <button>
              <a href="/Admin.jsx">See more</a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="image-container">
            <img src="" alt="" />
          </div>
          <div className="card-title">
            <h3>More about us</h3>
          </div>
          <div className="card-body">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="btn see-more-btn">
            <button>
              <a href="https://www.bc.fi">See more</a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
