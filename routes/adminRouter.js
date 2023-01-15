const express = require("express");
const router = express.Router();
const isLoggedIn = require("../helpers/isLoggedIn");
const emailValidatorOnEdit = require("../helpers/emailValidatorOnEdit");
const { body, validationResult } = require("express-validator");

const AdminController = require("../controllers/AdminController");

router.post(
  "/dashboard/edit/user/:id",
  isLoggedIn,
  emailValidatorOnEdit,
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
  AdminController.adminUserEditPOST
);
router.get(
  "/dashboard/edit/user/:id",
  isLoggedIn,
  AdminController.adminUserEditGET
);
router.post(
  "/dashboard/remove/user",
  isLoggedIn,
  AdminController.adminUserDestroyPOST
);
router.post(
  "/dashboard/checkispaid/user",
  isLoggedIn,
  AdminController.adminUserIsPaidPOST
);
router.get("/dashboard", isLoggedIn, AdminController.adminDashBoardGET);
router.post("/logout", AdminController.adminLogoutPOST);
router.get("/login", AdminController.adminLoginGET);
router.post("/login", AdminController.adminLoginPost);

module.exports = router;
