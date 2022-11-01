import { errorValidation } from "./statesValidation/errorValidation.js";
import { successValidation } from "./statesValidation/successValidation.js"

//Validar Cidade
export function validateCidade(input, value) {
  const cidadeRegex = value.replace(/[0-9]/g, "");

    if (cidadeRegex === "") {
      errorValidation(input, "Preencha esse campo");
      return false;
    } 

    successValidation(input);
    return true;
  }