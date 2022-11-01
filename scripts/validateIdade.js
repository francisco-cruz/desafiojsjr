import { errorValidation } from "./statesValidation/errorValidation.js";
import { successValidation } from "./statesValidation/successValidation.js"

// Validar idade
export function validateIdade(input, value) {
  const idadeRegex = value.replace(/[^0-9]/g, "");
    if (idadeRegex === "") {
      errorValidation(input, "Preencha esse campo");
      return false;
    } 
    
    successValidation(input);
    return true;
  }
  