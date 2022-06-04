import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  return (
    <div className="social-media-icon">
      <a className="facebook-icon">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>

      <a className="instagram-icon">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
};

export default SocialMedia;
