const Sequelize = require("sequelize");
require("dotenv").config();

const { SERVER_PASSWORD } = process.env;

const sequelize = new Sequelize("node-complete", "root", SERVER_PASSWORD, {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
