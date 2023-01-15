const ExAluno = require("../models/ExAlunos.js");

module.exports = async function (req, res, next) {
  const userId = req.params.id;
  const exAlunoEmail = req.body.emailExAluno;

  const user = await ExAluno.findOne({
    raw: true,
    where: { email: exAlunoEmail },
  });

  console.log(user.id);
  console.log(user.email);
  console.log(userId);
  console.log(exAlunoEmail);

  console.log("TO AQUI");

  if (exAlunoEmail === user.email && userId != user.id) {
    onsole.log("TO AQUI no IF");
    let errors =
      "Email já existe no banco de dados e não coincide com o id do usuário";
    return res.redirect("back");
  }

  return next();
};
