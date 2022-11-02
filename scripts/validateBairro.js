import { validatePattern } from "./validationPattern.js";

// Validar Bairro
export function validateBairro(input, value) {
  return validatePattern(input, value);
}