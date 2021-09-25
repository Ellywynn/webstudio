const { DataTypes } = require("sequelize");
const db = require("../config/database");
const Film = require("./Film");

const Genre = db.define("genres", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Genre;
