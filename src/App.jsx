import React from "react";
import "./App.scss";

import { slides } from "../src/data/carousel-data.json";

import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <ImageSlider data={slides} />
      <About/>
      <Footer />
    </>
  );
}

export default App;
