import { errorValidation } from "./statesValidation/errorValidation.js";
import { successValidation } from "./statesValidation/successValidation.js"

// Validar data de nascimento
export function validateNascimento(input, value) {

  if (value == "") {
    errorValidation(input, "Preencha esse campo.");
    return false;
  }

  successValidation(input);
  return true;
}
