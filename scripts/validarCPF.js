
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

function validateSecondDigit(cpf) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += cpf[i] * (11 - i);
  }

  const rest = (sum * 10) % 11;
  if (rest < 10) {
    return cpf[10] == rest;
  }
  return cpf[10] == 0;
}

function validateRepeatedNumber(cpf) {
  const fistDigit = cpf[0];
  let differentNumber =  false;
  for (let i = 0; i < cpf.length; i++) {
      if(cpf[i] != fistDigit) {
        differentNumber = true;
      }
  }
  return differentNumber;
}


export function validateCpf(cpf) {
  if (cpf.length != 11) {
    alert('Número de caracteres inválidos!');
    return false;
  }
  if (!validateRepeatedNumber(cpf)) {
    alert('Números repetidos!');
    return false;
  }
  if(!validateFistDigit(cpf)){
    alert('Primeiro digito inválido!');
    return false;
 }
  if(!validateSecondDigit(cpf)){
    alert('Segundo digito inválido!');
    return false;
}
  return true;
}

export function convertCpftoArray (cpf) {
  let cpfArray = cpf.split('').map((e) => parseInt(e));
  return cpfArray;
}
