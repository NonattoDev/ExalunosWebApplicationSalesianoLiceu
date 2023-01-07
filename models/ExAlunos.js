const { DataTypes } = require("sequelize");

const database = require("../database/server");

const ExAluno = database.define("ExAluno", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  email: {
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
  birthday: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  formationDate: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  haveGuest: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isPaid: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

//Create a relation
const Guest = require("./Guests");
const Address = require("./Address");

Address.belongsTo(ExAluno);
ExAluno.hasOne(Address);
Guest.belongsTo(ExAluno);
ExAluno.hasOne(Guest);

module.exports = ExAluno;
