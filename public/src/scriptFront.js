document.addEventListener("input", verifyInput);
document.addEventListener("keypress", verifyInput);

//! Verificação Complete NAME
function verifyInput(event) {
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

  // ! ----------------------->><<------------------------ ! //

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
  }
}
