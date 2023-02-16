const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Meal = sequelize.define("meal", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  itemType: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Meal;
