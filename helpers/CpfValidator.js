module.exports = async function cpfValidator(req, res, next) {
  const strCpf = await req.body.cpfExAluno;

  var soma;
  var resto;
  soma = 0;
  if (strCpf == "00000000000") {
    req.flash("erro", "Verifique o seu cpf!");
    res.redirect("/exalunos/addform");
    return false;
  }

  for (i = 1; i <= 9; i++) {
    soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
  }

  resto = soma % 11;

  if (resto == 10 || resto == 11 || resto < 2) {
    resto = 0;
  } else {
    resto = 11 - resto;
  }

  if (resto != parseInt(strCpf.substring(9, 10))) {
    req.flash("erro", "Verifique o seu cpf!");
    res.redirect("/exalunos/addform");
    return false;
  }

  soma = 0;

  for (i = 1; i <= 10; i++) {
    soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
  }
  resto = soma % 11;

  if (resto == 10 || resto == 11 || resto < 2) {
    resto = 0;
  } else {
    resto = 11 - resto;
  }

  if (resto != parseInt(strCpf.substring(10, 11))) {
    req.flash("erro", "Verifique o seu cpf!");
    res.redirect("/exalunos/addform");
    return false;
  }

  return next();
};
