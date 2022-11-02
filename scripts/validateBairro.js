import { validatePattern } from "./validatePattern.js";

// Validar Bairro
export function validateBairro(input, value) {
  return validatePattern(input, value);
}