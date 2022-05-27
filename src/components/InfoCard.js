import React from "react";

const InfoCard = ({ image, title, body }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src="" alt="" />
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>
      <div className="btn see-more-btn">
        <button>
          <a href="/">See more</a>
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
