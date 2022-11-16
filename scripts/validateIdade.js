import { errorValidation } from "./statesValidation/errorValidation.js";
import { successValidation } from "./statesValidation/successValidation.js"

// Validar idade
export function validateIdade(input, value) {
  if (value == "") {
    errorValidation(input, "Preencha esse campo");
    return false;
  }

  if ( value < 1 ) {
    errorValidation(input, "Idade inválida");
    return false;
  }

  successValidation(input);
  return true;
}
