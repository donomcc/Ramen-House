import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <HeroImage />
      <Footer />
    </div>
  );
}

export default Home;
