import { errorValidation } from "./statesValidation/errorValidation.js";
import { successValidation } from "./statesValidation/successValidation.js"

// Validar CPF
export function validateCPF(input, value) {
    const cpfRegex = value.replace(/[^0-9]/g, "");
    const cpfArray = convertCpfToArray(cpfRegex);
  
    if (cpfRegex === "") {
      errorValidation(input, "Preencha esse campo");
      return false;
    } else if (cpfArray.length != 11) {
      errorValidation(input, "Número de caracteres inválido");
      return false;
    } else if (!validateRepeatedNumber(cpfArray)) {
      errorValidation(input, "CPF com número repetidos");
      return false;
    } else if (!validateFistDigit(cpfArray)) {
      errorValidation(input, "Primeiro digito inválido");
      return false;
    } else if (!validateSecondDigit(cpfArray)) {
      errorValidation(input, "Segundo digito inválido");
      return false;
    } 

    successValidation(input);
    return true;
  }
  
  // Converter CPF em Array
  function convertCpfToArray(cpf) {
    const cpfArray = cpf.split("").map((e) => parseInt(e));
    return cpfArray;
  }
  
  // Validar numero repetidos do cpf
  function validateRepeatedNumber(cpf) {
    const fistDigit = cpf[0];
    let differentNumber = false;
  
    for (let i = 0; i < cpf.length; i++) {
      if (cpf[i] != fistDigit) {
        differentNumber = true;
      }
    }
    return differentNumber;
  }
  
  // Validar primeiro digito do cpf
  function validateFistDigit(cpf) {
    let sum = 0;
  
    for (let i = 0; i < 9; i++) {
      sum += cpf[i] * (10 - i);
    }
  
    const rest = (sum * 10) % 11;
  
    if (rest < 10) {
      return cpf[9] == rest;
    }
    return cpf[9] == 0;
  }
  
  //  Validar segundo digito do cpf
  function validateSecondDigit(cpf) {
    let sum = 0;
    
    for (let i = 0; i < 10; i++) {
      sum += cpf[i] * (11 - i);
    }
  
    let rest = (sum * 10) % 11;

    if (rest < 10) {
      return cpf[10] == rest;
    }
    return cpf[10] == 0;
  }