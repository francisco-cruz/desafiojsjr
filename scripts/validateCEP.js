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

    const dataApi = seacherCep(input, value)
    
    if (dataApi["erro"]) {
        errorValidation(input, "Ocorreu um erro ao buscar esse CEP");
        return false;
    }

    successValidation(input);
    return true;
}

// Integração da api Viacep
export function seacherCep(input, value) {
    const cepRegex = value.replace(/[^0-9]/g, "");
    const requestApiCep = new XMLHttpRequest();

    requestApiCep.open("GET", `http://viacep.com.br/ws/${cepRegex}/json/`, false);
    requestApiCep.send();

    return JSON.parse(requestApiCep.responseText);

}


//Preencher campos com dados da api
export function completeFields(dataApiCep) {
    rua.value = dataApiCep["logradouro"];
    bairro.value = dataApiCep["bairro"];
    cidade.value = dataApiCep["localidade"];
    estado.value = dataApiCep["uf"];
}
