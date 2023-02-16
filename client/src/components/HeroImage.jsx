import React from "react";
import "./HeroImage.css";

function HeroImage() {
  return (
    <div className="container">
      <img
        src="https://popmenucloud.com/cdn-cgi/image/width=1200,height=630,format=auto,fit=cover/lkmbujqa/fcf6d678-dae9-4784-8365-b2409eb4dc27.jpg"
        alt="hero-img"
      />
      <div className="text">
        <h1>Welcome Home</h1>
        <h2>#RamenHouse</h2>
      </div>
    </div>
  );
}

export default HeroImage;
