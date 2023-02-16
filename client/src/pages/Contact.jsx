import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function Contact() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB1PElKtMBybVcwegemTiGnDGLFInH7l60",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <div className="contact-details">
          <h1>Ramen House</h1>
          <p>(123) 456-7890</p>
          <p>Please call to make reservations.</p>
          <p>contact@email.com</p>
          <p>1234 Street, Dallas, TX, 12345</p>
        </div>
        <div className="map">
          <GoogleMap
            zoom={10}
            center={{ lat: 32.779167, lng: -96.808891 }}
            mapContainerClassName="map-container"
          ></GoogleMap>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
