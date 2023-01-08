module.exports = async function checkEmailIsValid(req, res, next) {
  // Checando Email

  const domainEmailExAluno = await req.body.emailExAluno.split("@")[1];

  const validDomainList = [
    "gmail.com",
    "hotmail.com",
    "yahoo.com",
    "gmail.com.br",
    "hotmail.com.br",
    "yahoo.com.br",
    "salesiano-ba.com.br",
    "dombosco-ba.com.br",
    "salesianos.org.br",
    "uol.com.br",
    "bol.com.br",
    "apple.com",
    "icloud.com",
    "aol.com",
  ];

  if (!validDomainList.find((x) => x === domainEmailExAluno)) {
    req.flash("erro", "Verifique o seu email!");
    res.redirect("/exalunos/addform");
  } else {
    next();
  }
};
