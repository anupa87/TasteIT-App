import React from "react";

import bgVideo from "../assets/bgVideo.mp4";

const Home = () => {
  return (
    <main className="main-container">
      <div className="video-container">
        <video loop autoPlay muted className="intro-video">
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      {/* <div className="app-description">
        <p>
          TasteIT is a recipe app made with React where user can get recipies
          from around the world and tell the stories behind the food. Registered
          user can also add their recipes to the recipe bank
        </p>
      </div> */}
      <div className="card-container">
        <div className="card">
          <div className="image-container"></div>
          <div className="card-title">
            <h3>Browse recipes</h3>
          </div>
          <div className="card-content">
            <p>
              Are you hungry? Are you looking for some yoummy food to try? Find
              food of your taste from our recipes
            </p>
          </div>
          <div className="btn see-more-btn">
            <button>
              <a href="/browse_recipes">See more</a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="image-container"></div>
          <div className="card-title">
            <h3>Recipes bank</h3>
          </div>
          <div className="card-content">
            <p>
              Be the part of our community! Add your recipe to our recipe bank.
            </p>
          </div>
          <div className="btn see-more-btn">
            <button>
              <a href="/add_recipes">See more</a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="image-container"></div>
          <div className="card-title">
            <h3>Our stories</h3>
          </div>
          <div className="card-content">
            <p>Do you want to know about us?</p>
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