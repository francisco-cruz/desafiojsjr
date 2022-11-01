import { errorValidation } from "./statesValidation/errorValidation.js";
import { successValidation } from "./statesValidation/successValidation.js"

// Validar rua
export function validateRua(input, value) {
  const ruaRegex = value.replace(/[0-9]/g, "");

  if (ruaRegex === "") {
    errorValidation(input, "Preencha esse campo");
    return false;
  }

  successValidation(input);
  return true;
}
