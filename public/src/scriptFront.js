document.addEventListener("input", verifyInput);
document.addEventListener("keypress", verifyInput);
document.addEventListener("mouseout", verifyInput);

function verifyInput(event) {
  if (document.getElementsByClassName("is-danger").length > 1) {
    document.querySelector("#enviar").classList.remove("is-primary");
    document.querySelector("#enviar").classList.add("is-danger");
    document.querySelector("#enviar").setAttribute("type", "button");
  } else {
    document.querySelector("#enviar").classList.add("is-primary");
    document.querySelector("#enviar").classList.remove("is-danger");
    document.querySelector("#enviar").setAttribute("type", "submit");
  }

  // VERIFICAÇÃO CPF
  if (event.target.id === "inputCPF") {
    let strCpf = document.querySelector("#inputCPF").value;
    let strCpfClass = document.querySelector("#inputCPF");
    let iconRightCPF = document.querySelector("#iconCpf");
    let avisoFraseCPF = document.querySelector("#helpCPF");

    console.log(strCpf);

    var soma;
    var resto;
    soma = 0;
    if (strCpf === "00000000000") {
      strCpfClass.classList.remove("is-success");
      strCpfClass.classList.remove("is-info");
      strCpfClass.classList.add("is-danger");
      avisoFraseCPF.innerText = "CPF Inválido";
      avisoFraseCPF.classList.remove("is-success");
      avisoFraseCPF.classList.remove("is-info");
      avisoFraseCPF.classList.add("is-danger");
      iconRightCPF.classList.add("fa-exclamation-triangle");
      iconRightCPF.classList.remove("fa-check");
      iconRightCPF.classList.remove("fa-exclamation");
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
      strCpfClass.classList.remove("is-success");
      strCpfClass.classList.remove("is-info");
      strCpfClass.classList.add("is-danger");
      avisoFraseCPF.innerText = "CPF Inválido";
      avisoFraseCPF.classList.remove("is-success");
      avisoFraseCPF.classList.remove("is-info");
      avisoFraseCPF.classList.add("is-danger");
      iconRightCPF.classList.add("fa-exclamation-triangle");
      iconRightCPF.classList.remove("fa-check");
      iconRightCPF.classList.remove("fa-exclamation");
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
      strCpfClass.classList.remove("is-success");
      strCpfClass.classList.remove("is-info");
      strCpfClass.classList.add("is-danger");
      avisoFraseCPF.innerText = "CPF Inválido";
      avisoFraseCPF.classList.remove("is-success");
      avisoFraseCPF.classList.remove("is-info");
      avisoFraseCPF.classList.add("is-danger");
      iconRightCPF.classList.add("fa-exclamation-triangle");
      iconRightCPF.classList.remove("fa-check");
      iconRightCPF.classList.remove("fa-exclamation");
      return false;
    }

    strCpfClass.classList.add("is-success");
    strCpfClass.classList.remove("is-info");
    strCpfClass.classList.remove("is-danger");
    avisoFraseCPF.innerText = "CPF Válido";
    avisoFraseCPF.classList.add("is-success");
    avisoFraseCPF.classList.remove("is-info");
    avisoFraseCPF.classList.remove("is-danger");
    iconRightCPF.classList.remove("fa-exclamation-triangle");
    iconRightCPF.classList.add("fa-check");
    iconRightCPF.classList.remove("fa-exclamation");
  }

  //DATA DE NASCIMENTO AND ULTIMO ANO INSTITUIÇÃO
  if (event.target.id == "dataNascimento") {
    let dataNascimento = document.querySelector("#dataNascimento");
    let avisoFraseDataNascimento = document.querySelector(
      "#avisoFraseDataDeNascimento"
    );

    let dateNow = new Date().getFullYear();

    if (dataNascimento.value.split("-")[0] >= dateNow) {
      dataNascimento.classList.remove("is-primary");
      dataNascimento.classList.remove("is-success");
      dataNascimento.classList.add("is-danger");
      avisoFraseDataNascimento.innerText = "Verifique a data informada";
    } else {
      dataNascimento.classList.remove("is-primary");
      dataNascimento.classList.add("is-success");
      dataNascimento.classList.remove("is-danger");
      avisoFraseDataNascimento.innerText = "Ok";
    }
  }

  // DATA ULTIMO ANO INSTITUIÇÃO

  if (event.target.id == "dataUltimoAnoInstituição") {
    let userUltimoAnoInstituição = document.querySelector(
      "#dataUltimoAnoInstituição"
    );
    let avisoFraseUltimoAnoInstituição = document.querySelector(
      "#dadosPessoais > div:nth-child(4) > div:nth-child(3) > div > p"
    );

    if (
      userUltimoAnoInstituição.value.length >= 1 &&
      userUltimoAnoInstituição.value.length < 4
    ) {
      userUltimoAnoInstituição.classList.add("is-info");
      userUltimoAnoInstituição.classList.remove("is-success");
      userUltimoAnoInstituição.classList.remove("is-danger");
      avisoFraseUltimoAnoInstituição.classList.add("is-info");
      avisoFraseUltimoAnoInstituição.classList.remove("is-success");
      avisoFraseUltimoAnoInstituição.classList.remove("is-danger");
      avisoFraseUltimoAnoInstituição.innerText =
        "Verifique os Campos Obrigatórios!";
    } else if (userUltimoAnoInstituição.value.length === 4) {
      userUltimoAnoInstituição.classList.add("is-success");
      userUltimoAnoInstituição.classList.remove("is-danger");
      userUltimoAnoInstituição.classList.remove("is-info");
      avisoFraseUltimoAnoInstituição.classList.add("is-success");
      avisoFraseUltimoAnoInstituição.classList.remove("is-danger");
      avisoFraseUltimoAnoInstituição.classList.remove("is-info");
      avisoFraseUltimoAnoInstituição.innerText = "Válido";
    } else {
      userUltimoAnoInstituição.classList.add("is-danger");
      userUltimoAnoInstituição.classList.remove("is-success");
      userUltimoAnoInstituição.classList.remove("is-info");
      avisoFraseUltimoAnoInstituição.classList.add("is-danger");
      avisoFraseUltimoAnoInstituição.classList.remove("is-success");
      avisoFraseUltimoAnoInstituição.classList.remove("is-info");
      avisoFraseUltimoAnoInstituição.innerText =
        "Verifique os Campos Obrigatórios!";
    }
    const diferença =
      userUltimoAnoInstituição.value - dataNascimento.value.split("-")[0];
    console.log(diferença);

    if (diferença < 16) {
      userUltimoAnoInstituição.classList.add("is-danger");
      userUltimoAnoInstituição.classList.remove("is-success");
      userUltimoAnoInstituição.classList.remove("is-info");
      avisoFraseUltimoAnoInstituição.classList.add("is-danger");
      avisoFraseUltimoAnoInstituição.classList.remove("is-success");
      avisoFraseUltimoAnoInstituição.classList.remove("is-info");
      avisoFraseUltimoAnoInstituição.innerText = "Verifique a data informada!";
    }
  }

  if (event.target.id === "inputEmail") {
    let userEmail = document.querySelector("#inputEmail");
    console.log(event);
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

  let radioValue = document.querySelector(
    "#acompanhanteRadio > label:nth-child(2)"
  );
  if (event.target.id == "levareiAcompanhanteSim") {
    divDadosAcompanhantes = document.querySelector("#dadosAcompanhantes");
    divDadosAcompanhantes.removeAttribute("hidden", false);
    divDadosAcompanhantes.classList.remove(
      "animate__animated",
      "animate__fadeOut",
      "animate__fast"
    );
    divDadosAcompanhantes.classList.add("animate__animated", "animate__fadeIn");
  } else if (event.target.id == "levareiAcompanhanteNao") {
    divDadosAcompanhantes.classList.remove(
      "animate__animated",
      "animate__fadeIn"
    );
    divDadosAcompanhantes.classList.add(
      "animate__animated",
      "animate__fadeOut",
      "animate__faster"
    );
    setTimeout(() => {
      divDadosAcompanhantes.setAttribute("hidden", true);
    }, 250);
  }

  if (event.target.id === "inputName") {
    let userName = event.target.value;
  }

  if (event.target.id === "inputRG") {
    //! Válide o RG

    let userRG = document.querySelector("#inputRG");
    let iconRightRG = document.querySelector(
      "#dadosPessoais > div:nth-child(3) > div:nth-child(3) > div > div > span.icon.is-small.is-right > i"
    );
    let avisoFraseRG = document.querySelector(
      "#dadosPessoais > div:nth-child(3) > div:nth-child(3) > div > p"
    );

    if (userRG.value.length === 0) {
      userRG.classList.add("is-danger");
      userRG.classList.remove("is-info");
      userRG.classList.remove("is-sucess");
      iconRightRG.classList.remove("fa-exclamation");
      iconRightRG.classList.add("fa-exclamation-triangle");
      iconRightRG.classList.remove("fa-check");
      avisoFraseRG.classList.add("is-danger");
      avisoFraseRG.classList.remove("is-success");
      avisoFraseRG.classList.remove("is-info");
      avisoFraseRG.innerText = "O campo RG é obrigatório!";
    } else if (userRG.value.length === 10) {
      userRG.classList.remove("is-danger");
      userRG.classList.remove("is-info");
      userRG.classList.add("is-success");
      iconRightRG.classList.remove("fa-exclamation-triangle");
      iconRightRG.classList.remove("fa-exclamation");
      iconRightRG.classList.add("fa-check");
      avisoFraseRG.classList.remove("is-danger");
      avisoFraseRG.classList.add("is-success");
      avisoFraseRG.classList.remove("is-info");
      avisoFraseRG.innerText = "RG Válido";
    } else {
      userRG.classList.remove("is-danger");
      userRG.classList.add("is-info");
      userRG.classList.remove("is-success");
      iconRightRG.classList.remove("fa-exclamation");
      iconRightRG.classList.remove("fa-check");
      iconRightRG.classList.add("fa-exclamation");
      avisoFraseRG.classList.remove("is-danger");
      avisoFraseRG.classList.remove("is-success");
      avisoFraseRG.classList.add("is-info");
      avisoFraseRG.innerText = "Verifique os campos obrigatórios";
    }
  }

  // ! Aqui eu verifico os inputs de RG e CPF dos Acompanhantes //
  if (event.target.id === "inputCPFAcompanhante") {
    //! Máscara de CPF

    let userNameAcompanhante = document.querySelector("#inputNameAcompanhante");

    let userCPFAcompanhante = document.querySelector("#inputCPFAcompanhante");

    let iconRightCPFAcompanhante = document.querySelector(
      "#dadosAcompanhantes > div.columns > div:nth-child(1) > div > div > span.icon.is-small.is-right > i"
    );

    let avisoFraseCPFAcompanhante = document.querySelector(
      "#dadosAcompanhantes > div.columns > div:nth-child(1) > div > p"
    );

    //! Isso Válida o CPF
    if (userCPFAcompanhante.value.length === 0) {
      userCPFAcompanhante.classList.remove("is-success");
      userCPFAcompanhante.classList.remove("is-info");
      userCPFAcompanhante.classList.add("is-danger");
      avisoFraseCPFAcompanhante.innerText = "CPF Inválido";
      avisoFraseCPFAcompanhante.classList.remove("is-success");
      avisoFraseCPFAcompanhante.classList.remove("is-info");
      avisoFraseCPFAcompanhante.classList.add("is-danger");
      iconRightCPFAcompanhante.classList.add("fa-exclamation-triangle");
      iconRightCPFAcompanhante.classList.remove("fa-check");
      iconRightCPFAcompanhante.classList.remove("fa-exclamation");
    } else if (userCPFAcompanhante.value.length === 14) {
      userCPFAcompanhante.classList.add("is-success");
      userCPFAcompanhante.classList.remove("is-info");
      userCPFAcompanhante.classList.remove("is-danger");
      avisoFraseCPFAcompanhante.innerText = "CPF Válido";
      avisoFraseCPFAcompanhante.classList.add("is-success");
      avisoFraseCPFAcompanhante.classList.remove("is-info");
      avisoFraseCPFAcompanhante.classList.remove("is-danger");
      iconRightCPFAcompanhante.classList.remove("fa-exclamation-triangle");
      iconRightCPFAcompanhante.classList.add("fa-check");
      iconRightCPFAcompanhante.classList.remove("fa-exclamation");
    } else {
      userCPFAcompanhante.classList.remove("is-success");
      userCPFAcompanhante.classList.add("is-info");
      userCPFAcompanhante.classList.remove("is-danger");
      avisoFraseCPFAcompanhante.innerText = "CPF Inválido";
      avisoFraseCPFAcompanhante.classList.remove("is-success");
      avisoFraseCPFAcompanhante.classList.add("is-info");
      avisoFraseCPFAcompanhante.classList.remove("is-danger");
      avisoFraseCPFAcompanhante.innerText = "Verifique as informações!";
      iconRightCPFAcompanhante.classList.remove("fa-exclamation-triangle");
      iconRightCPFAcompanhante.classList.remove("fa-check");
      iconRightCPFAcompanhante.classList.add("fa-exclamation");
    }
  }

  if (event.target.id === "inputRGAcompanhante") {
    //! Válide o RG
    let userRGAcompanhante = document.querySelector("#inputRGAcompanhante");
    let iconRightRGAcompanhante = document.querySelector(
      "#dadosAcompanhantes > div:nth-child(3) > div:nth-child(3) > div > div > span.icon.is-small.is-right > i"
    );
    let avisoFraseRGAcompanhante = document.querySelector(
      "#dadosAcompanhantes > div:nth-child(3) > div:nth-child(3) > div > p"
    );

    if (userRGAcompanhante.value.length === 0) {
      userRGAcompanhante.classList.add("is-danger");
      userRGAcompanhante.classList.remove("is-info");
      userRGAcompanhante.classList.remove("is-sucess");
      iconRightRGAcompanhante.classList.remove("fa-exclamation");
      iconRightRGAcompanhante.classList.add("fa-exclamation-triangle");
      iconRightRGAcompanhante.classList.remove("fa-check");
      avisoFraseRGAcompanhante.classList.add("is-danger");
      avisoFraseRGAcompanhante.classList.remove("is-success");
      avisoFraseRGAcompanhante.classList.remove("is-info");
      avisoFraseRGAcompanhante.innerText = "O campo RG é obrigatório!";
    } else if (userRGAcompanhante.value.length === 10) {
      userRGAcompanhante.classList.remove("is-danger");
      userRGAcompanhante.classList.remove("is-info");
      userRGAcompanhante.classList.add("is-success");
      iconRightRGAcompanhante.classList.remove("fa-exclamation-triangle");
      iconRightRGAcompanhante.classList.remove("fa-exclamation");
      iconRightRGAcompanhante.classList.add("fa-check");
      avisoFraseRGAcompanhante.classList.remove("is-danger");
      avisoFraseRGAcompanhante.classList.add("is-success");
      avisoFraseRGAcompanhante.classList.remove("is-info");
      avisoFraseRGAcompanhante.innerText = "RG Válido";
    } else {
      userRGAcompanhante.classList.remove("is-danger");
      userRGAcompanhante.classList.add("is-info");
      userRGAcompanhante.classList.remove("is-success");
      iconRightRGAcompanhante.classList.remove("fa-exclamation");
      iconRightRGAcompanhante.classList.remove("fa-check");
      iconRightRGAcompanhante.classList.add("fa-exclamation");
      avisoFraseRGAcompanhante.classList.remove("is-danger");
      avisoFraseRGAcompanhante.classList.remove("is-success");
      avisoFraseRGAcompanhante.classList.add("is-info");
      avisoFraseRGAcompanhante.innerText = "Verifique os campos obrigatórios";
    }
  }
}
