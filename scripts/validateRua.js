import { validatePattern } from "./validationPattern.js";

// Validar rua
export function validateRua(input, value) {
  return validatePattern(input, value);
}
