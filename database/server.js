const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("exalunossale", "root", "12345678", {
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
