function validaEmail() {
  let usuario = document
    .getElementById("emailValido")
    .value.substring(
      0,
      document.getElementById("emailValido").value.indexOf("@")
    );
  let dominio = document
    .getElementById("emailValido")
    .value.substring(
      document.getElementById("emailValido").value.indexOf("@") + 1,
      document.getElementById("emailValido").value.length
    );

  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search("@") == -1 &&
    dominio.search("@") == -1 &&
    usuario.search(" ") == -1 &&
    dominio.search(" ") == -1 &&
    dominio.search(".") != -1 &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    document.getElementById("validationServer03Feedback").innerHTML = "";

    document.getElementById("emailValido").className = "form-control is-valid";
    if (document.getElementById("senhaValida").value.length > 1) {
      document.getElementById("botaoSeguir").disabled = false;
    } else {
      document.getElementById("botaoSeguir").disabled = true;
    }

    return true;
  } else {
    document.getElementById("emailValido").className =
      "form-control is-invalid";
    document.getElementById("validationServer03Feedback").innerHTML =
      "<font color='red'>Informe um E-mail válido </font>";
    document.getElementById("botaoSeguir").disabled = true;
    return false;
  }
}

function validaSenha(){
  let senha = document.getElementById("senhaValida").value;
  if (senha.length < 1) {
      document.getElementById("botaoSeguir").disabled = true;
      document.getElementById("senhaValida").className = "form-control is-invalid";
  }
  if (senha.length >= 1 && senha.length < 6) {
      document.getElementById("senhaValida").className = "form-control is-invalid";
      document.getElementById("botaoSeguir").disabled = false;
      return false;
  } if (senha.length >= 6) {
      document.getElementById("validationServer04Feedback").innerHTML = "";
      document.getElementById("senhaValida").className = "form-control is-valid";
      if (validaEmail()) {
          document.getElementById("botaoSeguir").disabled = false;
      } else {
          document.getElementById("botaoSeguir").disabled = true;
      }
      return true;
  }
}

function validaNome(){
  let user = document.getElementById("validaUsuario").value;
  if(user.length > 1){
    document.getElementById("validationServer05Feedback").innerHTML = "";
    document.getElementById("validaUsuario").className = "form-control is-valid";
  }
}

function validaSenhaConf(){
  let pass = document.getElementById("senhaValida").value;
  let pass2 = document.getElementById("senhaValidaConf").value;
  if(pass === pass2){
    document.getElementById("validationServer03Feedback").innerHTML = "";
    document.getElementById("senhaValidaConf").className = "form-control is-valid";
  }
}