const express = require("express");
const router = express.Router();
const sequelize = require("../util/database");
const Meal = require("../models/meals");

// router.get("/meals", (req, res) => {
//   Meal.findAll()
//     .then((meals) => {
//       console.log(meals);
//       res.sendStatus(200);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

router.get("/", (req, res) => res.send("SUCCESS"));

module.exports = router;
