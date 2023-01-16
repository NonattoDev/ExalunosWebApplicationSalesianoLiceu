const ExAlunos = require("../models/ExAlunos.js");
const Address = require("../models/Address.js");
const Guests = require("../models/Guests.js");
const dotenv = require("dotenv").config();
const { validationResult } = require("express-validator");
const { where } = require("sequelize");

module.exports = class ExAlunoController {
  //! FORMULARIO DE LOGIN
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

  //! RECEBO DADOS DO LOGIN
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

  //! ADMIN DASHBOARD
  static async adminDashBoardGET(req, res) {
    const exAlunoData = await ExAlunos.findAll({
      include: Guests,
      raw: true,
    });
    const count = await ExAlunos.count();
    let errors;
    let user = req.session.login;
    return await res.render("admin/dashboard", {
      layout: "layouts/panel",
      user,
      exAlunoData,
      errors: false,
      count,
    });
  }

  //! FAZER LOGOUT
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

  //! EDIT USER DATA
  static async adminUserEditGET(req, res) {
    const userID = req.params.id;

    const exAlunoData = await ExAlunos.findOne({
      where: { id: userID },
      include: [Guests, Address],
      raw: true,
    });

    let errors;
    return res.render("admin/editform", {
      exAlunoData,
      errors,
    });
  }

  //! SEGUNDA PARTE DO UPDATE
  static async adminUserEditPOST(req, res) {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("admin/editform", { errors: errors.array() });
    }

    const userID = req.params.id;

    // DADOS DO EX ALUNO
    const ExAlunoCad = {
      name: req.body.nomeExAluno,
      email: req.body.emailExAluno,
      cpf: req.body.cpfExAluno,
      rg: req.body.rgExAluno,
      birthday: req.body.dataDeNascimentoExAluno,
      formationDate: req.body.dataUltimoAnoInstituiçãoExAluno,
    };

    const exAluno = await ExAlunos.findByPk(userID, { raw: true });

    await ExAlunos.update(ExAlunoCad, { where: { id: userID } });

    //! Verify if the user have a guest and add to the database with UPDATE Query
    if (exAluno.haveGuest != 0) {
      const Guest = {
        name: req.body.nameGuestForm,
        rg: req.body.rgGuestForm,
        cpf: req.body.cpfGuestForm,
      };

      await Guests.update(Guest, { where: { ExAlunoId: userID } });
    }

    const AddressExAluno = {
      cep: req.body.cep,
      city: req.body.cidade,
      street: req.body.rua,
      state: req.body.uf,
      neighborhood: req.body.bairro,
      number: req.body.numerocasa,
    };

    await Address.update(AddressExAluno, { where: { ExAlunoId: userID } })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });

    return res.redirect("/admin/dashboard");
  }

  static async adminUserDestroyPOST(req, res) {
    const userID = req.body.idToDestroy;

    await Guests.destroy({ where: { ExAlunoId: userID } });
    await Address.destroy({ where: { ExAlunoId: userID } });
    await ExAlunos.destroy({ where: { id: userID } })
      .then(() => {
        return res.redirect("/admin/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static async adminUserIsPaidPOST(req, res) {
    let isPaid = req.body.isPaidId;
    const userID = req.body.userID;

    let bool = false;

    if (isPaid == 0) {
      bool = true;
    } else {
      bool = false;
    }

    await ExAlunos.update({ isPaid: bool }, { where: { id: userID } })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });

    return res.redirect("back");
  }
};
