import { validatePattern } from "./validationPattern.js";

//Validar Estado
export function validateEstado(input, value) {
  return validatePattern(input, value);
}
