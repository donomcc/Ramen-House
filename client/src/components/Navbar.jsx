import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">
            <h1>Ramen House</h1>
          </Link>
        </div>
        <div className="links">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "")}
                to="/menu"
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "")}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="socials">
          <ul>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <FiInstagram size="24" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <FiFacebook size="24" />
              </a>
            </li>
          </ul>
        </div>
        <div className="reservation">
          <Link to="/contact">
            <button>Make a Reservation</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
