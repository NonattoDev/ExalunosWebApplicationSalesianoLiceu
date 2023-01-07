document.addEventListener("keyup", verifyInput);

function verifyInput(event) {
  if (event.target.id === "inputEmail") {
    let userEmail = document.querySelector("#inputEmail");
    let iconRightEmail = document.querySelector(
      "#dadosPessoais > div:nth-child(2) > div:nth-child(3) > div > div > span.icon.is-small.is-right > i"
    );
    let avisoFraseEmail = document.querySelector(
      "#dadosPessoais > div:nth-child(2) > div:nth-child(3) > div > p"
    );

    const domainEmailExAluno = userEmail.value.split("@")[1];
    const stringBeforeArroba = userEmail.value.split("@")[0];
    const validDomainList = [
      "gmail.com",
      "hotmail.com",
      "yahoo.com",
      "salesiano-ba.com.br",
      "dombosco-ba.com.br",
      "salesianos.org.br",
      "uol.com.br",
      "bol.com.br",
      "apple.com",
      "icloud.com",
      "aol.com",
    ];

    if (
      stringBeforeArroba.length >= 4 &&
      validDomainList.find((x) => x === domainEmailExAluno)
    ) {
      userEmail.classList.remove("is-danger");
      userEmail.classList.remove("is-info");
      userEmail.classList.add("is-success");
      iconRightEmail.classList.remove("fa-exclamation-triangle");
      iconRightEmail.classList.remove("fa-exclamation");
      iconRightEmail.classList.add("fa-check");
      avisoFraseEmail.classList.remove("is-danger");
      avisoFraseEmail.classList.add("is-success");
      avisoFraseEmail.classList.remove("is-info");
      avisoFraseEmail.innerText = "E-mail Válido";
    } else {
      userEmail.classList.add("is-danger");
      userEmail.classList.remove("is-info");
      userEmail.classList.remove("is-success");
      iconRightEmail.classList.remove("fa-exclamation");
      iconRightEmail.classList.add("fa-exclamation-triangle");
      iconRightEmail.classList.remove("fa-check");
      avisoFraseEmail.classList.add("is-danger");
      avisoFraseEmail.classList.remove("is-success");
      avisoFraseEmail.classList.remove("is-info");
      avisoFraseEmail.innerText = "Digite um e-mail válido!";
    }
  }
}
