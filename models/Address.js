const { DataTypes } = require("sequelize");

const database = require("../database/server");

const Address = database.define("Address", {
  cep: {
    type: DataTypes.INTEGER,
    allowNull: false,
    required: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  neighborhood: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    required: true,
  },
});

module.exports = Address;
