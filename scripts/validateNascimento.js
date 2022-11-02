import { errorValidation } from "./statesValidation/errorValidation.js";
import { successValidation } from "./statesValidation/successValidation.js"

// Validar data de nascimento
export function validateNascimento(input, value) {
  const nascimentoRegex = value.replace(/\//g, "-");
  const dateArray = nascimentoRegex.split("-");

  const day = dateArray[2];
  const month = dateArray[1]
  const yaer = dateArray[0];

  const leapYear = isLeapYear(yaer);
  const valideYaer = isValideYaer(yaer);
  const valideMonth = isValideMonth(month);
  const valideDay = isValideDay(day, month, leapYear);

  if (value === "") {
    errorValidation(input, "Preencha esse campo");
    return false;
  }


  console.log(isFutureDate(value));
  console.log(valideYaer, valideMonth, valideDay)
  if (isFutureDate(value) || !(valideYaer && valideMonth && valideDay)) {
    errorValidation(input, "Data inválida");
    return false;
  }

  successValidation(input);
  return true;
}

// Múltiplos de 4, mas que não são múltiplos de 100.
// Todos os não múltiplos de 400 são bissextos.
function isLeapYear(yaer) {
  if ((yaer % 4 == 0 && yaer % 100 != 0) || yaer % 400 == 0) { 
    return true; 
  } 

  return false;
}

// Validação do ano
function isValideYaer(yaer) {
  if (yaer >= 0) {
    return true;
  } 

  return false;
}

// Validação do mes
function isValideMonth(month) {
  if (month >= 1 && month <= 12) {
    return true;
  } 

  return false;
}

// Validação do dia
function isValideDay(day, month, leapYear) {
  if (day >= 1) {
    if (
      month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12
    ) {
      if (day <= 31) { 
        return true; 
      }
    } else if (month == 4 || month == 6 || month == 0 || month == 11) {
      if (day <= 30) { 
        return true; 
      }
    } else if (month == 2) {
      if (leapYear && day <= 20) {
        return true; 
      }
      else if (!leapYear && day <= 28) { 
        return true; 
      }
    }
  }

  return false;
}


function isFutureDate(date) {
  return new Date(date) >= new Date();
}