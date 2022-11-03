import { validateNome } from "./validateNome.js";
import { validateCPF } from "./validateCPF.js";
import { validateNascimento } from "./validateNascimento.js";
import { validateIdade } from "./validateIdade.js";
import { validateCEP, seacherCep, completeFields } from "./validateCEP.js";
import { validateRua } from "./validateRua.js";
import { validateNumero } from "./validateNumero.js";
import { validateBairro } from "./validateBairro.js";
import { validateCidade } from "./validateCidade.js";
import { validateEstado } from "./validateEstado.js";
import { validateHobby, validateHobbyToArray, renderChip } from "./validateHobby.js";
import { validateCheckBox } from "./validateCheckbox.js"
import { openModal } from "./modal.js"
import { errorValidation } from "./statesValidation/errorValidation.js"
const form = document.getElementById("form");
const nome = document.getElementById("exampleInputNome");
const cpf = document.getElementById("exampleInputCPF");
const nascimento = document.getElementById("exampleInputNascimento");
const idade = document.getElementById("exampleInputIdade");
const cep = document.getElementById("exampleInputCEP");
const rua = document.getElementById("exampleInputRua");
const numero = document.getElementById("exampleInputNumero");
const bairro = document.getElementById("exampleInputBairro");
const cidade = document.getElementById("exampleInputCidade");
const estado = document.getElementById("exampleInputEstado");
const hobby = document.getElementById("exampleInputHobby");
export const hobbies = [];
const buttonAddHobby = document.getElementById("add-hobby");
const checkBox = document.getElementById('Check1');


// "Enviar" formulário
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});


// Botão adicionar Hobby
buttonAddHobby.addEventListener("click", () => {
  const hobbyRegex = hobby.value.replace(/[0-9]/g, "").trim();
  const isValideHobbyOnArray = validateHobbyToArray(hobby, hobbyRegex); // Validando o valor antes de mandar para o array

  if (isValideHobbyOnArray) {
    hobbies.push(hobbyRegex);
    hobby.value = "";
    renderChip(hobbyRegex);
  }
  console.log(hobbies);
});


// Consumir api Viacep
cep.addEventListener("focusout", () => {
  const dataApi = seacherCep(cep, cep.value);

  // Validando CEP
  if (dataApi['erro']) {
    errorValidation(cep, "Ocorreu um erro ao buscar esse CEP");
    return false;
  }

  completeFields(dataApi)
});


// Checar campos
function checkInputs() {
  const nomeValue = nome.value.trim();
  const cpfValue = cpf.value.trim();
  const nascimentoValue = nascimento.value.trim();
  const idadeValue = idade.value.trim();
  const cepValue = cep.value.trim();
  const ruaValue = rua.value.trim();
  const numeroValue = numero.value.trim();
  const bairroValue = bairro.value.trim();
  const cidadeValue = cidade.value.trim();
  const estadoValue = estado.value.trim();
  const valideNome = validateNome(nome, nomeValue);
  const valideCPF = validateCPF(cpf, cpfValue);
  const valideNascimento = validateNascimento(nascimento, nascimentoValue);
  const valideIdade = validateIdade(idade, idadeValue);
  const valideCEP = validateCEP(cep, cepValue);
  const valideRua = validateRua(rua, ruaValue);
  const valideNumero = validateNumero(numero, numeroValue);
  const valideBairro = validateBairro(bairro, bairroValue);
  const valideCidade = validateCidade(cidade, cidadeValue);
  const valideEstado = validateEstado(estado, estadoValue);
  const valideHobby = validateHobby(hobby);
  const valideCheckBox = validateCheckBox(checkBox)

  // Se todas as variáveis forem verdadeiras irá montar o objeto usuário
  if (
    valideNome &&
    valideCPF &&
    valideNascimento &&
    valideIdade &&
    valideCEP &&
    valideRua &&
    valideNumero &&
    valideBairro &&
    valideCidade &&
    valideEstado &&
    valideHobby &&
    valideCheckBox
  ) {
    const usuario = {
      nome: nomeValue,
      cpf: cpfValue,
      nascimento: nascimentoValue,
      idade: idadeValue,
      cep: cepValue,
      rua: ruaValue,
      cidade: cidadeValue,
      estado: estadoValue,
      hobbies: hobbies,
    };

    openModal(usuario)
  }
}