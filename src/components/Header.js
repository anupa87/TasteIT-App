import React from "react";

import Nav from "./Nav";
import bgVideo from "../assets/bgVideo.mp4";

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="logo">
          <h1>TasteIT</h1>
        </div>
        <div className="navbar">
          <Nav />
        </div>
      </div>
      <div className="header-bottom">
        <div className="intro-video">
          <video loop autoPlay muted>
            <source src={bgVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </header>
  );
};
export default Header;
