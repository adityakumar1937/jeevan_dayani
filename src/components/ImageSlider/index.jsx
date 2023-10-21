import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.scss";

const ImageSlider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide + 1) % data.length);
  };

  const prevSlide = () => {
    setSlide((slide - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2500);
    return () => clearInterval(interval);
  }, [slide]);

  return (
    <div className="slider-container">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {data.map((item, index) => {
        const imageClass = index === slide ? "slide fadeInRight" : "slide slide-hidden fadeOutLeft";
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={index}
            className={imageClass}
          />
        );
      })}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={
              slide === index ? "indicator" : "indicator indicator-inactive"
            }
          ></button>
        ))}
      </span>
    </div>
  );
};

export default ImageSlider;
