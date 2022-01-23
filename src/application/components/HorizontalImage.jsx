import React from "react";
import image from "../../static/images/netflix_bg.jpg";

const HorizontalImage = () => {
  return (
    <div
      className="horizontal-image position-relative"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default HorizontalImage;
