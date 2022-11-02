import { validatePattern } from "./validationPattern.js";

// Validar nome
export function validateNome(input, value) {
    return validatePattern(input, value);
}
