import { validatePattern } from "./validatePattern.js";

// Validar nome
export function validateNome(input, value) {
    return validatePattern(input, value);
}
