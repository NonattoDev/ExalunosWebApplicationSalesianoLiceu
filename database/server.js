const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("salesianosexalunos", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then()
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;
