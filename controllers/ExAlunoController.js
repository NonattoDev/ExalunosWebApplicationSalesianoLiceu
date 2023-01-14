const ExAlunos = require("../models/ExAlunos.js");
const Address = require("../models/Address.js");
const Guests = require("../models/Guests.js");
const { validationResult } = require("express-validator");

module.exports = class ExAlunoController {
  // FORMULARIO DE CADASTRO GERAL
  static homePage(req, res) {
    res.render("homePage");
  }

  static formExAluno(req, res) {
    let errors;
    res.render("cadastroExAluno", { errors: false });
  }

  // ! RECEBIMENTO VIA POST DO FORMULARIO
  static async formExAlunoSave(req, res) {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("cadastroExAluno", { errors: errors.array() });
    }

    // DADOS DO EX ALUNO
    const ExAlunoCad = {
      name: req.body.nomeExAluno,
      email: req.body.emailExAluno,
      cpf: req.body.cpfExAluno,
      rg: req.body.rgExAluno,
      birthday: req.body.dataDeNascimentoExAluno,
      formationDate:
        new Date(req.body.dataUltimoAnoInstituiçãoExAluno).getFullYear() + 1,
      haveGuest: req.body.respostaAcompanhante,
      isPaid: false,
    };

    // VERIFY IF EX ALUNO HAS A GUEST

    if (ExAlunoCad.haveGuest === "true") {
      ExAlunoCad.haveGuest = true;
    } else {
      ExAlunoCad.haveGuest = false;
    }

    // AFTER VERIFY, INSERT EX ALUNO IN A DB

    await ExAlunos.create(ExAlunoCad);

    // PRECISO DO ID DO ALUNO CRIADO PARA INSERIR NAS PRÓXIMAS TABELAS

    const ExAlunoIdDb = await ExAlunos.findOne({
      raw: true,
      where: { name: req.body.nomeExAluno, email: req.body.emailExAluno },
    });

    // IF EX ALUNO HAS AN GUEST, INSERT ON DB

    if (ExAlunoCad.haveGuest === true) {
      const Guest = {
        name: req.body.nameGuestForm,
        rg: req.body.rgGuestForm,
        cpf: req.body.cpfGuestForm,
        ExAlunoId: ExAlunoIdDb.id,
      };
      await Guests.create(Guest);
    }

    // INSERT ADDRESS IN DB

    const AddressExAluno = {
      cep: req.body.cep,
      city: req.body.cidade,
      street: req.body.rua,
      state: req.body.uf,
      neighborhood: req.body.bairro,
      number: req.body.numerocasa,
      ExAlunoId: ExAlunoIdDb.id,
    };
    await Address.create(AddressExAluno)
      .then((result) => {
        res.render("cadastroConcluido");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
