import { errorValidation } from "./statesValidation/errorValidation.js";
import { successValidation } from "./statesValidation/successValidation.js"

// Validar nome
export function validateNome(input, value) {
    const nomeRegex = value.replace(/[0-9]/g, "");

    if (nomeRegex === "") {
        errorValidation(input, "Preencha esse campo");
        return false;
    }
    successValidation(input);
    return true;
}
