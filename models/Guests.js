const { DataTypes } = require("sequelize");

const database = require("../database/server");

const Guest = database.define("Guest", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  rg: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
});

module.exports = Guest;
