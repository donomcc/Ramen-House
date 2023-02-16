import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import "./Footer.css";
import AuthContext from "../context/AuthContext";
import axios from "axios";

function Footer() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  return (
    <div className="footer-container">
      <div className="column1">
        <h1>Ramen House</h1>
        <p>(123) 456-7890</p>
        <p>1234 Street, Dallas, TX, 12345</p>
        <p>#RamenHouse</p>
      </div>
      <div className="column2">
        <p>Sunday - Thursday</p>
        <p>10:30AM - 9PM</p>
        <p>Friday - Saturday</p>
        <p>10:30AM - 10PM</p>
      </div>
      <div className="column3">
        <a href="https://www.instagram.com/" target="_blank">
          <FiInstagram size="24" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <FiFacebook size="24" />
        </a>
        <br />
        <p>
          <Link to="/admin">Admin</Link>
        </p>
        {isAuthenticated && (
          <p
            style={{ cursor: "pointer" }}
            onClick={() => {
              axios.get("http://localhost:3001/logout").then(() => {
                setIsAuthenticated(false);
              });
            }}
          >
            Logout
          </p>
        )}
      </div>
    </div>
  );
}

export default Footer;
