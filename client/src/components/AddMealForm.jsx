import React, { useState, useRef } from "react";
import axios from "axios";
import classes from "./AddMealForm.module.css";

function AddMealForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [itemType, setItemType] = useState("ramen");

  const submitHandler = () => {
    console.log({
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl,
      itemType: itemType,
    });
    if (!title || !description || !price || !imageUrl || !itemType) {
      alert("Please fill in all fields");
      return;
    }
    axios
      .post("http://localhost:3001/admin/add-meal", {
        title: title,
        description: description,
        price: price,
        imageUrl: imageUrl,
        itemType: itemType,
      })
      .then(() => {
        alert("Successful Insert!");
        setTimeout(() => {
          setTitle("");
          setDescription("");
          setImageUrl("");
          setPrice(0);
        }, 0);
      });
  };
  return (
    <div className={classes.adminForm}>
      <h1>Admin</h1>
      <div className={classes.formDetails}>
        <label className={classes["mealLabel"]}>Meal Title</label>
        <input
          className={classes.inputs}
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className={classes["mealLabel"]}>Type of Item</label>
        <select
          className={classes.inputs}
          value={itemType}
          onChange={(e) => setItemType(e.target.value)}
        >
          <option value="ramen">Ramen</option>
          <option value="curry">Curry</option>
          <option value="appetizer">Appetizer</option>
          <option value="drink">Drink</option>
          <option value="dessert">Dessert</option>
        </select>

        <label className={classes["mealLabel"]}>Meal Description</label>
        <textarea
          className={classes.textarea}
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label className={classes["mealLabel"]}>Meal Price</label>
        <input
          className={classes.inputs}
          type="number"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <labe className={classes["mealLabel"]} l>
          Meal ImageURL
        </labe>
        <input
          className={classes.inputs}
          type="text"
          name="imageUrl"
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button className={classes["addItem"]} onClick={submitHandler}>
        Add Item
      </button>
    </div>
  );
}

export default AddMealForm;
