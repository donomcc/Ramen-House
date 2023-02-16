import React from "react";
import MenuItem from "../components/MenuItem";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Menu() {
  return (
    <div>
      <Navbar />
      <h1 className="centered menuHeader" c>
        Menu
      </h1>
      <div className="centeredColumn">
        <div className="appContainer">
          <h2 className="centered typeHeader">Appetizers</h2>
          <MenuItem itemType="appetizer" />
        </div>
        <div className="ramenContainer">
          <h2 className="centered typeHeader">Ramen</h2>
          <MenuItem itemType="ramen" />
        </div>
        <div className="curryContainer">
          <h2 className="centered typeHeader">Curries</h2>
          <MenuItem itemType="curry" />
        </div>
        <div className="drinkContainer">
          <h2 className="centered typeHeader">Drinks</h2>
          <MenuItem itemType="drink" />
        </div>
        <div className="dessertContainer">
          <h2 className="centered typeHeader">Desserts</h2>
          <MenuItem itemType="dessert" />
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
