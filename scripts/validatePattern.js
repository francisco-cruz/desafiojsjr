import { errorValidation } from "./statesValidation/errorValidation.js";
import { successValidation } from "./statesValidation/successValidation.js"

export function validatePattern (input, value) {
    const valueRegex = value.replace(/[0-9]/g, "");

    if (valueRegex === "") {
      errorValidation(input, "Preencha esse campo");
      return false;
    }
  
    successValidation(input);
    return true;
}