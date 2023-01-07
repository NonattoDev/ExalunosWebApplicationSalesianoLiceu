document.addEventListener("keyup", VerificaCPF);

function VerificaCPF(event) {
  if (event.target.id) {
    let strCpf = document.querySelector("#inputCPF").value;
    let strCpfClass = document.querySelector("#inputCPF");
    let iconRightCPF = document.querySelector("#iconCpf");

    let avisoFraseCPF = document.querySelector("#helpCPF");
    console.log(strCpf);
    console.log(strCpfClass);
    console.log(iconRightCPF);
    console.log(avisoFraseCPF);

    var soma;
    var resto;
    soma = 0;
    if (strCpf == "00000000000") {
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

    return true;
  }
}
