import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function Contact() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <Navbar />
      <section className="contact-container">
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
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
