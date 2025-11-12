
const formulario = document.querySelector("#myForm");

// validar nome
function isValidName(string) {
  // Recebe nome joao = j-0 o-1 a-2...
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (!((char >= "A" && char <= "Z") || (char >= "a" && char <= "z") || char === " ")) {
      return false;
    }
  }
  return true;
}
// console.log(isValidName("jaoo fil2ho"));

// validar CPF

function isVAlidCpf(cpf) {
  return cpf.length === 11 && !isNaN(cpf);
}
// console.log(isVAlidCpf("qwertyuiopç"))

function isValidPhone(phone) {
  return phone.length === 11 && !isNaN(phone);
}

// validar cep
function isValidCep(cep) {
  return cep.length === 8 && !isNaN(cep);
}
// validar estado
function isValidState(state) {
  return state.length === 2 && state[0] >= "A" && state[0] <= "Z" && state[1] >= "A" && state[1] <= "Z";
}
// console.log(isValidState("CE"))

function validarEGuardarFormulario(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value.trim(); //trim permite que nao tenha espaço nas laterais
  const cpf = document.getElementById("cpf").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const cep = document.getElementById("cep").value.trim();
  const rua = document.getElementById("rua").value.trim();
  const numero = document.getElementById("numero").value.trim();
  const complemento = document.getElementById("complemento").value.trim();
  const bairro = document.getElementById("bairro").value.trim();
  const cidade = document.getElementById("cidade").value.trim();
  const estado = document.getElementById("estado").value.trim();

  if (!nome || !cpf || !telefone || !cep || !rua || !numero || !complemento || !bairro || !cidade || !estado) {
    alert("Por favor preencha todos os campos");
    return;
  }
  if (!isValidName(nome)) {
    alert("O nome deve conter apenas letras e espaços");
    return;
  }
  if (!isVAlidCpf(cpf)) {
    alert("O CPF deve conter 11 números");
    return;
  }
  if (!isValidPhone(telefone)) {
    alert("O telefone deve conter 11 números");
    return;
  }
  if (!isValidCep(cep)) {
    alert("O CEP deve conter 8 números");
    return;
  }
  if (!isValidState(estado)) {
    alert("O estado deve conter 2 siglas maiusculas");
    return;
  }

  const dadosFormulario = {
    nome,
    cpf,
    telefone,
    cep,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
  };
  localStorage.setItem("dadosFormulario", JSON.stringify(dadosFormulario))
  formulario.reset()
  alert("Dados salvo com sucesso!!")
}

formulario.addEventListener("submit", validarEGuardarFormulario);
