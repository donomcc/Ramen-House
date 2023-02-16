import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function NotFound() {
  return (
    <>
      <Navbar />
      <div className="centered">
        <p>Page not found.</p>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
