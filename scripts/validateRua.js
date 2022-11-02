import { validatePattern } from "./validatePattern.js";

// Validar rua
export function validateRua(input, value) {
  return validatePattern(input, value);
}
