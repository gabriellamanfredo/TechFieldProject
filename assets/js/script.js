let nome = document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector("#mapa")

nome.style.width = "100%";
email.style.width = "100%";

function validaNome(){
let txt = document.querySelector("#txtNome");
  if(nome.value.length < 3){
    txt.innerHTML = "Nome inválido!";
    txt.style.color = "red";
  } else {
    txt.innerHTML = "Nome válido!";
    txt.style.color = "green";
    nomeOk = true;
  }
}

function validaEmail(){
  let txt = document.querySelector("#txtEmail");
  if(email.value.indexOf("@")  == -1 || email.value.indexOf(".")  == -1){
    txt.innerHTML = "Email inválido!";
    txt.style.color = "red";
    txtAssunto.style.display = "block";
  } else {
    txt.innerHTML = "Nome válido!";
    txt.style.color = "green";
    emailOk = true;
  }
}

function validaAssunto(){
  let txt = document.querySelector("#txtAssunto");
  if(assunto.value.length >= 100){
    txt.innerHTML = "Digite no máximo 100 caracteres.";
    txt.style.color = "red";
    txtAssunto.style.display = "block";
  } else {
    txtAssunto.style.display = "none";
    assuntoOk = true;
  }
}

function enviar(){
  if (nomeOk == true && emailOk == true && assuntoOk == true){
    alert("Formulário enviado com sucesso!");
  } else {
    alert ("Preencha o formulário corretamente.");
  }
}