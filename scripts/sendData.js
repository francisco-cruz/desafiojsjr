import {validateCpf, convertCpftoArray } from './validarCPF.js'
// import {validateCep, convertCeptoArray } from './validateCep.js'

function sendData () {

  let valueInputCpf = document.getElementById("exampleInputCPF").value.replace(/[^0-9]/g, "");
  console.log(valueInputCpf);
  let cpfArray = convertCpftoArray (valueInputCpf);
  let cpfValide = validateCpf(cpfArray);

  // let valueInputCep = document.getElementById("exampleInputCEP").value;
  // let cepArray = convertCeptoArray (valueInputCep);
  // let cepValide = validateCep(cepArray);

}

let sendButton = document.getElementById("btn-send");
sendButton.addEventListener('click', () => {
  sendData()
} )