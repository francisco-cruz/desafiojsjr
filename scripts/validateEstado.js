import { errorValidation } from "./statesValidation/errorValidation.js";
import { successValidation } from "./statesValidation/successValidation.js"


//Validar Estado
export function validateEstado(input, value) {
    if (value === "") {
      errorValidation(input, "Preencha esse campo");
      return false;
    } 
    
    successValidation(input);
    return true;
  }
  