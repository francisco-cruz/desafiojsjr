import { validatePattern } from "./validationPattern.js";

//Validar Cidade
export function validateCidade(input, value) {
  return validatePattern(input, value);
}