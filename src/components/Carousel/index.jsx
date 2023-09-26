import React from "react";
import "./style.scss";

const ImageSlider = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => {
        return <img src={item.src} alt={item.alt} key={index} />;
      })}
    </div>
  );
};

export default ImageSlider;
