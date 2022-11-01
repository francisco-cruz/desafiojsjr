import { errorValidation } from "./statesValidation/errorValidation.js";
import { successValidation } from "./statesValidation/successValidation.js"

// Validar Bairro
export function validateBairro(input, value) {
  const bairroRegex = value.replace(/[0-9]/g, "");
  
    if (bairroRegex === "") {
      errorValidation(input, "Preencha esse campo");
      return false;
    }

    successValidation(input);
    return true;
  }