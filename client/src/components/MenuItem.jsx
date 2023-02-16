import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./MenuItem.css";
import AuthContext from "../context/AuthContext";

function MenuItem(props) {
  const [meals, setMeals] = useState([]);

  const { isAuthenticated } = useContext(AuthContext);

  const deleteItem = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:3001/menu/${id}`)
      .then(() => {
        setMeals(meals.filter((meal) => meal.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3001/menu");
      setMeals(result.data);
    };
    fetchData();
    console.log(meals);
  }, []);

  return (
    <div className="menuItemContainer">
      {meals.map((meal) => {
        if (meal.itemType === props.itemType) {
          return (
            <div className="menuItem">
              <img src={meal.imageUrl} />
              <div class="product-details">
                <h1 key={meal.id}>{meal.title}</h1>
                <h2>${meal.price}</h2>
                <p>{meal.description}</p>
              </div>
              {isAuthenticated && (
                <button onClick={() => deleteItem(meal.id)}>Remove</button>
              )}
            </div>
          );
        }
      })}
    </div>
  );
}

export default MenuItem;
