const ExAlunos = require("../models/ExAlunos.js");
const Address = require("../models/Address.js");
const Guests = require("../models/Guests.js");

module.exports = class ExAlunoController {
  // FORMULARIO DE CADASTRO GERAL
  static adminLoginGET(req, res) {
    res.render("admin/login");
  }
};
