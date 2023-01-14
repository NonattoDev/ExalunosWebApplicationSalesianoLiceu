const ExAlunos = require("../models/ExAlunos.js");
const Address = require("../models/Address.js");
const Guests = require("../models/Guests.js");
const dotenv = require("dotenv").config();

module.exports = class ExAlunoController {
  // FORMULARIO DE LOGIN
  static adminLoginGET(req, res) {
    if (req.session.login) {
      return res.redirect("/admin/dashboard");
    } else {
      let err;
      let info;
      return res.render("admin/login", {
        layout: "layouts/login",
        err,
        info,
      });
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
      name: "Administrador",
      log: req.body.userLogin,
      pwd: req.body.userPassword,
    };

    if (user.log === adminLog.u && user.pwd === adminLog.p) {
      // Logado com Sucesso!
      req.session.login = user.name;
      return res.redirect("/admin/dashboard");
    } else {
      let err;
      return res.render("admin/login", {
        layout: "layouts/login",
        err: "Usuario ou senha incorretos!",
      });
    }
  }

  // ADMIN DASHBOARD
  static async adminDashBoardGET(req, res) {
    if (!req.session) {
      return res.redirect("/admin/login");
    }
    const exAlunoData = await ExAlunos.findAll({
      include: Guests,
      raw: true,
    });
    console.log(exAlunoData);
    let user = req.session.login;
    return await res.render("admin/dashboard", {
      layout: "layouts/panel",
      user,
      exAlunoData,
    });
  }

  static adminLogoutPOST(req, res) {
    if (req.session) {
      req.session.destroy((err) => {
        if (err) {
          console.log(err);
          return res.status(400).redirect("/");
        } else {
          return res.render("admin/login", {
            layout: "layouts/login",
            err,
            info: "você foi deslogado!",
          });
        }
      });
    }
  }
};
