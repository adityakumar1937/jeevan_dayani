import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/Carousel";
import { slides } from "../src/data/carousel-data.json";

function App() {
  return (
    <>
      <Navbar />
      <ImageSlider data={slides} />
    </>
  );
}

export default App;
