

function seacherCep () {
  const cep = document.getElementById('exampleInputCEP').value;
  
  let oReq = new XMLHttpRequest();
  oReq.open("GET", `http://viacep.com.br/ws/${cep}/json/`, false);
  oReq.send();
  const response = (JSON.parse(oReq.responseText));
  completeFields(response)
}

function completeFields (response) {
  document.getElementById('exampleInputRua').value = response['logradouro']
  document.getElementById('exampleInputBairro').value = response['bairro']
  document.getElementById('exampleInputCidade').value = response['localidade']
  document.getElementById('exampleInputEstado').value = response['uf']

}


export function validateCep(cep) {
  if (cep.length != 8) {
    console.log('Número de caracteres inválidos!');
    return false;
  }
}

export function convertCeptoArray (cep) {
  let cepArray = cep.split('').map((e) => parseInt(e));
  return cepArray;
}


document.getElementById('exampleInputCEP')
        .addEventListener('focusout', seacherCep);