import { errorValidation } from "./statesValidation/errorValidation.js";
import { successValidation } from "./statesValidation/successValidation.js"


//Validar Estado
export function validateEstado(input, value) {
  const estadoRegex = value.replace(/[0-9]/g, "");

    if (estadoRegex === "") {
      errorValidation(input, "Preencha esse campo");
      return false;
    } 
    
    successValidation(input);
    return true;
  }
  