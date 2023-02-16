const Meal = require("../models/Meals");

exports.getAddMeal = (req, res, next) => {
  res.render("admin/edit-meal", {
    pageTitle: "Add Meal",
    path: "admin/add-meal",
    editing: false,
  });
};

exports.postAddMeal = (req, res, next) => {
  const title = req.body.title;
};
