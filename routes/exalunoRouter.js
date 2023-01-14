const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const ExAlunos = require("../models/ExAlunos.js");

const ExAlunoController = require("../controllers/ExAlunoController");

const ExAluno = require("../models/ExAlunos.js");

//Rota para mostrar o formulario de cadastro do exaluno
router.get("/", ExAlunoController.homePage);
router.get("/form", ExAlunoController.formExAluno);
router.post(
  "/form",
  //Verifications
  body("nomeExAluno", "No seu nome devem haver apenas letras de A - Z").isAlpha(
    "pt-BR",
    { ignore: " " }
  ),
  body("emailExAluno", "Verifique o email digitado").isEmail().normalizeEmail(),
  body(
    "cpfExAluno",
    "Verifique o seu CPF, lembre-se são apenas digitos!"
  ).isNumeric(),
  body(
    "rgExAluno",
    "Verifique o seu RG, lembre-se são apenas digitos númericos!"
  ).isNumeric(),
  body(
    "dataUltimoAnoInstituiçãoExAluno",
    "Verifique a data Digitada e tente novamente!"
  ).isNumeric(),
  body("emailExAluno").custom(async (value) => {
    const user = await ExAluno.findOne({ where: { email: value } });

    if (user) {
      return Promise.reject("Email já existe no banco de dados");
    }
  }),
  body("cpfExAluno").custom(async (value) => {
    const cpf = await ExAluno.findOne({ where: { cpf: value } });
    if (cpf) {
      return Promise.reject("CPF já cadastrado no banco de dados!");
    }
  }),
  body("cpfExAluno").custom(async (strCPF) => {
    let Soma;
    let Resto;
    Soma = 0;
    if (strCPF == "00000000000") return Promise.reject("CPF Inválido!");

    for (i = 1; i <= 9; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)))
      return Promise.reject("CPF Inválido!");

    Soma = 0;
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11)))
      return Promise.reject("CPF Inválido!");

    return true;
  }),

  //_______

  ExAlunoController.formExAlunoSave
);

module.exports = router;
