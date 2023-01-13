const ExAlunos = require("../models/ExAlunos.js");
const Address = require("../models/Address.js");
const Guests = require("../models/Guests.js");
const dotenv = require("dotenv").config();
module.exports = class ExAlunoController {
  // FORMULARIO DE LOGIN
  static adminLoginGET(req, res) {
    if (req.session.login) {
      let user = req.session.login;
      res.render("admin/loggedIn", { user: user });
    } else {
      let err;
      res.render("admin/login", { err });
    }
  }

  // RECEBO DADOS DO LOGIN
  static adminLoginPost(req, res) {
    //Apenas Teste
    const adminLog = {
      u: process.env.USER,
      p: process.env.PSWD,
    };

    const user = {
      nome: req.body.userLogin,
      pwd: req.body.userPassword,
    };

    if (user.nome === adminLog.u && user.pwd === adminLog.p) {
      // Logado com Sucesso!
      req.session.login = user.nome;
      res.redirect("/exalunos/addform");
    } else {
      let err;
      res.render("admin/login", { err: "Usuario ou senha incorretos!" });
    }
  }

  // ADMIN DASHBOARD
  static adminDashBoardGET(req, res) {
    let user = req.session.login;
    res.render("admin/dashboard", { user });
  }
};
