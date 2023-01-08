const express = require("express");
const router = express.Router();

const ExAlunoController = require("../controllers/ExAlunoController");

const checkEmailIsValid = require("../helpers/checkIfEmailIsValid");
const cpfValidator = require("../helpers/cpfValidator");

//Rota para mostrar o formulario de cadastro do exaluno
router.get("/", ExAlunoController.homePage);
router.get("/addform", ExAlunoController.formExAluno);
router.post(
  "/saveform",
  checkEmailIsValid,
  cpfValidator,
  ExAlunoController.formExAlunoSave
);

module.exports = router;
