import { errorValidation } from "./statesValidation/errorValidation.js";
import { successValidation } from "./statesValidation/successValidation.js"

const rua = document.getElementById("exampleInputRua");
const bairro = document.getElementById("exampleInputBairro");
const cidade = document.getElementById("exampleInputCidade");
const estado = document.getElementById("exampleInputEstado");

// Validar CEP
export function validateCEP(input, value) {
    const cepRegex = value.replace(/[^0-9]/g, "");

    if (cepRegex === "") {
        errorValidation(input, "Preencha esse campo");
        return false;
    }

    if(cepRegex.length < 8) {
        errorValidation(input, "CEP inválido");
        return false;
    }

    successValidation(input);
    return true;
}

// Integração da api Viacep
export function seacherCep(input, value) {
    const cepRegex = value.replace(/[^0-9]/g, "");
    const url = `https://viacep.com.br/ws/${cepRegex}/json/`;
    const options = {
        method: "GET",
        mode: "cors",
        cache: "default"
    }

    fetch(url, options)
    .then(response => {response.json()
        .then(data => completeFields(data))})
    .catch(e => errorValidation(input, "Erro ao procurar esse CEP "))
}

//Preencher campos com dados da api
export function completeFields(data) {
    rua.value = data["logradouro"];
    bairro.value = data["bairro"];
    cidade.value = data["localidade"];
    estado.value = data["uf"];
}
