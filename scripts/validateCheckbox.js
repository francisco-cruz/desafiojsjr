import { errorCheckBox } from "./statesValidation/errorCheckBox.js";
import { successCheckBox } from "./statesValidation/successCheckBox.js";

//Validar checkbox
export function validateCheckBox(input) {
    if (input.checked === false) {
        errorCheckBox("Preencha esse campo");
      return false;
    }
    
    successCheckBox()
    return true;
  }
  